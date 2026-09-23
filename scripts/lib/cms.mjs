import config from "../../catalog.config.mjs";
import assert from "node:assert/strict";
import { setTimeout as delay } from "node:timers/promises";
import { locales } from "./locales.mjs";

const publicMediaOrigin = "https://media.tripogrowth.space";

// CMS metadata is private; its current R2 media URLs are public. Keep the
// legacy authenticated file endpoint working without forwarding keys to R2.
export function mediaURL(value, cmsOrigin) {
  const url = new URL(value, cmsOrigin);
  const isPublic = [
    publicMediaOrigin,
    "https://cms-media-proxy.tripo.page",
  ].includes(url.origin);
  assert(
    isPublic || url.origin === cmsOrigin,
    "Never send the CMS key to another origin; unsupported media host",
  );
  assert(
    url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      !url.search &&
      !url.hash,
    "Unexpected CMS media URL",
  );
  const prefix = isPublic ? "/media/" : "/api/media/file/";
  assert(url.pathname.startsWith(prefix), "Unexpected CMS media path");
  const filename = decodeURIComponent(url.pathname.slice(prefix.length));
  assert(
    filename &&
      !/[\/\\\x00-\x1f]/.test(filename) &&
      ![".", ".."].includes(filename),
    "Invalid CMS media filename",
  );
  return { url, authenticated: !isPublic };
}

export function publicURL(value, cmsOrigin) {
  if (!value) return null;
  const url = new URL(value);
  assert(
    url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      url.origin !== cmsOrigin,
    "Expected a public HTTPS link",
  );
  assert(
    !/^(localhost|127\.|10\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.|\[)/i.test(
      url.hostname,
    ),
    "Private link is not publishable",
  );
  assert(
    !/[\s<>"\\]/.test(value) &&
      !/[?&](?:token|key|signature|x-amz-[^=]*)=/i.test(value),
    "Unsafe or signed link is not publishable",
  );
  return url.href;
}

export function createCMS({
  baseURL,
  apiKey,
  fetcher = fetch,
  retryDelay = 1000,
}) {
  assert(apiKey, "Set CMS_API_KEY to a read-only CMS User API Key");
  const base = new URL(baseURL);
  assert(
    base.protocol === "https:" &&
      !base.username &&
      !base.password &&
      base.pathname === "/",
    "CMS_URL must be an HTTPS origin",
  );
  async function request(path, { media = false } = {}) {
    const url = new URL(path, base);
    let authenticated = true;
    if (media) ({ authenticated } = mediaURL(url.href, base.origin));
    else {
      assert.equal(
        url.origin,
        base.origin,
        "Never send the CMS key to another origin",
      );
      assert(
        !url.username && !url.password && url.pathname.startsWith("/api/"),
        "Unexpected CMS endpoint",
      );
    }
    for (let attempt = 0; attempt < 3; attempt++) {
      let response;
      try {
        response = await fetcher(url, {
          headers: authenticated
            ? { Authorization: `users API-Key ${apiKey}` }
            : {},
          redirect: "error",
          signal: AbortSignal.timeout(60_000),
        });
      } catch {
        if (attempt === 2)
          throw new Error(`CMS request failed: ${url.pathname}`);
        await delay(retryDelay * (attempt + 1));
        continue;
      }
      if (response.status === 429 || response.status >= 500) {
        await response.body?.cancel();
        if (attempt < 2) {
          await delay(retryDelay * (attempt + 1));
          continue;
        }
      }
      // Do not log response bodies: authentication failures can contain private diagnostics.
      assert(response.ok, `CMS HTTP ${response.status}: ${url.pathname}`);
      return response;
    }
  }
  async function all(collection, params = {}) {
    const docs = [],
      ids = new Set();
    let total, pages;
    for (let page = 1; ; page++) {
      assert(page <= 1000, "CMS pagination exceeded the safety limit");
      const query = new URLSearchParams({
        limit: "50",
        depth: "1",
        locale: "all",
        "fallback-locale": "none",
        sort: "id",
        ...params,
        page: String(page),
      });
      const response = await request(`/api/${collection}?${query}`);
      const data = await response.json();
      assert(
        Array.isArray(data.docs) &&
          Number.isInteger(data.totalDocs) &&
          Number.isInteger(data.totalPages),
        "Invalid CMS pagination envelope",
      );
      total ??= data.totalDocs;
      pages ??= data.totalPages;
      assert.equal(
        data.totalDocs,
        total,
        "CMS count changed during pagination; rerun sync",
      );
      assert.equal(
        data.totalPages,
        pages,
        "CMS page count changed; rerun sync",
      );
      assert.equal(data.page, page, "Unexpected CMS page");
      for (const doc of data.docs) {
        assert(
          doc.id && !ids.has(doc.id),
          "Duplicate CMS document across pages",
        );
        ids.add(doc.id);
        docs.push(doc);
      }
      if (page >= pages) {
        assert(!data.hasNextPage, "Inconsistent final CMS page");
        break;
      }
      assert(
        data.docs.length && data.hasNextPage && data.nextPage === page + 1,
        "Truncated CMS pagination",
      );
    }
    assert.equal(docs.length, total, "Incomplete CMS collection");
    return docs;
  }
  return { origin: base.origin, all, request };
}

export const revision = (docs) =>
  docs
    .map((d) => `${d.id}:${d.updatedAt}`)
    .sort()
    .join("|");
const idOf = (value) => value?.id ?? value;
const validSlug = (value) =>
  typeof value === "string" && /^[a-z0-9][a-z0-9-]*$/.test(value);
const localValue = (value, locale) =>
  typeof value === "string" ? value : value?.[locale.cms] || value?.en || "";
export const promptQuery = (modelId) => ({
  "where[status][equals]": "published",
  ...(modelId
    ? {
        "where[or][0][model][equals]": String(modelId),
        "where[or][1][modelsUsed][contains]": String(modelId),
      }
    : {}),
});

// Public fields are explicitly projected. Raw records, extraction evidence, user
// details and compatibility suggestions never become repository content.
export function projectPrompts(
  docs,
  { models, categories, modelSlug = config.modelSlug },
  cmsOrigin,
) {
  assert(
    docs.length > 0,
    "Refusing to replace the collection with an empty CMS result",
  );
  const modelMap = new Map(models.map((m) => [m.id, m]));
  const categoryMap = new Map(categories.map((c) => [c.id, c]));
  const selectedModel = modelSlug
    ? models.find((m) => m.slug === modelSlug && m.active)
    : null;
  assert(
    !modelSlug || selectedModel,
    "Selected CMS model is missing or inactive",
  );
  const ids = new Set();
  return docs
    .map((doc) => {
      assert(doc.status === "published", "Unpublished prompt in collection");
      assert(
        validSlug(doc.slug) && !ids.has(doc.slug),
        "Invalid or duplicate prompt slug",
      );
      ids.add(doc.slug);
      assert(
        doc.updatedAt && Number.isFinite(Date.parse(doc.updatedAt)),
        "Missing CMS revision",
      );
      const actualIds = [
        ...new Set(
          [idOf(doc.model), ...(doc.modelsUsed || []).map(idOf)].filter(
            Boolean,
          ),
        ),
      ];
      assert(
        actualIds.length && actualIds.every((id) => modelMap.has(id)),
        `Unknown model for ${doc.slug}`,
      );
      assert(
        !selectedModel || actualIds.includes(selectedModel.id),
        "Unrelated model in collection",
      );
      const actualModels = actualIds.map((id) => modelMap.get(id));
      const category = categoryMap.get(idOf(doc.category));
      assert(
        category && validSlug(category.slug),
        `Missing category for ${doc.slug}`,
      );
      const translations = Object.fromEntries(
        locales.map((locale) => {
          const entry = {};
          for (const field of ["title", "prompt"]) {
            const value = doc[field]?.[locale.cms];
            assert(
              typeof value === "string" && value.trim(),
              `Missing ${locale.cms} ${field} for ${doc.slug}; complete translations in CMS`,
            );
            entry[field] = value;
          }
          entry.description =
            typeof doc.description?.[locale.cms] === "string"
              ? doc.description[locale.cms]
              : "";
          return [locale.code, entry];
        }),
      );
      const source = publicURL(doc.source?.url, cmsOrigin);
      assert(
        (source || doc.source?.platform === "internal") &&
          doc.author?.name?.trim(),
        `Missing source attribution for ${doc.slug}`,
      );
      const authorURL = publicURL(doc.author.url, cmsOrigin) || source;
      const attributionURL =
        source || authorURL || `https://www.tripo3d.ai/3d-prompts/${doc.slug}`;
      const date = doc.source?.publishedAt || doc.publishedAt;
      assert(
        date && Number.isFinite(Date.parse(date)),
        `Missing date for ${doc.slug}`,
      );
      assert(Array.isArray(doc.media), `Invalid image list for ${doc.slug}`);
      const image = doc.media[0] || doc.video?.cover;
      const media = image
        ? [image].map((m) => {
            assert(
              m &&
                typeof m === "object" &&
                /^image\/(webp|png|jpeg|gif)$/.test(m.mimeType),
              `Invalid preview for ${doc.slug}`,
            );
            assert(
              Number.isInteger(m.filesize) &&
                m.filesize > 0 &&
                m.filesize <= 25 * 1024 * 1024,
              `Invalid preview size for ${doc.slug}`,
            );
            const { url } = mediaURL(m.url, cmsOrigin);
            return {
              url: url.href,
              mimeType: m.mimeType,
              filesize: m.filesize,
              updatedAt: m.updatedAt,
              source: publicURL(m.sourceURL, cmsOrigin) || attributionURL,
            };
          })
        : [];
      const references = [
        ...new Set(
          [
            ...(doc.referenceImages || []).map((m) => {
              const { url, authenticated } = mediaURL(m.url, cmsOrigin);
              assert(!authenticated, "Reference assets must have public URLs");
              return url.href;
            }),
            ...(doc.sourceReferenceImages || []).map((url) =>
              publicURL(url, cmsOrigin),
            ),
          ].filter(Boolean),
        ),
      ];
      const remix = doc.remixFrom?.name
        ? {
            name: doc.remixFrom.name,
            url: publicURL(doc.remixFrom.url, cmsOrigin),
          }
        : null;
      return {
        id: doc.slug,
        slug: doc.slug,
        translations,
        models: actualModels.map((m) => ({
          slug: m.slug,
          name: localValue(m.name, locales[0]),
        })),
        category: {
          slug: category.slug,
          names: Object.fromEntries(
            locales.map((l) => [l.code, localValue(category.name, l)]),
          ),
          order: category.order || 0,
        },
        author: { name: doc.author.name, url: authorURL },
        remix,
        source,
        date: date.slice(0, 10),
        publishedAt: new Date(date).toISOString(),
        repository: publicURL(doc.links?.repository, cmsOrigin),
        demo: publicURL(doc.links?.liveDemo, cmsOrigin),
        license: publicURL(doc.links?.license, cmsOrigin),
        evidence: doc.evidence?.kind || "unclassified",
        partial: Boolean(doc.evidence?.isPartial),
        originalPrompt:
          typeof doc.originalPrompt === "string" ? doc.originalPrompt : "",
        requiresReferenceImage: Boolean(doc.requiresReferenceImage),
        references,
        media,
        images: [],
        featured: Boolean(doc.editorial?.featured),
        order: Number.isFinite(doc.editorial?.order) ? doc.editorial.order : 0,
      };
    })
    .sort(
      (a, b) =>
        b.publishedAt.localeCompare(a.publishedAt) ||
        a.id.localeCompare(b.id, "en"),
    );
}

export async function fetchCollection(cms) {
  const models = await cms.all("ai-models", {
    depth: "0",
    "select[name]": "true",
    "select[slug]": "true",
    "select[active]": "true",
    "select[updatedAt]": "true",
  });
  const categories = await cms.all("prompt-categories", {
    depth: "0",
    "select[name]": "true",
    "select[slug]": "true",
    "select[order]": "true",
    "select[updatedAt]": "true",
  });
  const selected = config.modelSlug
    ? models.find((m) => m.slug === config.modelSlug && m.active)
    : null;
  assert(
    !config.modelSlug || selected,
    "Selected CMS model is missing or inactive",
  );
  const fields = [
    "id",
    "title",
    "slug",
    "status",
    "model",
    "modelsUsed",
    "category",
    "description",
    "prompt",
    "originalPrompt",
    "source",
    "author",
    "remixFrom",
    "media",
    "video",
    "links",
    "editorial",
    "evidence",
    "requiresReferenceImage",
    "referenceImages",
    "sourceReferenceImages",
    "publishedAt",
    "updatedAt",
  ];
  const query = promptQuery(selected?.id);
  const docs = await cms.all("prompts", {
    ...query,
    ...Object.fromEntries(fields.map((f) => [`select[${f}]`, "true"])),
    depth: "2",
  });
  return {
    prompts: projectPrompts(docs, { models, categories }, cms.origin),
    query,
    revision: revision(docs),
    modelRevision: revision(models),
    categoryRevision: revision(categories),
  };
}
