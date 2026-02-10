"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-[60] w-full transition-all duration-500 ${
          scrolled
            ? "py-4 bg-black/40 backdrop-blur-md bg-gradient-to-b from-black/40 to-black/30"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo - Kinetic hover */}
          <Link
            href="/"
            className="group relative z-[70]"
            onClick={() => {
              if (open) {
                setOpen(false);
                document.body.style.overflow = "";
              }
            }}
          >
            <motion.span
              className="text-lg tracking-tighter text-white"
              style={{ fontFamily: "var(--font-courier-prime), monospace" }}
            >
              TOYE{" "}
              <span className="font-light text-amber-500/80 group-hover:text-amber-400 transition-colors">
                STUDIOS
              </span>
            </motion.span>
          </Link>

          {/* Desktop Nav - Clean & Spaced */}
          <div className="hidden gap-12 md:flex">
            {["Artworks", "Photography", "Teaching", "About", "Contact"].map(
              (item) => (
                <NavLink key={item} href={`/${item.toLowerCase()}`}>
                  {item}
                </NavLink>
              ),
            )}
          </div>

          {/* Mobile Menu Toggle - Custom Hamburger */}
          <button
            className="group flex flex-col items-end gap-1.5 md:hidden z-[70]"
            onClick={() => setOpen(!open)}
          >
            <div
              className={`h-[1px] bg-white transition-all duration-300 ${open ? "w-8 rotate-45 translate-y-2" : "w-8"}`}
            />
            <div
              className={`h-[1px] bg-amber-500 transition-all duration-300 ${open ? "opacity-0" : "w-5"}`}
            />
            <div
              className={`h-[1px] bg-white transition-all duration-300 ${open ? "w-8 -rotate-45 -translate-y-2" : "w-8"}`}
            />
          </button>
        </div>
      </motion.nav>

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
    <Link href={href} className="relative group flex flex-col items-center">
      <span
        className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
          isActive ? "text-amber-500" : "text-white/50 group-hover:text-white"
        }`}
      >
        {children}
      </span>
      {isActive && (
        <motion.div
          layoutId="navDot"
          className="absolute -bottom-2 w-1 h-1 rounded-full bg-amber-500"
        />
      )}
    </Link>
  );
}
