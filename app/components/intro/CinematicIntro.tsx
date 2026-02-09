"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

const titleVars: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const subVars: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.8 },
  },
};

export default function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Shorter duration to prevent user fatigue
    const timer = setTimeout(() => setShowIntro(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          // Fade the entire container out as one unit to avoid overlap
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Subtle Texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('/brand/noise.png')] pointer-events-none mix-blend-soft-light" />

          <motion.div
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* The Image: Reveals like a sketch coming to life */}
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="mb-8"
            >
              <Image
                src="/brand/get.png"
                alt="Studio Brush"
                width={400}
                height={300}
                priority
                className="w-48 md:w-64 grayscale opacity-80"
              />
            </motion.div>

            {/* Typography: Sophisticated and Zen */}
            <motion.h1
              variants={titleVars}
              className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter"
            >
              Toye <span className="text-amber-500/80">Studios</span>
            </motion.h1>

            <motion.p
              variants={subVars}
              className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.8em] text-gray-500"
            >
              The Digital Atelier
            </motion.p>
          </motion.div>

          {/* Focal Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_70%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
