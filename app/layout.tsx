import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Ritul Jain Art Portfolio",
  description: "Explore the artwork of Ritul Jain, featuring landscapes, nature scenes, and more.",
  keywords: ["art", "portfolio", "painting", "landscape", "nature", "artist", "Ritul Jain"],
  authors: [{ name: "Ritul Jain" }],
  creator: "Ritul Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://art.rituljain.com",
    title: "Ritul Jain Art Portfolio",
    description: "Explore the artwork of Ritul Jain, featuring landscapes, nature scenes, and more.",
    siteName: "Ritul Jain Art Portfolio",
    images: [
      {
        url: "https://art.rituljain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ritul Jain Art Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritul Jain Art Portfolio",
    description: "Explore the artwork of Ritul Jain, featuring landscapes, nature scenes, and more.",
    images: ["https://art.rituljain.com/og-image.jpg"],
    creator: "@rituljain",
  },
  verification: {
    google: "google-site-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
