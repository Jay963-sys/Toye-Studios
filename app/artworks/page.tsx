"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Artwork = {
  title: string;
  image: string;
  medium: string;
  year: string;
  description?: string;
};

const ARTWORKS: Artwork[] = [
  {
    title: "Ethereal Portrait",
    image: "/brand/c.png",
    medium: "Pencil",
    year: "2023",
    description: "A delicate exploration of light and shadow",
  },
  {
    title: "Surreal Sketch",
    image: "/brand/500.png",
    medium: "Ink",
    year: "2022",
    description: "landscapes captured in flowing lines",
  },
  {
    title: "Digital Sketch",
    image: "/brand/4.png",
    medium: "Digital",
    year: "2022",
    description: "Digital light captured in flowing lines",
  },
  {
    title: "Mood Light",
    image: "/brand/d.png",
    medium: "Pencil",
    year: "2023",
    description: "Artistry meets emotional expression",
  },
  {
    title: "Light Sketch",
    image: "/brand/700.png",
    medium: "Ink",
    year: "2022",
    description: "Light captured in flowing lines",
  },
  {
    title: "Digital Art",
    image: "/brand/12.png",
    medium: "Digital",
    year: "2022",
    description: "Digital light captured in flowing lines",
  },
  {
    title: "Charcoal Study",
    image: "/brand/84.png",
    medium: "Charcoal",
    year: "2022",
    description: "Raw texture and dramatic contrasts",
  },
  {
    title: "Digital Lines",
    image: "/brand/7.png",
    medium: "Digital",
    year: "2022",
    description: "Digital light captured in flowing lines",
  },
  {
    title: "Divine Sketch",
    image: "/brand/900.png",
    medium: "Ink",
    year: "2022",
    description: "Emotions captured in flowing lines",
  },
  {
    title: "Horizon Portrait",
    image: "/brand/49.png",
    medium: "Watercolor",
    year: "2023",
    description: "Warm hues blend into dreamy compositions",
  },
  {
    title: "Mood Dark",
    image: "/brand/a.png",
    medium: "Pencil",
    year: "2021",
    description: "Artistry meets emotional expression",
  },
  {
    title: "Landscape Portrait",
    image: "/brand/78.png",
    medium: "Watercolor",
    year: "2023",
    description: "Green hues blend into dreamy compositions",
  },
  {
    title: "Charcoal Portrait",
    image: "/brand/66.png",
    medium: "Charcoal",
    year: "2024",
    description: "Ethereal beauty in fluid watercolor",
  },
];

const MEDIUMS = ["All", "Pencil", "Ink", "Digital", "Charcoal", "Watercolor"];

export default function ArtworksPage() {
  const [filter, setFilter] = useState("All");
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

  const filteredArtworks =
    filter === "All" ? ARTWORKS : ARTWORKS.filter((a) => a.medium === filter);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-pink-400 font-medium">
              Emotions in Every Stroke
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Artworks
          </h1>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
            A curated collection spanning traditional and digital mediums.
            <br className="hidden sm:block" />
            Each piece tells a story of exploration and creative evolution.
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
            <div className="text-2xl font-bold text-white">
              {ARTWORKS.length}
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-wider">
              Artworks
            </div>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {MEDIUMS.length - 1}
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-wider">
              Mediums
            </div>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {new Set(ARTWORKS.map((a) => a.year)).size}
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-wider">
              Years
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filter Buttons */}
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {MEDIUMS.map((m) => (
            <button
              key={m}
              onClick={() => setFilter(m)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === m
                  ? "text-white shadow-lg shadow-white/20"
                  : "text-gray-400 hover:text-white border border-black/10 hover:border-black/30"
              }`}
            >
              {filter === m && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-gray-500/80 to-gray-700/80 rounded-full"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{m}</span>
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
        Showing {filteredArtworks.length}{" "}
        {filteredArtworks.length === 1 ? "artwork" : "artworks"}
      </motion.div>

      {/* Mobile Gallery */}
      <div className="sm:hidden">
        <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4">
          {filteredArtworks.map((art, i) => (
            <motion.div
              key={art.title + i}
              className="relative shrink-0 w-72 h-96 rounded-2xl overflow-hidden group snap-center cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedArt(art)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={art.image}
                alt={art.title}
                fill
                sizes="300px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-semibold mb-2">{art.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{art.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    {art.medium}
                  </span>
                  <span>·</span>
                  <span>{art.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <motion.div
        className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredArtworks.map((art, i) => (
            <motion.div
              key={art.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[3/4] bg-gradient-to-br from-zinc-800 to-zinc-900"
              onClick={() => setSelectedArt(art)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={art.image}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 transform group-hover:scale-105 transition-transform">
                  {art.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {art.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    {art.medium}
                  </span>
                  <span>·</span>
                  <span>{art.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal for artwork details */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArt(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedArt.image}
                    alt={selectedArt.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/10">
                      {selectedArt.medium}
                    </span>
                    <span>·</span>
                    <span>{selectedArt.year}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">
                    {selectedArt.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {selectedArt.description}
                  </p>
                  <button
                    onClick={() => setSelectedArt(null)}
                    className="self-start px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                  >
                    Close
                  </button>
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
