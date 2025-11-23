"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Work = {
  title: string;
  image: string;
  medium?: string;
  year?: string;
};

const SAMPLE_WORKS: Work[] = [
  {
    title: "Ethereal Portrait",
    image: "/brand/b.png",
    medium: "Pencil",
    year: "2023",
  },
  { title: "Sketch", image: "/brand/a.png", medium: "Ink", year: "2022" },
  {
    title: "Mood Light",
    image: "/brand/21.png",
    medium: "Pencil",
    year: "2023",
  },
  {
    title: "Charcoal Study",
    image: "/brand/d.png",
    medium: "Pencil",
    year: "2022",
  },
  {
    title: "Portrait Study",
    image: "/brand/e.png",
    medium: "Pencil",
    year: "2023",
  },
];

export default function FeaturedWorks() {
  return (
    <section className="relative py-20 px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* 🔥 Full-section vignette glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10
    bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]
"
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 tracking-tight">
        Featured Works
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SAMPLE_WORKS.map((work, i) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="
              relative group rounded-xl overflow-hidden
              bg-black/30 backdrop-blur-sm border border-white/10
            "
          >
            {/* Image */}
            <Image
              src={work.image}
              alt={work.title}
              className="
                w-full h-64 md:h-72 lg:h-80
                object-cover transition-transform duration-500
                group-hover:scale-105
              "
              width={400}
              height={320}
            />

            {/* Hover gradient overlay */}
            <div
              className="
              absolute inset-0
              bg-linear-to-t from-black/70 to-transparent
              opacity-60 group-hover:opacity-80
              transition-opacity duration-300
            "
            />

            {/* Text */}
            <div className="absolute bottom-4 left-4 pr-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold drop-shadow-lg">
                {work.title}
              </h3>
              <p className="text-sm text-gray-300">
                {work.medium} {work.year && `· ${work.year}`}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
