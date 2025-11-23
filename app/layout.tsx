import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Toye Studios — Art • Teaching • Photography",
  description:
    "Portfolio of Toye Studios: Fine Art, Portraits, Sketches, Photography, and Creative Art Teaching.",
  icons: {
    icon: "/brand/pp.svg",
  },
  openGraph: {
    title: "Toye Studios",
    description: "Art • Teaching • Photography",
    images: ["/brand/let.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0B0B0B] text-white">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased tracking-tight`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
