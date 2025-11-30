"use client";

import { motion } from "framer-motion";
import CinematicIntro from "./components/intro/CinematicIntro";
import Showcase from "./components/home/Showcase";
import FeaturedWorks from "./components/home/FeaturedWorks";
import Workshops from "./components/home/Workshops";
import Photography from "./components/home/Photography";
import PhotographyServices from "./components/home/PhotographyServices";
import ArtCurator from "./components/home/ArtCurator";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Stronger, more visible blobs */}
        <motion.div
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -60, 60, 0],
            opacity: [0.35, 0.55, 0.45, 0.35],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[80vw] h-[80vw] bg-purple-600/30 rounded-full blur-[160px] top-[-20%] left-[-10%]"
        />

        <motion.div
          animate={{
            x: [0, -70, 90, 0],
            y: [0, 40, -40, 0],
            opacity: [0.3, 0.55, 0.4, 0.3],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[75vw] h-[75vw] bg-indigo-500/30 rounded-full blur-[180px] bottom-[-20%] right-[-10%]"
        />

        {/* Film Grain */}
        <div className="absolute inset-0 bg-[url('/brand/noise.png')] opacity-[0.15] mix-blend-soft-light" />

        {/* Softer vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_45%,rgba(0,0,0,0.85))]" />
      </div>

      <section className="relative pt-40 pb-28 flex flex-col items-center text-center px-6">
        {/* Soft vignette glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),rgba(0,0,0,0.9))]" />
        </div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif tracking-wide text-white relative z-10"
        >
          Welcome to <span className="text-white">Toye Studios</span>
        </motion.h1>

        {/* Divider Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "160px", opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-white/40 mt-6 mb-4 relative z-10"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 italic tracking-wide relative z-10"
        >
          Artistry. Storytelling. Timeless visuals.
        </motion.p>
      </section>

      <CinematicIntro />
      <Showcase />
      <FeaturedWorks />
      <Photography />
      <PhotographyServices />
      {/* <ArtCurator /> */}
      <Workshops />
    </div>
  );
}
