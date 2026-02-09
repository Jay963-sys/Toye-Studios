"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactElement } from "react";
import Link from "next/link";

const STATS = [
  { val: "10+", label: "Years Experience" },
  { val: "500+", label: "Students Taught" },
  { val: "50+", label: "Exhibitions" },
  { val: "100+", label: "Works Created" },
];

const TIMELINE = [
  {
    year: "2014",
    event: "The Genesis",
    desc: "Began the exploration of visual arts and photography.",
  },
  {
    year: "2018",
    event: "First Exhibition",
    desc: "Debuted 'Silent Dialogue' at a curated local gallery.",
  },
  {
    year: "2020",
    event: "Curatorial Mastery",
    desc: "Completed advanced studies in Curating to deepen artistic context.",
  },
  {
    year: "2022",
    event: "Talk Canvas",
    desc: "Appointed Creative Director at Talk Canvas Gallery.",
  },
  {
    year: "2024",
    event: "The Atelier",
    desc: "Launched a global teaching program for hyperrealistic techniques.",
  },
];

const BEHIND_SCENES = [
  { src: "/hand/t1.jpg", caption: "Community Energy" },
  { src: "/brand/get.png", caption: "The Workspace" },
  { src: "/hand/t16.jpg", caption: "Teaching Session" },
  { src: "/brand/m.png", caption: "Exhibition Prep" },
];

export default function AboutPage(): ReactElement {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-32 px-4 md:px-12 overflow-hidden">
      {/* 1. BACKGROUND TEXTURE & AMBIENCE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 2. HERO: THE BIOGRAPHY */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <span className="text-[10px] uppercase tracking-[1em] text-amber-500/60 block mb-6">
              Biography
            </span>
            <h1 className="text-6xl md:text-[10rem] font-serif italic leading-none tracking-tighter mb-12 uppercase">
              Olatoye{" "}
              <span className="text-amber-500 not-italic font-light">
                Salawudeen
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] bg-zinc-900 border border-white/5"
            >
              <Image
                src="/brand/p.png"
                alt="Olatoye Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-4 border border-white/10 pointer-events-none" />
            </motion.div>

            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 italic font-serif">
                &quot;Art is not just about creation; it&apos;s about
                connection. Every piece is a testament to the quiet dialogue
                between artist and observer.&quot;
              </p>
              <div className="h-px w-20 bg-amber-500/40" />
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                With a decade spent mastering the intricate dance of light and
                shadow, my journey has evolved from simple curiosity to a
                professional practice in hyperrealistic portraiture,
                photography, and curatorial direction.
              </p>

              {/* STATS STRIP */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                {STATS.map((s, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-white">{s.val}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-amber-500/50">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. ARCHIVAL TIMELINE */}
        <div className="mb-40 pt-20 border-t border-white/5">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] block mb-20">
            The Evolution_Timeline
          </span>
          <div className="space-y-24">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline group"
              >
                <div className="md:col-span-2 text-4xl font-serif italic text-amber-500/40 group-hover:text-amber-500 transition-colors">
                  {item.year}
                </div>
                <div className="md:col-span-4 text-2xl uppercase tracking-tighter font-light">
                  {item.event}
                </div>
                <div className="md:col-span-6 text-gray-500 font-light text-lg">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. BEHIND THE SCENES: STUDIO WALL */}
        <div className="mb-40">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-serif italic">
              Studio <span className="text-amber-500">&</span> Soul
            </h2>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest pb-2">
              Behind the Scenes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {BEHIND_SCENES.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="relative aspect-square bg-zinc-900 border border-white/5 overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[9px] font-mono text-white/40 group-hover:text-white uppercase tracking-widest">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. CTA: FINAL INVITATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative py-24 px-8 border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.02] to-transparent text-center overflow-hidden"
        >
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter">
              Let&apos;s Create <br />{" "}
              <span className="text-amber-500">Something Real.</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-500 font-light">
              Whether it&apos;s a legacy commission, a creative collaboration,
              or a journey through the foundations of art, I invite you to my
              studio.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
              <Link
                href="/contact"
                className="px-12 py-4 bg-amber-500 text-black font-mono text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-500"
              >
                Contact Studio
              </Link>
              <Link
                href="/artworks"
                className="px-12 py-4 border border-white/10 text-white/40 font-mono text-[10px] uppercase tracking-[0.4em] hover:text-white hover:border-white transition-all"
              >
                Explore Archive
              </Link>
            </div>
          </div>
          {/* Subtle logo bg mark */}
          <div className="absolute -bottom-20 -right-20 text-[20rem] font-serif text-white/[0.02] italic pointer-events-none select-none">
            T
          </div>
        </motion.div>
      </div>
    </section>
  );
}
