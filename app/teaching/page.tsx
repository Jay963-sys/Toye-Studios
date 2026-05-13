"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, ReactElement } from "react";
import Link from "next/link";

type ClassType = {
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  students: string;
  skills: string[];
  price: string;
};

const CLASSES: ClassType[] = [
  {
    title: "Foundations of Form",
    category: "Beginner",
    description:
      "Master the architecture of the human face. We strip away complexity to focus on the raw geometry of line, proportion, and light.",
    image: "/brand/46.png",
    duration: "6 weeks",
    students: "Max 12",
    skills: ["Anatomy", "Shading", "Perspective", "Composition"],
    price: "From £299",
  },
  {
    title: "Hyperrealism Masterclass",
    category: "Intermediate",
    description:
      "Transition from sketching to breathing life into paper. Learn advanced charcoal techniques to capture skin texture and liquid eyes.",
    image: "/brand/get.png",
    duration: "8 weeks",
    students: "Max 10",
    skills: ["Texture", "Tonal Depth", "Charcoal Mastery", "Detailing"],
    price: "From £399",
  },
  {
    title: "Professional Atelier",
    category: "Professional",
    description:
      "Personalized mentorship for those ready to turn their passion into a brand. From portfolio curation to professional direction.",
    image: "/brand/77.png",
    duration: "Custom",
    students: "1-on-1",
    skills: ["Portfolio", "Creative Direction", "Branding", "Exhibition"],
    price: "Custom Quote",
  },
];

export default function TeachingPage(): ReactElement {
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-32 px-4 md:px-12 overflow-hidden">
      {/* 1. BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* 2. ATELIER HEADER */}
      <div className="relative z-10 max-w-6xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[1em] text-purple-500/60 block mb-6">
            Educational Atelier
          </span>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-none tracking-tighter mb-8 uppercase">
            Art <span className="text-purple-500">&</span> Mentorship
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            I don&apos;t just teach techniques; I teach a way of seeing. From
            the first stroke to professional mastery, we explore the depth of
            hyperrealism together.
          </p>
        </motion.div>

        {/* VALUE PROPS: Refined minimal bar */}
        <div className="flex flex-wrap gap-8 md:gap-16 mt-20 border-y border-white/5 py-10">
          {[
            { label: "METHOD", val: "Hands-On Studio" },
            { label: "INTIMACY", val: "Small Group / 1-on-1" },
            { label: "OUTCOME", val: "Portfolio Ready" },
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[9px] font-mono text-purple-500/50 tracking-widest">
                {stat.label}
              </p>
              <p className="text-sm font-light uppercase tracking-widest text-white/80">
                {stat.val}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. STAGGERED WORKSHOP LIST (Avoids "too much stuff" grid) */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-32 md:space-y-60">
        {CLASSES.map((cls, i) => (
          <motion.div
            key={cls.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-24 items-center`}
          >
            {/* Class Image - Cinematic Box */}
            <div
              className="relative w-full md:w-1/2 aspect-[4/5] bg-zinc-900 group cursor-pointer overflow-hidden border border-white/5 shadow-2xl"
              onClick={() => setSelectedClass(cls)}
            >
              <Image
                src={cls.image}
                alt={cls.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-mono text-purple-400 bg-black/40 backdrop-blur-md px-3 py-1 border border-purple-500/20 uppercase tracking-widest">
                  {cls.category}
                </span>
              </div>
            </div>

            {/* Class Info */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
                  Syllabus_0{i + 1}
                </span>
                <h3 className="text-4xl md:text-6xl font-serif italic text-white uppercase tracking-tighter">
                  {cls.title}
                </h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  {cls.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                <div>
                  <p className="text-[9px] font-mono text-purple-500/50 uppercase mb-1">
                    Duration
                  </p>
                  <p className="text-sm text-white/80">{cls.duration}</p>
                </div>
                <div>
                  <p className="text-[9px] font-mono text-purple-500/50 uppercase mb-1">
                    Price
                  </p>
                  <p className="text-sm text-white/80">{cls.price}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-black text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-purple-500 hover:text-white transition-all duration-500"
                >
                  Enroll Now
                </Link>
                <button
                  onClick={() => setSelectedClass(cls)}
                  className="px-8 py-4 border border-white/10 text-white/40 text-[10px] font-mono uppercase tracking-[0.3em] hover:text-white hover:border-white transition-all"
                >
                  View Curriculum
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. SYLLABUS MODAL */}
      <AnimatePresence>
        {selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClass(null)}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-zinc-900/50 border border-white/10 p-8 md:p-16 rounded-sm relative"
            >
              <button
                onClick={() => setSelectedClass(null)}
                className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
              >
                CLOSE [ESC]
              </button>

              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-purple-500 font-mono text-xs uppercase tracking-widest">
                    {selectedClass.category}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-serif italic text-white uppercase">
                    {selectedClass.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">
                    Curriculum_Skills
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedClass.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 text-gray-400 group"
                      >
                        <div className="w-1 h-1 bg-purple-500 group-hover:scale-150 transition-transform" />
                        <span className="text-sm uppercase tracking-widest font-light">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block text-center py-6 border border-purple-500/40 text-purple-400 hover:bg-purple-500 hover:text-white transition-all text-[10px] font-mono uppercase tracking-[0.5em]"
                >
                  Start Your Journey
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
