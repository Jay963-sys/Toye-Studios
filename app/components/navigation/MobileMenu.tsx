"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Clock from "./Clock";

const menuItems = [
  { name: "Artworks", path: "/artworks" },
  { name: "Photography", path: "/photography" },
  { name: "Teaching", path: "/teaching" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      onClose();
      document.body.style.overflow = "";
      prevPathname.current = pathname;
    }
  }, [pathname, onClose]);

  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 90% 5%)" }}
      animate={{ clipPath: "circle(150% at 90% 5%)" }}
      exit={{ clipPath: "circle(0% at 90% 5%)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[55] bg-black flex flex-col justify-center px-12"
    >
      {/* 1. STUDIO CLOCK - Top Left Position */}
      <div className="absolute top-20 left-12 z-90">
        <Clock />
      </div>

      {/* 2. BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      <nav className="relative z-10 flex flex-col gap-6">
        <span className="text-[10px] font-mono text-amber-500/50 uppercase tracking-[0.5em] mb-4">
          Navigation
        </span>

        {menuItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <Link
              href={item.path}
              onClick={() => {
                onClose();
                document.body.style.overflow = "";
              }}
              className="group flex items-baseline gap-4"
            >
              <span className="text-xs font-mono text-white/20 italic">
                0{i + 1}
              </span>
              <h2 className="text-5xl font-serif italic text-white/80 group-hover:text-amber-500 transition-colors tracking-tighter">
                {item.name}
              </h2>
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}
