# Audit before redesign

The provided workspace was an empty, uncommitted Git repository. The existing GitHub repository was retrieved and inspected before implementation. Source code and every public asset were copied without changing originals; original Git history is retained as the comparison baseline.

## Existing content and behavior

- Next 14.2.35, React 18, strict TypeScript, Tailwind 3; no component library. Two competing Tailwind configurations, one with generic card/theme tokens and another with gradient defaults.
- Three routes: homepage (portrait, welcome copy, CTA), gallery (embedded 16-item array), About (portrait and authentic Seattle biography).
- Images: 16 catalogue images; two portrait images; an uncatalogued `under_the_moonlight.jpg`; HD variants. All retained. Real dimensions read with `sips` instead of the previous fixed 4:3/3:4 approximations.
- Metadata fields: ID, image path, alt, title, full informal description, medium, month/year, orientation, categories. Type assertions hid mixed-medium and cat/seascape categories missing from original unions.
- Header linked Home, Gallery, About, and the public blog. Instagram was present in Person structured data. Seattle was in About. No verified email was present.
- Gallery used react-masonry-css, rounded image containers, forced cropping, hover-only metadata, animated entrances, year/category/medium controls, and newest-first sorting. The sort state had no useful exposed sort control. A simulated loading timer added dead state.
- Image modal used history fragments, click-outside and Escape close, scroll locking, animated loader and transitions. It lacked a complete accessible dialog/focus-management pattern. Dedicated URLs better fit sharing, SEO, and catalogue reading.
- ThemeContext used system preference/localStorage and theme classes. Theme buttons were duplicated across header/mobile/About. The redesign uses one deliberately light palette and removes theme machinery.
- Fonts were spread across root layout and UI helpers: Inter, Playfair Display, Afacad, Cormorant Garamond. `app/ui/globals.css` was unused; typography imported extra font resources.
- SEO existed on the homepage and root layout; the separate About `metadata.ts` was not wired into a recognized page export. Root metadata referenced absent OG, touch icon and manifest paths, plus a placeholder verification code. The public manifest itself referenced absent icons/screenshots. Gallery schema created malformed dates and asserted a blanket Creative Commons license.
- Vercel Analytics was imported but not mounted. It is now mounted once in layout.
- Responsive layouts existed but depended on fixed screen heights, image cropping, and a mobile overlay. New mobile navigation remains visible and does not require a menu button.

## Retained and replaced

Retained all original images and catalogue content, About biography, known social/blog links, `/gallery`, stable artwork ID anchors, newest-first ordering, useful medium filtering, Next image optimization, and accurate Person identity fields.

Replaced the modal with static artwork pages, theme inversion with warm paper, complex filters with three text controls, hover-only captions with always-visible text, and animated cards with plain linked images. Removed verified-unused theme/modal/UI helper components, the stray About metadata module, duplicate Tailwind config and dependencies used solely by those components. No original public files were removed or modified. The old broken manifest is retained as a source asset but not linked by the new layout.

## Reference observations

Shrig Shop's public desktop layout has a large handwritten logo, sparse centered navigation, small left category list, huge slideshow surface, simple image categories, and a utilitarian footer. Its body copy uses Helvetica/Arial. Computed display samples use `Shrigley` at weight 400, 20px and -1.4px tracking; body samples use 14px Helvetica with 0.7px tracking. Its personality comes partly from proprietary-looking handwriting and artwork, not a generic grotesk. No licensing permission was established for that family; no font file was copied.

This design reinterprets image emphasis and minimal chrome using oversized system Arial, asymmetric paintings, and a restrained off-white canvas. It follows the requested poster scale rather than copying the reference's actual small heading sizes. Hero: The House in the Valley, selected for its landscape composition and the artist's own note that it is a favorite.
