import test from "node:test";
import assert from "node:assert/strict";
import { createCMS } from "./lib/cms.mjs";
const origin = "https://cms.example.com";
const envelope = (docs, page, totalDocs = 2, totalPages = 2) =>
  Response.json({
    docs,
    page,
    totalDocs,
    totalPages,
    hasNextPage: page < totalPages,
    nextPage: page < totalPages ? page + 1 : null,
  });

test("fetches every page with exact auth, no redirects or locale fallback", async () => {
  const seen = [];
  const cms = createCMS({
    baseURL: origin,
    apiKey: "test-only-key",
    fetcher: async (url, init) => {
      assert.equal(init.headers.Authorization, "users API-Key test-only-key");
      assert.equal(init.redirect, "error");
      assert.equal(url.searchParams.get("fallback-locale"), "none");
      assert.equal(url.searchParams.get("locale"), "all");
      const page = Number(url.searchParams.get("page"));
      seen.push(page);
      return envelope([{ id: page }], page);
    },
  });
  assert.equal((await cms.all("prompts")).length, 2);
  assert.deepEqual(seen, [1, 2]);
});
test("rejects truncated, changing and duplicate pagination", async () => {
  for (const scenario of ["truncated", "changing", "duplicate"]) {
    const cms = createCMS({
      baseURL: origin,
      apiKey: "test-only-key",
      fetcher: async (url) => {
        const page = Number(url.searchParams.get("page"));
        if (page === 1) return envelope([{ id: 1 }], page);
        return envelope(
          scenario === "truncated"
            ? []
            : [{ id: scenario === "duplicate" ? 1 : 2 }],
          page,
          scenario === "changing" ? 3 : 2,
        );
      },
    });
    await assert.rejects(cms.all("prompts"));
  }
});
test("refuses foreign media before making a request and hides error bodies", async () => {
  let calls = 0;
  const cms = createCMS({
    baseURL: origin,
    apiKey: "test-only-key",
    fetcher: async () => {
      calls++;
      return new Response("private-sentinel", { status: 403 });
    },
  });
  await assert.rejects(
    cms.request("https://other.example/api/media/file/image.webp", {
      media: true,
    }),
    /another origin/,
  );
  assert.equal(calls, 0);
  await assert.rejects(
    cms.request("/api/prompts"),
    (error) =>
      error.message.includes("403") &&
      !error.message.includes("private-sentinel"),
  );
});
test("R2 allowance does not authorize arbitrary hosts, signed URLs, paths or API calls", async () => {
  let calls = 0;
  const cms = createCMS({
    baseURL: origin,
    apiKey: "test-only-key",
    fetcher: async () => {
      calls++;
      return new Response("unexpected");
    },
  });
  for (const url of [
    "https://media.tripogrowth.space.evil.example/media/image.webp",
    "https://media.tripogrowth.space/api/prompts",
    "https://media.tripogrowth.space/media/image.webp?token=secret",
    "https://user:secret@media.tripogrowth.space/media/image.webp",
    "https://media.tripogrowth.space/media/folder%2Fimage.webp",
    "http://media.tripogrowth.space/media/image.webp",
  ])
    await assert.rejects(cms.request(url, { media: true }));
  await assert.rejects(
    cms.request("https://media.tripogrowth.space/api/prompts"),
  );
  assert.equal(calls, 0);
});

test("public media retries stay anonymous and redirect responses are rejected", async () => {
  let attempts = 0;
  const cms = createCMS({
    baseURL: origin,
    apiKey: "test-only-key",
    retryDelay: 0,
    fetcher: async (url, init) => {
      assert.deepEqual(init.headers, {});
      assert.equal(init.redirect, "error");
      return ++attempts === 1
        ? new Response("", { status: 503 })
        : new Response("", {
            status: 302,
            headers: { location: "https://other.example/file" },
          });
    },
  });
  await assert.rejects(
    cms.request("https://media.tripogrowth.space/media/image.webp", {
      media: true,
    }),
    /HTTP 302/,
  );
  assert.equal(attempts, 2);
});
