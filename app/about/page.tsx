"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"story" | "values" | "experience">(
    "story"
  );

  const IMAGES = [
    { src: "/brand/p.png", alt: "Artist Portrait", caption: "At an Event" },
    {
      src: "/brand/o.png",
      alt: "Creative Giving",
      caption: "Creative Giving",
    },
    { src: "/brand/get.png", alt: "Studio Workspace", caption: "My workspace" },
    {
      src: "/brand/n.png",
      alt: "Community Engagement",
      caption: "Teaching & sharing",
    },
  ];

  const TIMELINE = [
    {
      year: "2014",
      event: "Began artistic journey",
      description: "Started exploring visual arts and photography",
    },
    {
      year: "2018",
      event: "First major exhibition",
      description: "Showcased work at local gallery",
    },
    {
      year: "2020",
      event: "Master's in Curating",
      description: "Completed advanced studies in art curation",
    },
    {
      year: "2022",
      event: "Creative Director",
      description: "Joined Talk Canvas Gallery as Creative Director",
    },
    {
      year: "2024",
      event: "Teaching Program",
      description: "Launched comprehensive workshop series",
    },
  ];

  const VALUES = [
    {
      icon: "",
      title: "Creative Expression",
      description:
        "Art as a universal language that transcends boundaries and connects souls",
    },
    {
      icon: "",
      title: "Community Impact",
      description:
        "Building bridges through collaborative projects and inclusive spaces",
    },
    {
      icon: "",
      title: "Lifelong Learning",
      description:
        "Continuously evolving as an artist, educator, and human being",
    },
    {
      icon: "",
      title: "Authenticity",
      description:
        "Staying true to my vision while embracing diverse perspectives",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
              Artist · Educator · Curator
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
            A multidisciplinary creative dedicated to storytelling, community
            building,
            <br className="hidden sm:block" />
            and inspiring others through the transformative power of art.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div>
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text mb-1">
              10+
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">
              Years Experience
            </div>
          </div>
          <div className="w-px bg-gray-800 hidden sm:block" />
          <div>
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text mb-1">
              500+
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">
              Students Taught
            </div>
          </div>
          <div className="w-px bg-gray-800 hidden sm:block" />
          <div>
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text mb-1">
              50+
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">
              Exhibitions
            </div>
          </div>
          <div className="w-px bg-gray-800 hidden sm:block" />
          <div>
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text mb-1">
              100+
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">
              Artworks Created
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content with Tabs */}
      <div className="max-w-6xl mx-auto mb-20">
        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { id: "story" as const, label: "My Story" },
            { id: "values" as const, label: "Core Values" },
            { id: "experience" as const, label: "Experience" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white shadow-lg"
                  : "text-gray-400 hover:text-white border border-black/10 hover:border-black/30"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeAboutTab"
                  className="absolute inset-0 bg-gradient-to-r from-gray-500/80 to-gray-400/80 rounded-full"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "story" && (
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg">
                  My artistic journey began over a decade ago with a simple
                  fascination:
                  <span className="text-white font-medium">
                    {" "}
                    how can emotions be translated into visual form?
                  </span>{" "}
                  What started as curiosity evolved into a lifelong passion for
                  creating art that speaks to the human experience.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I&apos;ve explored multiple mediums—from traditional painting
                  and drawing to digital art and photography—each offering
                  unique ways to tell stories and evoke emotions. My work has
                  been featured in galleries across the region, and I&apos;ve
                  had the privilege of connecting with diverse audiences through
                  exhibitions and collaborative projects.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Beyond creating, I found my calling in{" "}
                  <span className="text-white font-medium">
                    teaching and curating
                  </span>
                  . After completing my Master&apos;s degree in Curating, I
                  joined Talk Canvas Gallery as Creative Director, where I help
                  shape exhibitions that challenge perspectives and celebrate
                  creativity. Teaching has become one of the most rewarding
                  aspects of my practice—watching students discover their
                  artistic voice brings me immense joy.
                </p>
              </div>

              {/* Quote */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 mt-12">
                <div className="absolute -top-4 left-8 text-6xl text-purple-400 opacity-50">
                  <p>“</p>
                </div>
                <p className="text-xl sm:text-2xl font-serif text-gray-200 italic relative z-10 text-center">
                  Art is not just about creation; it&apos;s about connection.
                  Every piece I make, every class I teach, and every exhibition
                  I curate is meant to inspire and bring people closer to the
                  beauty of creativity.
                </p>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {VALUES.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="p-8 rounded-2xl bg-gradient-to-br from-black-900 to-black-800 border border-black/10 hover:border-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-black-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Timeline */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  Career Timeline
                </h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black-900 via-black-700 to-black-900" />

                  <div className="space-y-8">
                    {TIMELINE.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="relative pl-20"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 border-4 border-black" />

                        <div className="bg-gradient-to-br from-black-800 to-black-900 p-6 rounded-xl border border-black/10 hover:border-gray-800/50 transition-all duration-300">
                          <div className="text-gray-400 font-semibold mb-1">
                            {item.year}
                          </div>
                          <h4 className="text-xl font-semibold mb-2">
                            {item.event}
                          </h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-16">
                <div className="space-y-6"></div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Image Gallery */}
      <motion.div
        className="max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-serif text-center mb-12">
          Behind the Scenes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center bg-gradient-to-br from-black-900/20 to-black-800/20 border border-black/10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">
              Let&apos;s Create Together
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Whether you&apos;re looking to commission artwork, collaborate on
              a project, or join a workshop, I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-500 text-white font-medium hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="/photography"
                className="px-8 py-4 rounded-full border border-black/20 bg-black/5 text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
