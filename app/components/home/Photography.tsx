"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SAMPLE_PHOTOS = [
  { src: "/brand/12.png", title: "Mood Light", year: "2023" },
  { src: "/brand/54.png", title: "Grateful", year: "2022" },
  { src: "/brand/83.png", title: "Golden Hour", year: "2023" },
  { src: "/brand/87.png", title: "Studio Portrait", year: "2023" },
];

export default function Photography() {
  return (
    <section className="relative photography-container max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-white/5 overflow-hidden">
      {/* 🔥 Soft vignette background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10
          bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]"
      />

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="photography-text max-w-3xl mx-auto mb-12 text-center px-2 sm:px-0"
      >
        <h3 className="desc-heading text-2xl sm:text-3xl md:text-4xl text-white mb-4">
          Photography
        </h3>
        <p className="desc-text text-gray-300 text-sm sm:text-base leading-relaxed">
          Photography is my way of observing the world through emotion, light,
          and storytelling. Every session is an opportunity to discover
          something real — a quiet expression, a burst of joy, or the subtle
          details that make a moment unforgettable. I approach photography with
          an artist&apos;s eye, blending creativity and intention to create
          images that are both beautiful and honest.
        </p>
        <p className="desc-text mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
          Whether it&apos;s a portrait session, an event, or a creative outdoor
          shoot, my goal is always the same: to deliver a visual narrative
          you&apos;ll return to for years to come — a collection of treasured
          moments, artfully preserved.
        </p>
        <p className="desc-bullets mt-6 text-gray-200 text-sm sm:text-base">
          Portraits • Events • Weddings • Creative Sessions • Outdoor Shoots
        </p>
      </motion.div>

      {/* Magazine-style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {SAMPLE_PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`
              relative w-full rounded-xl overflow-hidden border border-white/10 bg-black/30 cursor-pointer
              hover:scale-105 transition-transform duration-300
              ${i % 2 === 0 ? "h-64 sm:h-72 md:h-80" : "h-72 sm:h-80 md:h-104"}
            `}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover"
              width={400}
              height={320}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg sm:text-xl font-semibold">
                {photo.title}
              </h3>
              <p className="text-sm text-gray-300">{photo.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
