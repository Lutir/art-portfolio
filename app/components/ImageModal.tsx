"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { typography } from '../ui/typography';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  medium: string;
  year: string;
}

const LoadingAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <svg className="w-24 h-24" viewBox="0 0 100 100">
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        className="text-indigo-500"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="20"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        className="text-indigo-300"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.5
        }}
      />
    </svg>
  </div>
);

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  description,
  medium,
  year,
}: ImageModalProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setImageLoading(true);
      setImageError(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-screen h-screen bg-white dark:bg-slate-900 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="relative h-[50vh] md:h-full bg-black">
                {imageLoading && !imageError && <LoadingAnimation />}
                {!imageError ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-contain transition-opacity duration-300"
                      style={{ opacity: imageLoading ? 0 : 1 }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoadingComplete={() => setImageLoading(false)}
                      onError={handleImageError}
                      draggable={false}
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <p>Failed to load image</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 overflow-y-auto">
                <div className="max-w-xl mx-auto">
                  <h2 className={`${typography.h2} text-slate-800 dark:text-slate-100 mb-3`}>
                    {title}
                  </h2>
                  <p className={`${typography.caption} text-slate-600 dark:text-slate-400 mb-8 italic`}>
                    {medium}, {year}
                  </p>
                  <div className={`${typography.body} text-slate-700 dark:text-slate-300 leading-relaxed`}>
                    <p className="text-lg">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 