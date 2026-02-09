"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, ReactElement } from "react";

// --- Types & Interfaces ---
type Artwork = {
  title: string;
  image: string;
  medium: string;
  year: string;
  description: string;
};

const ARTWORKS: Artwork[] = [
  {
    title: "#30 Sketch",
    image: "/hand/t41.jpg",
    medium: "Pencil",
    year: "2023",
    description: "Emotional depth captured in graphite.",
  },
  {
    title: "#31 Sketch",
    image: "/hand/t42.jpg",
    medium: "Pencil",
    year: "2023",
    description: "Study of human form and shadow.",
  },
  {
    title: "Ethereal Portrait",
    image: "/brand/c.png",
    medium: "Pencil",
    year: "2023",
    description: "Delicate exploration of light.",
  },
  {
    title: "Mood Light",
    image: "/brand/d.png",
    medium: "Pencil",
    year: "2023",
    description: "The intersection of light and emotion.",
  },
  {
    title: "#47 Sketch",
    image: "/hand/t2.jpg",
    medium: "Pencil",
    year: "2023",
    description: "Raw charcoal study.",
  },
  {
    title: "#40 Sketch",
    image: "/hand/t10.jpg",
    medium: "Pencil",
    year: "2023",
    description: "Hyperrealistic tonal study.",
  },
  {
    title: "#99 Sketch",
    image: "/hand/t38.png",
    medium: "Pencil",
    year: "2023",
    description: "Hyperrealistic tonal study.",
  },
  {
    title: "#75 Sketch",
    image: "/brand/a.png",
    medium: "Pencil",
    year: "2023",
    description: "Hyperrealistic tonal study.",
  },
  {
    title: "#78 Sketch",
    image: "/brand/b.png",
    medium: "Pencil",
    year: "2023",
    description: "Hyperrealistic tonal study.",
  },
];

const MEDIUMS = ["All", "Pencil", "Ink", "Digital", "Charcoal", "Watercolor"];

export default function ArtworksPage(): ReactElement {
  const [filter, setFilter] = useState("All");
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

  const filteredArtworks =
    filter === "All" ? ARTWORKS : ARTWORKS.filter((a) => a.medium === filter);

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-32 px-4 md:px-12 overflow-hidden">
      {/* 1. BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* 2. EXHIBITION HEADER */}
      <div className="relative z-10 max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.8em] text-amber-500/60 block mb-6">
            Permanent Collection
          </span>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-none tracking-tighter mb-8 uppercase">
            The <span className="text-amber-500">Archive</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            A decade of hyperrealistic exploration. Every stroke is a dialogue
            between the physical medium and the human spirit.
          </p>
        </motion.div>

        {/* STATS BAR */}
        <div className="flex gap-12 mt-16 border-t border-white/10 pt-8 text-[10px] font-mono uppercase tracking-widest text-gray-600">
          <div>{ARTWORKS.length} Works</div>
          <div>{MEDIUMS.length - 1} Mediums</div>
          <div>{new Set(ARTWORKS.map((a) => a.year)).size} Years</div>
        </div>
      </div>

      {/* 3. ATELIER FILTER SYSTEM */}
      <div className="relative z-10 max-w-6xl mx-auto mb-20">
        <div className="flex flex-wrap gap-x-8 gap-y-6 items-center">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            Filter by Medium:
          </span>
          {MEDIUMS.map((m) => (
            <button
              key={m}
              onClick={() => setFilter(m)}
              className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative ${
                filter === m
                  ? "text-amber-500 italic font-bold"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {m}
              {filter === m && (
                <motion.div
                  layoutId="filterDot"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 4. THE STAGGERED MASONRY GRID (TITLES REMOVED) */}
      <motion.div
        layout
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16"
      >
        <AnimatePresence mode="popLayout">
          {filteredArtworks.map((art, i) => (
            <motion.div
              key={art.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedArt(art)}
              className={`relative cursor-crosshair group ${i % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 shadow-2xl">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                />

                {/* Physical Border Detail */}
                <div className="absolute inset-0 border border-white/5 group-hover:border-amber-500/20 transition-colors pointer-events-none" />

                {/* Hover Info Badge (Replacing static title) */}
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[10px] font-mono text-amber-500 uppercase tracking-[0.3em]">
                    {art.medium} {art.year}
                  </p>
                </div>
              </div>

              {/* Artistic line instead of title */}
              <div className="mt-6 flex justify-end">
                <div className="w-8 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-amber-500 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 5. THE ZEN DETAIL MODAL (TITLE REMOVED) */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArt(null)}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <div className="relative aspect-[4/5] w-full shadow-2xl overflow-hidden border border-white/5">
                <Image
                  src={selectedArt.image}
                  alt={selectedArt.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em]">
                    {selectedArt.year} {selectedArt.medium}
                  </span>
                  <div className="w-12 h-px bg-white/20" />
                </div>

                <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed max-w-lg italic">
                  &quot;{selectedArt.description}&quot;
                </p>

                <div className="pt-8">
                  <button
                    onClick={() => setSelectedArt(null)}
                    className="group flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.5em] text-white/40 hover:text-amber-500 transition-colors"
                  >
                    <div className="w-12 h-px bg-white/10 group-hover:w-20 group-hover:bg-amber-500 transition-all" />
                    Return to Archive
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
