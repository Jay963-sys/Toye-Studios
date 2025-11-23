"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill out all fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const CONTACT_METHODS = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "Toyestudios@gmail.com",
      link: "mailto:Toyestudios@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      value: "+44 456 7890",
      link: "tel:+44 456 7890",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Location",
      value: "London, UK",
      link: "#",
      description: "Available for remote work",
    },
  ];

  const SOCIAL_LINKS = [
    {
      icon: <FaInstagram />,
      name: "Instagram",
      href: "#",
      color: "from-gray-700 to-gray-500",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      href: "#",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      href: "#",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      href: "#",
      color: "from-blue-500 to-blue-700",
    },
  ];

  const INQUIRY_TYPES = [
    "General Inquiry",
    "Commission Request",
    "Workshop/Class",
    "Collaboration",
    "Exhibition/Curation",
    "Other",
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1)_0%,rgba(0,0,0,0)_50%)]" />
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
            <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
              Let&apos;s Connect
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind, want to collaborate, or just say hello?
            <br className="hidden sm:block" />
            I&apos;d love to hear from you. Let&apos;s create something amazing
            together.
          </p>
        </motion.div>
      </div>

      {/* Contact Methods */}
      <motion.div
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_METHODS.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.link}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-black-800 to-black-900 border border-black/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700/20 to-gray-500/20 flex items-center justify-center mb-4 text-gray-400 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-300 font-medium mb-1">{method.value}</p>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 mb-16">
        {/* Contact Form - Takes 3 columns */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black/10 rounded-3xl p-8 sm:p-10 backdrop-blur-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

            <div className="relative z-10">
              <h2 className="text-3xl font-serif mb-2">Send a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and I&apos;ll get back to you within 24
                hours.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300"
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
                    <span>
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </div>
                </motion.div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder=""
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-black/40 px-4 py-3 rounded-xl border text-white outline-none transition-all duration-300 ${
                        focusedField === "name"
                          ? "border-blue-500/50 shadow-lg shadow-blue-500/20"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder=""
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-black/40 px-4 py-3 rounded-xl border text-white outline-none transition-all duration-300 ${
                        focusedField === "email"
                          ? "border-blue-500/50 shadow-lg shadow-blue-500/20"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-black/40 px-4 py-3 rounded-xl border text-white outline-none transition-all duration-300 ${
                      focusedField === "subject"
                        ? "border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <option value="" disabled>
                      Select inquiry type
                    </option>
                    {INQUIRY_TYPES.map((type, idx) => (
                      <option key={idx} value={type} className="bg-zinc-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder=""
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-black/40 px-4 py-3 rounded-xl border text-white outline-none transition-all duration-300 resize-none ${
                      focusedField === "message"
                        ? "border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full text-white font-medium hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
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
        </motion.div>

        {/* Sidebar - Takes 2 columns */}
        <motion.div
          className="lg:col-span-2 space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Social Media */}
          <div className="relative bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black/10 rounded-3xl p-8 backdrop-blur-lg">
            <h3 className="text-2xl font-serif mb-6">Get in touch</h3>
            <p className="text-gray-400 text-sm mb-6">
              Stay connected and see my latest work, behind-the-scenes content,
              and updates.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-xl bg-black/40 border border-black/10 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-sm font-medium">{social.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
