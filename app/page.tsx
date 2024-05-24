import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row h-[100vh] w-full">
      <div className="w-full md:w-1/2 overflow-hidden">
        <Image
          alt="Rob"
          className="h-full w-full object-cover object-center"
          height={1200}
          src="/ritul-jain.jpg"
          style={{
            aspectRatio: "800/1200",
            objectFit: "cover",
          }}
          width={800}
        />
      </div>
      <div className="flex w-full md:w-1/2 flex-col items-start justify-center gap-6 py-6 md:py-0 px-12 md:px-16 lg:px-20">
        <div className="space-y-4">
          <h1 className="font-bold tracking-tight text-4xl lg:text-5xl md:text-6xl">Welcome to Ritul&apos;s Art Gallery</h1>
          <p className="max-w-md text-lg text-gray-500 dark:text-gray-400">
            Explore the captivating world of Ritul&apos;s art, where creativity and passion come alive. Discover his latest
            masterpieces and immerse yourself in the beauty of his work.
          </p>
        </div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mx-auto md:mx-0"
          href="/gallery"
        >
          Explore the Gallery
        </Link>
      </div>
    </section>
  )
}