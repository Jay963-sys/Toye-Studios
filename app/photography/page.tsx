"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, ReactElement } from "react";

// --- Types & Interfaces ---

type Photo = {
  title: string;
  year: string;
  src: string;
  description: string;
};

const PHOTOS: Photo[] = [
  {
    title: "Mood Light",
    year: "2023",
    src: "/changes/p5.jpeg",
    description: "Dramatic lighting and shadow play.",
  },
  {
    title: "Happy Hour",
    year: "2023",
    src: "/changes/p4.jpeg",
    description: "Perfect moment at sunset.",
  },
  {
    title: "Urban Shadows",
    year: "2022",
    src: "/changes/p3.jpeg",
    description: "Event documentation as art.",
  },
  {
    title: "Golden Hour",
    year: "2023",
    src: "/changes/p2.jpeg",
    description: "Nature's perfect lighting.",
  },
  {
    title: "Living Colors",
    year: "2021",
    src: "/changes/p1.jpeg",
    description: "Moment captured at a waterfront.",
  },
];

const CATEGORIES = ["All"];

export default function PhotographyPage(): ReactElement {
  const [filter, setFilter] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos =
    filter === "All"
      ? PHOTOS
      : PHOTOS.filter((photo) =>
          photo.description.includes(filter.slice(0, -1)),
        );
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-32 px-4 md:px-12 overflow-hidden">
      {/* 1. CINEMATIC BACKGROUND AMBIANCE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* 2. PHOTOGRAPHER'S HEADER */}
      <div className="relative z-10 max-w-6xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[1em] text-blue-500/60 block mb-6">
            Lens & Perspective
          </span>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-none tracking-tighter mb-8 uppercase">
            Candid <span className="text-blue-500">Portrait</span> Catalogue
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Observing the world through light and storytelling. Every frame is
            an unrepeatable fragment of time.
          </p>
        </motion.div>

        {/* STATS STRIP */}
        <div className="flex gap-12 mt-16 border-t border-white/5 pt-8 text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">
          <div>{PHOTOS.length} Exposures</div>
          <div>{CATEGORIES.length - 1} Categories</div>
        </div>
      </div>

      {/* 3. LENS FILTERS */}
      <div className="relative z-10 max-w-6xl mx-auto mb-20 flex flex-wrap gap-8 items-center border-b border-white/5 pb-8">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-xs uppercase tracking-[0.3em] transition-all duration-500 relative ${
              filter === c
                ? "text-blue-500 font-bold"
                : "text-white/30 hover:text-white"
            }`}
          >
            {c}
            {filter === c && (
              <motion.div
                layoutId="navIndicator"
                className="absolute -bottom-8 left-0 right-0 h-[1px] bg-blue-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* 4. THE FILM STRIP GALLERY (TITLES & LOCATIONS REMOVED) */}
      <motion.div
        layout
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 md:gap-24"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-crosshair"
            >
              <div className="relative aspect-[16/10] md:aspect-[3/2] overflow-hidden bg-zinc-900 border border-white/5">
                <Image
                  src={photo.src}
                  alt="Photography Exposure"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />

                {/* Film Perimeter Detail */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-[8px] font-mono text-white/40 border border-white/20 px-2 py-1 uppercase tracking-widest bg-black/40 backdrop-blur-sm">
                    {photo.year} {i}
                  </span>
                </div>
              </div>

              {/* Minimalist Line & View Trigger (Replacing Title/Location) */}
              <div className="mt-8 flex justify-between items-center border-l border-white/10 pl-6 h-4">
                <div className="w-12 h-[1px] bg-white/5 group-hover:w-24 group-hover:bg-blue-500 transition-all duration-700" />
                <button className="text-[9px] font-mono text-white/20 group-hover:text-blue-500 transition-colors tracking-[0.3em]">
                  ENLARGE_IMAGE
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 5. LIGHTBOX MODAL (TITLE & LOCATION REMOVED) */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full flex flex-col items-center"
            >
              <div className="relative aspect-[16/10] md:aspect-[3/2] w-full shadow-2xl border border-white/5 mb-12">
                <Image
                  src={selectedPhoto.src}
                  alt="Studio Exposure"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <div className="space-y-6">
                  <div className="w-12 h-px bg-blue-500/50" />
                  <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed max-w-md italic">
                    &quot;{selectedPhoto.description}&quot;
                  </p>
                </div>

                <div className="flex flex-col md:items-end gap-6">
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em] mb-1">
                      Exposure Data
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40 hover:text-blue-500 transition-colors border border-white/10 px-8 py-4"
                  >
                    Close Exposure
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
