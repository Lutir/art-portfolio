import type { Metadata } from "next";
export const siteUrl = "https://art.rituljain.com";
export const instagram = "https://instagram.com/rituljain";
export const blog = "https://blog.rituljain.com";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/the_house_in_the_valley.jpg",
): Metadata {
  return {
    title: { absolute: `${title} — Ritul Jain` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — Ritul Jain`,
      description,
      url: path,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Ritul Jain`,
      description,
      images: [image],
    },
  };
}
