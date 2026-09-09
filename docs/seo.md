# Search discoverability

## Manual setup after deployment

1. Add and verify `https://art.rituljain.com` in [Google Search Console](https://search.google.com/search-console).
2. Submit `https://art.rituljain.com/sitemap.xml` under **Sitemaps**.
3. Use **URL Inspection** for the homepage, `/gallery`, and important artwork pages (for example `/gallery/mount-rainier` and `/gallery/gasworks-park`). Check the live page and Google's selected canonical.
4. Monitor impressions, clicks, queries, and indexed pages. In **Performance**, switch the search type to **Image** to monitor image-search traffic.
5. After meaningful artwork or content changes, inspect the affected URL and request indexing when appropriate. Indexing and rankings are not guaranteed.

Optionally verify the site in [Bing Webmaster Tools](https://www.bing.com/webmasters/) and submit the same sitemap.

## Maintaining artwork SEO

`data/artworks.ts` supports optional `seoTitle`, `seoDescription`, `subject`, `location`, and `keywords`. The SEO title excludes the artist suffix: the metadata helper adds ` — Ritul Jain` once. Without overrides, the visible title and existing description remain the metadata fallback. Keep descriptions concise and factual; keep subject/location/keyword fields grounded in the work, with only a few relevant phrases. The three initial overrides cover Mount Rainier, Gas Works Park, and The Cat on the Window.

Visible titles and descriptions remain independent of SEO overrides. Every artwork retains its own Open Graph/Twitter image, descriptive alt text, dimensions, crawlable detail route, and navigation links. Keep public image filenames stable.

`data/schema.ts` provides global Person schema plus each artwork's VisualArtwork and Home → Work → artwork BreadcrumbList. Only existing public profile links are used. Schema includes no price, ownership, physical dimensions, or other unsupported claims. Creation months do not establish an exact creation day, so `dateCreated` is omitted.

The sitemap retains every page. The repository now uses Next.js 16; consider [native image sitemap support](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#image-sitemaps) in a follow-up SEO pass. Absolute original image URLs are already included in VisualArtwork schema. No custom sitemap workaround was introduced. `lastModified` is intentionally omitted because reliable page/content update dates are not tracked. Do not substitute painting creation dates or build/request timestamps. If editorial update dates are maintained later, use those dates for the affected entries.

Validate structured data with the [Schema.org validator](https://validator.schema.org/) and supported search features with [Google's Rich Results Test](https://search.google.com/test/rich-results). VisualArtwork describes the work using [Schema.org](https://schema.org/VisualArtwork); it does not promise a Google rich-result feature.

## Verification

Run `npm run typecheck`, `npm run lint`, and `npm run build`. Inspect rendered HTML for `/`, `/gallery`, `/about`, and artwork pages: production canonical, distinct title/description, correct social image, parseable JSON-LD, article/h1, and ordinary navigation anchors. Check `/robots.txt`, `/sitemap.xml`, and the original image URLs.

A future content improvement is to finish the existing truncated “Cafe Terrace at Night” description with the artist's own wording. Do not invent the missing story. Accurate editorial update dates would also enable useful sitemap `lastModified` values.
