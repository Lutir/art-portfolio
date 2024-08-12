import type { Metadata } from "next";
import { afacad } from "@/app/ui/fonts";
import { cormorant_garamond } from "@/app/ui/fonts";

import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: "Ritul Jain Art Portfolio - Inspiring Acrylic Paintings of Nature",
  description: "Explore the nature-inspired acrylic paintings of Ritul Jain, capturing the beauty of landscapes, mountains, and more. Discover art that evokes connection and inspiration.",
  keywords: ['Acrylic Paintings', 'Nature Art', 'Landscape Paintings', 'Mountain Paintings', 'Ritul Jain', 'Art Portfolio', 'Inspiring Art'],
  authors: [{ name: 'Ritul Jain' }],
  metadataBase: new URL('https://art.rituljain.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Ritul Jain Art Portfolio - Inspiring Acrylic Paintings of Nature and Landscapes',
    description: 'Discover the captivating acrylic paintings of Ritul Jain, featuring landscapes and natural beauty. Visit the gallery to see more.',
    url: 'https://art.rituljain.com',
    siteName: 'Ritul Jain Art Portfolio',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 3,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="f-N2DDVSssIWsJBvihqvgOtaBOSDsmCa1ZQq7jR4zXs" />
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className={afacad.variable + ' ' + cormorant_garamond.variable }>
        {children}
      </body>    
    </html>
  );
}
