"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Workshop = {
  title: string;
  desc: string;
  img: string;
  duration: string;
  price: string;
  level: string;
  spots: string;
};

const WORKSHOPS: Workshop[] = [
  {
    title: "Drawing Basics",
    desc: "Master foundations of line, form and proportion. Perfect for beginners.",
    img: "/brand/46.png",
    duration: "6 weeks",
    price: "$299",
    level: "Beginner",
    spots: "12 spots left",
  },
  {
    title: "Creative Workshop",
    desc: "Explore your artistic voice through mixed media and experimentation.",
    img: "/brand/get.png",
    duration: "8 weeks",
    price: "$399",
    level: "Intermediate",
    spots: "8 spots left",
  },
  {
    title: "Photography Session",
    desc: "Capture unique moments with professional lighting and composition.",
    img: "/brand/let.png",
    duration: "4 weeks",
    price: "$499",
    level: "Advanced",
    spots: "6 spots left",
  },
  {
    title: "Brand Collaboration",
    desc: "Custom projects and creative partnerships for businesses and artists.",
    img: "/brand/77.png",
    duration: "Custom",
    price: "Custom",
    level: "Professional",
    spots: "Available",
  },
];

export default function Workshops() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(
    null
  );
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service) {
      alert("Please fill out all required fields");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const scrollToForm = (workshopTitle?: string) => {
    if (workshopTitle) {
      setForm({ ...form, service: workshopTitle });
    }
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24">
      {/* Soft vignette glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10
    bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%)]
"
      />

      {/* Header Section */}
      <div className="text-center mb-16 px-2 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4"></div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
            Workshops & Services
          </h2>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            Transform your creative journey with hands-on workshops,
            professional services,
            <br className="hidden sm:block" />
            and personalized guidance designed to help you master your craft.
          </p>
        </motion.div>
      </div>

      {/* Workshop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {WORKSHOPS.map((workshop, i) => (
          <motion.div
            key={workshop.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-black-800 to-black-900 border border-black/10 hover:border-black-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-black-500/20 flex flex-col cursor-pointer"
            onClick={() => setSelectedWorkshop(workshop)}
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={workshop.img}
                alt={workshop.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gray-300 transition-colors">
                {workshop.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 flex-1 line-clamp-2">
                {workshop.desc}
              </p>

              {/* Meta Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
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
                    <span>{workshop.duration}</span>
                  </div>
                  <span className="text-purple-300 font-semibold text-sm">
                    {workshop.price}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToForm(workshop.title);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-black-900 to-black-900 border border-black-800 text-gray-400 font-medium hover:from-gray-500/30 hover:to-gray-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-500/20"
              >
                Book Now
              </button>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-gray-500/0 group-hover:border-gray-500/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Workshop Details Modal */}
      <AnimatePresence>
        {selectedWorkshop && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWorkshop(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group"
              onClick={() => setSelectedWorkshop(null)}
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
              className="relative max-w-4xl w-full bg-zinc-900 rounded-3xl overflow-hidden"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedWorkshop.img}
                    alt={selectedWorkshop.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col">
                  <h2 className="text-3xl font-serif mb-4">
                    {selectedWorkshop.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedWorkshop.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Duration</div>
                      <div className="text-white font-medium">
                        {selectedWorkshop.duration}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">
                        Investment
                      </div>
                      <div className="text-purple-300 font-bold text-lg">
                        {selectedWorkshop.price}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button
                      onClick={() => {
                        setSelectedWorkshop(null);
                        scrollToForm(selectedWorkshop.title);
                      }}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      Book This Workshop
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Form Section */}
      <motion.div
        id="booking-form"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-black-900/50 to-black-900/50 border border-white/1 rounded-3xl p-8 sm:p-12 backdrop-blur-lg shadow-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

        <div className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-serif text-center mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-gray-400 text-center mb-10 text-base sm:text-lg">
              Book your spot today or request a custom service. We&apos;ll
              respond within 24 hours.
            </p>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Request submitted! We&apos;ll be in touch soon.</span>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder=""
                  className={`w-full bg-black/40 px-4 py-3 rounded-xl border text-white outline-none transition-all duration-300 ${
                    focusedField === "name"
                      ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                      : "border-white/10 hover:border-white/20"
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder=""
                  className={`w-full bg-black/40 px-4 py-3 rounded-xl border text-white outline-none transition-all duration-300 ${
                    focusedField === "email"
                      ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                      : "border-white/10 hover:border-white/20"
                  }`}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Select Workshop/Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-black/40 px-4 py-3 rounded-xl border text-white outline-none transition-all duration-300 ${
                    focusedField === "service"
                      ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <option value="" disabled>
                    Choose a service...
                  </option>
                  <option value="Drawing Basics">
                    Drawing Basics Workshop
                  </option>
                  <option value="Creative Workshop">Creative Workshop</option>
                  <option value="Photography Session">
                    Photography Session
                  </option>
                  <option value="Brand Collaboration">
                    Brand Collaboration
                  </option>
                  <option value="portrait">Portrait Commission</option>
                  <option value="other">Other / Custom Request</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  placeholder=""
                  className={`w-full bg-black/40 px-4 py-3 rounded-xl border text-white outline-none transition-all duration-300 resize-none ${
                    focusedField === "message"
                      ? "border-gray-500/50 shadow-lg shadow-gray-500/20"
                      : "border-white/10 hover:border-white/20"
                  }`}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-zinc-900 to-zinc-900 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Submit Request
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
