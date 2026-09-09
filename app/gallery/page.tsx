import { orderedArtworks } from "@/data/artworks";
import { pageMetadata } from "@/data/site";
import ArtworkArchive from "../components/ArtworkArchive";
export const metadata = pageMetadata(
  "Paintings",
  "Explore paintings by Seattle artist Ritul Jain: acrylic and oil landscapes, mountain views, cats, and everyday scenes.",
  "/gallery",
);
export default function Gallery() {
  return (
    <section className="archive page-section">
      <div className="section-heading">
        <h1 className="display">WORK</h1>
        <p>
          PAINTINGS, MOSTLY.
          <br />A FEW CATS, TOO.
        </p>
      </div>
      <ArtworkArchive artworks={orderedArtworks} />
    </section>
  );
}
