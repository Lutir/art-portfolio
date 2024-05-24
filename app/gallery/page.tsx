
import Link from "next/link"
import Image from 'next/image'

import '@/app/ui/globals.css';

export default function Page() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">The Gallery</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px] md:text-xl lg:text-base xl:text-xl">
            Explore a curated collection of stunning artworks that capture the essence of creativity. I&apos;ve used a mixture
            of Oils and Acrylic Paints
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Cafe terrace at Night"
              className="[grid-area:stack] object-cover w-full aspect-[3/4]"
              height={600}
              src="/cafe_terrace_at_night.jpg"
              width={800}
            />
            <div className="flex-1 [grid-area:stack] bg-black/10 group-hover:opacity-10 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">Cafe Terrace at Night</h3>
            </div>
          </div>

          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Artwork"
              className="[grid-area:stack] object-cover w-full aspect-[3/4]"
              height={800}
              src="/candle_rain.jpg"
              width={600}
            />
            <div className="flex-1 [grid-area:stack] bg-black/10 group-hover:opacity-10 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">Reflections</h3>
            </div>
          </div>

          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/cat_rain.jpg">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Artwork"
              className="[grid-area:stack] object-cover w-full aspect-[3/4]"
              height={800}
              src="/cat_rain.jpg"
              width={800}
            />
            <div className="flex-1 [grid-area:stack] bg-black/10 group-hover:opacity-10 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">The Cat on the Window</h3>
            </div>
          </div>

          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Artwork"
              className="[grid-area:stack] object-cover w-full aspect-[3/4]"
              height={800}
              src="/mount_rainier.jpg"
              width={600}
            />
            <div className="flex-1 [grid-area:stack] bg-black/10 group-hover:opacity-10 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">Mount Rainier</h3>
            </div>
          </div>

          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Artwork"
              className="[grid-area:stack] object-cover w-full aspect-[4/3]"
              height={600}
              src="/gasworks.jpeg"
              width={800}
            />
            <div className="flex-1 [grid-area:stack] bg-black/10 group-hover:opacity-10 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">Gasworks Park</h3>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Artwork"
              className="[grid-area:stack] object-cover w-full aspect-[4/3]"
              height={600}
              src="/half_mountain.jpeg"
              width={800}
            />
            <div className="flex-1 [grid-area:stack] bg-black/10 group-hover:opacity-10 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">Somewhere in the Mountains</h3>
            </div>
          </div>

          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Artwork"
              className="[grid-area:stack] object-cover w-full aspect-[4/3]"
              height={800}
              src="/whispering_peaks.jpg"
              width={600}
            />
            <div className="flex-1 [grid-area:stack] bg-black/10 group-hover:opacity-10 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">Whispering Peaks</h3>
            </div>
          </div>


          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Artwork"
              className="[grid-area:stack] object-cover w-full aspect-[4/3]"
              height={600}
              src="/sunset_paradise.jpg"
              width={800}
            />
            <div className="flex-1 [grid-area:stack] bg-black/10 group-hover:opacity-10 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold tracking-tight">Sunset Paradise</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}