import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-section">
      <h1 className="display">NOT HERE.</h1>
      <p>This page isn’t in the catalogue.</p>
      <Link className="large-link" href="/gallery">
        BACK TO WORK ↗
      </Link>
    </section>
  );
}
