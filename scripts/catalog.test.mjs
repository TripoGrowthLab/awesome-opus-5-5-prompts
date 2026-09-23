import test from "node:test";
import assert from "node:assert/strict";
import { projectPrompts, promptQuery } from "./lib/cms.mjs";
import { locales } from "./lib/locales.mjs";
import { renderAll, fenced } from "./lib/render.mjs";
import { pages, promptLocations, selectFeatured } from "./lib/catalog.mjs";
import config from "../catalog.config.mjs";
const origin = "https://cms.example.com";
const localized = (value) =>
  Object.fromEntries(locales.map((l) => [l.cms, value]));
const models = [
  { id: 1, slug: "gpt-6-astra", name: localized("GPT-6 Astra"), active: true },
  {
    id: 7,
    slug: "claude-opus-5-5",
    name: localized("Claude Opus 5.5"),
    active: true,
  },
];
const categories = [
  { id: 1, slug: "games", name: localized("Games"), order: 1 },
];
const options = { models, categories, modelSlug: null };
function doc(id = 1) {
  return {
    id,
    status: "published",
    slug: `example-${id}`,
    model: 1,
    modelsUsed: [],
    category: 1,
    title: localized("An <interesting> world"),
    prompt: localized("Make a scene.  \n```js\nconst x = 1\n```"),
    description: localized(""),
    updatedAt: "2026-09-01T00:00:00Z",
    publishedAt: "2026-09-01T00:00:00Z",
    source: { url: "https://example.com/post", platform: "x" },
    author: { name: "Creator", url: "https://example.com/creator" },
    media: [],
    sourceMeta: { private: "private-sentinel" },
  };
}
const project = (values) => projectPrompts(values, options, origin);

test("only primary or actually-used models qualify; compatibility and title guesses do not", () => {
  const d = doc();
  d.compatibleModels = [7];
  d.title = localized("An Opus 5.5 experiment");
  const scope = { ...options, modelSlug: "claude-opus-5-5" };
  assert.throws(() => projectPrompts([d], scope, origin), /Unrelated/);
  d.modelsUsed = [7];
  const [p] = projectPrompts([d], scope, origin);
  assert.deepEqual(
    p.models.map((m) => m.slug),
    ["gpt-6-astra", "claude-opus-5-5"],
  );
  assert(!JSON.stringify(promptQuery(7)).includes("compatible"));
  d.model = 7;
  d.modelsUsed = [7];
  assert.equal(projectPrompts([d], scope, origin)[0].models.length, 1);
});
test("missing translations, drafts, unknown models and duplicates stop publication", () => {
  for (const change of [
    (d) => delete d.prompt.vi,
    (d) => (d.status = "draft"),
    (d) => (d.model = 42),
    (d) => (d.category = null),
    (d) => (d.slug = "../escape"),
  ]) {
    const d = doc();
    change(d);
    assert.throws(() => project([d]));
  }
  assert.throws(() => project([]), /empty/);
  assert.throws(() => project([doc(), doc()]), /duplicate/);
});
test("internal work, remix, references and original text keep their separate attribution", () => {
  const d = doc();
  d.source = { platform: "internal" };
  d.remixFrom = {
    name: "Original artist",
    url: "https://example.com/original",
  };
  d.requiresReferenceImage = true;
  d.sourceReferenceImages = ["https://example.com/reference.png"];
  d.originalPrompt = "Original words.";
  d.evidence = { kind: "source-derived", isPartial: true };
  const [p] = project([d]);
  assert.equal(p.source, null);
  assert.equal(p.remix.name, "Original artist");
  assert.equal(p.references.length, 1);
  const text = renderAll([p]).get("docs/catalog.en.1.md");
  for (const phrase of [
    "Original artist",
    "Original words.",
    "reference.png",
    "Source excerpt is partial.",
    "Build brief based on",
  ])
    assert(text.includes(phrase));
  assert(!JSON.stringify(p).includes("private-sentinel"));
  d.source.platform = "x";
  assert.throws(() => project([d]), /attribution/);
});
test("unsafe links and signed reference URLs cannot enter a public catalog", () => {
  for (const url of [
    "javascript:alert(1)",
    "https://example.com/file?token=secret",
    "https://127.0.0.1/file",
    "https://user:pass@example.com/file",
  ]) {
    const d = doc();
    d.sourceReferenceImages = [url];
    assert.throws(() => project([d]));
  }
});
test("catalogs cover all records beyond README and page limits; featured picks remain independent", () => {
  const docs = Array.from({ length: config.pageSize + 3 }, (_, i) =>
    doc(i + 1),
  );
  docs[docs.length - 1].editorial = { featured: true, order: 1 };
  const prompts = project(docs),
    batches = pages(prompts),
    locations = promptLocations(prompts, locales[0]),
    output = renderAll(prompts);
  assert.equal(batches.flat().length, prompts.length);
  assert.equal(batches.length, 2);
  assert.equal(selectFeatured(prompts).length, 1);
  assert(output.get("README.md").includes('valign="top"'));
  for (const l of locales) {
    const blocks = batches
      .map((_, i) => output.get(`docs/catalog.${l.code}.${i + 1}.md`))
      .join("\n");
    for (const p of prompts)
      assert.equal(blocks.split(`<a id="${p.id}"></a>`).length - 1, 1);
    assert(
      output
        .get(`docs/catalog.${l.code}.md`)
        .includes(`catalog.${l.code}.2.md`),
    );
  }
  assert.equal(locations.size, prompts.length);
  assert(
    !output
      .get("README.md")
      .includes(`<a id="${prompts[config.readmeLimit].id}"></a>`),
  );
});
test("prompt whitespace and nested code fences survive rendering; titles are escaped", () => {
  const p = project([doc()])[0],
    output = renderAll([p]);
  assert.equal(
    fenced(p.translations.en.prompt),
    "````text\nMake a scene.  \n```js\nconst x = 1\n```\n````",
  );
  for (const l of locales) {
    const text = output.get(`docs/catalog.${l.code}.1.md`);
    assert(text.includes("An &lt;interesting&gt; world"));
    assert(text.includes(fenced(p.translations[l.code].prompt)));
    assert(!text.includes('src="undefined"'));
  }
});
test("all source-linked entries appear in the source index, including old entries", () => {
  const docs = Array.from({ length: config.readmeLimit + 3 }, (_, i) =>
    doc(i + 1),
  );
  docs.at(-1).links = { repository: "https://github.com/example/game" };
  const prompts = project(docs),
    source = renderAll(prompts).get("docs/with-code.md");
  assert(source.includes("https://github.com/example/game"));
  assert(source.includes(docs.at(-1).slug));
});
test("video-only and text entries render without broken thumbnails or competing video links", () => {
  const d = doc();
  d.video = { url: "https://media.tripogrowth.space/media/movie.mp4" };
  d.editorial = { featured: true };
  const [p] = project([d]);
  const output = renderAll([p]);
  assert.equal(p.images.length, 0);
  for (const text of output.values()) {
    assert(!text.includes("movie.mp4"));
    assert(!text.includes('src="null"'));
    assert(!text.includes('src="undefined"'));
  }
});

test("multiple blank lines inside CMS prompts are preserved exactly", () => {
  const d = doc();
  d.prompt = localized("First paragraph.\n\n\n\n\nSecond paragraph.");
  const [p] = project([d]);
  const output = renderAll([p]);
  assert(output.get("docs/catalog.en.1.md").includes(fenced(d.prompt.en)));
});
