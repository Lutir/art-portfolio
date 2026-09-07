import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/data/artworks";
export default function ArtworkCard({
  artwork,
  priority = false,
  headingLevel = "h3",
  sizes = "(max-width: 767px) 100vw, 50vw",
}: {
  artwork: Artwork;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
  sizes?: string;
}) {
  const Heading = headingLevel;
  return (
    <article
      className={`artwork artwork-${artwork.orientation}`}
      id={`artwork-${artwork.id}`}
    >
      <Link href={`/gallery/${artwork.slug}`}>
        <Image
          src={artwork.src}
          alt={artwork.alt}
          width={artwork.width}
          height={artwork.height}
          sizes={sizes}
          priority={priority}
        />
        <div className="artwork-caption">
          <div>
            <Heading className="artwork-title">{artwork.title}</Heading>
            <p>
              {artwork.medium} · {artwork.year}
            </p>
          </div>
          <span aria-hidden="true">↗</span>
        </div>
      </Link>
    </article>
  );
}
