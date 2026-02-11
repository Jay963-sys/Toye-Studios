"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react";

export default function PrivacyPolicy(): ReactElement {
  const lastUpdated = "February 11, 2026";

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-32 px-4 md:px-12 overflow-hidden">
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <span className="text-[10px] font-mono uppercase tracking-[1em] text-amber-500/60 block mb-6">
            Legal_Notice
          </span>
          <h1 className="text-5xl md:text-8xl font-serif italic leading-none tracking-tighter mb-8 uppercase">
            Privacy{" "}
            <span className="text-amber-500 not-italic font-light">&</span> Data
          </h1>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
            Last Revision: {lastUpdated}
          </p>
        </motion.div>

        <div className="space-y-16 text-gray-400 font-light leading-relaxed">
          {/* SECTION 1 */}
          <section className="space-y-6">
            <h2 className="text-xl font-serif italic text-white uppercase tracking-widest">
              01. Overview
            </h2>
            <p>
              Toye Studios respects your digital sovereignty. This document
              outlines how we collect, protect, and utilize information when you
              engage with our digital atelier. By using this site, you agree to
              the practices described herein.
            </p>
          </section>

          {/* SECTION 2 - THE TRACKING DISCLOSURE */}
          <section className="space-y-6 p-8 border border-white/5 bg-white/[0.01]">
            <h2 className="text-xl font-serif italic text-amber-500 uppercase tracking-widest">
              02. Third-Party Tracking
            </h2>
            <p>
              To better understand our audience and provide relevant artistic
              updates, we utilize third-party tracking technologies, including:
            </p>
            <ul className="space-y-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">
              <li className="flex gap-4">
                <span className="text-amber-500">—</span>
                <span>Meta Pixel (Conversion Tracking & Remarketing)</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-500">—</span>
                <span>Google Tag Manager (Analytical Performance)</span>
              </li>
            </ul>
            <p className="text-sm italic">
              These tools place small data files (cookies) on your device to
              collect information regarding your browsing behavior. This data is
              used solely for studio marketing and performance analysis.
            </p>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-6">
            <h2 className="text-xl font-serif italic text-white uppercase tracking-widest">
              03. Personal Data
            </h2>
            <p>
              Information provided through our{" "}
              <span className="text-white">Studio Inquiry Form</span> (Name,
              Email, Message) is used exclusively for correspondence. We do not
              sell or distribute your contact information to outside entities.
            </p>
          </section>

          {/* SECTION 4 */}
          <section className="space-y-6">
            <h2 className="text-xl font-serif italic text-white uppercase tracking-widest">
              04. Your Rights
            </h2>
            <p>
              You have the right to request access to the data we hold, or to
              request its deletion. You may also disable cookies through your
              browser settings to opt-out of third-party tracking.
            </p>
          </section>

          {/* CONTACT INFO */}
          <div className="pt-16 border-t border-white/5">
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 mb-4">
              Inquiries regarding data:
            </p>
            <a
              href="mailto:Toyestudios@gmail.com"
              className="text-amber-500 hover:text-white transition-colors underline underline-offset-8 decoration-amber-500/30"
            >
              Toyestudios@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
