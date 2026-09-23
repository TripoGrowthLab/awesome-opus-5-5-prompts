import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import sharp from "sharp";
import { selectFeatured } from "./catalog.mjs";
export const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
export const json = (value) => JSON.stringify(value, null, 2) + "\n";
const TRANSFORM = "webp-1040-q80-full-frame-v1";
export async function readManifest() {
  try {
    return JSON.parse(await readFile("assets/manifest.json", "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return { files: [] };
    throw error;
  }
}
async function cached(file) {
  if (
    !file ||
    !/^assets\/(previews\/[a-f0-9]{64}|featured\/[a-z0-9-]+)\.webp$/.test(
      file.path,
    )
  )
    return null;
  try {
    const bytes = await readFile(file.path);
    return hash(bytes) === file.sha256 ? bytes : null;
  } catch {
    return null;
  }
}
export async function downloadImage(media, cms) {
  const response = await cms.request(media.url, { media: true });
  assert.equal(
    response.headers.get("content-type")?.split(";")[0],
    media.mimeType,
    "Image MIME mismatch",
  );
  const chunks = [];
  let length = 0;
  for await (const chunk of response.body) {
    length += chunk.length;
    assert(
      length <= media.filesize && length <= 25 * 1024 * 1024,
      "Image exceeded its declared size",
    );
    chunks.push(chunk);
  }
  assert.equal(length, media.filesize, "Truncated image");
  const bytes = Buffer.concat(chunks);
  const metadata = await sharp(bytes, {
    limitInputPixels: 60_000_000,
  }).metadata();
  assert(
    metadata.width &&
      metadata.height &&
      ["webp", "jpeg", "png", "gif"].includes(metadata.format),
    "Invalid image bytes",
  );
  return bytes;
}
export async function prepareMedia(prompts, cms, previous = { files: [] }) {
  const output = new Map(),
    records = new Map(),
    jobs = new Map();
  const old = new Map(previous.files.map((f) => [f.fingerprint, f]));
  const fingerprint = (m) =>
    hash(JSON.stringify([TRANSFORM, m.url, m.updatedAt, m.filesize]));
  for (const p of prompts) for (const m of p.media) jobs.set(fingerprint(m), m);
  const queue = [...jobs];
  let next = 0,
    complete = 0;
  const workers = await Promise.allSettled(
    Array.from({ length: 4 }, async () => {
      while (next < queue.length) {
        const [key, m] = queue[next++];
        let bytes = await cached(old.get(key));
        if (!bytes)
          bytes = await sharp(await downloadImage(m, cms), {
            limitInputPixels: 60_000_000,
          })
            .rotate()
            .resize({
              width: 1040,
              height: 1040,
              fit: "inside",
              withoutEnlargement: true,
            })
            .webp({ quality: 80, effort: 5 })
            .toBuffer();
        const sha256 = hash(bytes),
          path = `assets/previews/${sha256}.webp`;
        output.set(path, bytes);
        records.set(key, {
          path,
          fingerprint: key,
          sha256,
          bytes: bytes.length,
          sourceUrl: m.source,
          promptIds: [],
        });
        complete++;
        if (complete % 25 === 0 || complete === queue.length)
          console.log(`Prepared ${complete}/${queue.length} previews`);
      }
    }),
  );
  for (const w of workers) if (w.status === "rejected") throw w.reason;
  for (const p of prompts)
    p.images = p.media.map((m) => {
      const f = records.get(fingerprint(m));
      if (!f.promptIds.includes(p.id)) f.promptIds.push(p.id);
      return f.path;
    });
  const files = [...records.values()];
  for (const p of selectFeatured(prompts).filter((p) => p.images.length)) {
    const source = output.get(p.images[0]),
      key = hash(`featured-contain-840x525-v1:${hash(source)}`);
    const bytes =
      (await cached(old.get(key))) ||
      (await sharp(source)
        .resize(840, 525, { fit: "contain", background: "#10131c" })
        .webp({ quality: 85 })
        .toBuffer());
    p.featuredImage = `assets/featured/${p.id}.webp`;
    output.set(p.featuredImage, bytes);
    files.push({
      path: p.featuredImage,
      fingerprint: key,
      sha256: hash(bytes),
      bytes: bytes.length,
      sourceUrl: p.media[0].source,
      promptIds: [p.id],
    });
  }
  files.sort(
    (a, b) =>
      a.path.localeCompare(b.path, "en") ||
      a.fingerprint.localeCompare(b.fingerprint, "en"),
  );
  output.set(
    "assets/manifest.json",
    json({
      schemaVersion: 3,
      note: "Optimized first preview or video cover; complete frame preserved. Videos and full galleries are available on the linked detail page.",
      files,
    }),
  );
  return output;
}
