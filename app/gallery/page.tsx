"use client";

import Link from "next/link"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Metadata } from 'next'
import Masonry from 'react-masonry-css'
import ThemeToggle from '../components/ThemeToggle';
import { Filter } from 'lucide-react';

import '@/app/globals.css';
import ImageModal from '../components/ImageModal';
import { typography } from '../ui/typography';

type Category = 'landscape' | 'nature' | 'urban' | 'water';
type Medium = 'Oil' | 'Acrylic' | '';

// Artwork data with descriptions
const artworks = [
  {
    id: 1,
    src: "/cafe_terrace_at_night.jpg",
    alt: "Cafe terrace at Night",
    title: "Cafe Terrace at Night",
    description: "Inspired by Van Gogh's iconic painting, this piece captures the vibrant nightlife of a café terrace. The warm yellows and deep blues create a striking contrast, while the swirling patterns in the sky evoke a sense of movement and emotion. The composition draws the viewer into the scene, making them feel as if they're standing right there, experiencing the magical atmosphere of the evening.",
    medium: "Oil" as Medium,
    year: "June, 2024",
    orientation: "vertical",
    categories: ['urban', 'nature'] as Category[]
  },
  {
    id: 2,
    src: "/candle_rain.jpg",
    alt: "Reflections",
    title: "Reflections",
    description: "This contemplative piece explores the theme of reflection both literally and metaphorically. The raindrops on the window create a distorted view of the world outside, while the candle's flame casts dancing shadows. The interplay of light and water creates a dreamlike quality, inviting viewers to reflect on their own inner thoughts and emotions.",
    medium: "Acrylic" as Medium,
    year: "September, 2022",
    orientation: "vertical",
    categories: ['urban', 'water'] as Category[]
  },
  {
    id: 3,
    src: "/cat_rain.jpg",
    alt: "The Cat on the Window",
    title: "The Cat on the Window",
    description: "A serene moment captured in this intimate portrait of a cat watching the rain. The contrast between the warm interior and the cool, wet world outside creates a sense of comfort and security. The detailed rendering of the raindrops and the cat's fur texture showcases the artist's attention to detail and ability to convey mood through subtle elements.",
    medium: "Oil" as Medium,
    year: "November, 2023",
    orientation: "vertical",
    categories: ['urban', 'water'] as Category[]
  },
  {
    id: 4,
    src: "/mount_rainier.jpg",
    alt: "Mount Rainier",
    title: "Mount Rainier",
    description: "This majestic landscape captures the awe-inspiring presence of Mount Rainier. The snow-capped peak rises dramatically against the sky, while the surrounding wilderness is rendered with rich detail. The painting conveys both the grandeur of nature and the peaceful solitude found in wild places, inviting viewers to contemplate their relationship with the natural world.",
    medium: "Acrylic" as Medium,
    year: "December, 2022",
    orientation: "vertical",
    categories: ['landscape', 'nature'] as Category[]
  },
  {
    id: 5,
    src: "/whispers_of_the_valley.jpg",
    alt: "Whispers of the Valley",
    title: "Whispers of the Valley",
    description: "A serene valley landscape where mist dances between rolling hills. The soft morning light creates a dreamlike atmosphere, while subtle details in the foreground add depth and texture. This piece captures the quiet moments when nature speaks in whispers.",
    medium: "Oil" as Medium,
    year: "January, 2025",
    orientation: "horizontal",
    categories: ['landscape', 'nature'] as Category[]
  },
  {
    id: 6,
    src: "/chasing_the_horizon.jpg",
    alt: "Chasing the Horizon",
    title: "Chasing the Horizon",
    description: "An expansive landscape that captures the endless pursuit of the horizon. The dramatic sky meets the earth in a symphony of colors, while the foreground elements create a sense of journey and discovery. This painting invites viewers to contemplate their own paths and aspirations.",
    medium: "Acrylic" as Medium,
    year: "February, 2025",
    orientation: "horizontal",
    categories: ['landscape', 'nature'] as Category[]
  },
  {
    id: 7,
    src: "/california_dreaming.jpg",
    alt: "California Dreaming",
    title: "California Dreaming",
    description: "A vibrant interpretation of California's iconic landscapes, where golden light meets coastal beauty. The painting balances the state's natural splendor with its urban energy, creating a dreamlike vision of the Golden State. Rich colors and dynamic composition evoke the spirit of California's diverse landscapes.",
    medium: "Oil" as Medium,
    year: "March, 2025",
    orientation: "horizontal",
    categories: ['landscape', 'nature', 'urban'] as Category[]
  },
  {
    id: 8,
    src: "/enchanted_falls.jpg",
    alt: "Enchanted Falls",
    title: "Enchanted Falls",
    description: "A mystical waterfall scene that feels like stepping into a fantasy world. The cascading water creates a mesmerizing pattern, while the surrounding vegetation is rendered in rich, vibrant greens. The play of light through the water creates a magical atmosphere, suggesting a hidden realm where nature's beauty is amplified beyond the ordinary.",
    medium: "Oil" as Medium,
    year: "April, 2024",
    orientation: "horizontal",
    categories: ['landscape', 'nature', 'water'] as Category[]
  },
  {
    id: 9,
    src: "/gasworks.jpeg",
    alt: "Gasworks Park",
    title: "Gasworks Park",
    description: "This urban landscape reimagines the industrial structures of Gasworks Park with a dreamlike quality. The contrast between the geometric shapes of the machinery and the organic forms of the park creates a fascinating tension. The painting captures the transformation of industrial space into a place of recreation and contemplation, highlighting the intersection of human history and natural beauty.",
    medium: "Acrylic" as Medium,
    year: "May, 2023",
    orientation: "horizontal",
    categories: ['urban', 'landscape'] as Category[]
  },
  {
    id: 10,
    src: "/half_mountain.jpeg",
    alt: "Somewhere in the Mountains",
    title: "Somewhere in the Mountains",
    description: "A contemplative mountain scene that captures the quiet majesty of alpine landscapes. The partial view of the mountain peak creates a sense of mystery and wonder, inviting viewers to imagine what lies beyond the frame. The subtle color palette and careful attention to light and shadow convey the changing moods of mountain weather and the timeless quality of these ancient formations.",
    medium: "Oil" as Medium,
    year: "June, 2023",
    orientation: "horizontal",
    categories: ['landscape', 'nature'] as Category[]
  },
  {
    id: 11,
    src: "/whispering_peaks.jpg",
    alt: "Whispering Peaks",
    title: "Whispering Peaks",
    description: "This atmospheric landscape captures the ethereal quality of mountain peaks shrouded in mist. The soft, diffused light creates a dreamlike atmosphere, while the jagged peaks emerge dramatically from the clouds. The painting conveys both the physical grandeur of the mountains and the spiritual resonance they hold, suggesting the whispers of ancient stories carried on the mountain winds.",
    medium: "Acrylic" as Medium,
    year: "July, 2022",
    orientation: "horizontal",
    categories: ['landscape', 'nature'] as Category[]
  },
  {
    id: 12,
    src: "/sunset_paradise.jpg",
    alt: "Sunset Paradise",
    title: "Sunset Paradise",
    description: "A vibrant sunset scene that captures the magical transition between day and night. The rich oranges, pinks, and purples of the sky create a dramatic backdrop, while the silhouetted landscape adds depth and contrast. The painting conveys the fleeting beauty of these moments and the sense of peace that comes with watching the day draw to a close.",
    medium: "Oil" as Medium,
    year: "August, 2023",
    orientation: "horizontal",
    categories: ['landscape', 'nature'] as Category[]
  },
];

type SortOption = 'newest' | 'oldest';

// Helper function to parse date string
function parseDate(dateStr: string): Date {
  const [month, year] = dateStr.split(', ');
  const monthIndex = new Date(Date.parse(month + " 1, 2012")).getMonth();
  return new Date(parseInt(year), monthIndex, 1);
}

const allCategories: Category[] = ['landscape', 'nature', 'urban', 'water'];
const allMediums: Medium[] = ['Oil', 'Acrylic'];

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedMedium, setSelectedMedium] = useState<Medium>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);

  // Get unique years from artworks
  const years = Array.from(new Set(artworks.map(art => art.year.split(', ')[1]))).sort().reverse();

  // Filter and sort artworks
  useEffect(() => {
    let filtered = [...artworks];

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(art => 
        selectedCategories.some(cat => art.categories.includes(cat))
      );
    }

    // Apply medium filter
    if (selectedMedium) {
      filtered = filtered.filter(art => art.medium === selectedMedium);
    }

    // Apply year filter
    if (selectedYear) {
      filtered = filtered.filter(art => art.year.includes(selectedYear));
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const dateA = parseDate(a.year);
      const dateB = parseDate(b.year);
      return sortBy === 'newest' 
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

    setFilteredArtworks(filtered);
  }, [selectedCategories, selectedMedium, selectedYear, sortBy]);

  // Simulate loading state for images
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const openImageModal = (artwork: typeof artworks[0]) => {
    setSelectedImage(artwork);
    window.history.pushState({ artworkId: artwork.id }, '', `#artwork-${artwork.id}`);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    window.history.pushState(null, '', window.location.pathname);
  };

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

  const toggleCategory = (category: Category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
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
          </div>

          {/* Filter UI */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                <span className="font-medium">Filters:</span>
              </div>
              
              {/* Category filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from(allCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      selectedCategories.includes(category)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Medium filter */}
              <select
                value={selectedMedium}
                onChange={(e) => setSelectedMedium(e.target.value as Medium)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <option value="">All Mediums</option>
                <option value="Oil">Oil</option>
                <option value="Acrylic">Acrylic</option>
              </select>

              {/* Year filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              {/* Clear filters button */}
              {(selectedCategories.length > 0 || selectedMedium || selectedYear) && (
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedMedium('');
                    setSelectedYear('');
                  }}
                  className="rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Active filters summary */}
            {(selectedCategories.length > 0 || selectedMedium || selectedYear) && (
              <div className="text-sm text-slate-600 dark:text-slate-400 text-center">
                Showing: {filteredArtworks.length} artwork{filteredArtworks.length !== 1 ? 's' : ''} 
                {selectedCategories.length > 0 && ` in ${selectedCategories.join(', ')}`}
                {selectedMedium && ` using ${selectedMedium}`}
                {selectedYear && ` from ${selectedYear}`}
              </div>
            )}
          </div>

          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {filteredArtworks.map((artwork) => (
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
                      <div className="flex flex-wrap gap-1 mt-2">
                        {artwork.categories.map(category => (
                          <span
                            key={category}
                            className="text-xs px-2 py-1 rounded-full bg-white/20 text-white"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
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

          {filteredArtworks.length === 0 && (
            <div className="text-center py-12">
              <p className={`${typography.body} text-slate-600 dark:text-slate-400`}>
                No artworks found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>

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
  );
}