import Link from "next/link";
import { blog } from "@/data/site";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  return (
    <header className="site-header">
      <Link className="artist-name" href="/">
        RITUL JAIN
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/">HOME</Link>
        <Link href="/gallery">ALL WORKS</Link>
        <Link href="/about">ABOUT</Link>
        <a className="blog-nav" href={blog} target="_blank" rel="noreferrer">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 6C9 3 5 3 2 4l1 15c3-1 6-1 9 1 3-2 6-2 9-1l1-15c-3-1-7-1-10 2Z" />
            <path d="m12 6 .2 14M5 8l4 1m-4 3 4 1m6-4 4-1m-4 5 4-1" />
          </svg>
          BLOG
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
