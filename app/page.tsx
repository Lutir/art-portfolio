import Link from "next/link";
import { artworks } from "@/data/artworks";
import { pageMetadata, siteUrl } from "@/data/site";
import HeroArtwork from "./components/HeroArtwork";

export const metadata = pageMetadata(
  "Paintings & other things",
  "Paintings by Ritul Jain, made in Seattle. Mountains, cats, and things seen along the way.",
  "/",
);
export default function Home() {
  return (
    <div className="home-page">
      <h1 className="sr-only">Ritul Jain — Paintings &amp; other things</h1>
      <HeroArtwork artworks={artworks} />
      <div className="home-afterword">
        <p className="personal-hand">Sometimes it&apos;s a mountain view.<br />Sometimes just a cat staring out<br />the window while it rains.</p>
        <Link className="all-works-link" href="/gallery">ALL WORKS <span aria-hidden="true">→</span></Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ritul Jain",
            url: siteUrl,
            image: `${siteUrl}/ritul-jain.jpg`,
            sameAs: [],
            description: "Seattle-based artist working in acrylic and oil.",
          }),
        }}
      />
    </div>
  );
}
