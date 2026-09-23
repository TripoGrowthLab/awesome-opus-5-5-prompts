import assert from "node:assert/strict";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { dirname, join } from "node:path";
import config from "../catalog.config.mjs";
import { createCMS, fetchCollection, revision } from "./lib/cms.mjs";
import { hash, json, prepareMedia, readManifest } from "./lib/media.mjs";
import { renderAll } from "./lib/render.mjs";
import { locales } from "./lib/locales.mjs";
import { selectFeatured, pages, groups } from "./lib/catalog.mjs";
import { validateOutputs, generatedPath } from "./validate.mjs";

async function main() {
  const args = process.argv.slice(2);
  assert(
    args.every((a) => ["--verify-only", "--check"].includes(a)),
    "Unknown option",
  );
  const cms = createCMS({
    baseURL: process.env.CMS_URL || "https://cms.tripogrowth.space",
    apiKey: process.env.CMS_API_KEY || process.env.TRIPO_GROWTH_CMS_API_KEY,
  });
  const collection = await fetchCollection(cms),
    { prompts } = collection;
  console.log(
    `Verified ${prompts.length} published ${config.subject} prompts × ${locales.length} complete languages`,
  );
  if (args.includes("--verify-only")) return;
  const output = await prepareMedia(prompts, cms, await readManifest());
  for (const [path, content] of renderAll(prompts)) output.set(path, content);
  // Check both prompt membership and related model/category edits before publish.
  const latest = await cms.all("prompts", {
    ...collection.query,
    depth: "0",
    "select[id]": "true",
    "select[updatedAt]": "true",
  });
  assert.equal(
    revision(latest),
    collection.revision,
    "CMS prompts changed during sync; no files were published. Rerun sync.",
  );
  for (const [name, initial] of [
    ["ai-models", collection.modelRevision],
    ["prompt-categories", collection.categoryRevision],
  ]) {
    const latest = await cms.all(name, {
      depth: "0",
      "select[id]": "true",
      "select[updatedAt]": "true",
    });
    assert.equal(
      revision(latest),
      initial,
      `CMS ${name} changed during sync; rerun sync`,
    );
  }
  const files = [...output]
    .filter(([path]) => path.endsWith(".md") || path.endsWith("manifest.json"))
    .map(([path, content]) => ({
      path,
      sha256: hash(content),
      bytes: Buffer.byteLength(content),
    }))
    .sort((a, b) => a.path.localeCompare(b.path, "en"));
  output.set(
    "docs/sync-manifest.json",
    json({
      schemaVersion: 2,
      repository: config.repository,
      model: config.modelSlug,
      count: prompts.length,
      sourceCodeCount: prompts.filter((p) => p.repository).length,
      locales: locales.map((l) => l.code),
      promptIds: prompts.map((p) => p.id),
      pages: pages(prompts).map((page) => page.map((p) => p.id)),
      readmePromptIds: prompts.slice(0, config.readmeLimit).map((p) => p.id),
      featuredPromptIds: selectFeatured(prompts).map((p) => p.id),
      imagePromptIds: prompts.filter((p) => p.images.length).map((p) => p.id),
      categories: Object.fromEntries(
        groups(prompts, "categories").map((g) => [g.slug, g.prompts.length]),
      ),
      models: Object.fromEntries(
        groups(prompts, "models").map((g) => [g.slug, g.prompts.length]),
      ),
      files,
    }),
  );
  await mkdir(".cache", { recursive: true });
  const staging = await mkdtemp(".cache/sync-");
  try {
    for (const [path, contents] of output) {
      assert(generatedPath(path));
      await mkdir(dirname(join(staging, path)), { recursive: true });
      await writeFile(join(staging, path), contents);
    }
    await validateOutputs(staging);
    const obsolete = [];
    for (const directory of ["assets/previews", "assets/featured", "docs"]) {
      for (const file of await readdir(directory).catch((e) => {
        if (e.code === "ENOENT") return [];
        throw e;
      })) {
        const path = `${directory}/${file}`;
        if (generatedPath(path) && !output.has(path)) obsolete.push(path);
      }
    }
    if (args.includes("--check")) {
      assert.equal(
        obsolete.length,
        0,
        "Obsolete output exists; run npm run sync",
      );
      for (const [path, content] of output)
        assert.equal(
          hash(await readFile(path)),
          hash(content),
          `CMS output changed: ${path}; run npm run sync`,
        );
      console.log("Committed output matches the live CMS");
      return;
    }
    const backups = new Map();
    for (const path of [...output.keys(), ...obsolete]) {
      try {
        backups.set(path, await readFile(path));
      } catch (e) {
        if (e.code !== "ENOENT") throw e;
        backups.set(path, null);
      }
    }
    try {
      for (const [path] of output) {
        await mkdir(dirname(path), { recursive: true });
        await rename(join(staging, path), path);
      }
      for (const path of obsolete) await rm(path);
    } catch (error) {
      for (const [path, before] of backups) {
        if (before === null) await rm(path, { force: true });
        else await writeFile(path, before);
      }
      throw error;
    }
    console.log(
      `Synced ${prompts.length} prompts, ${pages(prompts).length * locales.length} catalog pages, 14 indexes, 2 READMEs and source index`,
    );
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
