"use client";

import React, { useState, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
  initialService?: string;
  services?: string[];
  className?: string;
  id?: string;
};

export default function BookingForm({
  initialService = "",
  services = [],
  className = "",
  id = "booking-form",
}: Props): ReactElement {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: initialService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.service) {
      setStatus({ type: "error", msg: "Please complete all required fields." });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send transmission");
      }

      // Automatically redirect to the hidden thank you page to trigger the Meta Pixel
      router.push("/thank-you");
    } catch (error) {
      setStatus({
        type: "error",
        msg: "Transmission failed. Please try again.",
      });
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id={id}
      className={`relative bg-transparent text-white w-full max-w-2xl ${className}`}
    >
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Status Messages with Motion */}
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`p-4 text-[10px] font-mono uppercase tracking-widest border ${
                status.type === "success"
                  ? "border-amber-500/50 text-amber-500 bg-amber-500/5"
                  : "border-red-500/50 text-red-500 bg-red-500/5"
              }`}
            >
              {status.msg}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {/* Name Input */}
          <div className="relative group">
            <label className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4 group-focus-within:text-amber-500 transition-colors">
              01. Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="e.g. John Doe"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 py-2 focus:border-amber-500 outline-none transition-colors placeholder:text-white/40 font-light"
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <label className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4 group-focus-within:text-amber-500 transition-colors">
              02. Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 py-2 focus:border-amber-500 outline-none transition-colors placeholder:text-white/40 font-light"
            />
          </div>
        </div>

        {/* Service Select */}
        <div className="relative group">
          <label className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4 group-focus-within:text-amber-500 transition-colors">
            03. Subject of Interest
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/10 py-2 focus:border-amber-500 outline-none transition-colors appearance-none cursor-pointer font-light"
          >
            <option value="" className="bg-black text-white/40">
              Select an offering...
            </option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-black">
                {s}
              </option>
            ))}
            <option value="other" className="bg-black">
              Custom Request
            </option>
          </select>
        </div>

        {/* Message Textarea */}
        <div className="relative group">
          <label className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4 group-focus-within:text-amber-500 transition-colors">
            04. Additional Context
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Share your vision..."
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/10 py-2 focus:border-amber-500 outline-none transition-colors resize-none placeholder:text-white/40 font-light"
          />
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative flex items-center gap-6 overflow-hidden"
          >
            <div className="relative w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-amber-500 transition-colors rounded-full">
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full"
                />
              ) : (
                <span className="text-white group-hover:text-amber-500 transition-colors">
                  →
                </span>
              )}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white group-hover:text-amber-500 transition-colors">
              {isSubmitting ? "Transmitting..." : "Send Inquiry"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
