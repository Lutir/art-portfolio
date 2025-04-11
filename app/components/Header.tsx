"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { typography } from "../ui/typography";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className={`${typography.brand} text-gray-900`}>
              Ritul Jain
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${typography.nav} transition-colors hover:text-gray-900 ${
                pathname === "/" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`${typography.nav} transition-colors hover:text-gray-900 ${
                pathname === "/gallery" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`${typography.nav} transition-colors hover:text-gray-900 ${
                pathname === "/about" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              About Me
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