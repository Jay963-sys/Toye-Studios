"use client";

import Link from "next/link";
import { FaInstagram, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0b0b0b] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white">Toye Studios</h3>
            <p className="mt-3 text-sm text-gray-400 max-w-sm">
              Fine Art • Portraits • Photography • Creative Teaching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
              Explore
            </h4>

            <ul className="space-y-2 text-sm">
              <FooterLink href="/artworks">Artworks</FooterLink>
              <FooterLink href="/photography">Photography</FooterLink>
              <FooterLink href="/teaching">Teaching</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
              Connect
            </h4>

            <div className="flex items-center gap-5 text-xl">
              <SocialIcon href="#">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon href="#">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="mailto:info@toye.studio">
                <FaEnvelope />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Toye Studios. All rights reserved.
        </div>
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
      <Link href={href} className="hover:text-[#FF3100] transition-colors">
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
      className="text-gray-400 hover:text-[#FF3100] transition-colors"
    >
      {children}
    </Link>
  );
}
