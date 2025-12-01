"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PORTRAIT_IMAGES = [
  "/brand/b.png",
  "/brand/a.png",
  "/brand/d.png",
  "/brand/pop.png",
  // add as many best works as you want
];

export default function PortraitArtistSection() {
  const [index, setIndex] = useState(0);
  const [commissionsOpen, setCommissionsOpen] = useState(false);
  const [classesOpen, setClassesOpen] = useState(false);

  const next = () => setIndex((i) => (i + 1) % PORTRAIT_IMAGES.length);
  const prev = () =>
    setIndex((i) => (i === 0 ? PORTRAIT_IMAGES.length - 1 : i - 1));

  return (
    <section className="relative py-20 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center">
          Portrait Artist & Visual Storyteller
        </h3>

        {/* Single Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12 group">
          <Image
            src={PORTRAIT_IMAGES[index]}
            alt="Portrait work"
            width={1000}
            height={1200}
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          />
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            →
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {PORTRAIT_IMAGES.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dropdowns */}
        <div className="max-w-3xl mx-auto space-y-4">
          <button
            onClick={() => setCommissionsOpen(!commissionsOpen)}
            className="w-full flex justify-between items-center bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left transition"
          >
            <span className="text-xl font-medium text-white">Commissions</span>
            {commissionsOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>
          {commissionsOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-gray-300 space-y-3">
                <p>Hyper-realistic portraits in pencil, charcoal, or oil.</p>
                <p>Personal sittings or from reference photos.</p>
                <p>
                  Pricing starts at £450 • Full details on the Commissions page
                  →
                </p>
              </div>
            </motion.div>
          )}

          <button
            onClick={() => setClassesOpen(!classesOpen)}
            className="w-full flex justify-between items-center bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left transition"
          >
            <span className="text-xl font-medium text-white">
              Art Classes & Private Events
            </span>
            {classesOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>
          {classesOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-gray-300">
                <p>
                  One-on-one mentorship • Group workshops • Private art parties
                </p>
                <p>Beginner to advanced • In-person (Essex/London) or online</p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
