// app/thank-you/page.tsx
"use client";

import { useEffect, ReactElement } from "react";
import { FaWhatsapp } from "react-icons/fa";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const WHATSAPP_PREFILL =
  "Hi Toye, I have just sent an enquiry through your website.";
const WHATSAPP_URL = `https://wa.me/447823541627?text=${encodeURIComponent(
  WHATSAPP_PREFILL,
)}`;

export default function ThankYouPage(): ReactElement {
  // Push a dataLayer event on arrival. Reaching this page means the form
  // submitted successfully, so GTM can fire the Meta "Lead" tag off this event.
  // This is reliable on the client-side redirect (router.push) where a GTM
  // URL / PageView trigger would silently miss the navigation.
  // The sessionStorage guard stops a refresh re-firing it.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("toye_lead_sent")) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "lead_submitted" });
    sessionStorage.setItem("toye_lead_sent", "1");
  }, []);

  const handleWhatsAppClick = () => {
    // GTM fires the Meta "Contact" tag off this event (brief section 3).
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "contact_click" });
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center py-32 px-4 md:px-12 overflow-hidden">
      {/* BACKGROUND TEXTURE -- matched to contact page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.02)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <span className="text-[10px] uppercase tracking-[1em] text-amber-500/60 block mb-8">
          Enquiry received
        </span>

        <h1 className="text-4xl md:text-6xl font-serif italic leading-tight tracking-tight mb-10">
          Thank you. Your enquiry has{" "}
          <span className="text-amber-500 not-italic font-light">
            reached the studio.
          </span>
        </h1>

        <div className="space-y-6 max-w-2xl mb-14">
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            I read every enquiry personally and will reply within one working
            day, usually by WhatsApp.
          </p>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            If you have a photo ready, send it over and I will tell you honestly
            whether it will make a strong drawing before you pay anything.
          </p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-3 px-10 py-4 bg-amber-500 text-black font-mono text-xs uppercase tracking-widest hover:bg-amber-400 transition-colors"
        >
          <FaWhatsapp className="text-lg" />
          Send a photo on WhatsApp
        </a>
      </div>
    </section>
  );
}
