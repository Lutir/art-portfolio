import { Afacad, Cormorant_Garamond } from 'next/font/google'

export const afacad = Afacad({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-afacad',
  weight: ['400', '500', '600', '700'],
  preload: true,
  adjustFontFallback: true,
})

export const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
  adjustFontFallback: true,
})