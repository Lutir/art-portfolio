import type { Metadata } from "next";
import localFont from "next/font/local";
const handwriting = localFont({
  src: "./fonts/gaegu-latin-400.woff2",
  variable: "--font-handwriting",
  weight: "400",
  display: "swap",
});
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/data/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ritul Jain — Paintings & other things",
    template: "%s — Ritul Jain",
  },
  description:
    "Paintings by Ritul Jain. Mountains, cats, quiet places, and things seen along the way. Made in Seattle.",
  authors: [{ name: "Ritul Jain" }],
  creator: "Ritul Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ritul Jain",
    images: ["/the_house_in_the_valley.jpg"],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}document.documentElement.dataset.theme=t==='dark'?'dark':'light'})()` }} />
      </head>
      <body className={handwriting.variable} suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
