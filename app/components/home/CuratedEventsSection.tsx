"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, ReactElement } from "react";
import Link from "next/link";

interface EventItem {
  title: string;
  description: string;
  image: string;
  category: string;
}

const EVENTS: EventItem[] = [
  {
    title: "Creative Workshops",
    description:
      "Hands-on art sessions designed to unlock creativity and foster community through traditional techniques.",
    image: "/hand/t8.jpg",
    category: "EDUCATION",
  },
  {
    title: "Brand Collaborations",
    description:
      "Custom creative partnerships that merge visual storytelling with corporate identity.",
    image: "/hand/t37.jpg",
    category: "PARTNERSHIP",
  },
  {
    title: "Team Building",
    description:
      "Corporate experiences fostering deep collaboration and lateral thinking through the lens of portraiture.",
    image: "/hand/t24.jpg",
    category: "CORPORATE",
  },
  {
    title: "The Sketch Social",
    description:
      "Relaxed drawing sessions in curated social settings, focusing on painting and communal energy.",
    image: "/brand/98.png",
    category: "SOCIAL",
  },
];

export default function CuratedEvents(): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-black py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER: Minimal and Clean */}
        <div className="mb-20">
          <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.8em] block mb-4">
            The
          </span>
          <h3 className="text-5xl md:text-8xl font-serif italic text-white leading-none uppercase tracking-tighter">
            Curated <span className="text-amber-500">Events</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: THE INTERACTIVE MENU (Minimal visual noise) */}
          <div className="lg:col-span-5 space-y-2">
            {EVENTS.map((event, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className="group py-8 border-b border-white/5 cursor-pointer relative"
              >
                <div className="flex items-baseline gap-4 relative z-10">
                  <span
                    className={`font-mono text-[10px] transition-colors duration-500 ${activeIndex === idx ? "text-amber-500" : "text-white/20"}`}
                  >
                    0{idx + 1}
                  </span>
                  <h4
                    className={`text-3xl md:text-5xl font-light transition-all duration-500 ${activeIndex === idx ? "text-white translate-x-4" : "text-white/30 group-hover:text-white/60"}`}
                  >
                    {event.title}
                  </h4>
                </div>

                {/* Expandable description only for the active item */}
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 text-gray-500 font-light leading-relaxed pl-8 max-w-sm">
                        {event.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT: THE SINGLE FOCAL IMAGE (Zero overwhelm) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden rounded-sm bg-white/5 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={EVENTS[activeIndex].image}
                    alt={EVENTS[activeIndex].title}
                    fill
                    className="object-cover transition-all duration-1000"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">
                      {EVENTS[activeIndex].category}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-12 text-center">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact?intent=event"
                  className="inline-block px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-amber-500 transition-colors duration-300"
                >
                  Book Event Inquiry
                </Link>
              </motion.div>
            </div>

            {/* Subtle background detail to break the "flat" look */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
