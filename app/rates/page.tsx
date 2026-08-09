// app/rates/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement } from "react";

const PACKAGES = [
  {
    name: "The Study",
    size: "30 × 41 cm",
    price: "£450",
    book: "£225 to book",
    figure: "+£150 / figure",
    note: "A close crop, head and shoulders. Holds a wall on its own.",
  },
  {
    name: "The Portrait",
    size: "41 × 51 cm",
    price: "£650",
    book: "£325 to book",
    figure: "+£250 / figure",
    note: "The size most people choose. Reads clearly from across a room.",
  },
  {
    name: "The Feature",
    size: "51 × 61 cm",
    price: "£950",
    book: "£475 to book",
    figure: "+£350 / figure",
    note: "Room for hands, posture and clothing detail. Takes a mantel or hallway.",
  },
  {
    name: "The Heirloom",
    size: "61 × 71 cm",
    price: "£1,400",
    book: "£700 to book",
    figure: "+£500 / figure",
    note: "The largest I take on. Full-body and group compositions sit here.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Send your photo",
    body: "High resolution, good light, taken close. I'll tell you honestly whether it will make a strong drawing before you pay anything.",
  },
  {
    n: "02",
    title: "Pay half to book",
    body: "Non-refundable — it holds studio time I can't resell. UK clients can split it into three interest-free monthly payments via PayPal or Stripe.",
  },
  {
    n: "03",
    title: "Up to 30 working days",
    body: "From an approved photo and cleared deposit. Progress photos come to you as the piece develops, so nothing is a surprise.",
  },
  {
    n: "04",
    title: "Balance, then it ships",
    body: "Framed, packed and sent by tracked courier from the Basingstoke studio.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "My wife went quiet when she opened it. That has never happened with a gift before.",
    name: "Daniel A.",
    place: "Reading",
  },
  {
    quote:
      "I sent him a blurry photo from 2011 and got my father's face back. It's in the hallway where everyone sees it.",
    name: "Segun O.",
    place: "London",
  },
];

export default function RatesPage(): ReactElement {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-32 px-4 md:px-12 overflow-hidden">
      {/* BACKGROUND TEXTURE — matched to contact page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.02)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <span className="text-[10px] uppercase tracking-[1em] text-amber-500/60 block mb-6">
            Commission Rates 2026
          </span>
          <h1 className="text-5xl md:text-[8rem] font-serif italic leading-[0.9] tracking-tighter mb-8 uppercase">
            Made entirely{" "}
            <span className="text-amber-500 not-italic font-light">
              by hand
            </span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Graphite and charcoal pencil on archival Strathmore paper. Ten years
            drawing portraits full time — 114 finished pieces, each one by
            commission.
          </p>
        </motion.div>

        {/* PRICING */}
        <div className="mb-12">
          <h2 className="text-[10px] font-mono text-amber-500/50 uppercase tracking-widest mb-2">
            Sizes &amp; Prices · One Figure
          </h2>
          <div className="h-px w-12 bg-amber-500/40 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-8">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-black p-8 md:p-10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-serif italic group-hover:text-amber-500 transition-colors">
                  {p.name}
                </h3>
                <span className="text-2xl md:text-3xl font-light text-amber-500">
                  {p.price}
                </span>
              </div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">
                {p.size}
              </p>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-8">
                {p.note}
              </p>
              <div className="flex items-center gap-6 border-t border-white/5 pt-5 text-[11px] font-mono uppercase tracking-widest">
                <span className="text-white/70">{p.book}</span>
                <span className="text-gray-600">{p.figure}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-gray-600 font-light leading-relaxed max-w-3xl mb-32">
          Every piece is built to the same standard — size is the only thing
          that moves the price. Each additional figure is priced separately.
          Framing, archival mounting and tracked UK delivery are included.
        </p>

        {/* HOW IT GOES */}
        <div className="mb-12">
          <h2 className="text-[10px] font-mono text-amber-500/50 uppercase tracking-widest mb-2">
            How It Goes
          </h2>
          <div className="h-px w-12 bg-amber-500/40 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <span className="text-4xl font-serif italic text-amber-500/30">
                {s.n}
              </span>
              <h3 className="text-lg font-light">{s.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TESTIMONIALS */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-8 border-l border-amber-500/20 bg-white/[0.01] space-y-4"
            >
              <p className="text-lg md:text-xl font-serif italic text-white/80 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-[10px] font-mono text-amber-500/50 uppercase tracking-widest">
                {t.name} · {t.place}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-4">
              Send a size and a photo,
              <br />
              and I&apos;ll hold your slot.
            </h2>
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Olatoye Salawudeen · Basingstoke, UK · Worldwide clients
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center px-10 py-4 bg-amber-500 text-black font-mono text-xs uppercase tracking-widest hover:bg-amber-400 transition-colors"
          >
            Request a commission
          </Link>
        </div>
      </div>
    </section>
  );
}
