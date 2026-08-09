// app/components/BookingForm.tsx
"use client";

import React, { useEffect, useState, useRef, ReactElement } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: (form?: unknown) => void;
          onFormSubmit?: (form?: unknown) => void;
          onFormSubmitted?: (form?: unknown, data?: unknown) => void;
        }) => void;
      };
    };
  }
}

type Props = {
  className?: string;
  id?: string;
};

/**
 * Internal name of the WhatsApp property in HubSpot.
 * This MUST match the field's internal name exactly (check it in
 * Settings → Properties, or the form editor). If HubSpot generated a
 * different slug (e.g. "whatsapp_number_", "phone"), update this string.
 * Keep it a SINGLE-LINE TEXT field, not a phone field — the phone field's
 * country selector is what produces the broken "+4407..." numbers.
 */
const WHATSAPP_FIELD_NAME = "whatsapp_number";

/**
 * Normalize a UK WhatsApp number to a dialable format:
 *   "07123 456789"  -> "+447123456789"
 *   "44 7123 456789" -> "+447123456789"
 *   "+44 7123 456789" -> "+447123456789"
 * Anything already starting with "+" is left as-is (aside from spacing).
 */
function normalizeUKPhone(raw: string): string {
  const cleaned = raw.replace(/[\s\-()]/g, "");
  if (!cleaned) return cleaned;
  if (cleaned.startsWith("+")) return cleaned;
  if (cleaned.startsWith("0")) return "+44" + cleaned.slice(1);
  if (cleaned.startsWith("44")) return "+" + cleaned;
  return cleaned;
}

export default function BookingForm({
  className = "",
  id = "booking-form",
}: Props): ReactElement {
  const [isLoaded, setIsLoaded] = useState(false);
  const formCreatedRef = useRef(false); // React lock to prevent double-rendering
  const router = useRouter();

  useEffect(() => {
    // Unique target ID so multiple forms don't collide
    const targetSelector = `#hubspot-wrapper-${id}`;

    const getWhatsAppInput = (): HTMLInputElement | null => {
      const wrapper = document.querySelector(targetSelector);
      return (
        wrapper?.querySelector<HTMLInputElement>(
          `input[name="${WHATSAPP_FIELD_NAME}"]`,
        ) ?? null
      );
    };

    const renderForm = () => {
      if (!formCreatedRef.current && window.hbspt) {
        formCreatedRef.current = true; // Lock it immediately

        window.hbspt.forms.create({
          region: "eu1",
          portalId: "148792981",
          formId: "2ab241b1-567e-4dbe-8a80-92fadd10f4ff",
          target: targetSelector,

          // Form is in the DOM: hide the skeleton and wire up live normalization
          onFormReady: () => {
            setIsLoaded(true);
            const input = getWhatsAppInput();
            if (input) {
              input.addEventListener("blur", () => {
                const next = normalizeUKPhone(input.value);
                if (next !== input.value) {
                  input.value = next;
                  // Let HubSpot / React register the programmatic change
                  input.dispatchEvent(new Event("input", { bubbles: true }));
                  input.dispatchEvent(new Event("change", { bubbles: true }));
                }
              });
            }
          },

          // Safety net: normalize once more the instant before HubSpot serializes
          onFormSubmit: () => {
            const input = getWhatsAppInput();
            if (input) input.value = normalizeUKPhone(input.value);
          },

          // Successful submit → send them to the thank-you page.
          // NOTE: if your Meta "Lead" event is currently fired from inside
          // onFormSubmitted, KEEP that call here, ABOVE the router.push.
          onFormSubmitted: () => {
            router.push("/thank-you");
          },
        });
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

    // Cleanup
    return () => {
      formCreatedRef.current = false; // Release the lock on unmount
      const wrapper = document.querySelector(targetSelector);
      if (wrapper) wrapper.innerHTML = "";
      if (existingScript)
        existingScript.removeEventListener("load", renderForm);
    };
  }, [id, router]);

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

      {/* HUBSPOT WRAPPER */}
      <div
        id={`hubspot-wrapper-${id}`}
        className={`w-full relative z-20 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
