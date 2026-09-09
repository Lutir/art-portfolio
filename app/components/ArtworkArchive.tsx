"use client";
import { useState } from "react";
import type { Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
export default function ArtworkArchive({ artworks }: { artworks: Artwork[] }) {
  const [medium, setMedium] = useState("All");
  const visible = artworks.filter(
    (a) => medium === "All" || a.medium.includes(medium),
  );
  return (
    <>
      <div className="archive-toolbar">
        <div
          className="filters"
          role="group"
          aria-label="Filter work by medium"
        >
          {["All", "Oil", "Acrylic"].map((value) => (
            <button
              key={value}
              aria-pressed={medium === value}
              onClick={() => setMedium(value)}
            >
              {value.toUpperCase()}
            </button>
          ))}
        </div>
        <p role="status">{String(visible.length).padStart(2, "0")} WORKS</p>
      </div>
      <div className="archive-grid">
        {visible.map((artwork, i) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            headingLevel="h2"
            priority={i === 0}
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        ))}
      </div>
    </>
  );
}
