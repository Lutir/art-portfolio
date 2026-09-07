import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/data/artworks";
import { pageMetadata, instagram, siteUrl } from "@/data/site";
import type { CSSProperties } from "react";

// A fresh server render chooses the painting before HTML is sent, avoiding a client swap.
export const dynamic = "force-dynamic";
export const metadata = pageMetadata(
  "Paintings & other things",
  "Paintings by Ritul Jain, made in Seattle. Mountains, cats, and things seen along the way.",
  "/",
);
export default function Home() {
  const hero = artworks[Math.floor(Math.random() * artworks.length)];
  return (
    <div className="home-page">
      <h1 className="sr-only">Ritul Jain — Paintings &amp; other things</h1>
      <section className="single-painting" aria-label="Featured painting"
        style={{ "--art-ratio": hero.width / hero.height } as CSSProperties}>
        <Link href={`/gallery/${hero.slug}`} className="single-painting-image">
          <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height}
            sizes={hero.orientation === "vertical" ? "(max-width: 767px) 90vw, 55vw" : "(max-width: 767px) 100vw, 85vw"} priority />
        </Link>
        <div className="single-painting-caption">
          <Link href={`/gallery/${hero.slug}`}>{hero.title}</Link>
          <p>{hero.medium} · {hero.year}</p>
        </div>
      </section>
      <div className="home-afterword">
        <p className="personal-hand">Sometimes it’s a mountain view.<br />Sometimes just a cat staring out<br />the window while it rains.</p>
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
            sameAs: [instagram],
            description: "Seattle-based artist working in acrylic and oil.",
          }),
        }}
      />
    </div>
  );
}
