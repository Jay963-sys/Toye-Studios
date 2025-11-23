"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Photo = {
  title: string;
  year: string;
  category: string;
  src: string;
  description?: string;
  location?: string;
};

const PHOTOS: Photo[] = [
  {
    title: "Mood Light",
    year: "2023",
    category: "Portraits",
    src: "/brand/87.png",
    description: "Capturing emotion through dramatic lighting and shadow play",
    location: "Studio",
  },
  {
    title: "Happy Hour",
    year: "2023",
    category: "Outdoor",
    src: "/brand/w.png",
    description: "Woman's perfect moment captured at sunset",
    location: "Coastal",
  },
  {
    title: "Urban Shadows",
    year: "2022",
    category: "Events",
    src: "/brand/47.png",
    description: "Photography meets event documentation",
    location: "Downtown",
  },
  {
    title: "Golden Hour",
    year: "2023",
    category: "Outdoor",
    src: "/brand/12.png",
    description: "Nature's perfect lighting captured at sunset",
    location: "Coastal",
  },
  {
    title: "Living Colors",
    year: "2021",
    category: "Outdoor",
    src: "/brand/54.png",
    description: "Perfect moment captured at a waterfront",
    location: "Coastal",
  },
  {
    title: "Studio Portrait",
    year: "2023",
    category: "Portraits",
    src: "/brand/83.png",
    description: "Classic portraiture with contemporary edge",
    location: "Studio",
  },
  {
    title: "Urban Show",
    year: "2022",
    category: "Events",
    src: "/brand/35.png",
    description: "Artistic photography meets event documentation",
    location: "Downtown",
  },

  {
    title: "Live Talk",
    year: "2024",
    category: "Events",
    src: "/brand/33.png",
    description: "Art photography meets event documentation",
    location: "Downtown",
  },
  {
    title: "Soul",
    year: "2025",
    category: "Portraits",
    src: "/brand/23.png",
    description: "Raw emotion and authentic human connection",
    location: "Studio",
  },
];

const CATEGORIES = ["All", "Portraits", "Events", "Outdoor"];

export default function PhotographyPage() {
  const [filter, setFilter] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredPhotos =
    filter === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === filter);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
              Visual Stories
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Photography
          </h1>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
            Capturing moments that matter through the lens of creativity.
            <br className="hidden sm:block" />
            From intimate portraits to dynamic events, each frame tells its own
            unique story.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="flex justify-center gap-8 mt-10 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{PHOTOS.length}</div>
            <div className="text-gray-500 text-xs uppercase tracking-wider">
              Photos
            </div>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {CATEGORIES.length - 1}
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-wider">
              Categories
            </div>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {new Set(PHOTOS.map((p) => p.year)).size}
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-wider">
              Years
            </div>
          </div>
        </motion.div>
      </div>

      {/* Category Filters */}
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === c
                  ? "text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-400 hover:text-white border border-black/10 hover:border-black/30"
              }`}
            >
              {filter === c && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-gray-500/80 to-gray-700/80 rounded-full"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        className="text-center text-gray-500 text-sm mb-8"
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {filteredPhotos.length}{" "}
        {filteredPhotos.length === 1 ? "photo" : "photos"} in{" "}
        {filter === "All" ? "all categories" : filter}
      </motion.div>

      {/* Mobile Gallery */}
      <div className="sm:hidden">
        <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4">
          {filteredPhotos.map((photo, i) => (
            <motion.div
              key={photo.src + i}
              className="relative shrink-0 w-72 h-96 rounded-2xl overflow-hidden group snap-center cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="300px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="inline-block px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-gray-300 mb-2">
                  {photo.location}
                </div>
                <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                <p className="text-sm text-gray-300 mb-2">
                  {photo.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    {photo.category}
                  </span>
                  <span>·</span>
                  <span>{photo.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Masonry-style Grid */}
      <motion.div className="hidden sm:block max-w-7xl mx-auto" layout>
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredPhotos.map((photo, i) => {
              // Create varied heights for masonry effect
              const heights = ["aspect-square", "aspect-[3/4]", "aspect-[4/3]"];
              const heightClass = heights[i % 3];

              return (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br from-zinc-800 to-zinc-900 ${heightClass}`}
                  onClick={() => setSelectedPhoto(photo)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Image */}
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end z-20">
                    {/* Location badge */}
                    <div
                      className={`mb-2 transition-all duration-300 ${
                        hoveredIndex === i
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                    >
                      <span className="inline-block px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-gray-300">
                        📍 {photo.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-semibold mb-2 transform group-hover:scale-105 transition-transform">
                      {photo.title}
                    </h3>

                    {/* Description - shows on hover */}
                    <p
                      className={`text-sm text-gray-300 mb-3 transition-all duration-300 ${
                        hoveredIndex === i
                          ? "opacity-100 max-h-20"
                          : "opacity-0 max-h-0"
                      }`}
                    >
                      {photo.description}
                    </p>

                    {/* Category and year */}
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                        {photo.category}
                      </span>
                      <span>·</span>
                      <span>{photo.year}</span>
                    </div>
                  </div>

                  {/* Zoom icon indicator */}
                  <div
                    className={`absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === i
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group"
              onClick={() => setSelectedPhoto(null)}
            >
              <svg
                className="w-6 h-6 text-white group-hover:rotate-90 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-5 gap-0 bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                {/* Image - takes 3 columns */}
                <div className="md:col-span-3 relative aspect-[4/3] md:aspect-auto md:min-h-[600px]">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>

                {/* Details - takes 2 columns */}
                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-black">
                  {/* Location badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                      📍 {selectedPhoto.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-serif mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {selectedPhoto.title}
                  </h2>

                  {/* Meta info */}
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-6 pb-6 border-b border-white/10">
                    <span className="px-3 py-1 rounded-full bg-white/10">
                      {selectedPhoto.category}
                    </span>
                    <span>·</span>
                    <span>{selectedPhoto.year}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedPhoto.description}
                  </p>

                  {/* Navigation hint */}
                  <div className="text-sm text-gray-500 italic">
                    Click outside or press ESC to close
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
