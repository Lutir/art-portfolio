import Image from "next/image";
import { pageMetadata, blog } from "@/data/site";
export const metadata = pageMetadata(
  "About",
  "Ritul Jain paints in Seattle, inspired by Washington landscapes, travels, and everyday moments.",
  "/about",
  "/ritul-jain-about-me.jpg",
);
export default function About() {
  return (
    <section className="about-page page-section">
      <div className="about-layout">
        <div className="about-image">
          <Image
            src="/ritul-jain-about-me.jpg"
            alt="Ritul Jain"
            width={3024}
            height={4032}
            sizes="(max-width: 767px) 200px, 350px"
            priority
          />
        </div>
        <div className="about-copy">
          <h1>I&apos;M RITUL.</h1>
          <p>
            I live in Seattle, WA, and I&apos;m someone who&apos;s always chasing
            creativity in different forms. I started painting a few years ago,
            and after moving to Washington, it slowly became a bigger part of my
            life. The landscapes here—moody skies, quiet forests, vibrant
            parks—just pulled me in.
          </p>
          <p>
            I like to travel a lot, and those little adventures often sneak
            their way into what I paint. Sometimes it&apos;s a mountain view,
            sometimes just a cat staring out the window while it rains.
          </p>
          <p>
            Outside of painting, I work in tech, play the piano now and then,
            and keep a blog where I share thoughts whenever they show up.
          </p>
          <p>
            Through my work, I hope to inspire others to see the beauty in both
            the grand landscapes and the subtle moments of everyday life.
          </p>
          <div className="about-links">
            <a href={blog} target="_blank" rel="noreferrer">
              MY BLOG ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
