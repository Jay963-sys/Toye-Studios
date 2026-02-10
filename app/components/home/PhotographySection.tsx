"use client";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useRef, MouseEvent, ReactElement, useEffect } from "react";
import Link from "next/link";

interface Photo {
  src: string;
  title: string;
  year: string;
}

const SAMPLE_PHOTOS: Photo[] = [
  { src: "/hand/x2.jpeg", title: "Golden Hour", year: "2023" },
  { src: "/hand/x1.jpeg", title: "Mood Light", year: "2023" },
  { src: "/hand/x4.jpeg", title: "Grateful", year: "2022" },
  { src: "/hand/x3.jpeg", title: "Studio Portrait", year: "2023" },
  { src: "/hand/x5.jpeg", title: "Freedom", year: "2024" },
  { src: "/hand/x6.jpeg", title: "Light", year: "2023" },
  { src: "/hand/x7.jpeg", title: "Lady", year: "2024" },
  { src: "/hand/x8.jpeg", title: "Hers", year: "2024" },
  { src: "/hand/x9.jpeg", title: "Red", year: "2024" },
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
      className="relative bg-black py-16 md:py-24 px-4 md:px-12 overflow-hidden"
    >
      {!isMobile && (
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="absolute w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 md:mb-16">
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif text-white mb-4 uppercase tracking-tighter"
          >
            Aperture <span className="text-amber-500/80">&</span> Soul
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-md">
            Capturing the silence between heartbeats. Every frame is a fragment
            of an unseen story.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6 border-l-0 lg:border-l border-white/10 lg:pl-12">
          {[
            { label: "Portraits", price: "$250" },
            { label: "Cinematic", price: "$400" },
            { label: "Editorial", price: "$350" },
            { label: "Events", price: "Custom" },
          ].map((service, i) => (
            <div key={i} className="group">
              <span className="text-[9px] font-mono text-amber-500/50 block mb-1 uppercase tracking-widest">
                0{i + 1}
              </span>
              <h5 className="text-base md:text-lg text-white font-serif italic">
                {service.label}
              </h5>
              <p className="text-[9px] text-gray-600 font-mono mt-1 uppercase">
                {service.price}
              </p>
            </div>
          ))}

          <div className="col-span-2 md:col-span-4 mt-2">
            <Link
              href="/contact?intent=photography"
              className="inline-block px-6 py-3 border border-amber-500/30 text-amber-500 text-[10px] font-mono uppercase tracking-[0.4em] hover:bg-amber-500 hover:text-black transition-all"
            >
              Book Session
            </Link>
          </div>
        </div>
      </div>

      {/* 3. THE "FILM-STRIP" REEL - ADJUSTED FOR PORTRAIT IMAGES */}
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
                // REDUCED WIDTH: from 60% to 35% on desktop to prevent portrait photos from looking landscape
                width: isActive ? (isMobile ? "75%" : "35%") : "8%",
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
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                // object-cover ensures the image fills the container without stretching
                className={`object-cover ${isActive ? "" : "brightness-50"}`}
                priority={i < 3}
              />

              {/* Title and Year removed from here as requested */}
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 mt-6 flex justify-between items-center max-w-7xl mx-auto opacity-30">
        <div className="h-[1px] flex-1 bg-white/10 mr-4" />
        <span className="text-[9px] font-mono text-white tracking-widest">
          0{index + 1} / 0{SAMPLE_PHOTOS.length}
        </span>
      </div>
    </section>
  );
}
