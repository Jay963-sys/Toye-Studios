"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
  {
    title: "Professional Portraits",
    desc: "Timeless, expressive portraits crafted with an artist’s eye. Whether it’s headshots, family photos, or a personal creative session, I capture authenticity and emotion in every frame.",
    img: "/brand/23.png",
  },
  {
    title: "Outdoor Photoshoots",
    desc: "Natural light, open landscapes, and genuine movement come together to create warm, vibrant images. Perfect for families, couples, and expressive solo sessions.",
    img: "/brand/71.png",
  },
  {
    title: "Graduation Photography",
    desc: "Milestone moments filled with pride and joy. I focus on candid, meaningful expressions that help you relive the excitement of your achievement.",
    img: "/brand/95.png",
  },
  {
    title: "Birthday Photography",
    desc: "Celebrate freely while I document the day. Candid, joyful, memory-rich storytelling for clients who want authentic coverage of their special moments.",
    img: "/brand/dd.png",
  },
  {
    title: "Wedding & Pre-Wedding",
    desc: "Elegant, romantic portraits blended with documentary-style storytelling. Every detail and heartfelt moment beautifully preserved.",
    img: "/brand/pt.png",
  },
  {
    title: "Event Photography",
    desc: "Candid, dynamic coverage of events that matter. From corporate gatherings to private parties, I capture the energy and essence of your special occasions.",
    img: "/brand/47.png",
  },
];

export default function PhotographyServices() {
  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-8 md:px-16 bg-black/20 border-t border-white/5 overflow-hidden">
      {/* 🔥 Soft vignette background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10
          bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]"
      />

      {/* Section Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4"
        >
          Photography Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-gray-300 text-sm sm:text-base leading-relaxed mx-auto max-w-3xl"
        >
          From intimate portraits to grand celebrations, I offer a range of
          photography services designed to turn moments into timeless visual
          stories. Each session is crafted with attention to detail, emotion,
          and cinematic artistry — ensuring images you’ll treasure for a
          lifetime.
        </motion.p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-70" />
            </div>

            {/* Text */}
            <div className="p-4 sm:p-6 relative z-10 -mt-10 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
