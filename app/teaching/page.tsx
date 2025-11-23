"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ClassType = {
  title: string;
  category: string;
  description: string;
  image: string;
  duration?: string;
  students?: string;
  skills?: string[];
  price?: string;
};

const CLASSES: ClassType[] = [
  {
    title: "Drawing Basics",
    category: "Beginner",
    description:
      "Master the foundations of line, form, and proportion. Perfect for those starting their artistic journey.",
    image: "/brand/46.png",
    duration: "6 weeks",
    students: "Max 12",
    skills: ["Line work", "Shading", "Perspective", "Composition"],
    price: "Starting at $299",
  },
  {
    title: "Creative Workshop",
    category: "Intermediate",
    description:
      "Discover and develop your unique artistic voice through mixed media experimentation and creative exploration.",
    image: "/brand/get.png",
    duration: "8 weeks",
    students: "Max 10",
    skills: [
      "Mixed media",
      "Color theory",
      "Experimentation",
      "Style development",
    ],
    price: "Starting at $399",
  },
  {
    title: "Photography Session",
    category: "Advanced",
    description:
      "Advanced techniques in lighting, composition, and visual storytelling to elevate your photography.",
    image: "/brand/let.png",
    duration: "4 weeks",
    students: "Max 8",
    skills: ["Lighting", "Composition", "Post-processing", "Storytelling"],
    price: "Starting at $499",
  },
  {
    title: "Brand Collaboration",
    category: "Professional",
    description:
      "Tailored partnership opportunities and custom creative projects designed for artists, brands, and businesses.",
    image: "/brand/77.png",
    duration: "Custom",
    students: "1-on-1 / Groups",
    skills: [
      "Brand identity",
      "Creative direction",
      "Project management",
      "Portfolio building",
    ],
    price: "Custom pricing",
  },
];

const CATEGORIES = [
  ".",
  // "Beginner",
  // "Intermediate",
  // "Advanced",
  // "Professional",
];

export default function TeachingPage() {
  const [filter, setFilter] = useState("All");
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);

  const filteredClasses =
    filter === "All" ? CLASSES : CLASSES.filter((c) => c.category === filter);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-purple-400 font-medium">
              Learn & Grow
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
            Teaching & Workshops
          </h1>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
            Structured classes, hands-on workshops, and personalized mentorship
            programs.
            <br className="hidden sm:block" />
            From foundational skills to professional development, I guide
            students at every level.
          </p>
        </motion.div>

        {/* Value Props */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-black-500/10 to-white-500/10 border border-black/10">
            <h3 className="font-semibold mb-2">Hands-On Learning</h3>
            <p className="text-sm text-gray-400">
              Practical exercises and real-world projects
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-black-500/10 to-white-500/10 border border-black/10">
            <h3 className="font-semibold mb-2">Small Classes</h3>
            <p className="text-sm text-gray-400">
              Personalized attention and feedback
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-black-500/10 to-white-500/10 border border-black/10">
            <h3 className="font-semibold mb-2">Career Growth</h3>
            <p className="text-sm text-gray-400">
              Build skills for professional success
            </p>
          </div>
        </motion.div>
      </div>

      {/* Category Filters */}
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === c
                  ? "text-white shadow-lg shadow-purple-500/20"
                  : "text-gray-400 hover:text-white border border-black/10 hover:border-black/30"
              }`}
            >
              {filter === c && (
                <motion.div
                  layoutId="activeClassFilter"
                  className="absolute inset-0 bg-gradient-to-r from-gray-500/80 to-gray-700/80 rounded-full"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        className="text-center text-gray-500 text-sm mb-8"
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {filteredClasses.length}{" "}
        {filteredClasses.length === 1 ? "class" : "classes"} available
      </motion.div>

      {/* Classes Grid */}
      <motion.div className="max-w-6xl mx-auto" layout>
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClasses.map((cls, i) => (
              <motion.div
                key={cls.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-zinc-800 to-zinc-900 border border-black/10 flex flex-col"
                onClick={() => setSelectedClass(cls)}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={cls.image}
                    alt={cls.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    {cls.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-1">
                    {cls.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{cls.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>{cls.students}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-300">
                        {cls.price}
                      </span>
                      <span className="text-xs text-gray-500 group-hover:text-white transition-colors">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 border-2 border-gray-500/0 group-hover:border-gray-500/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-br from-white-500/20 to-black-500/20 border border-black/10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Join a community of creative learners. Whether you&apos;re just
              starting out or looking to refine your professional skills,
              there&apos;s a place for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                Book a Class
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full border border-black/20 bg-black/5 text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Class Details Modal */}
      <AnimatePresence>
        {selectedClass && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClass(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group"
              onClick={() => setSelectedClass(null)}
            >
              <svg
                className="w-6 h-6 text-white group-hover:rotate-90 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-square md:aspect-auto md:min-h-[600px]">
                    <Image
                      src={selectedClass.image}
                      alt={selectedClass.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Details */}
                  <div className="p-8 md:p-10 flex flex-col bg-gradient-to-br from-zinc-900 to-black">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {selectedClass.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {selectedClass.description}
                    </p>

                    {/* Meta Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
                      <div>
                        <div className="text-gray-500 text-sm mb-1">
                          Duration
                        </div>
                        <div className="text-white font-medium">
                          {selectedClass.duration}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-sm mb-1">
                          Class Size
                        </div>
                        <div className="text-white font-medium">
                          {selectedClass.students}
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                        What You&apos;ll Learn
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedClass.skills?.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-white/10 text-white text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-gray-500 text-sm mb-1">
                            Investment
                          </div>
                          <div className="text-2xl font-bold text-purple-300">
                            {selectedClass.price}
                          </div>
                        </div>
                      </div>

                      <a
                        href="/contact"
                        className="block w-full px-6 py-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 text-white font-medium text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                      >
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
