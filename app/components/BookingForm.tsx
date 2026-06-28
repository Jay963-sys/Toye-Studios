"use client";

import React, { useEffect, useState, useRef, ReactElement } from "react";

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
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
  const formCreatedRef = useRef(false); // React lock to prevent double-rendering

  useEffect(() => {
    // Create a unique target ID so multiple forms don't collide
    const targetSelector = `#hubspot-wrapper-${id}`;

    const renderForm = () => {
      // Only render if the lock is false
      if (!formCreatedRef.current && window.hbspt) {
        formCreatedRef.current = true; // Lock it immediately

        window.hbspt.forms.create({
          region: "eu1",
          portalId: "148792981",
          formId: "2ab241b1-567e-4dbe-8a80-92fadd10f4ff",
          target: targetSelector,
        });

        setTimeout(() => setIsLoaded(true), 150);
      }
    };

    const existingScript = document.getElementById("hubspot-form-script");

    if (existingScript) {
      if (window.hbspt) {
        renderForm();
      } else {
        existingScript.addEventListener("load", renderForm);
      }
    } else {
      const script = document.createElement("script");
      script.id = "hubspot-form-script";
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = renderForm;
      document.body.appendChild(script);
    }

    // Cleanup function
    return () => {
      formCreatedRef.current = false; // Release the lock on unmount
      const wrapper = document.querySelector(targetSelector);
      if (wrapper) {
        wrapper.innerHTML = ""; // Clear the div
      }
      if (existingScript) {
        existingScript.removeEventListener("load", renderForm);
      }
    };
  }, [id]);

  return (
    <div id={id} className={`relative w-full max-w-2xl ${className}`}>
      {/* SKELETON LOADER */}
      {!isLoaded && (
        <div className="absolute inset-0 w-full space-y-6 animate-pulse z-10">
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

      {/* HUBSPOT WRAPPER (Now with a unique ID based on props) */}
      <div
        id={`hubspot-wrapper-${id}`}
        className={`w-full relative z-20 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
