import test from "node:test";
import assert from "node:assert/strict";
import sharp from "sharp";
import { downloadImage, prepareMedia, hash } from "./lib/media.mjs";
const bytes = await sharp({
  create: { width: 40, height: 20, channels: 3, background: "#55aacc" },
})
  .png()
  .toBuffer();
const media = {
  url: "https://media.tripogrowth.space/media/test.png",
  filesize: bytes.length,
  mimeType: "image/png",
  source: "https://example.com/original",
  updatedAt: "2026-01-01",
};
const cms = (body) => ({
  request: async () =>
    new Response(body, { headers: { "content-type": "image/png" } }),
});
test("stream limits reject oversized, truncated and invalid images", async () => {
  await assert.rejects(
    downloadImage({ ...media, filesize: 10 }, cms(bytes)),
    /exceeded/,
  );
  await assert.rejects(
    downloadImage({ ...media, filesize: bytes.length + 1 }, cms(bytes)),
    /Truncated/,
  );
  await assert.rejects(
    downloadImage({ ...media, filesize: 3 }, cms(Buffer.from("bad"))),
  );
});
test("same source is deduplicated, has both credits, and featured thumbnail preserves the frame", async () => {
  const prompts = [
    { id: "one", media: [media], featured: true, order: 0 },
    { id: "two", media: [media], featured: false, order: 0 },
  ];
  let calls = 0;
  const output = await prepareMedia(prompts, {
    request: async () => {
      calls++;
      return new Response(bytes, { headers: { "content-type": "image/png" } });
    },
  });
  assert.equal(calls, 1);
  assert.equal(prompts[0].images[0], prompts[1].images[0]);
  const manifest = JSON.parse(output.get("assets/manifest.json")),
    preview = manifest.files.find((f) => f.path.startsWith("assets/previews/"));
  assert.deepEqual(preview.promptIds, ["one", "two"]);
  assert.equal(hash(output.get(preview.path)), preview.sha256);
  const normal = await sharp(output.get(preview.path)).metadata();
  assert.equal(normal.width, 40);
  assert.equal(normal.height, 20);
  const featured = await sharp(output.get(prompts[0].featuredImage)).metadata();
  assert.equal(featured.width, 840);
  assert.equal(featured.height, 525);
});
test("a collection with no preview images remains valid", async () => {
  const prompts = [{ id: "text-only", media: [], featured: true, order: 0 }];
  const output = await prepareMedia(prompts, {
    request: async () => {
      throw new Error("No download expected");
    },
  });
  assert.deepEqual(prompts[0].images, []);
  assert.equal(JSON.parse(output.get("assets/manifest.json")).files.length, 0);
});
