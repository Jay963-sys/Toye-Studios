import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Courier_Prime, Inter, Space_Mono } from "next/font/google";
import CookieBanner from "./components/navigation/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-NXGV6SR6');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${courierPrime.variable} ${spaceMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXGV6SR6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  );
}
