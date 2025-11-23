"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CURATOR_SECTIONS = [
  {
    title: "Curating Social Experiences: The Sip & Paint",
    desc: "This photo captures the vibrant atmosphere from one of the many Sip & Paint events I host. Each session is carefully designed to be more than just an art class; it's a curated social experience. My goal is to create a relaxed and welcoming environment where creativity can flourish without pressure.",
    img: "/brand/98.png",
  },
  {
    title: "Public Engagement: The 'Paint with Olatoye' Series",
    desc: "This image is from one of my many 'Paint with Olatoye' sessions, a recurring public engagement series in partnership with the University of Essex. During key university events, I run a dedicated booth to deliver interactive and engaging art activities. The goal is to create a welcoming creative space that encourages students and parents to pause their day and make something together.",
    img: "/brand/m.png",
  },
  {
    title: "Community Outreach: Art Beyond the Gallery Walls",
    desc: "Following a major show I co-curated, we launched this community outreach programme to extend the project's impact. This hands-on workshop, where participants decorated boxes, was designed to turn passive viewers into active creators.",
    img: "/brand/n.png",
  },
  {
    title: "Curating Personal Moments",
    desc: "My curatorial mindset extends to the most personal projects. When commissioned to create a portrait for a couple's 40th wedding anniversary, the work wasn't finished until the final presentation. The goal was not just to deliver art, but to curate a deeply meaningful moment. Seeing their happy reactions affirmed that the experience of receiving art is as important as the art itself.",
    img: "/brand/o.png",
  },
];

export default function ArtCurator() {
  return (
    <section className="relative artcurator-container max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 border-t border-white/5">
      {/* 🔥 Soft vignette background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10
          bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12 sm:mb-16 px-2 sm:px-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-extrabold mb-4">
          Art CURATOR
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          With a foundation of over 10 years as a professional artist, I bring a
          creator&apos;s insight and a strategic vision to my curatorial
          practice. My approach is informed by a Master&apos;s degree in
          Curating and my current role as Creative Director at Talk Canvas
          Gallery. Curating is not simply arranging objects; it&apos;s
          architecting experiences, building community, and fostering dialogue.
        </p>
      </motion.div>

      {/* Curator Sections */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {CURATOR_SECTIONS.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="flex flex-col lg:flex-row items-center gap-6"
          >
            {/* Image */}
            <div className="relative w-full lg:w-1/2 aspect-[3/4] rounded-xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src={section.img}
                alt={section.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Text */}
            <div className="lg:w-1/2 text-white px-2 sm:px-0">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {section.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {section.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
