import type { Metadata, Viewport } from "next";
import { afacad } from "@/app/ui/fonts";
import { cormorant_garamond } from "@/app/ui/fonts";
import Header from './components/Header';

import '@/app/ui/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: "Ritul Jain Art Portfolio - Inspiring Acrylic Paintings of Nature",
  description: "Explore the nature-inspired acrylic paintings of Ritul Jain, capturing the beauty of landscapes, mountains, and more. Discover art that evokes connection and inspiration.",
  keywords: ['Acrylic Paintings', 'Nature Art', 'Landscape Paintings', 'Mountain Paintings', 'Ritul Jain', 'Art Portfolio', 'Inspiring Art', 'Oil Paintings', 'Contemporary Art', 'Fine Art'],
  authors: [{ name: 'Ritul Jain' }],
  creator: 'Ritul Jain',
  publisher: 'Ritul Jain',
  metadataBase: new URL('https://art.rituljain.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Ritul Jain Art Portfolio - Inspiring Acrylic Paintings of Nature and Landscapes',
    description: 'Discover the captivating acrylic paintings of Ritul Jain, featuring landscapes and natural beauty. Visit the gallery to see more.',
    url: 'https://art.rituljain.com',
    siteName: 'Ritul Jain Art Portfolio',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ritul Jain Art Portfolio',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritul Jain Art Portfolio',
    description: 'Discover the captivating acrylic paintings of Ritul Jain, featuring landscapes and natural beauty.',
    images: ['/twitter-image.jpg'],
    creator: '@rituljain',
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
  },
  verification: {
    google: 'f-N2DDVSssIWsJBvihqvgOtaBOSDsmCa1ZQq7jR4zXs',
  },
  category: 'Art',
  classification: 'Art Portfolio',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${afacad.variable} ${cormorant_garamond.variable} antialiased`}>
        <Header />
        {children}
      </body>    
    </html>
  );
}
