"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { typography } from "../ui/typography";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid gap-8 px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className={typography.h1}>About Me</h1>
              <p className={typography.bodyLarge}>
                Welcome to my artistic journey. I'm Ritul Jain, a passionate artist based in Seattle, Washington.
              </p>
              <p className={typography.body}>
                My work is inspired by the natural beauty of the Pacific Northwest, urban landscapes, and the interplay of light and shadow in everyday scenes. I primarily work with oils and acrylics, exploring different techniques to capture the essence of my subjects.
              </p>
              <p className={typography.body}>
                Each piece is a reflection of my personal connection to the world around me, an attempt to convey the emotions and stories that landscapes and cityscapes hold. Through my art, I hope to invite viewers to see the world through a different lens and find beauty in the ordinary.
              </p>
              <p className={typography.body}>
                When I'm not painting, I enjoy hiking in the mountains, photography, and exploring new artistic techniques. These experiences directly influence my work and help me grow as an artist.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="mailto:contact@rituljain.com"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  Contact Me
                </a>
                <a
                  href="https://instagram.com/rituljainart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/artist-portrait.jpg"
                alt="Ritul Jain"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 