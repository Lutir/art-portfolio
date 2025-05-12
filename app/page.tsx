import Link from "next/link"
import Image from 'next/image'
import { Metadata } from 'next'
import { typography } from './ui/typography'

export const metadata: Metadata = {
  title: "Ritul Jain Art Portfolio - Home",
  description: "Welcome to Ritul Jain's art portfolio. Explore captivating acrylic and oil paintings of nature, landscapes, and more.",
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: "Ritul Jain Art Portfolio - Home",
    description: "Welcome to Ritul Jain's art portfolio. Explore captivating acrylic and oil paintings of nature, landscapes, and more.",
    url: 'https://art.rituljain.com',
  }
};

export default function Home() {
  return (
    <>
    <section className="flex flex-col md:flex-row h-[100vh] w-full">
      <div className="w-full md:w-1/2 overflow-hidden">
        <Image
            alt="Ritul Jain - Artist"
          className="h-full w-full object-cover object-center"
          height={1200}
          src="/ritul-jain.jpg"
          style={{
            aspectRatio: "800/1200",
            objectFit: "cover",
          }}
          width={800}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex w-full md:w-1/2 flex-col items-start justify-center gap-6 py-6 md:py-0 px-12 md:px-16 lg:px-20">
        <div className="space-y-4">
            <h1 className={typography.h1}>Welcome to Ritul&apos;s Art Gallery</h1>
            <p className={`${typography.bodyLarge} text-gray-500 dark:text-gray-400`}>
            Explore the captivating world of Ritul&apos;s art, where creativity and passion come alive. Discover his latest
            masterpieces and immerse yourself in the beauty of his work.
          </p>
        </div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mx-auto md:mx-0"
          href="/gallery"
            aria-label="Explore the Gallery"
        >
          Explore the Gallery
        </Link>
      </div>
    </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ritul Jain",
            "url": "https://art.rituljain.com",
            "image": "https://art.rituljain.com/ritul-jain.jpg",
            "description": "Artist specializing in acrylic and oil paintings of nature and landscapes",
            "sameAs": [
              "https://instagram.com/rituljain",
              "https://twitter.com/rituljain"
            ],
            "knowsAbout": ["Art", "Painting", "Acrylic", "Oil", "Landscape", "Nature"],
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "CreativeWork",
                "name": "Art Portfolio",
                "description": "Collection of acrylic and oil paintings"
              }
            }
          })
        }}
      />
    </>
  )
}