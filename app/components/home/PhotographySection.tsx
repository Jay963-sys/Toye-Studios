"use client";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useRef, MouseEvent, ReactElement, useEffect } from "react";
import Link from "next/link";

interface Photo {
  src: string;
  title: string;
  year: string;
}

const SAMPLE_PHOTOS: Photo[] = [
  { src: "/changes/p1.jpeg", title: "Golden Hour", year: "2023" },
  { src: "/changes/p2.jpeg", title: "Mood Light", year: "2023" },
  { src: "/changes/p3.jpeg", title: "Grateful", year: "2022" },
  { src: "/changes/p4.jpeg", title: "Studio Portrait", year: "2023" },
  { src: "/changes/p5.jpeg", title: "Freedom", year: "2024" },
];

export default function Photography(): ReactElement {
  const [index, setIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(
      window.matchMedia("(max-width: 768px)").matches ||
        "ontouchstart" in window,
    );
  }, []);

  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: MouseEvent) => {
    if (isMobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-black py-16 md:py-32 px-4 md:px-12 overflow-hidden"
    >
      {!isMobile && (
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="absolute w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
        />
      )}

      {/* 1. UPDATED HEADER & NARRATIVE */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 md:mb-24">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 uppercase tracking-tighter">
              Professional <br />
              <span className="text-amber-500/90">Photography Services</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-2xl font-light max-w-2xl leading-relaxed italic border-l border-amber-500/30 pl-6">
              I look for the candid moments—the laughter, the quiet joy, and the
              genuine connections—to create images that feel as real as the
              memory itself.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end lg:items-end">
          <div className="space-y-6">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light max-w-xs lg:text-right">
              Whether documenting a milestone or a fleeting moment, I capture
              the essence of the individual.
            </p>
            <div className="flex lg:justify-end">
              <Link
                href="/contact?intent=photography"
                className="inline-block px-10 py-4 border border-amber-500/30 text-amber-500 text-[10px] font-mono uppercase tracking-[0.4em] hover:bg-amber-500 hover:text-black transition-all duration-500"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE FILM STRIP REEL */}
      <div className="relative z-10 h-[50vh] md:h-[65vh] flex gap-1.5 md:gap-2 overflow-hidden px-1 rounded-sm">
        {SAMPLE_PHOTOS.map((photo, i) => {
          const isActive = i === index;
          return (
            <motion.div
              key={i}
              onMouseEnter={() => setIndex(i)}
              onClick={() => setIndex(i)}
              initial={false}
              animate={{
                width: isActive ? (isMobile ? "80%" : "35%") : "8.125%",
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                restDelta: 0.5,
              }}
              className="relative h-full cursor-pointer overflow-hidden border-x border-white/5 bg-neutral-900"
              style={{ willChange: "width" }}
            >
              <Image
                src={photo.src}
                alt="Photography Portfolio Item"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-all duration-700 ${isActive ? "scale-105" : "brightness-50 grayscale"}`}
                priority={i < 3}
              />

              {/* Subtle metadata indicator on active frame */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-6 right-6 z-20"
                >
                  <span className="text-[8px] font-mono text-white/40 border border-white/10 px-2 py-1 uppercase tracking-widest bg-black/20 backdrop-blur-md">
                    Exposure_0{i + 1}
                  </span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* 3. COMPACT INDEX */}
      <div className="relative z-10 mt-8 flex justify-between items-center max-w-7xl mx-auto opacity-30">
        <div className="h-[1px] flex-1 bg-white/10 mr-4" />
        <span className="text-[9px] font-mono text-white tracking-[0.5em] uppercase">
          Archive_Index 0{index + 1} / 0{SAMPLE_PHOTOS.length}
        </span>
      </div>
    </section>
  );
}
