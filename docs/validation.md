# Redesign validation — September 7, 2026

## Automated checks

- `npm install`: passed. Original stack retained at Next 14.2.35 / React 18.
- `npm run build`: passed, 25 generated pages including all 16 artwork detail pages. Archive route adds about 1.16 kB; first-load JS about 102 kB including the framework.
- `npm run lint`: passed with no warnings or errors. Added explicit ESLint configuration; no obsolete-script workaround needed for Next 14.
- `npm run typecheck`: passed.
- `git diff --check`: passed.
- Compared every original artwork field against the source repository: all 16 records preserved, including category arrays and informal descriptions.
- SHA-256 comparison of every original public file: all unchanged, including HD originals and uncatalogued assets.
- Validated 16 unique slugs, corresponding generated HTML, canonical URLs, description metadata, OpenGraph images, and existing image paths.
- HTTP checks against the production preview: all 21 public routes (home, About, archive, 16 works, sitemap, robots) returned 200; unknown artwork returned 404.

## Browser checks

- Homepage and archive widths: 1440, 1280, 768, 390, 375 pixels. Document scroll width matched viewport width in every case.
- Archive columns: 3 at 1440/1280, 2 at 768, 1 at 390/375.
- About checked at all five widths without horizontal overflow.
- Detail layout checked across desktop, tablet and mobile, including landscape and portrait work. Landscape rendered at its original 4:3 ratio; original dimensions control all images.
- Oil filter returns 5, Acrylic returns 12, All returns 16. Mixed Acrylic/Oil appears in both medium selections.
- Clicked archive card → detail → Next → Previous → All Work → About successfully.
- Keyboard Tab exposes the skip link with a solid visible focus outline. Filters are native buttons with pressed state; all links remain native anchors. No modal/menu focus trap exists.
- Browser warning/error log was empty in the checked session; no hydration errors observed.
- Visually reviewed the opening artwork, poster-sized intro, mobile archive, mobile detail, About, and footer. Artwork remains uncropped; captions remain visible on touch screens.
- Production homepage title includes Ritul Jain. Canonical detail URL and OpenGraph metadata checked against the source data.

## Remaining limitations

- `npm audit` reports 20 dependency advisories: 4 moderate and 16 high, including Next, eslint-config-next and PostCSS dependency chains. npm proposes a major Next 16 migration for full remediation. This redesign does not silently introduce that framework migration.
- Local production image optimization uses Next’s fallback; Next recommends optional `sharp` for self-hosted production. Vercel provides managed image optimization.
- Build prints the existing outdated `caniuse-lite` Browserslist database notice. Build still succeeds.
- Cafe Terrace at Night's existing description is truncated at “so dif”. Preserved pending the artist's original ending.
- `under_the_moonlight.jpg` has no source catalogue metadata and is retained without inventing a title/date/description record.
- No field Core Web Vitals or Lighthouse score is claimed. Tests used the desktop in-app browser with responsive viewport overrides, not physical iOS/Android devices.
- No deployment was performed. Local production preview: http://127.0.0.1:3107.

## Handwriting revision

Replaced heavy system display text with self-hosted Gaegu Regular (Latin WOFF2, SIL OFL 1.1). Paragraphs and metadata retain system sans-serif. Retuned heading tracking, line height, navigation sizes and artwork titles. Production build (including lint and types) passed. Browser confirmed the custom font is applied and no horizontal overflow at 1440, 1280, 768, 390 and 375 px on the homepage; console error log empty. Victor Handwriting was inspected but not bundled because the author readme does not clarify redistribution/web embedding.
