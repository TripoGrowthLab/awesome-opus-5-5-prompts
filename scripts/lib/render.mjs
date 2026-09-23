import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import config from "../../catalog.config.mjs";
import { locales } from "./locales.mjs";
import { ui } from "./copy.mjs";
import {
  selectFeatured,
  pages,
  pagePath,
  promptLocations,
  groups,
} from "./catalog.mjs";

export const html = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
export const md = (value) =>
  html(value)
    .replace(/[\\\[\]|*_`]/g, (c) => "\\" + c)
    .replace(/\r?\n/g, " ");
const linkURL = (url) => url.replaceAll("(", "%28").replaceAll(")", "%29");
export const link = (label, url) => `[${md(label)}](${linkURL(url)})`;
const author = (p) =>
  p.author.url ? link(p.author.name, p.author.url) : md(p.author.name);
const root = `https://github.com/${config.repository}`;
const templates = Object.fromEntries(
  ["readme", "index", "catalog"].map((name) => [
    name,
    readFileSync(
      new URL(`../../templates/${name}.md`, import.meta.url),
      "utf8",
    ),
  ]),
);
function template(name, values) {
  return templates[name].replace(/\{\{([a-z]+)\}\}/g, (_, key) => {
    assert(key in values, `Missing template value ${key}`);
    return values[key];
  });
}
const siteRoot = (locale) =>
  `https://www.tripo3d.ai${locale.code === "en" ? "" : `/${locale.code}`}`;
export const publicPage = (p, l) => `${siteRoot(l)}/3d-prompts/${p.slug}`;
const referral = (url, placement) =>
  `${url}?utm_source=github&utm_medium=referral&utm_campaign=${config.campaign}&utm_content=${placement}`;
const galleryURL = (l, placement) =>
  referral(
    `${siteRoot(l)}/3d-prompts${config.modelSlug ? `/models/${config.modelSlug}` : ""}`,
    placement,
  );
const indexPath = (locale) => `docs/catalog.${locale.code}.md`;
const homePath = (locale) =>
  locale.code === "zh" ? "README.zh-CN.md" : "README.md";
const home = (l, prefix) => link(`← ${config.title}`, prefix + homePath(l));
export function languageBadges(current, prefix, kind = "index", pageIndex = 0) {
  return (
    "<p>\n" +
    locales
      .map((l) => {
        const path =
          kind === "page"
            ? pagePath(l, pageIndex)
            : kind === "home" && ["en", "zh"].includes(l.code)
              ? homePath(l)
              : indexPath(l);
        const badge = `https://img.shields.io/badge/${encodeURIComponent(l.name.replaceAll("-", "--"))}-${l.code === current.code ? "✓-238636" : "64748b"}?style=flat-square`;
        return `  <a href="${prefix + path}"><img alt="${html(l.name)}" src="${badge}"></a>`;
      })
      .join("\n") +
    "\n</p>"
  );
}
function badges(prefix) {
  return [
    `[![Awesome](https://awesome.re/badge-flat2.svg)](https://github.com/sindresorhus/awesome)`,
    `[![Stars](https://img.shields.io/github/stars/${config.repository}?style=flat-square&color=${config.accent})](${root}/stargazers)`,
    `[![Tooling: MIT](https://img.shields.io/badge/Tooling-MIT-64748b?style=flat-square)](${prefix}LICENSE)`,
    `[![Sync prompts](${root}/actions/workflows/sync-prompts.yml/badge.svg?branch=main)](${root}/actions/workflows/sync-prompts.yml)`,
    `[![Contributions welcome](https://img.shields.io/badge/PRs-welcome-238636?style=flat-square)](${prefix}CONTRIBUTING.md)`,
  ].join(" ");
}
export function fenced(value) {
  const fence = "`".repeat(
    Math.max(3, ...[...value.matchAll(/`+/g)].map((m) => m[0].length + 1)),
  );
  return `${fence}text\n${value}\n${fence}`;
}
function stats(prompts, l) {
  const code = prompts.filter((p) => p.repository).length,
    models = groups(prompts, "models").length;
  return l.code === "zh"
    ? `**${prompts.length} 条案例 · ${models} 个模型 · ${locales.length} 种语言${code ? ` · ${code} 条附源码` : ""}**`
    : l.code === "en"
      ? `**${prompts.length} examples · ${models} ${models === 1 ? "model" : "models"} · ${locales.length} languages${code ? ` · ${code} with source code` : ""}**`
      : `**${prompts.length} ${ui(l).examples} · ${locales.map((x) => x.name).length} 🌐**`;
}
function gallery(l, total) {
  return `<p align="center"><strong><a href="${html(galleryURL(l, "catalog_footer"))}">${html(l.code === "zh" ? `查看全部 ${total} 条案例与在线演示` : l.code === "en" ? `Explore all ${total} examples and live previews` : ui(l).catalog)} →</a></strong></p>`;
}
function browse(prompts, l, prefix) {
  const t = ui(l);
  const rows = (kind) =>
    groups(prompts, kind)
      .map(
        (g) =>
          `| ${link(kind === "models" ? g.name : g.names[l.code], `${prefix}${indexPath(l)}#${kind === "models" ? "model" : "category"}-${g.slug}`)} | ${g.prompts.length} |`,
      )
      .join("\n");
  return [
    `## ${t.categories}`,
    "",
    `| ${t.categories} | ${t.examples} |`,
    "| :--- | ---: |",
    rows("categories"),
    "",
    `### ${t.models}`,
    "",
    `| ${t.models} | ${t.examples} |`,
    "| :--- | ---: |",
    rows("models"),
  ].join("\n");
}
function featured(prompts, l, prefix) {
  const picks = selectFeatured(prompts);
  if (!picks.length) return "";
  const locations = promptLocations(prompts, l),
    lines = [`## ${l.featured}`, "", "<table>"];
  for (let i = 0; i < picks.length; i += 2) {
    lines.push("<tr>");
    for (const p of picks.slice(i, i + 2)) {
      const title = html(p.translations[l.code].title),
        target = prefix + locations.get(p.id);
      const image = p.featuredImage
        ? `<a href="${html(publicPage(p, l))}"><img src="${prefix + p.featuredImage}" width="420" alt="${title}"></a><br>`
        : "";
      lines.push(
        `<td width="50%" valign="top">${image}<strong><a href="${target}">${title}</a></strong><br><sub>${p.author.url ? `<a href="${html(p.author.url)}">${html(p.author.name)}</a>` : html(p.author.name)}</sub><br><a href="${target}">${html(l.prompt)} →</a>${p.repository ? ` · <a href="${html(p.repository)}">GitHub ↗</a>` : ""}</td>`,
      );
    }
    lines.push("</tr>");
  }
  return [...lines, "</table>"].join("\n");
}
export function entry(
  p,
  l,
  prefix,
  { collapsed = false, back = "#all-prompts" } = {},
) {
  const e = p.translations[l.code],
    t = ui(l);
  const lines = [
    `<a id="${p.id}"></a>`,
    "",
    `### ${md(e.title)}`,
    "",
    `${author(p)} · ${p.date} · ${md(p.models.map((m) => m.name).join(" / "))} · ${md(p.category.names[l.code])}`,
    "",
  ];
  if (p.remix)
    lines.push(
      `${t.remix}: ${p.remix.url ? link(p.remix.name, p.remix.url) : md(p.remix.name)}`,
      "",
    );
  if (p.images[0])
    lines.push(
      `<a href="${html(publicPage(p, l))}"><img src="${prefix + p.images[0]}" width="840" loading="lazy" alt="${html(e.title)}"></a>`,
      "",
    );
  if (p.partial) lines.push(`> ${t.partial}`, "");
  if (p.evidence === "source-derived") lines.push(`*${t.derived}*`, "");
  if (p.references.length)
    lines.push(
      `**${t.references}:** ${p.references.map((url, i) => link(String(i + 1), url)).join(" · ")}`,
      "",
    );
  else if (p.requiresReferenceImage) lines.push(`> ${t.required}`, "");
  if (collapsed)
    lines.push("<details>", `<summary>${html(l.prompt)}</summary>`, "");
  else lines.push(`**${l.prompt}**`, "");
  lines.push(fenced(e.prompt), "");
  if (collapsed) lines.push("</details>", "");
  if (p.originalPrompt.trim() && p.originalPrompt.trim() !== e.prompt.trim())
    lines.push(
      "<details>",
      `<summary>${html(t.original)}</summary>`,
      "",
      fenced(p.originalPrompt),
      "",
      "</details>",
      "",
    );
  lines.push(
    [
      link(`${l.detail} ↗`, publicPage(p, l)),
      ...(p.source ? [link(l.source, p.source)] : []),
      ...(p.repository ? [link(l.repository, p.repository)] : []),
      ...(p.demo ? [link(l.demo, p.demo)] : []),
      link(l.back, back),
    ].join(" · "),
    "",
    "---",
    "",
  );
  return lines.join("\n");
}
function readme(prompts, l) {
  const zh = l.code === "zh",
    t = ui(l),
    opus = Boolean(config.modelSlug);
  const crosslink = opus
    ? zh
      ? "> 想比较更多模型的创作方式？浏览 [Awesome 3D Prompts](https://github.com/TripoGrowthLab/awesome-3d-prompts) 与 [Astra 提示词库](https://github.com/TripoGrowthLab/awesome-astra-prompts)。"
      : "> Building with more than one model? Explore [Awesome 3D Prompts](https://github.com/TripoGrowthLab/awesome-3d-prompts) and [Awesome Astra Prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts)."
    : zh
      ? "> 已经选好模型？直接打开 [Astra 提示词库](https://github.com/TripoGrowthLab/awesome-astra-prompts) 或 [Opus 5.5 提示词库](https://github.com/TripoGrowthLab/awesome-opus-5-5-prompts)。"
      : "> Have a model in mind? Jump into [Awesome Astra Prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts) or [Awesome Opus 5.5 Prompts](https://github.com/TripoGrowthLab/awesome-opus-5-5-prompts).";
  const intro = zh
    ? `**${opus ? "用 Opus 5.5，把一个想法做成可玩的 3D 世界。" : "从一个好案例出发，做出你的下一个 3D 游戏、场景或交互作品。"}**\n\n${opus ? "来自真实作品的 Claude Opus 5.5 提示词，覆盖 Three.js 场景、浏览器游戏、动画与模拟。" : "汇集 Astra、Claude、Kimi 等模型的 3D 创作案例，覆盖游戏、场景、模型资产、动画与互动体验。"} 每条案例保留作者与来源；先看效果，再复制提示词，改成自己的作品。`
    : `**${opus ? "Turn an idea into a world you can play with." : "A good example is the beginning of your next 3D project."}**\n\n${opus ? "Claude Opus 5.5 prompts from real projects: Three.js scenes, browser games, animation and simulations." : "3D prompts across Astra, Claude and Kimi: games, scenes, assets, animation and interactive experiences."} See the result, read the source, then adapt the prompt. Every example keeps its creator credit.`;
  const start = zh
    ? `## 开始使用\n\n1. **先选效果。** 按用途或模型挑一个案例，点击预览图进入详情，体验作品。\n2. **再改提示词。** 展开下方提示词并复制，替换主题、风格和交互。需要参考图的案例请一起提供参考素材；通用流程和完整参考上下文见详情页。\n3. **做出自己的版本。** 在相应的编程助手或 3D 工作流中运行，检查画面、操作和性能。有项目源码时，可先从原项目开始。`
    : `## Start here\n\n1. **Choose a result.** Browse by category or model. Click a preview to inspect the project on its detail page.\n2. **Adapt the prompt.** Expand and copy the prompt, then change the subject, style and interaction. Include reference images when required; the detail page provides the shared workflow and full reference context.\n3. **Build your version.** Run it in the appropriate coding assistant or 3D workflow. Test visuals, controls and performance. When source code is available, start with the linked project.`;
  const assetsURL = referral(
    "https://studio.tripo3d.ai/workspace/generate",
    "readme_assets",
  );
  const assets = zh
    ? `## 给你的作品补上角色和道具\n\n交互已经跑通，接下来把占位物体换成你的设计。[用文字或图片制作 3D 资产](${assetsURL})，检查模型效果，选择合适的下载方案，再导入游戏或场景继续创作。`
    : `## Give your world its own characters and props\n\nOnce the interaction works, replace placeholder shapes with your own designs. [Create a 3D asset from text or an image](${assetsURL}), inspect the result, choose a download option, and bring it into your game or scene.`;
  const footer = zh
    ? `## 分享好作品\n\n[推荐一个案例](${root}/issues/new?template=suggest-example.yml)，附上原作者、来源、可复用的提示词和效果预览。内容与翻译由 CMS 维护，仓库自动同步。参见[贡献指南](CONTRIBUTING.md)和[同步说明](docs/maintaining.md)。\n\n由 [TripoGrowthLab](https://github.com/TripoGrowthLab) 整理。封面为概念插画，案例预览来自已署名创作者。[MIT 许可](LICENSE)适用于本仓库工具与原创文档；第三方材料保留原有权利。[署名与移除请求](RIGHTS.md)。`
    : `## Share something worth building\n\n[Suggest an example](${root}/issues/new?template=suggest-example.yml) with its creator, original source, reusable prompt and preview. Content and translations are curated in CMS and synchronized here automatically. See [contributing](CONTRIBUTING.md) and [maintenance](docs/maintaining.md).\n\nCurated by [TripoGrowthLab](https://github.com/TripoGrowthLab). The cover is conceptual artwork; example previews belong to their credited creators. The [MIT license](LICENSE) covers our tooling and original documentation. Third-party material retains its owners’ rights. [Attribution and removal requests](RIGHTS.md).`;
  return template("readme", {
    title: config.title,
    badges: badges(""),
    languages: languageBadges(l, "", "home"),
    crosslink,
    hero: `<a href="${html(galleryURL(l, "readme_hero"))}"><img src="assets/hero.webp" width="100%" alt="${config.title}"></a>`,
    intro,
    stats: stats(prompts, l),
    navigation: [
      link(t.start, "#start-here"),
      link(t.categories, "#browse"),
      link(t.latest, "#latest"),
      link(t.catalog, indexPath(l)),
      link(t.code, "docs/with-code.md"),
    ].join(" · "),
    start,
    browse: browse(prompts, l, ""),
    featured: featured(prompts, l, ""),
    latest:
      `## ${t.latest}\n\n${link(`${t.catalog} (${prompts.length}) →`, indexPath(l))}\n\n` +
      prompts
        .slice(0, config.readmeLimit)
        .map((p) => entry(p, l, "", { collapsed: true, back: "#latest" }))
        .join("\n"),
    gallery: gallery(l, prompts.length),
    assets,
    footer,
  });
}
function index(prompts, l) {
  const t = ui(l),
    locations = promptLocations(prompts, l),
    prefix = "../",
    body = [];
  for (const kind of ["categories", "models"]) {
    body.push(`<a id="${kind}"></a>`, "", `## ${t[kind]}`, "");
    for (const group of groups(prompts, kind)) {
      body.push(
        `<a id="${kind === "models" ? "model" : "category"}-${group.slug}"></a>`,
        "",
        `### ${md(kind === "models" ? group.name : group.names[l.code])} · ${group.prompts.length}`,
        "",
      );
      for (const p of group.prompts)
        body.push(
          `- ${link(p.translations[l.code].title, prefix + locations.get(p.id))} · ${author(p)}${p.repository ? " · GitHub" : ""}`,
        );
      body.push("");
    }
  }
  return template("index", {
    title: `${config.title} — ${t.catalog}`,
    home: home(l, prefix),
    languages: languageBadges(l, prefix),
    stats: stats(prompts, l),
    navigation: [
      link(t.categories, "#categories"),
      link(t.models, "#models"),
      link(t.code, "with-code.md"),
      ...pages(prompts).map((_, i) =>
        link(`${i + 1}`, prefix + pagePath(l, i)),
      ),
    ].join(" · "),
    body: body.join("\n"),
    gallery: gallery(l, prompts.length),
  });
}
function catalogPage(prompts, l, page, index, totalPages) {
  const t = ui(l),
    navigation = [
      link(t.catalog, `catalog.${l.code}.md`),
      ...(index ? [link("←", `catalog.${l.code}.${index}.md`)] : []),
      `**${index + 1} / ${totalPages}**`,
      ...(index + 1 < totalPages
        ? [link("→", `catalog.${l.code}.${index + 2}.md`)]
        : []),
    ].join(" · ");
  const toc = [
    '<a id="all-prompts"></a>',
    "",
    "<details>",
    `<summary>${html(l.browse)} (${page.length})</summary>`,
    "",
    ...page.map((p) => `- ${link(p.translations[l.code].title, "#" + p.id)}`),
    "",
    "</details>",
    "",
  ].join("\n");
  return template("catalog", {
    title: `${config.title} — ${index + 1} / ${totalPages}`,
    home: home(l, "../"),
    languages: languageBadges(l, "../", "page", index),
    navigation,
    body: toc + page.map((p) => entry(p, l, "../")).join("\n"),
    gallery: gallery(l, prompts.length),
  });
}
export function renderAll(prompts) {
  const output = new Map(),
    batches = pages(prompts);
  output.set("README.md", readme(prompts, locales[0]));
  output.set("README.zh-CN.md", readme(prompts, locales[1]));
  for (const locale of locales) {
    output.set(indexPath(locale), index(prompts, locale));
    for (let i = 0; i < batches.length; i++)
      output.set(
        pagePath(locale, i),
        catalogPage(prompts, locale, batches[i], i, batches.length),
      );
  }
  const locations = promptLocations(prompts, locales[0]);
  const lines = [
    "<!-- Generated from Growth CMS. -->",
    "",
    "# Start with source code",
    "",
    home(locales[0], "../"),
    "",
    "Check each project’s own license before reuse. All source-linked entries are included, independent of the home page selection.",
    "",
  ];
  const repos = [...new Set(prompts.map((p) => p.repository).filter(Boolean))];
  if (!repos.length)
    lines.push(
      "No project repositories are linked in this collection yet. Browse the [complete catalog](catalog.en.md) for prompts and original posts.",
      "",
    );
  for (const repo of repos) {
    lines.push(`## ${link(repo.replace("https://github.com/", ""), repo)}`, "");
    for (const p of prompts.filter((p) => p.repository === repo))
      lines.push(
        `- ${link(p.translations.en.title, "../" + locations.get(p.id))} · ${author(p)}${p.license ? " · " + link("License", p.license) : ""}`,
      );
    lines.push("");
  }
  output.set("docs/with-code.md", lines.join("\n"));
  return output;
}
