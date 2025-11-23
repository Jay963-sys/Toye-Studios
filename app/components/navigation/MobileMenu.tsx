"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed inset-0 z-50 bg-[#0b0b0b]/95 backdrop-blur-lg p-8"
    >
      {/* Close Button */}
      <div className="flex justify-end">
        <button onClick={onClose} className="text-white">
          <FiX size={32} />
        </button>
      </div>

      {/* Menu Links */}
      <nav className="mt-10 flex flex-col space-y-6 text-xl">
        <MobileLink href="/artworks" onClose={onClose}>
          Artworks
        </MobileLink>
        <MobileLink href="/photography" onClose={onClose}>
          Photography
        </MobileLink>
        <MobileLink href="/teaching" onClose={onClose}>
          Teaching
        </MobileLink>
        <MobileLink href="/about" onClose={onClose}>
          About
        </MobileLink>
        <MobileLink href="/contact" onClose={onClose}>
          Contact
        </MobileLink>
      </nav>
    </motion.div>
  );
}

function MobileLink({
  href,
  children,
  onClose,
}: {
  href: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="text-gray-300 hover:text-[#FF3100] transition uppercase tracking-wider"
    >
      {children}
    </Link>
  );
}
