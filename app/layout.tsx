import type { Metadata } from "next";
import { afacad } from "@/app/ui/fonts";
import { cormorant_garamond } from "@/app/ui/fonts";

import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: "Ritul Jain",
  description: "Art Potfolio for Ritul Jain",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={afacad.variable + ' ' + cormorant_garamond.variable }>
        {children}
      </body>    
    </html>
  );
}
