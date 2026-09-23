import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve, relative } from "node:path";
import { pathToFileURL } from "node:url";
import config from "../catalog.config.mjs";
import { locales } from "./lib/locales.mjs";
import { hash } from "./lib/media.mjs";
export function withoutFences(content) {
  let fence = 0;
  return content
    .split("\n")
    .filter((line) => {
      const m = line.match(/^(`{3,})/);
      if (m && (!fence || m[1].length >= fence)) {
        fence = fence ? 0 : m[1].length;
        return false;
      }
      return !fence;
    })
    .join("\n");
}
export const generatedPath = (path) =>
  /^(README(?:\.zh-CN)?\.md|docs\/(?:catalog\.[a-zA-Z0-9.-]+\.md|with-code\.md|sync-manifest\.json)|assets\/(?:manifest\.json|(?:previews|featured)\/[a-z0-9-]+\.webp))$/.test(
    path,
  );
export async function validateOutputs(staging = ".") {
  const read = async (path) => {
    try {
      return await readFile(join(staging, path));
    } catch (e) {
      if (staging === "." || e.code !== "ENOENT") throw e;
      return readFile(path);
    }
  };
  const manifest = JSON.parse(await read("docs/sync-manifest.json")),
    media = JSON.parse(await read("assets/manifest.json"));
  assert.equal(manifest.schemaVersion, 2);
  assert.equal(manifest.repository, config.repository);
  assert.equal(manifest.model, config.modelSlug);
  assert.equal(media.schemaVersion, 3);
  assert(Number.isSafeInteger(manifest.count) && manifest.count > 0);
  assert.equal(new Set(manifest.promptIds).size, manifest.count);
  assert.equal(manifest.promptIds.length, manifest.count);
  assert.deepEqual(
    manifest.locales,
    locales.map((l) => l.code),
  );
  assert.equal(manifest.pages.flat().length, manifest.count);
  assert.deepEqual(manifest.pages.flat(), manifest.promptIds);
  assert(
    manifest.pages.every((p) => p.length > 0 && p.length <= config.pageSize),
  );
  assert.deepEqual(
    manifest.readmePromptIds,
    manifest.promptIds.slice(0, config.readmeLimit),
  );
  assert(
    manifest.featuredPromptIds.length <= config.featuredLimit &&
      new Set(manifest.featuredPromptIds).size ===
        manifest.featuredPromptIds.length,
  );
  assert(
    manifest.featuredPromptIds.every((id) => manifest.promptIds.includes(id)),
  );
  assert.equal(
    Object.values(manifest.categories).reduce((s, n) => s + n, 0),
    manifest.count,
  );
  if (config.modelSlug)
    assert.equal(
      manifest.models[config.modelSlug],
      manifest.count,
      "Every entry must have the selected model attribution",
    );
  const expected = [
    "README.md",
    "README.zh-CN.md",
    "docs/with-code.md",
    "assets/manifest.json",
    ...locales.flatMap((l) => [
      `docs/catalog.${l.code}.md`,
      ...manifest.pages.map((_, i) => `docs/catalog.${l.code}.${i + 1}.md`),
    ]),
  ].sort();
  assert.deepEqual(manifest.files.map((f) => f.path).sort(), expected);
  for (const f of [...manifest.files, ...media.files]) {
    assert(generatedPath(f.path), `Unexpected generated file: ${f.path}`);
    const bytes = await read(f.path);
    assert.equal(hash(bytes), f.sha256, `Checksum mismatch: ${f.path}`);
    assert.equal(bytes.length, f.bytes, `Size mismatch: ${f.path}`);
  }
  assert.deepEqual(
    [
      ...new Set(
        media.files
          .filter((f) => f.path.startsWith("assets/previews/"))
          .flatMap((f) => f.promptIds),
      ),
    ].sort(),
    [...manifest.imagePromptIds].sort(),
  );
  assert(
    media.files.every((f) =>
      f.promptIds.every((id) => manifest.promptIds.includes(id)),
    ),
    "Media has unknown prompt attribution",
  );
  let links = 0;
  for (const path of expected.filter((p) => p.endsWith(".md"))) {
    const content = (await read(path)).toString(),
      prose = withoutFences(content);
    assert(
      Buffer.byteLength(content) < 900_000,
      `Markdown exceeds GitHub rendering budget: ${path}`,
    );
    assert(
      !/(?:sk-|ghp_)[A-Za-z0-9]{24,}|users API-Key|cms\.tripogrowth\.space\/api\/|private-sentinel/.test(
        content,
      ),
      `Private data in ${path}`,
    );
    // Published prompt quotations can contain the creator's example paths.
    // Never leak paths from this generator's own environment or from UI prose.
    assert(
      !/\/(?:Users|home)\/[\w.-]+\//.test(prose),
      `Local path outside a prompt quotation in ${path}`,
    );
    assert(
      !content.includes(process.cwd()),
      `Generator workspace path in ${path}`,
    );
    for (const key of [
      process.env.CMS_API_KEY,
      process.env.TRIPO_GROWTH_CMS_API_KEY,
    ])
      if (key) assert(!content.includes(key), `Credential in ${path}`);
    assert(
      !/href="(?:undefined|null)"|src="(?:undefined|null)"/.test(prose),
      `Invalid link in ${path}`,
    );
    const page = path.match(/^docs\/catalog\.([a-zA-Z-]+)\.(\d+)\.md$/),
      isHome = path.startsWith("README");
    if (page || isHome) {
      const expectedIds = page
        ? manifest.pages[Number(page[2]) - 1]
        : manifest.readmePromptIds;
      const ids = [...prose.matchAll(/<a id="([^"]+)"><\/a>/g)]
        .map((m) => m[1])
        .filter(
          (id) =>
            !["all-prompts", "start-here", "browse", "latest"].includes(id),
        );
      assert.deepEqual(
        ids,
        expectedIds,
        `Missing, duplicated or reordered entries: ${path}`,
      );
      const l = locales.find(
        (l) => l.code === (page ? page[1] : path === "README.md" ? "en" : "zh"),
      );
      for (const id of expectedIds)
        assert(
          content.includes(
            `https://www.tripo3d.ai${l.code === "en" ? "" : `/${l.code}`}/3d-prompts/${id}`,
          ),
          `Missing localized detail: ${path}/${id}`,
        );
    }
    if (isHome) {
      assert.equal(
        [...prose.matchAll(/<td width="50%" valign="top">/g)].length,
        manifest.featuredPromptIds.length,
      );
      assert(prose.includes("utm_content=readme_assets"));
    }
    if (path !== "docs/with-code.md")
      assert.equal(
        [
          ...prose.matchAll(
            /alt="[^"]+" src="https:\/\/img.shields.io\/badge\//g,
          ),
        ].length,
        locales.length,
        `Missing language navigation: ${path}`,
      );
    for (const target of [
      ...prose.matchAll(/(?:href|src)="([^"]+)"|\]\(([^)\s]+)\)/g),
    ].map((m) => m[1] || m[2])) {
      if (/^(?:https?:|mailto:)/.test(target)) continue;
      const [file, anchor] = target.split("#"),
        destination = file
          ? relative(process.cwd(), resolve(dirname(path), file))
          : path;
      assert(!destination.startsWith(".."), `Link escapes repository: ${path}`);
      let bytes;
      try {
        bytes = await read(destination);
      } catch {
        throw new Error(`Broken local link: ${path} -> ${target}`);
      }
      if (anchor)
        assert(
          bytes.toString().includes(`id="${anchor}"`),
          `Missing anchor: ${path} -> ${target}`,
        );
      links++;
    }
  }
  if (staging === ".") {
    for (const dir of ["assets/previews", "assets/featured"]) {
      const actual = (
        await readdir(dir).catch((e) => {
          if (e.code === "ENOENT") return [];
          throw e;
        })
      )
        .map((n) => `${dir}/${n}`)
        .sort();
      assert.deepEqual(
        actual,
        [
          ...new Set(
            media.files
              .filter((f) => f.path.startsWith(dir + "/"))
              .map((f) => f.path),
          ),
        ].sort(),
        `Orphan media in ${dir}`,
      );
    }
    const catalogs = (await readdir("docs"))
      .filter((n) => /^catalog\..*\.md$/.test(n))
      .map((n) => "docs/" + n)
      .sort();
    assert.deepEqual(
      catalogs,
      expected.filter((p) => p.startsWith("docs/catalog.")),
      "Orphan catalog pages",
    );
  }
  console.log(
    `Validated ${manifest.count} prompts × ${locales.length} languages, ${manifest.pages.length} pages per language, checksums and ${links} local links`,
  );
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
)
  validateOutputs().catch((e) => {
    console.error(e.message);
    process.exitCode = 1;
  });
