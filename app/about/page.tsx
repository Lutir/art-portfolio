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
              Hello! I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Ritul Jain</span>, a passionate artist based in Seattle, Washington.
            </p>
            
            <p>
              I specialize in oil and acrylic paintings that capture the essence of both natural and urban environments. My style blends realism and impressionism, focusing on the mood and atmosphere of a scene.
            </p>
            
            <p>
              Each piece reflects my personal experiences and observations. Whether it&apos;s the serene beauty of Mount Rainier, the vibrant energy of Gasworks Park, or the intimate moments of a cat watching the rain, I strive to convey the emotions and stories that these scenes evoke.
            </p>
            
            <p>
              When I&apos;m not painting, I explore the beautiful landscapes of the Pacific Northwest, finding inspiration in its diverse environments.
            </p>
            
            <p className="italic text-slate-600 dark:text-slate-300">
              Through my work, I hope to inspire others to see the beauty in both the grand landscapes and the subtle moments of everyday life.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 