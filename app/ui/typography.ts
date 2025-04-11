import { cormorant_garamond, afacad } from './fonts';

// Typography classes for consistent styling across the site
export const typography = {
  // Headings
  h1: `${afacad.className} text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`,
  h2: `${afacad.className} text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight`,
  h3: `${afacad.className} text-2xl md:text-3xl font-semibold tracking-tight`,
  h4: `${afacad.className} text-xl md:text-2xl font-semibold tracking-tight`,
  
  // Body text
  bodyLarge: `${cormorant_garamond.className} text-lg md:text-xl leading-relaxed`,
  body: `${cormorant_garamond.className} text-base md:text-lg leading-relaxed`,
  bodySmall: `${cormorant_garamond.className} text-sm md:text-base leading-relaxed`,
  
  // Special text
  caption: `${cormorant_garamond.className} text-sm text-gray-500 italic`,
  label: `${afacad.className} text-sm font-medium uppercase tracking-wider`,
  
  // Links
  link: 'text-primary hover:text-primary/80 underline underline-offset-4 transition-colors',
  
  // Navigation
  nav: `${afacad.className} text-sm font-medium`,
  
  // Artist name/brand
  brand: `${afacad.className} text-xl font-bold tracking-tight`,
}; 