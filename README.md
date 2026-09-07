# Ritul Jain — Paintings & other things

An artwork-first portfolio built with Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, custom CSS, and `next/image`. Warm paper, oversized type, uncropped paintings, and an editorial selected-work sequence. There is no store or checkout.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. If occupied, use `npm run dev -- --port 3107`.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Lint uses the supported Next 14 `next lint` command with `.eslintrc.json`. Node 20 or newer is recommended. The project assumes a Next-capable host such as Vercel, including its image optimizer, rather than a plain static-file host. No environment variables are required. Canonical production origin is configured in `data/site.ts`; update it when deploying to a different domain. Vercel Analytics is retained and mounted in the root layout.

## Architecture

- `data/artworks.ts`: the single typed catalogue, original descriptions, explicit stable slugs, real image dimensions, and deterministic newest-first ordering.
- `data/site.ts`: verified social URLs, canonical origin, shared SEO metadata helper.
- `app/page.tsx`: minimal homepage with one random painting selected on each fresh server request (`force-dynamic`), plus a short personal note and archive link.
- `app/gallery/page.tsx`: server-rendered archive entry point.
- `app/components/ArtworkArchive.tsx`: small client component for All/Oil/Acrylic filtering. Mixed Acrylic/Oil appears in both filters. Default content is prerendered.
- `app/gallery/[slug]/page.tsx`: statically generated artwork pages, metadata, and circular previous/next links.
- `app/about/page.tsx`: existing biography and portrait, rendered on the server.
- `app/components/`: shared header, footer and image/caption card.
- `app/globals.css`: design tokens, responsive layout, typography, focus and reduced-motion styles.
- `app/sitemap.ts`, `app/robots.ts`: automatically include catalogue URLs.

The public label is WORK; `/gallery` remains the archive URL. Existing `#artwork-ID` anchors land on the corresponding archive cards. Detail URLs are `/gallery/your-stable-slug`. Unknown slugs return 404. There is no modal or hidden mobile menu. The header contains All Works, About, and an accessible theme toggle. A blocking initialization script applies the saved `theme` preference (or light by default) before paint; the toggle persists it in localStorage.

## Add your next painting

1. Put the original image in `public/art/your-painting.jpg` (create `art` if needed). Existing images remain in their original locations.
2. Read the pixel dimensions from your image editor or, on macOS:

   ```sh
   sips -g pixelWidth -g pixelHeight public/art/your-painting.jpg
   ```

3. Add one object to the `artworks` array in `data/artworks.ts`, with these fields:

   ```ts
   {
     id: 17, // a new, unique number
     slug: "your-painting", // unique lowercase words separated by hyphens
     src: "/art/your-painting.jpg",
     width: 4000, // replace with actual pixels
     height: 3000, // replace with actual pixels
     alt: "Describe what is visible in your painting",
     title: "Your Painting",
     description: "Your own words about making it.",
     medium: "Acrylic", // "Oil", "Acrylic", or "Acrylic/Oil"
     year: "September, 2026", // full English month, comma, four-digit year
     orientation: "horizontal", // or "vertical"
     categories: ["landscape", "nature"],
   }
   ```

4. Run `npm run build` and redeploy. The archive card, detail page, SEO metadata, sitemap, work count, and previous/next navigation update automatically. The homepage automatically draws its random painting from the same catalogue.

Keep a published slug stable even if the title changes. If you must change a slug, add a permanent redirect in `next.config.mjs` from the old URL. Dates sort newest first; equal dates sort by descending ID. Original category metadata is retained even though the UI only filters by medium.

## Typography and design reference

Display typography uses **Gaegu Regular** by JIKJI SOFT / The Gaegu Project Authors. Its loose handwritten letterforms bring the name, navigation, titles and section labels closer to the artist-shop reference. Gaegu carries display text, short personal copy and short first-person artwork anecdotes. The About biography also uses Gaegu at a comfortable reading size. Long artwork descriptions use readable sans-serif; dates, media, filter labels and utility controls also use sans-serif.

The Latin WOFF2 (about 17 kB) is self-hosted in `app/fonts/gaegu-latin-400.woff2` via `next/font/local` in `app/layout.tsx`. Typography styles are in `app/globals.css`. The SIL Open Font License 1.1, including copyright attribution, is preserved in `app/fonts/OFL.txt`. Source: `@fontsource/gaegu` 5.3.0, derived from Google Fonts. No runtime Google Fonts request or new package dependency is required.

The suggested Victor Handwriting has a “free for commercial use” listing, but its bundled author readme does not explicitly grant embedding/redistribution, while 1001Fonts’ general terms restrict publication. Gaegu was selected as an openly licensed alternative. [Gaegu license](https://github.com/google/fonts/blob/main/ofl/gaegu/OFL.txt).

Public inspection of [Shrig Shop](https://shrigshop.com/en-us) showed a custom `Shrigley` display family with Helvetica/Arial body copy. No reference font binaries, artwork, graphics, or copy are reused.

## Preservation and audit

All 16 catalogued works and their source descriptions, categories, media, dates, orientations and original image paths are preserved. All files under `public/`, including HD copies and `under_the_moonlight.jpg`, remain byte-for-byte intact. The latter has no catalogue metadata, so it remains an asset rather than a fabricated entry. The Cafe Terrace at Night description already ends in “so dif”; supply the missing text when available.

See `docs/redesign-audit.md` for the initial audit and `docs/validation.md` for validation results and remaining dependency issues.
