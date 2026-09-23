# CMS → templates → Markdown

This repository is a generated publication, not a hand-maintained copy of another README. `catalog.config.mjs` defines its identity and model scope. `templates/` defines the Markdown structure; `scripts/lib/render.mjs` supplies the sections. Content comes from published Growth CMS records with locale fallback disabled.

## Commands

Use Node.js 22.16 or newer.

```sh
npm ci
npm run check
```

To refresh live content, copy `.env.example` to `.env.local` and supply a read-only CMS User API Key. Never commit that file. The local `TRIPO_GROWTH_CMS_API_KEY` environment variable is also accepted; GitHub Actions uses repository secret `CMS_API_KEY`.

```sh
npm run verify:cms      # Verify membership, attribution and all translations
npm run sync            # Fetch, render, validate, then replace generated output
npm run check           # Offline tests, checksums and local links
npm run sync -- --check # Assert committed output matches the live CMS
```

There is no offline source-data fallback. A failed CMS read cannot silently publish a stale local export.

## Inclusion and navigation

With `modelSlug: null`, the collection includes every published prompt in the 3D CMS collection. A specific model scope resolves the CMS model by slug and includes prompts whose primary `model` or actual `modelsUsed` relationship includes it. `compatibleModels`, title keywords and URL guesses are never used for inclusion. Model names come from CMS and do not independently establish a provider's release status. Model counts can overlap when a project actually used several models; category counts partition the collection.

Every prompt must have a category, creator, valid public links and complete titles and prompts in all 14 supported languages. Imported work needs an original source; internal projects may omit an external post. Reference image requirements, reference URLs, original prompt text, remix attribution and partial-source notices are preserved. The catalog exports the CMS prompt body; the detail page provides the shared wrapper workflow and complete reference context. Neither the repository nor the sync process translates or rewrites prompt content. Local file paths already present in a published prompt remain inside its quoted text; readers must adapt them to their own workspace. Generated prose and navigation cannot contain local machine paths.

The README presents the latest 12 examples. Complete catalogs contain every entry, sorted by source publication date (CMS publication date for internal work), with a stable slug tie-break. Catalogs paginate at 50 examples per page; category and model indexes link directly to the appropriate page and prompt anchor. Every page has equivalent language navigation. The source-code index includes the full collection, including older projects. CMS editorial picks are selected independently from the full collection, in editorial order, up to six entries; no editorial badge is fabricated when there are no picks.

## Previews and publication integrity

The first image, or video cover when no image exists, becomes an optimized WebP up to 1040 pixels. The full frame is preserved; featured cards use a 16:10 letterbox. This keeps full catalogs lightweight without copying videos or every original image into Git. The detail page remains the destination for the complete work. Text and video-only entries without a cover remain valid and never render an empty image.

Media downloads validate MIME, decoded format, pixel bounds and cumulative byte length. Credentials go only to the configured CMS API or its legacy media endpoint. Public media hosts receive anonymous requests; redirects are rejected. Checksummed cached previews are reused. No private source snapshots, user records or API credentials are exported.

The sync validates exact pagination counts and duplicate IDs, projects an allowlist of public fields, prepares all media and renders every language. It rechecks prompt membership and revisions plus model/category revisions before publishing. Any mismatch, missing translation, invalid link or media failure aborts before generated files change. All staged output must pass checksums, coverage checks and local-link validation. A local write failure restores the previous files. Unpublished entries, obsolete pages and unused images are removed. Empty collections are rejected for investigation rather than wiping the repository. GitHub publishes each successful update in one commit and never force-pushes.

`docs/sync-manifest.json` records coverage, stable IDs, page membership and generated-file checksums. `assets/manifest.json` records public attribution and preview checksums. These manifests are outputs, not editable source datasets. Runtime caches and credentials remain ignored.

## GitHub Actions

`Sync prompts` runs twice daily and supports manual dispatch. See its workflow for exact UTC and Asia/Shanghai times. Repository secret `CMS_API_KEY` is required; optional variable `CMS_URL` overrides the origin. Only the canonical repository on `main` may run the writing job. Pull-request validation runs offline without CMS credentials. The sync job has repository contents write permission only for publishing generated output.

GitHub schedules can be delayed and may be disabled after 60 days without repository activity. Workflow runs and logs are the source of truth for whether a refresh succeeded. Manual dispatch is the recovery path after fixing a source or credential issue.

## Reusing the generator

The companion 3D and Opus repositories use the same generator engine with separate `catalog.config.mjs` files, workflows, covers and secrets. A future collection can reuse this structure by defining its scope and copy, then exercising the projection and rendering tests. If more collections are added, extracting the shared engine into a versioned package would avoid duplicated maintenance; for now each repository is independently installable and does not depend on a sibling checkout.
