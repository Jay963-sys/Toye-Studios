"use client";

import React, { useEffect, useState, ReactElement } from "react";

declare global {
  interface Window {
    hbspt: any;
  }
}

type Props = {
  className?: string;
  id?: string;
};

export default function BookingForm({
  className = "",
  id = "booking-form",
}: Props): ReactElement {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.getElementById("hubspot-form-script")) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "hubspot-form-script";
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setIsLoaded(true);

    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (isLoaded && window.hbspt) {
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "148792981",
        formId: "2ab241b1-567e-4dbe-8a80-92fadd10f4ff",
        target: "#hubspot-form-wrapper",
      });
    }
  }, [isLoaded]);

  return (
    <div id={id} className={`relative w-full max-w-2xl ${className}`}>
      {/* 1. SKELETON LOADER (Shows while HubSpot is fetching) */}
      {!isLoaded && (
        <div className="w-full space-y-6 animate-pulse">
          <div className="space-y-2">
            <div className="h-3 bg-white/10 w-24 rounded"></div>
            <div className="h-10 bg-white/5 w-full rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-white/10 w-24 rounded"></div>
            <div className="h-10 bg-white/5 w-full rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-white/10 w-32 rounded"></div>
            <div className="h-10 bg-white/5 w-full rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-white/10 w-32 rounded"></div>
            <div className="h-24 bg-white/5 w-full rounded"></div>
          </div>
          <div className="flex justify-start pt-4">
            <div className="h-12 bg-white/10 w-40 rounded-full"></div>
          </div>
        </div>
      )}

      {/* 2. HUBSPOT WRAPPER (Injected here once ready) */}
      <div
        id="hubspot-form-wrapper"
        className={`w-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
