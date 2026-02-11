"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* 1. THE BIG STATEMENT */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12vw] font-serif italic leading-none tracking-tighter text-white/5 select-none pointer-events-none uppercase"
        >
          Toye Studios
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* 2. BRAND & ETHOS (Col 1-4) */}
        <div className="md:col-span-4 space-y-6">
          <div className="text-white text-xl font-serif italic">
            Olatoye <span className="text-amber-500/80">Salawudeen</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed font-light">
            An exploration of hyperrealism and the human spirit through fine
            art, photography, and curated creative experiences.
          </p>
          <div className="flex gap-4 pt-2">
            <SocialIcon href="https://www.instagram.com/toye.studios/">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/toye.pencils">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://www.twitter.com/toyestudios/">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="mailto:ToyeStudios@gmail.com">
              <FaEnvelope />
            </SocialIcon>
          </div>
        </div>

        {/* 3. NAVIGATION (Col 5-8) */}
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-amber-500/50">
              Studio
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/artworks">Artworks</FooterLink>
              <FooterLink href="/photography">Photography</FooterLink>
              <FooterLink href="/teaching">Teaching</FooterLink>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-amber-500/50">
              Info
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              {/* Added Privacy Policy here */}
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>

        {/* 4. NEWSLETTER/LOCATION (Col 9-12) */}
        <div className="md:col-span-4 space-y-4 md:text-right">
          <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-amber-500/50">
            Availability
          </h4>
          <p className="text-sm text-gray-400 font-light">
            Based in UK.
            <br />
            Accepting global commissions
            <br />
            for 2026.
          </p>
        </div>
      </div>

      {/* 5. THE SUBTLE LINE & CREDITS */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-gray-600">
        <p>© {currentYear} TOYE STUDIOS — ALL RIGHTS RESERVED</p>

        <Link
          href="https://jay-dev-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 hover:text-white transition-colors"
        >
          <span>Crafted by</span>
          <span className="text-amber-500 group-hover:underline group-hover:underline-offset-4">
            Jay
          </span>
        </Link>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-amber-500 transition-colors font-light"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
    >
      {children}
    </Link>
  );
}
