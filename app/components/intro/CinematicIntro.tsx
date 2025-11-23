"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "./intro.css";

export default function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(true);

  // Auto-hide after 4.5s
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="intro-wrapper"
        >
          {/* Skip Button */}
          <motion.button
            className="intro-skip"
            onClick={() => setShowIntro(false)}
            whileTap={{ scale: 0.9 }}
          >
            Skip Intro
          </motion.button>

          {/* Brush Reveal Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="intro-brush"
          >
            <Image
              src="/brand/get.png"
              alt="Brush Mask"
              width={800}
              height={550}
              priority
              className="intro-img"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.4 }}
            className="intro-title"
          >
            Toye Studios
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="intro-sub"
          >
            Artist • Photographer • Art Curator
          </motion.p>

          {/* Film Grain */}
          <div className="intro-grain" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
