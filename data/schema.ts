import type { Artwork } from "./artworks";
import { blog, siteUrl } from "./site";

// Escape markup so future descriptions cannot terminate the JSON-LD script.
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#artist`,
  name: "Ritul Jain",
  url: siteUrl,
  jobTitle: "Artist",
  sameAs: [blog],
  description: "Seattle-based artist working in acrylic and oil.",
};

export function artworkSchema(artwork: Artwork) {
  const url = `${siteUrl}/gallery/${artwork.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    "@id": `${url}#artwork`,
    name: artwork.title,
    description: artwork.description,
    image: `${siteUrl}${artwork.src}`,
    url,
    creator: { "@type": "Person", "@id": personSchema["@id"], name: "Ritul Jain" },
    artMedium: artwork.medium,
    artform: "Painting",
    // Creation records have month precision only; do not invent a day for dateCreated.
    keywords: artwork.keywords,
    about: artwork.subject?.map((name) => ({ "@type": "Thing", name })),
    contentLocation: artwork.location
      ? { "@type": "Place", name: artwork.location }
      : undefined,
  };
}

export function breadcrumbSchema(artwork: Artwork) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/gallery` },
      { "@type": "ListItem", position: 3, name: artwork.title, item: `${siteUrl}/gallery/${artwork.slug}` },
    ],
  };
}
