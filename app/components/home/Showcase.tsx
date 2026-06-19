"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, ReactElement } from "react";
import Link from "next/link";

const ARTIST_IMAGE = "/brand/p.png";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

const PORTFOLIO_MEDIA: MediaItem[] = [
  { type: "video", src: "/changes/v1.mp4" },
  { type: "image", src: "/changes/m2.jpeg" },
  { type: "image", src: "/changes/m1.jpeg" },
  { type: "image", src: "/changes/m4.jpeg" },
  { type: "image", src: "/changes/m5.jpeg" },
  { type: "image", src: "/changes/10.jpeg" },
  { type: "image", src: "/changes/9.jpeg" },
];

export default function Showcase(): ReactElement {
  const [activeWork, setActiveWork] = useState(0);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* --- PART 1: THE APPROACH (Exact Copy Match) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden border border-white/10"
          >
            <Image
              src={ARTIST_IMAGE}
              alt="Olatoye - Portrait Artist"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
            <div className="absolute inset-4 border border-white/5 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.5em]">
              My Approach
            </span>
            <h2 className="text-5xl md:text-7xl leading-tight font-serif tracking-tighter uppercase">
              Capturing Real <br />
              <span className="text-amber-500/90">Moments & Emotion</span>
            </h2>

            <p className="text-gray-300 text-xl md:text-2xl font-light max-w-xl leading-relaxed italic border-l-2 border-amber-500/30 pl-6">
              I believe the best images—whether drawn or photographed—come from
              genuine connections.
            </p>

            <p className="text-gray-400 max-w-lg leading-relaxed text-lg">
              With over 10 years of experience in hyperrealism and photography,
              my goal is simple: to create artwork that feels true to you. I
              don&apos;t just capture what you look like; I capture who you are.
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-amber-500 text-black font-mono text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-500"
              >
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* --- PART 2: THE WORK --- */}
        <div className="pt-20 border-t border-white/5 mb-40">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                Portfolio
              </span>
              <h3 className="text-3xl font-serif uppercase tracking-tighter mt-2 italic">
                Hand Drawn Portraits
              </h3>
            </div>
            <div className="text-right font-mono text-xs text-white/20">
              {activeWork + 1} / {PORTFOLIO_MEDIA.length}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="relative w-full lg:w-2/3 h-[60vh] md:h-[70vh] lg:h-[80vh] bg-white/5 rounded-sm overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center">
              {" "}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWork}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  {PORTFOLIO_MEDIA[activeWork].type === "image" ? (
                    <Image
                      src={PORTFOLIO_MEDIA[activeWork].src}
                      alt="Portfolio Item"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video
                      src={PORTFOLIO_MEDIA[activeWork].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full lg:w-1/3 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[60vh] scrollbar-hide">
              {PORTFOLIO_MEDIA.map((media, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveWork(i)}
                  className={`relative flex-shrink-0 w-24 lg:w-full aspect-video rounded-sm overflow-hidden border transition-all duration-300 ${
                    activeWork === i
                      ? "border-amber-500 opacity-100"
                      : "border-white/10 opacity-40 hover:opacity-70"
                  }`}
                >
                  {media.type === "image" ? (
                    <Image
                      src={media.src}
                      alt={`Thumbnail ${i}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <video
                        src={media.src}
                        muted
                        playsInline
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      {/* Video Indicator Icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <svg
                          className="w-6 h-6 text-white/80"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- PART 3: OFFERINGS --- */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.8em]">
              Studio Services
            </span>
            <h3 className="text-4xl md:text-6xl mt-4 font-serif tracking-tighter uppercase">
              Fine Art & Teaching
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Commissions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h4 className="text-2xl text-amber-500 font-serif uppercase">
                  Art Commissions
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Creating heirlooms that tell your story. Custom portraits
                  tailored to capture genuine essence.
                </p>
              </div>
              <ul className="space-y-4 text-gray-300 font-light border-l border-white/10 pl-6 text-sm uppercase tracking-widest font-mono">
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> Individual
                  Portraits
                </li>
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> Family &
                  Wedding Collections
                </li>
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> Memorial
                  Pieces
                </li>
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> Coporate
                  Commissions
                </li>
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> Pet
                  Portraits
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-xs font-mono text-gray-600 mb-6 uppercase tracking-widest">
                  Commissions from £200 (Delivery inclusive)
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 border border-white/20 text-white text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
            {/* Art Workshops */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h4 className="text-2xl text-amber-500 font-serif uppercase">
                  Art Classes
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Perfect for beginners and groups. Learn to find your voice
                  through hands-on, personalized instruction.
                </p>
              </div>
              <ul className="space-y-4 text-gray-300 font-light border-l border-white/10 pl-6 text-sm uppercase tracking-widest font-mono">
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> Private
                  1-on-1 Sessions
                </li>
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> Group
                  Workshops
                </li>
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> Corporate
                  Team Building
                </li>
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> Special
                  Events Classes
                </li>
                <li>
                  <span className="text-amber-500/50 mr-2">—</span> e-sessions
                  (beginner, intermediate, masterclass)
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-xs font-mono text-gray-600 mb-6 uppercase tracking-widest">
                  Sessions from £75
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-black text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-amber-500 transition-all duration-500"
                >
                  Book Class
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
