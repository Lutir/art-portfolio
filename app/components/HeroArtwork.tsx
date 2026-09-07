"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/data/artworks";
import type { CSSProperties } from "react";

export default function HeroArtwork({ artworks }: { artworks: Artwork[] }) {
  const [hero] = useState(
    () => artworks[Math.floor(Math.random() * artworks.length)],
  );
  return (
    <section
      className="single-painting"
      aria-label="Featured painting"
      style={{ "--art-ratio": hero.width / hero.height } as CSSProperties}
    >
      <Link href={`/gallery/${hero.slug}`} className="single-painting-image">
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          sizes={
            hero.orientation === "vertical"
              ? "(max-width: 767px) 90vw, 55vw"
              : "(max-width: 767px) 100vw, 85vw"
          }
          priority
        />
      </Link>
      <div className="single-painting-caption">
        <Link href={`/gallery/${hero.slug}`}>{hero.title}</Link>
        <p>
          {hero.medium} · {hero.year}
        </p>
      </div>
    </section>
  );
}
