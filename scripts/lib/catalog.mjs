import config from "../../catalog.config.mjs";
export const selectFeatured = (prompts) =>
  prompts
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id, "en"))
    .slice(0, config.featuredLimit);
export const pages = (prompts) =>
  Array.from({ length: Math.ceil(prompts.length / config.pageSize) }, (_, i) =>
    prompts.slice(i * config.pageSize, (i + 1) * config.pageSize),
  );
export const pagePath = (locale, index) =>
  `docs/catalog.${locale.code}.${index + 1}.md`;
export function promptLocations(prompts, locale) {
  return new Map(
    pages(prompts).flatMap((page, i) =>
      page.map((p) => [p.id, `${pagePath(locale, i)}#${p.id}`]),
    ),
  );
}
export function groups(prompts, kind) {
  const result = new Map();
  for (const p of prompts)
    for (const value of kind === "models" ? p.models : [p.category]) {
      if (!result.has(value.slug))
        result.set(value.slug, { ...value, prompts: [] });
      result.get(value.slug).prompts.push(p);
    }
  return [...result.values()].sort((a, b) =>
    kind === "models"
      ? b.prompts.length - a.prompts.length || a.slug.localeCompare(b.slug)
      : a.order - b.order || a.slug.localeCompare(b.slug),
  );
}
