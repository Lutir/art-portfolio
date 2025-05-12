"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { typography } from '../ui/typography';
import ThemeToggle from '../components/ThemeToggle';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 dark:bg-slate-900">
      <ThemeToggle />
      
      <motion.div 
        className="w-full md:w-1/2 h-screen relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 p-4 md:p-8">
          <Image
            src="/ritul-jain-about-me.jpg"
            alt="Ritul Jain"
            fill
            className="object-contain rounded-lg shadow-lg"
            priority
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-slate-50 dark:bg-slate-900"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-xl">
          <h1 className={`${typography.h1} mb-8 text-slate-800 dark:text-slate-100`}>About Me</h1>
          
          <div className={`${typography.bodyLarge} space-y-6 text-slate-700 dark:text-slate-200`}>
            <p className="font-medium">
              Hello! I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Ritul.</span>
            </p>
            
            <p>
            I live in Seattle, WA, and I’m someone who’s always chasing creativity in different forms. I started painting a few years ago, and after moving to Washington, it slowly became a bigger part of my life. The landscapes here—moody skies, quiet forests, vibrant parks—just pulled me in.
            </p>
            
            <p>
            I like to travel a lot, and those little adventures often sneak their way into what I paint. Sometimes it’s a mountain view, sometimes just a cat staring out the window while it rains.
            </p>
            
            <p>
            Outside of painting, I work in tech, play the piano now and then, and keep a blog where I share thoughts whenever they show up.            </p>
            
            <p className="italic text-slate-600 dark:text-slate-300">
              Through my work, I hope to inspire others to see the beauty in both the grand landscapes and the subtle moments of everyday life.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 