export type Artwork = {
  id: number;
  slug: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  medium: "Oil" | "Acrylic" | "Acrylic/Oil";
  year: string;
  orientation: "horizontal" | "vertical";
  categories: string[];
  width: number;
  height: number;
};

export const artworks: Artwork[] = [
  {
    id: 1,
    src: "/cafe_terrace_at_night.jpg",
    width: 2823,
    height: 3624,
    alt: "Cafe terrace at Night",
    title: "Cafe Terrace at Night",
    slug: "cafe-terrace-at-night",
    description:
      "Inspired by Van Gogh's iconic painting, this piece captures the vibrant nightlife of a café terrace. Funny story about this one is that this was my 3rd attempt at painting this. The first two attempts were so dif",
    medium: "Acrylic/Oil",
    year: "June, 2024",
    orientation: "vertical",
    categories: ["urban", "nature"],
  },
  {
    id: 2,
    src: "/candle_rain.jpg",
    width: 3024,
    height: 4032,
    alt: "Reflections",
    title: "Reflections",
    slug: "reflections",
    description:
      "This contemplative piece explores the theme of reflection both literally and metaphorically. The raindrops on the window create a distorted view of the world outside, while the candle's flame casts dancing shadows. The interplay of light and water creates a dreamlike quality, inviting viewers to reflect on their own inner thoughts and emotions.",
    medium: "Acrylic",
    year: "September, 2022",
    orientation: "vertical",
    categories: ["urban", "water"],
  },
  {
    id: 3,
    src: "/cat_rain.jpg",
    width: 3024,
    height: 4032,
    alt: "The Cat on the Window",
    title: "The Cat on the Window",
    slug: "the-cat-on-the-window",
    description:
      "A serene moment captured in this intimate portrait of a cat watching the rain. The contrast between the warm interior and the cool, wet world outside creates a sense of comfort and security. The detailed rendering of the raindrops and the cat's fur texture showcases the artist's attention to detail and ability to convey mood through subtle elements.",
    medium: "Acrylic",
    year: "November, 2023",
    orientation: "vertical",
    categories: ["urban", "water"],
  },
  {
    id: 4,
    src: "/mount_rainier.jpg",
    width: 3024,
    height: 4032,
    alt: "Mount Rainier",
    title: "Mount Rainier",
    slug: "mount-rainier",
    description:
      "This majestic landscape captures the awe-inspiring presence of Mount Rainier. The snow-capped peak rises dramatically against the sky, while the surrounding wilderness is rendered with rich detail. The painting conveys both the grandeur of nature and the peaceful solitude found in wild places, inviting viewers to contemplate their relationship with the natural world.",
    medium: "Acrylic",
    year: "December, 2022",
    orientation: "vertical",
    categories: ["landscape", "nature"],
  },
  {
    id: 5,
    src: "/whispers_of_the_valley.jpg",
    width: 5022,
    height: 3766,
    alt: "Whispers of the Valley",
    title: "Whispers of the Valley",
    slug: "whispers-of-the-valley",
    description:
      "A serene valley landscape where mist dances between rolling hills. The soft morning light creates a dreamlike atmosphere, while subtle details in the foreground add depth and texture. This piece captures the quiet moments when nature speaks in whispers.",
    medium: "Oil",
    year: "January, 2025",
    orientation: "horizontal",
    categories: ["landscape", "nature"],
  },
  {
    id: 6,
    src: "/chasing_the_horizon.jpg",
    width: 4946,
    height: 3710,
    alt: "Chasing the Horizon",
    title: "Chasing the Horizon",
    slug: "chasing-the-horizon",
    description:
      "An expansive landscape that captures the endless pursuit of the horizon. The dramatic sky meets the earth in a symphony of colors, while the foreground elements create a sense of journey and discovery. I was driving back from the mountains and this was the view that greeted me. I love the colors and the vibe of this one.",
    medium: "Acrylic",
    year: "February, 2025",
    orientation: "horizontal",
    categories: ["landscape", "nature"],
  },
  {
    id: 7,
    src: "/california_dreaming.jpg",
    width: 3494,
    height: 2620,
    alt: "California Dreaming",
    title: "California Dreaming",
    slug: "california-dreaming",
    description:
      "A vibrant interpretation of California's iconic landscapes, where golden light meets coastal beauty. I think this is how i thought how California would be when i was a kid and saw the movies. I love the colors and the vibe of this one.",
    medium: "Acrylic",
    year: "March, 2025",
    orientation: "horizontal",
    categories: ["landscape", "nature", "urban"],
  },
  {
    id: 8,
    src: "/enchanted_falls.jpg",
    width: 4032,
    height: 3024,
    alt: "Enchanted Falls",
    title: "Enchanted Falls",
    slug: "enchanted-falls",
    description:
      "A mystical waterfall scene that feels like stepping into a fantasy world. The cascading water creates a mesmerizing pattern, while the surrounding vegetation is rendered in rich, vibrant greens. The play of light through the water creates a magical atmosphere, suggesting a hidden realm where nature's beauty is amplified beyond the ordinary.",
    medium: "Oil",
    year: "April, 2024",
    orientation: "horizontal",
    categories: ["landscape", "nature", "water"],
  },
  {
    id: 9,
    src: "/gasworks.jpeg",
    width: 4032,
    height: 3024,
    alt: "Gasworks Park",
    title: "Gasworks Park",
    slug: "gasworks-park",
    description:
      "This urban landscape reimagines the industrial structures of Gasworks Park with a dreamlike quality. The contrast between the geometric shapes of the machinery and the organic forms of the park creates a fascinating tension. The painting captures the transformation of industrial space into a place of recreation and contemplation, highlighting the intersection of human history and natural beauty.",
    medium: "Acrylic",
    year: "May, 2023",
    orientation: "horizontal",
    categories: ["urban", "landscape"],
  },
  {
    id: 10,
    src: "/half_mountain.jpeg",
    width: 4032,
    height: 3024,
    alt: "Somewhere in the Mountains",
    title: "Somewhere in the Mountains",
    slug: "somewhere-in-the-mountains",
    description:
      "A contemplative mountain scene that captures the quiet majesty of alpine landscapes. The partial view of the mountain peak creates a sense of mystery and wonder, inviting viewers to imagine what lies beyond the frame. The subtle color palette and careful attention to light and shadow convey the changing moods of mountain weather and the timeless quality of these ancient formations.",
    medium: "Oil",
    year: "June, 2023",
    orientation: "horizontal",
    categories: ["landscape", "nature"],
  },
  {
    id: 11,
    src: "/whispering_peaks.jpg",
    width: 3857,
    height: 2858,
    alt: "Whispering Peaks",
    title: "Whispering Peaks",
    slug: "whispering-peaks",
    description:
      "This atmospheric landscape captures the ethereal quality of mountain peaks shrouded in mist. The soft, diffused light creates a dreamlike atmosphere, while the jagged peaks emerge dramatically from the clouds. The painting conveys both the physical grandeur of the mountains and the spiritual resonance they hold, suggesting the whispers of ancient stories carried on the mountain winds.",
    medium: "Acrylic",
    year: "July, 2022",
    orientation: "horizontal",
    categories: ["landscape", "nature"],
  },
  {
    id: 12,
    src: "/sunset_paradise.jpg",
    width: 4032,
    height: 3024,
    alt: "Sunset Paradise",
    title: "Sunset Paradise",
    slug: "sunset-paradise",
    description:
      "A vibrant sunset scene that captures the magical transition between day and night. The rich oranges, pinks, and purples of the sky create a dramatic backdrop, while the silhouetted landscape adds depth and contrast. The painting conveys the fleeting beauty of these moments and the sense of peace that comes with watching the day draw to a close.",
    medium: "Oil",
    year: "August, 2023",
    orientation: "horizontal",
    categories: ["landscape", "nature"],
  },
  {
    id: 13,
    src: "/the_watson.jpg",
    width: 4281,
    height: 5708,
    alt: "Cat posing for a picture",
    title: "The Watson",
    slug: "the-watson",
    description:
      "Meet Watson — my friends cat! We went to a cat painting class and, of course, ended up painting the legend himself. Honestly, Watson is a poser haha — I love the way he poses for the camera! The colors, the vibe, the whiskers… I’m obsessed! This one was such a purr-fect experience!",
    medium: "Acrylic",
    year: "May, 2025",
    orientation: "vertical",
    categories: ["urban", "cat"],
  },
  {
    id: 14,
    src: "/the_cat_on_the_ladder.jpg",
    width: 4272,
    height: 5712,
    alt: "Cat on a ladder",
    title: "The Cat on the Ladder",
    slug: "the-cat-on-the-ladder",
    description:
      "Just a random cat on a ladder. I went to a work event where we were painting cats and I ended up painting this one. It's a bit incomplete but it did turn out pretty good.",
    medium: "Acrylic",
    year: "June, 2025",
    orientation: "vertical",
    categories: ["urban", "cat"],
  },
  {
    id: 16,
    src: "/the_house_in_the_valley.jpg",
    width: 5712,
    height: 4284,
    alt: "The house in the valley",
    title: "The House in the Valley",
    slug: "the-house-in-the-valley",
    description:
      "This one's one of my favorites. It was late at night, and for some reason I could not sleep. I ended up painting this one. I had the scene in my head for a while, and I'm glad I finally got to paint it. The house turned out to be really good, and I'm happy with the colors and the vibe of this one.",
    medium: "Acrylic",
    year: "July, 2025",
    orientation: "horizontal",
    categories: ["landscape", "nature"],
  },
  {
    id: 15,
    src: "/wicked_waves.jpg",
    width: 5712,
    height: 4284,
    alt: "Wicked Waves",
    title: "Wicked Waves",
    slug: "wicked-waves",
    description:
      "So I went for this Bob Ross paint night at work where we were painting this one. I was a bit nervous but I'm glad I got to paint it. The waves are uhhh... tricky to paint. Still a long way to go with seascapes but its a good start. Still need to finish up the waves, but thats for another day!",
    medium: "Acrylic",
    year: "July, 2025",
    orientation: "horizontal",
    categories: ["seascape", "water"],
  },
];

export const orderedArtworks = [...artworks].sort(
  (a, b) =>
    Date.parse(b.year.replace(",", " 1,")) -
      Date.parse(a.year.replace(",", " 1,")) || b.id - a.id,
);
export function getArtwork(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}
