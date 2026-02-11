"use client";

import { useState, useEffect, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner(): ReactElement {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentChoice = localStorage.getItem("toye-cookie-consent");
    if (!consentChoice) {
      // Delay appearance slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "declined") => {
    localStorage.setItem("toye-cookie-consent", choice);
    setIsVisible(false);

    // Optional: Refresh or push events to GTM/Meta Pixel here
    if (choice === "accepted") {
      window.location.reload(); // Reloads to ensure tracking scripts fire properly
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[100]"
        >
          <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
            {/* Subtle Texture overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-amber-500 uppercase tracking-[0.4em]">
                  Privacy_Notice
                </span>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <p className="text-xs text-gray-400 leading-relaxed font-light">
                We utilize third-party technologies like the{" "}
                <span className="text-white">Meta Pixel</span> to understand our
                audience. By accepting, you consent to our use of these digital
                fingerprints.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => handleConsent("accepted")}
                  className="flex-1 py-3 bg-amber-500 text-black text-[9px] font-mono uppercase tracking-[0.3em] hover:bg-white transition-all duration-500"
                >
                  Accept Tracking
                </button>
                <button
                  onClick={() => handleConsent("declined")}
                  className="flex-1 py-3 border border-white/10 text-white/40 text-[9px] font-mono uppercase tracking-[0.3em] hover:text-white hover:border-white transition-all"
                >
                  Decline
                </button>
              </div>

              <div className="text-center">
                <Link
                  href="/privacy"
                  className="text-[8px] font-mono text-gray-600 hover:text-amber-500 uppercase tracking-widest transition-colors underline underline-offset-4 decoration-white/5"
                >
                  View Full Data Policy
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
