"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import CinematicIntro from "./components/intro/CinematicIntro";
import Showcase from "./components/home/Showcase";
import PhotographySection from "./components/home/PhotographySection";
import CuratedEventsSection from "./components/home/CuratedEventsSection";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-black selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. GLOBAL PROGRESS TRACKER (Zen Detail) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-amber-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* 2. OPTIMIZED BACKGROUND AMBIENCE */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Slow moving light aura - Purple/Indigo shifted to subtle Amber/Slate for better art focus */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            opacity: [0.1, 0.2, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[60vw] h-[60vw] bg-amber-900/10 rounded-full blur-[160px] top-[-10%] left-[-10%]"
        />

        {/* Grain Texture */}
        <div className="absolute inset-0 bg-[url('/brand/noise.png')] opacity-[0.05] mix-blend-overlay" />

        {/* Deep Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_90%)]" />
      </div>

      {/* 3. THE WELCOME (Clean Minimalist Hero) */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-[1em] text-amber-500/60 mb-8 block">
              The Digital Atelier
            </span>
            <h1 className="text-5xl md:text-8xl font-serif tracking-tighter text-white leading-none">
              TOYE{" "}
              <span className="italic font-light text-white/40">STUDIOS</span>
            </h1>

            {/* Minimalist Separator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
              className="h-px bg-amber-500/40 my-8"
            />

            <p className="text-sm md:text-base text-gray-400 font-light tracking-[0.3em] uppercase">
              Portraiture • Photography • Curation
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-amber-500/50 to-transparent" />
        </motion.div>
      </section>

      {/* 4. CONTENT BLOCKS (The Discipline Journey) */}
      <main className="relative">
        {/* meet the artist & portraiture */}
        <div className="mb-32 md:mb-60">
          <Showcase />
        </div>

        {/* Cinematic Narrative */}
        <div className="mb-32 md:mb-60">
          <CinematicIntro />
        </div>

        {/* Light & Lens */}
        <div className="mb-32 md:mb-60">
          <PhotographySection />
        </div>

        {/* Community & Events */}
        <div className="mb-32">
          <CuratedEventsSection />
        </div>
      </main>
    </div>
  );
}
