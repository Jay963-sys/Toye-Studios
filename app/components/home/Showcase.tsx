"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import "./showcase.css";

export default function Showcase() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showCommissions, setShowCommissions] = useState(false);
  const [showClasses, setShowClasses] = useState(false);

  const images = [
    "/brand/p.png",
    "/brand/b.png",
    "/brand/a.png",
    "/brand/d.png",
    "/brand/21.png",
    "/brand/78.png",
    "/brand/500.png",
    "/brand/700.png",
    "/brand/900.png",
    "/brand/84.png",
  ];

  // Carousel images (excluding the first one)
  const carouselImages = images.slice(1);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <section className="showcase-container relative overflow-hidden">
      {/* Soft vignette glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]" />

      {/* Hero Image with Title - Static, No Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="showcase-spotlight relative"
      >
        <Image
          src={images[0]}
          alt="Portfolio Artwork"
          width={1000}
          height={1200}
          className="spotlight-img"
          priority
        />

        <div className="spotlight-overlay" />

        {/* Title */}
        <h2 className="enhanced-spotlight-title text-white font-light leading-[1.1]">
          <span className="block animate-fade-in-up font-cursive text-5xl md:text-6xl lg:text-7xl">
            Where
          </span>
          <span className="block animate-fade-in-up delay-150 font-cursive text-5xl md:text-6xl lg:text-7xl">
            Art
          </span>
          <span className="block animate-fade-in-up delay-300 font-cursive text-5xl md:text-6xl lg:text-7xl">
            Comes Alive
          </span>
        </h2>
      </motion.div>

      {/* Artist Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="showcase-description"
      >
        <h3 className="desc-heading">Portrait Artist & Visual Storyteller</h3>
        <p className="desc-text">
          With over a decade of experience in hyperrealistic portraiture, I
          bring stories to life through expressive sketches, charcoal studies,
          and fine-art paintings. My work captures emotion, character, and mood
          — creating pieces that feel alive.
        </p>

        {/* Carousel Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12 mb-8 relative"
        >
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={carouselImages[currentImage]}
                alt={`Gallery artwork ${currentImage + 1}`}
                fill
                className="object-cover"
              />

              {/* Carousel Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 
        rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center 
        text-white hover:bg-black/70 transition-all z-10"
              >
                ←
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 
        rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center 
        text-white hover:bg-black/70 transition-all z-10"
              >
                →
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                {carouselImages.map((_, idx) => (
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
        </motion.div>

        {/* Dropdowns Section */}
        <div className="mt-8 space-y-4">
          {/* Commissions Dropdown */}
          <div className="border border-white/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setShowCommissions(!showCommissions)}
              className="w-full px-6 py-4 bg-white/5 hover:bg-white/10 transition-all flex justify-between items-center text-white"
            >
              <span className="font-semibold">Commissions</span>
              <span className="text-2xl">{showCommissions ? "−" : "+"}</span>
            </button>
            {showCommissions && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-6 py-4 bg-white/5 text-gray-300"
              >
                <p className="mb-3">
                  Custom portrait commissions available for:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Individual portraits</li>
                  <li>Family portraits</li>
                  <li>Pet portraits</li>
                  <li>Memorial pieces</li>
                  <li>Corporate commissions</li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Art Classes Dropdown */}
          <div className="border border-white/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setShowClasses(!showClasses)}
              className="w-full px-6 py-4 bg-white/5 hover:bg-white/10 transition-all flex justify-between items-center text-white"
            >
              <span className="font-semibold">Art Classes</span>
              <span className="text-2xl">{showClasses ? "−" : "+"}</span>
            </button>
            {showClasses && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-6 py-4 bg-white/5 text-gray-300"
              >
                <p className="mb-3">
                  Learn to create with personalized instruction:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Private one-on-one sessions</li>
                  <li>Group workshops</li>
                  <li>Corporate team-building events</li>
                  <li>Special occasion classes</li>
                  <li>Online tutorials</li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
