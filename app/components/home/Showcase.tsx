"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, ReactElement } from "react";
import Link from "next/link";

const ARTIST_IMAGE = "/brand/p.png";
const PORTFOLIO_IMAGES = [
  "/hand/t41.jpg",
  "/hand/t17.jpg",
  "/hand/t38.png",
  "/hand/t36.jpg",
  "/hand/t42.jpg",
  "/hand/t10.jpg",
  "/hand/t2.jpg",
  "/brand/b.png",
  "/brand/a.png",
  "/brand/d.png",
  "/brand/21.png",
];

export default function Showcase(): ReactElement {
  const [activeWork, setActiveWork] = useState(0);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* --- PART 1: THE ARTIST (Static Anchor) --- */}
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
              The Philosophy
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
              Capturing the <br />
              <span className="text-amber-500/90">Silent Dialogue</span>
            </h2>
            <blockquote className="border-l-2 border-amber-500/30 pl-6 italic text-xl md:text-2xl text-gray-300 font-light max-w-lg">
              Art isn&apos;t just a reflection of what we see, but a testament
              to what we feel in the quiet moments of observation.
            </blockquote>
            <p className="text-gray-500 max-w-md leading-relaxed">
              With over a decade of dedication to hyperrealism, Olatoye
              transforms charcoal and canvas into living narratives.
            </p>
          </motion.div>
        </div>

        {/* --- PART 2: THE WORK (Discovery Gallery) --- */}
        <div className="pt-20 border-t border-white/5 mb-40">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                Portfolio
              </span>
              <h3 className="text-3xl font-light uppercase tracking-tighter mt-2">
                Selected Works
              </h3>
            </div>
            <div className="text-right font-mono text-xs text-white/20">
              {activeWork + 1} / {PORTFOLIO_IMAGES.length}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="relative w-full lg:w-2/3 aspect-[16/10] bg-white/5 rounded-sm overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWork}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={PORTFOLIO_IMAGES[activeWork]}
                    alt="Portfolio Item"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full lg:w-1/3 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[60vh] scrollbar-hide">
              {PORTFOLIO_IMAGES.map((src, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveWork(i)}
                  className={`relative flex-shrink-0 w-24 lg:w-full aspect-video rounded-sm overflow-hidden border transition-all duration-300 ${
                    activeWork === i
                      ? "border-amber-500 opacity-100"
                      : "border-white/10 opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${i}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- PART 3: SERVICES (The Atelier) --- */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.8em]">
              Atelier Services
            </span>
            <h3 className="text-4xl md:text-6xl font-light mt-4">Offerings</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Art Classes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h4 className="text-2xl font-serif italic text-amber-500">
                  Art Classes
                </h4>
                <p className="text-gray-400 text-sm">
                  Learn to create with personalized instruction:
                </p>
              </div>
              <ul className="space-y-4 text-gray-300 font-light border-l border-white/10 pl-6">
                <li>Private one-on-one sessions</li>
                <li>Group workshops</li>
                <li>Corporate team-building events</li>
                <li>Special occasion classes</li>
                <li>Online tutorials</li>
              </ul>
              <div className="pt-4">
                <p className="text-xs font-mono text-gray-500 mb-4 uppercase">
                  Sessions starting from £75
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-amber-500 transition-colors duration-300"
                >
                  Book Class
                </Link>
              </div>
            </motion.div>

            {/* Art Commissions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h4 className="text-2xl font-serif italic text-amber-500">
                  Art Commissions
                </h4>
                <p className="text-gray-400 text-sm">
                  Custom portrait commissions available for:
                </p>
              </div>
              <ul className="space-y-4 text-gray-300 font-light border-l border-white/10 pl-6">
                <li>Individual portraits</li>
                <li>Family portraits</li>
                <li>Pet portraits</li>
                <li>Memorial pieces</li>
                <li>Corporate commissions</li>
              </ul>
              <div className="pt-4">
                <p className="text-xs font-mono text-gray-500 mb-4 uppercase">
                  Portraits starting from £350
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 border border-white text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
