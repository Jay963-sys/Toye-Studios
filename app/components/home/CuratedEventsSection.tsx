"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const EVENT_IMAGES = [
  { src: "/brand/98.png", title: "Sip & Paint Event" },
  { src: "/brand/888.png", title: "Paint with Olatoye Series" },
  { src: "/brand/n.png", title: "Community Workshop" },
  { src: "/brand/777.png", title: "Creative Experience" },
];

export default function CuratedEvents() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showServices, setShowServices] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % EVENT_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + EVENT_IMAGES.length) % EVENT_IMAGES.length
    );
  };

  return (
    <section className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-white/5 overflow-hidden">
      {/* Soft vignette background */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-center mb-12 px-2 sm:px-0"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4">
          Curated Events
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          Beyond creating art, I curate transformative experiences that bring
          people together through creativity. From interactive workshops to
          brand collaborations, each event is thoughtfully designed to inspire,
          engage, and create lasting memories.
        </p>
      </motion.div>

      {/* Carousel Section */}
      <div className="relative max-w-4xl mx-auto mb-12">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src={EVENT_IMAGES[currentImage].src}
            alt={EVENT_IMAGES[currentImage].title}
            fill
            className="object-cover"
          />

          {/* Carousel Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
          >
            →
          </button>

          {/* Image Info Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">
              {EVENT_IMAGES[currentImage].title}
            </h3>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {EVENT_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImage ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Dropdown */}
      <div className="max-w-3xl mx-auto">
        <div className="border border-white/20 rounded-lg overflow-hidden">
          <button
            onClick={() => setShowServices(!showServices)}
            className="w-full px-6 py-4 bg-white/5 hover:bg-white/10 transition-all flex justify-between items-center text-white"
          >
            <span className="font-semibold text-lg">Event Services</span>
            <span className="text-2xl">{showServices ? "−" : "+"}</span>
          </button>
          {showServices && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 py-6 bg-white/5 text-gray-300"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Creative Workshops
                  </h4>
                  <p className="text-sm">
                    Hands-on art sessions designed to unlock creativity and
                    build community
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Brand Collaborations
                  </h4>
                  <p className="text-sm">
                    Custom creative partnerships and campaigns for businesses
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Team Building Art Offerings
                  </h4>
                  <p className="text-sm">
                    Corporate art experiences that foster collaboration and
                    creativity
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Participatory Art Programs
                  </h4>
                  <p className="text-sm">
                    Community engagement through interactive art installations
                    and projects
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Curated & Creative Experiences
                  </h4>
                  <p className="text-sm">
                    Bespoke events tailored to your vision and audience
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    The Sketch Social
                  </h4>
                  <p className="text-sm">
                    Introduction to drawing and charcoal techniques in a
                    relaxed, social setting
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
