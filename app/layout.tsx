"use client"
import { afacad } from "@/app/ui/fonts";
import { cormorant_garamond } from "@/app/ui/fonts";
import '@/app/ui/globals.css';
import Head from 'next/head';
import { usePathname } from 'next/navigation';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Determine the page and set the corresponding title and meta description
  const seo = {
    title: '',
    description: '',
    url: `https://art.rituljain.com${pathname}`,
    // image: '/images/og-image.jpg', // Commented out for now
  };

  if (pathname === '/') {
    seo.title = 'Ritul Jain Art Portfolio - Inspiring Acrylic Paintings of Nature';
    seo.description = 'Explore the captivating acrylic paintings by Ritul Jain, featuring real-life landscapes, mountains, and nature. Discover art that inspires and connects with the beauty of the natural world.';
  } else if (pathname === '/gallery') {
    seo.title = 'Nature-Inspired Acrylic Art Gallery | Ritul Jain';
    seo.description = 'Browse through a curated collection of acrylic paintings inspired by nature, capturing the essence of mountains, rivers, and more. Visit Ritul Jain\'s art gallery online.';
  } else if (pathname === '/about') {
    seo.title = 'About Ritul Jain - Artist Behind Nature\'s Beauty in Acrylic';
    seo.description = 'Learn about Ritul Jain, the artist who brings the beauty of nature to life through acrylic paintings. Discover the inspiration and story behind each artwork.';
  } else if (pathname === '/contact') {
    seo.title = 'Contact Ritul Jain - Inquire About Acrylic Paintings';
    seo.description = 'Get in touch with artist Ritul Jain for inquiries about his acrylic paintings, commissions, or collaborations. Connect with the artist behind the nature-inspired art.';
  }

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content="Acrylic Paintings, Nature Art, Landscape Paintings, Mountain Paintings, Ritul Jain, Art Portfolio" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        {/* <meta property="og:image" content={seo.image} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {/* <meta name="twitter:image" content={seo.image} /> */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={`${afacad.variable} ${cormorant_garamond.variable}`}>
        {children}
      </body>    
    </html>
  );
}
