"use client";

import Link from "next/link"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Metadata } from 'next'
import Masonry from 'react-masonry-css'
import ThemeToggle from '../components/ThemeToggle';

import '@/app/globals.css';
import ImageModal from '../components/ImageModal';
import { typography } from '../ui/typography';

// Artwork data with descriptions
const artworks = [
  {
    id: 1,
    src: "/cafe_terrace_at_night.jpg",
    alt: "Cafe terrace at Night",
    title: "Cafe Terrace at Night",
    description: "Inspired by Van Gogh's iconic painting, this piece captures the vibrant nightlife of a café terrace. The warm yellows and deep blues create a striking contrast, while the swirling patterns in the sky evoke a sense of movement and emotion. The composition draws the viewer into the scene, making them feel as if they're standing right there, experiencing the magical atmosphere of the evening.",
    medium: "Oil on Canvas",
    year: "June, 2024",
    orientation: "vertical"
  },
  {
    id: 2,
    src: "/candle_rain.jpg",
    alt: "Reflections",
    title: "Reflections",
    description: "This contemplative piece explores the theme of reflection both literally and metaphorically. The raindrops on the window create a distorted view of the world outside, while the candle's flame casts dancing shadows. The interplay of light and water creates a dreamlike quality, inviting viewers to reflect on their own inner thoughts and emotions.",
    medium: "Acrylic on Canvas",
    year: "September, 2022",
    orientation: "vertical"
  },
  {
    id: 3,
    src: "/cat_rain.jpg",
    alt: "The Cat on the Window",
    title: "The Cat on the Window",
    description: "A serene moment captured in this intimate portrait of a cat watching the rain. The contrast between the warm interior and the cool, wet world outside creates a sense of comfort and security. The detailed rendering of the raindrops and the cat's fur texture showcases the artist's attention to detail and ability to convey mood through subtle elements.",
    medium: "Oil on Canvas",
    year: "November, 2023",
    orientation: "vertical"
  },
  {
    id: 4,
    src: "/mount_rainier.jpg",
    alt: "Mount Rainier",
    title: "Mount Rainier",
    description: "This majestic landscape captures the awe-inspiring presence of Mount Rainier. The snow-capped peak rises dramatically against the sky, while the surrounding wilderness is rendered with rich detail. The painting conveys both the grandeur of nature and the peaceful solitude found in wild places, inviting viewers to contemplate their relationship with the natural world.",
    medium: "Acrylic on Canvas",
    year: "December, 2022",
    orientation: "vertical"
  },
  {
    id: 5,
    src: "/whispers_of_the_valley.jpg",
    alt: "Whispers of the Valley",
    title: "Whispers of the Valley",
    description: "A serene valley landscape where mist dances between rolling hills. The soft morning light creates a dreamlike atmosphere, while subtle details in the foreground add depth and texture. This piece captures the quiet moments when nature speaks in whispers.",
    medium: "Oil on Canvas",
    year: "January, 2025",
    orientation: "horizontal"
  },
  {
    id: 6,
    src: "/chasing_the_horizon.jpg",
    alt: "Chasing the Horizon",
    title: "Chasing the Horizon",
    description: "An expansive landscape that captures the endless pursuit of the horizon. The dramatic sky meets the earth in a symphony of colors, while the foreground elements create a sense of journey and discovery. This painting invites viewers to contemplate their own paths and aspirations.",
    medium: "Acrylic on Canvas",
    year: "February, 2025",
    orientation: "horizontal"
  },
  {
    id: 7,
    src: "/california_dreaming.jpg",
    alt: "California Dreaming",
    title: "California Dreaming",
    description: "A vibrant interpretation of California's iconic landscapes, where golden light meets coastal beauty. The painting balances the state's natural splendor with its urban energy, creating a dreamlike vision of the Golden State. Rich colors and dynamic composition evoke the spirit of California's diverse landscapes.",
    medium: "Oil on Canvas",
    year: "March, 2025",
    orientation: "horizontal"
  },
  {
    id: 8,
    src: "/enchanted_falls.jpg",
    alt: "Enchanted Falls",
    title: "Enchanted Falls",
    description: "A mystical waterfall scene that feels like stepping into a fantasy world. The cascading water creates a mesmerizing pattern, while the surrounding vegetation is rendered in rich, vibrant greens. The play of light through the water creates a magical atmosphere, suggesting a hidden realm where nature's beauty is amplified beyond the ordinary.",
    medium: "Oil on Canvas",
    year: "April, 2024",
    orientation: "horizontal"
  },
  {
    id: 9,
    src: "/gasworks.jpeg",
    alt: "Gasworks Park",
    title: "Gasworks Park",
    description: "This urban landscape reimagines the industrial structures of Gasworks Park with a dreamlike quality. The contrast between the geometric shapes of the machinery and the organic forms of the park creates a fascinating tension. The painting captures the transformation of industrial space into a place of recreation and contemplation, highlighting the intersection of human history and natural beauty.",
    medium: "Acrylic on Canvas",
    year: "May, 2023",
    orientation: "horizontal"
  },
  {
    id: 10,
    src: "/half_mountain.jpeg",
    alt: "Somewhere in the Mountains",
    title: "Somewhere in the Mountains",
    description: "A contemplative mountain scene that captures the quiet majesty of alpine landscapes. The partial view of the mountain peak creates a sense of mystery and wonder, inviting viewers to imagine what lies beyond the frame. The subtle color palette and careful attention to light and shadow convey the changing moods of mountain weather and the timeless quality of these ancient formations.",
    medium: "Oil on Canvas",
    year: "June, 2023",
    orientation: "horizontal"
  },
  {
    id: 11,
    src: "/whispering_peaks.jpg",
    alt: "Whispering Peaks",
    title: "Whispering Peaks",
    description: "This atmospheric landscape captures the ethereal quality of mountain peaks shrouded in mist. The soft, diffused light creates a dreamlike atmosphere, while the jagged peaks emerge dramatically from the clouds. The painting conveys both the physical grandeur of the mountains and the spiritual resonance they hold, suggesting the whispers of ancient stories carried on the mountain winds.",
    medium: "Acrylic on Canvas",
    year: "July, 2022",
    orientation: "horizontal"
  },
  {
    id: 12,
    src: "/sunset_paradise.jpg",
    alt: "Sunset Paradise",
    title: "Sunset Paradise",
    description: "A vibrant sunset scene that captures the magical transition between day and night. The rich oranges, pinks, and purples of the sky create a dramatic backdrop, while the silhouetted landscape adds depth and contrast. The painting conveys the fleeting beauty of these moments and the sense of peace that comes with watching the day draw to a close.",
    medium: "Oil on Canvas",
    year: "August, 2023",
    orientation: "horizontal"
  },
];

type SortOption = 'newest' | 'oldest';

// Helper function to parse date string
function parseDate(dateStr: string): Date {
  const [month, year] = dateStr.split(', ');
  const monthIndex = new Date(Date.parse(month + " 1, 2012")).getMonth();
  return new Date(parseInt(year), monthIndex, 1);
}

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [sortedArtworks, setSortedArtworks] = useState(artworks);

  // Sort artworks whenever sortBy changes
  useEffect(() => {
    const sorted = [...artworks].sort((a, b) => {
      const dateA = parseDate(a.year);
      const dateB = parseDate(b.year);
      if (sortBy === 'newest') {
        return dateB.getTime() - dateA.getTime();
      } else {
        return dateA.getTime() - dateB.getTime();
      }
    });
    setSortedArtworks(sorted);
  }, [sortBy]);

  // Simulate loading state for images
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const openImageModal = (artwork: typeof artworks[0]) => {
    setSelectedImage(artwork);
    // Add to browser history for better navigation
    window.history.pushState({ artworkId: artwork.id }, '', `#artwork-${artwork.id}`);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    // Remove from browser history
    window.history.pushState(null, '', window.location.pathname);
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      setSelectedImage(null);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <ThemeToggle />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto grid gap-8 px-4 md:px-6">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h1 className={`${typography.h1} text-slate-800 dark:text-slate-100`}>The Gallery</h1>
            <p className={`${typography.bodyLarge} text-slate-600 dark:text-slate-300`}>
              Explore a curated collection of stunning artworks that capture the essence of creativity. I&apos;ve used a mixture
              of Oils and Acrylic Paints
            </p>
            <div className="flex justify-center mt-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {sortedArtworks.map((artwork) => (
              <motion.div 
                key={artwork.id}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-4"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: artwork.id * 0.1 
                }}
              >
                <div className={`relative w-full ${artwork.orientation === 'horizontal' ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
                  <Image
                    alt={artwork.alt}
                    className="object-cover"
                    src={artwork.src}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={artwork.id <= 4}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className={`${typography.h4} text-white`}>{artwork.title}</h3>
                      <p className={`${typography.caption} text-white/80`}>{artwork.medium}, {artwork.year}</p>
                    </div>
                  </div>
                </div>
                <button 
                  className="absolute inset-0 z-10" 
                  onClick={() => openImageModal(artwork)}
                  aria-label={`View ${artwork.title}`}
                >
                  <span className="sr-only">View {artwork.title}</span>
                </button>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeImageModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
          description={selectedImage.description}
          medium={selectedImage.medium}
          year={selectedImage.year}
        />
      )}

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Art Gallery - Ritul Jain Art Portfolio",
            "description": "Explore a curated collection of stunning artworks by Ritul Jain, featuring landscapes, nature scenes, and more.",
            "url": "https://art.rituljain.com/gallery",
            "about": {
              "@type": "Person",
              "name": "Ritul Jain"
            },
            "hasPart": artworks.map(artwork => ({
              "@type": "ImageObject",
              "name": artwork.title,
              "description": artwork.description,
              "contentUrl": `https://art.rituljain.com${artwork.src}`,
              "creator": {
                "@type": "Person",
                "name": "Ritul Jain"
              },
              "datePublished": `${artwork.year}-01-01`,
              "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
            }))
          })
        }}
      />
    </>
  )
}