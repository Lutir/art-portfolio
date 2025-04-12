"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { typography } from "../ui/typography";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-serif text-slate-800 dark:text-slate-100">Ritul Jain</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                isActive("/") ? "text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-300"
              }`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                isActive("/gallery") ? "text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-300"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                isActive("/about") ? "text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-300"
              }`}
            >
              About
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-4 bg-white">
          <Link
            href="/"
            className={`block rounded-md px-3 py-2 ${typography.nav} ${
              pathname === "/"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className={`block rounded-md px-3 py-2 ${typography.nav} ${
              pathname === "/gallery"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className={`block rounded-md px-3 py-2 ${typography.nav} ${
              pathname === "/about"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            About Me
          </Link>
        </div>
      </div>
    </header>
  );
} 