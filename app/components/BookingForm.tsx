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
 * Internal name of the WhatsApp property in HubSpot. MUST match the field's
 * internal name exactly (Settings -> Properties). Keep it a SINGLE-LINE TEXT
 * field, not a phone field -- the phone field's country selector is what
 * produces broken "+4407..." numbers.
 */
const WHATSAPP_FIELD_NAME = "whatsapp_number";

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
  const formCreatedRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const targetSelector = `#hubspot-wrapper-${id}`;
    let observer: MutationObserver | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const wireWhatsApp = (root: ParentNode | null) => {
      const input = root?.querySelector<HTMLInputElement>(
        `input[name="${WHATSAPP_FIELD_NAME}"]`,
      );
      if (input && !input.dataset.waWired) {
        input.dataset.waWired = "1";
        input.addEventListener("blur", () => {
          const next = normalizeUKPhone(input.value);
          if (next !== input.value) {
            input.value = next;
            input.dispatchEvent(new Event("input", { bubbles: true }));
            input.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });
      }
    };

    // Reveal as soon as HubSpot injects the actual form -- independent of
    // whether the onFormReady callback fires.
    const watchForForm = () => {
      const wrapper = document.querySelector(targetSelector);
      if (!wrapper) return;

      const check = () => {
        if (wrapper.querySelector("form, iframe")) {
          setIsLoaded(true);
          wireWhatsApp(wrapper);
          return true;
        }
        return false;
      };

      if (check()) return;

      observer = new MutationObserver(() => {
        if (check()) observer?.disconnect();
      });
      observer.observe(wrapper, { childList: true, subtree: true });
    };

    const renderForm = () => {
      if (!formCreatedRef.current && window.hbspt) {
        formCreatedRef.current = true;

        window.hbspt.forms.create({
          region: "eu1",
          portalId: "148792981",
          formId: "2ab241b1-567e-4dbe-8a80-92fadd10f4ff",
          target: targetSelector,

          onFormReady: () => {
            console.debug("[hs] onFormReady");
            setIsLoaded(true);
            wireWhatsApp(document.querySelector(targetSelector));
          },
          onFormSubmit: () => {
            console.debug("[hs] onFormSubmit");
            const input = document
              .querySelector(targetSelector)
              ?.querySelector<HTMLInputElement>(
                `input[name="${WHATSAPP_FIELD_NAME}"]`,
              );
            if (input) input.value = normalizeUKPhone(input.value);
          },
          // NOTE: if your Meta "Lead" event fires here today, keep that call
          // ABOVE the router.push. If the console never logs this line on a
          // real submit, HubSpot's callbacks aren't firing for this form --
          // set the /thank-you redirect in HubSpot's form options instead.
          onFormSubmitted: () => {
            console.debug("[hs] onFormSubmitted");
            router.push("/thank-you");
          },
        });

        watchForForm();
        // Last-resort reveal so the skeleton can never trap the UI.
        fallbackTimer = setTimeout(() => setIsLoaded(true), 4000);
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

    return () => {
      formCreatedRef.current = false;
      observer?.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
      const wrapper = document.querySelector(targetSelector);
      if (wrapper) wrapper.innerHTML = "";
      if (existingScript)
        existingScript.removeEventListener("load", renderForm);
    };
  }, [id, router]);

  return (
    <div id={id} className={`relative w-full max-w-2xl ${className}`}>
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

      <div
        id={`hubspot-wrapper-${id}`}
        className={`w-full relative z-20 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
