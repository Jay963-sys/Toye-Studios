"use client";

import React, { useState } from "react";

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
}: Props) {
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
    >
  ) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) return "Please enter a valid email address.";
    if (!form.service || form.service.trim() === "")
      return "Please select a service.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if (err) {
      setStatus({ type: "error", msg: err });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed");

      setStatus({ type: "success", msg: data?.message || "Booking sent!" });
      setForm({ name: "", email: "", service: "", message: "" });
    } catch (error: unknown) {
      setStatus({
        type: "error",
        msg: error instanceof Error ? error.message : "An error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id={id}
      className={`p-6 sm:p-8 md:p-10 bg-black/20 rounded-2xl border border-white/1 backdrop-blur-lg ${className}`}
    >
      {/* Elegant Centered Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">
          Ready to Get Started?
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          Book your spot today or request a custom service. We’ll respond within
          24 hours.
        </p>

        <div className="mt-4 flex justify-center">
          <div className="h-[2px] w-16 bg-gradient-to-r from-gray-400/20 to-gray-200/60 rounded-full" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {status && (
          <div
            role="status"
            className={`p-3 rounded-md ${
              status.type === "success"
                ? "bg-green-700/10 border border-green-500 text-green-300"
                : "bg-red-700/10 border border-red-500 text-red-300"
            }`}
          >
            {status.msg}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Your Name *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=""
              className="w-full px-3 py-2 rounded-md bg-black/40 text-white border border-white/10"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Email *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder=""
              className="w-full px-3 py-2 rounded-md bg-black/40 text-white border border-white/10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Select Workshop / Service *
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-black/40 text-white border border-white/10"
          >
            <option value="">Choose a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="other">Other / Custom Request</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Additional Details
          </label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder=""
            className="w-full px-3 py-2 rounded-md bg-black/40 text-white border border-white/10 resize-none"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 text-white disabled:opacity-50"
          >
            {isSubmitting ? "Sending…" : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  );
}
