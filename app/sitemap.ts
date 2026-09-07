import type { MetadataRoute } from "next";
import { artworks } from "@/data/artworks";
import { siteUrl } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/gallery",
    "/about",
    ...artworks.map((a) => `/gallery/${a.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
