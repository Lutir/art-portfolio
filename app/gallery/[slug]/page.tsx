import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artworks, orderedArtworks, getArtwork } from "@/data/artworks";
import { pageMetadata } from "@/data/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return artworks.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArtwork(slug);
  if (!a) notFound();
  return pageMetadata(a.title, a.description, `/gallery/${a.slug}`, a.src);
}
export default async function ArtworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArtwork(slug);
  if (!a) notFound();
  const index = orderedArtworks.findIndex((work) => work.id === a.id);
  const previous =
    orderedArtworks[
      (index - 1 + orderedArtworks.length) % orderedArtworks.length
    ];
  const next = orderedArtworks[(index + 1) % orderedArtworks.length];
  return (
    <article className="artwork-detail page-section">
      <div className="detail-top">
        <Link href="/gallery">← ALL WORK</Link>
        <span>
          {String(index + 1).padStart(2, "0")} / {artworks.length}
        </span>
      </div>
      <Image
        className="detail-image"
        src={a.src}
        alt={a.alt}
        width={a.width}
        height={a.height}
        priority
        sizes="(max-width: 767px) 100vw, 85vw"
      />
      <div className="detail-copy">
        <h1>{a.title}</h1>
        <div>
          <p className="detail-medium">
            {a.medium}
            <br />
            {a.year}
          </p>
          <p className={a.description.length < 340 && /\b(I|my|we)\b/i.test(a.description) ? "description personal-hand" : "description"}>{a.description}</p>
        </div>
      </div>
      <nav className="artwork-navigation" aria-label="Adjacent artwork">
        <Link href={`/gallery/${previous.slug}`}>
          <span>← PREVIOUS</span>
          <small>{previous.title}</small>
        </Link>
        <Link href={`/gallery/${next.slug}`}>
          <span>NEXT →</span>
          <small>{next.title}</small>
        </Link>
      </nav>
    </article>
  );
}
