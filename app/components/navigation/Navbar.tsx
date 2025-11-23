"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`fixed top-0 z-50 w-full backdrop-blur-xl transition-all ${
          scrolled ? "bg-[#0b0b0b]/70 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-wide text-white"
          >
            Toye Studios
          </Link>

          {/* Desktop Nav */}
          <div className="hidden gap-10 md:flex">
            <NavLink href="/artworks">Artworks</NavLink>
            <NavLink href="/photography">Photography</NavLink>
            <NavLink href="/teaching">Teaching</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <FiMenu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative group">
      <span
        className={`text-sm uppercase tracking-wider transition ${
          isActive ? "text-white" : "text-gray-300 group-hover:text-[#7c7877]"
        }`}
      >
        {children}
      </span>

      {/* Underline animation */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-white transition-all duration-300 ${
          isActive
            ? "w-full opacity-100"
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"
        }`}
      ></span>
    </Link>
  );
}
