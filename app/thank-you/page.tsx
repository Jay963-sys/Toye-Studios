import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Toye Studios",
  description: "Your inquiry has been successfully transmitted.",
  robots: "noindex, nofollow", // Prevents Google from ranking this page so only real leads hit it
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-white">
        Inquiry Received.
      </h1>
      <p className="text-white/60 max-w-md mx-auto mb-12 font-light leading-relaxed">
        Thank you for reaching out to Toye Studios. We have successfully
        received your message and will be in touch with you shortly.
      </p>

      <Link
        href="/"
        className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-500 hover:text-white transition-colors border-b border-amber-500 hover:border-white pb-1"
      >
        Return to Home
      </Link>
    </div>
  );
}
