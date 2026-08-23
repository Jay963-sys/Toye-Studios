"use client";

import Script from "next/script";

export default function GoogleAds() {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Ads */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-18406677713`}
      />
      <Script
        id="google-ads-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'AW-18406677713');
          `,
        }}
      />
    </>
  );
}
