"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const SAMPLE_PHOTOS = [
  { src: "/brand/12.png", title: "Mood Light", year: "2023" },
  { src: "/brand/54.png", title: "Grateful", year: "2022" },
  { src: "/brand/83.png", title: "Golden Hour", year: "2023" },
  { src: "/brand/87.png", title: "Studio Portrait", year: "2023" },
];

export default function Photography() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showServices, setShowServices] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % SAMPLE_PHOTOS.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + SAMPLE_PHOTOS.length) % SAMPLE_PHOTOS.length
    );
  };

  return (
    <section className="relative photography-container max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-white/5 overflow-hidden">
      {/* Soft vignette background */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]" />

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
          details that make a moment unforgettable.
        </p>
      </motion.div>

      {/* Carousel Section */}
      <div className="relative max-w-4xl mx-auto mb-12">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src={SAMPLE_PHOTOS[currentImage].src}
            alt={SAMPLE_PHOTOS[currentImage].title}
            fill
            className="object-cover"
          />

          {/* Carousel Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
          >
            →
          </button>

          {/* Image Info Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">
              {SAMPLE_PHOTOS[currentImage].title}
            </h3>
            <p className="text-sm text-gray-300">
              {SAMPLE_PHOTOS[currentImage].year}
            </p>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {SAMPLE_PHOTOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImage ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Photography Services Dropdown */}
      <div className="max-w-3xl mx-auto">
        <div className="border border-white/20 rounded-lg overflow-hidden">
          <button
            onClick={() => setShowServices(!showServices)}
            className="w-full px-6 py-4 bg-white/5 hover:bg-white/10 transition-all flex justify-between items-center text-white"
          >
            <span className="font-semibold text-lg">Photography Services</span>
            <span className="text-2xl">{showServices ? "−" : "+"}</span>
          </button>
          {showServices && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 py-6 bg-white/5 text-gray-300"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Professional Portraits
                  </h4>
                  <p className="text-sm">
                    Timeless, expressive portraits crafted with an artist&apos;s
                    eye
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Outdoor Photoshoots
                  </h4>
                  <p className="text-sm">
                    Natural light sessions in beautiful landscapes
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Weddings & Pre-Wedding
                  </h4>
                  <p className="text-sm">
                    Elegant, romantic portraits with documentary-style
                    storytelling
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Events & Celebrations
                  </h4>
                  <p className="text-sm">
                    Graduations, birthdays, and special occasions
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
