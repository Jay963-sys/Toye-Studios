"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import BookingForm from "../components/BookingForm";

const CONTACT_METHODS = [
  {
    title: "Electronic Mail",
    value: "Toyestudios@gmail.com",
    link: "mailto:Toyestudios@gmail.com",
    label: "Direct Correspondence",
  },
  {
    title: "Whatsapp",
    value: "+44 7823541627",
    link: "https://wa.me/447823541627",
    label: "Mon—Sat, 9am—6pm",
  },
  {
    title: "Location",
    value: "Basingstoke & London // UK",
    link: "#",
    label: "Global Commissions",
  },
];

const SOCIALS = [
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/olatoye_salawudeen?igsh=bHR2MXJ0YXRrdTEy",
    name: "IG",
  },
  {
    icon: <FaTwitter />,
    href: "https://www.twitter.com/toye.studios/",
    name: "TW",
  },
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/toye.pencils/",
    name: "FB",
  },
  { icon: <FaEnvelope />, href: "mailto:Toyestudios@gmail.com", name: "EM" },
];

export default function ContactPage(): ReactElement {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-32 px-4 md:px-12 overflow-hidden">
      {/* 1. BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.02)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 2. HEADER: MINIMAL & BOLD */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[1em] text-amber-500/60 block mb-6">
              Inquiry
            </span>
            <h1 className="text-6xl md:text-[10rem] font-serif italic leading-none tracking-tighter mb-8 uppercase">
              Get In{" "}
              <span className="text-amber-500 not-italic font-light">
                Touch
              </span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              For commissions, collaborations, or educational inquiries.
              Let&apos;s translate your vision into a physical narrative.
            </p>
          </motion.div>
        </div>

        {/* 3. FORM & CONTEXT: MOVED UP FOR BETTER CONVERSIONS */}
        <div className="grid lg:grid-cols-12 gap-20 items-start mb-24">
          {/* LEFT: FORM (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h2 className="text-3xl font-serif italic text-white/90">
                The Studio Form
              </h2>
              <div className="h-px w-12 bg-amber-500/40 mt-4" />
            </div>
            <BookingForm />
          </div>

          {/* RIGHT: CONNECT & CONTEXT (4 Cols) */}
          <div className="lg:col-span-4 pt-4">
            {/* Studio Note */}
            <div className="p-8 border-l border-amber-500/20 bg-white/[0.01] space-y-4">
              <p className="text-[10px] font-mono text-amber-500/50 uppercase tracking-widest">
                Process Note
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-light italic">
                &quot;Every project begins with a conversation. To ensure our
                response isn't lost in spam filters, the studio will reach out
                to you directly via WhatsApp. Please ensure you provide an
                active WhatsApp number.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* 4. CONTACT DIRECTORY & SOCIALS: MOVED TO BOTTOM */}
        <div className="border-t border-white/10 pt-16 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {CONTACT_METHODS.map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group space-y-4 block"
              >
                <p className="text-[10px] font-mono text-amber-500/50 uppercase tracking-widest">
                  {method.title}
                </p>
                <h3 className="text-xl md:text-2xl font-light group-hover:text-amber-500 transition-colors break-all">
                  {method.value}
                </h3>
                <p className="text-xs text-gray-600 uppercase tracking-widest">
                  {method.label}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Social Grid Moved to Bottom */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
              Digital Presence
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SOCIALS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="flex items-center justify-between p-4 border border-white/5 hover:border-amber-500/40 hover:bg-white/[0.02] transition-all group"
                >
                  <span className="text-xl text-gray-500 group-hover:text-amber-500">
                    {social.icon}
                  </span>
                  <span className="text-[10px] font-mono text-gray-600 group-hover:text-white uppercase tracking-widest">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
