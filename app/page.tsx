import Link from "next/link";
import { artworks } from "@/data/artworks";
import { pageMetadata } from "@/data/site";
import HeroArtwork from "./components/HeroArtwork";

export const metadata = pageMetadata(
  "Paintings & Art Portfolio",
  "Paintings by Seattle artist Ritul Jain, including acrylic and oil landscapes, nature, cats, and everyday scenes.",
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

    </div>
  );
}
