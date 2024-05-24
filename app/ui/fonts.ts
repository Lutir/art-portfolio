import { Afacad } from '@next/font/google'
import { Cormorant_Garamond } from '@next/font/google'

export const afacad = Afacad({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-afacad',
})

export const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
  weight: ['300', '400', '500', '600', '700'],
})