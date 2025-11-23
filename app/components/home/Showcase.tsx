"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./showcase.css";

export default function Showcase() {
  return (
    <section className="showcase-container relative overflow-hidden">
      {/* Soft vignette glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10
    bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]
"
      />

      {/* Spotlight Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="showcase-spotlight"
      >
        <Image
          src="/brand/pop.png"
          alt="Main Artwork"
          width={1000}
          height={1200}
          className="spotlight-img"
          priority
        />

        {/* Dark fading overlay */}
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

        <p className="desc-text mt-4">
          Beyond creating, I teach through hands-on workshops and private
          mentorship, guiding aspiring artists to develop their craft with
          confidence and precision.
        </p>

        <p className="desc-bullets mt-6">
          Commissions • Workshops • Photography • Private Classes
        </p>
      </motion.div>
    </section>
  );
}
