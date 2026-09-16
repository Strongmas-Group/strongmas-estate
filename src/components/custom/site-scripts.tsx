"use client";

import Script from "next/script";
import { Suspense } from "react";
import { useHotjar } from "@/lib/hotjar";
import useAnalytics from "@/lib/use-analytics";

function AnalyticsWrapper() {
  useAnalytics();
  return null;
}

/**
 * Client-only third-party scripts and analytics hooks.
 * Kept out of the root layout so that layout can stay a server component
 * and expose the Next.js Metadata API (title, canonical, Open Graph, schema).
 */
export default function SiteScripts() {
  useHotjar();

  return (
    <>
      <Suspense>
        <AnalyticsWrapper />
      </Suspense>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EKX1W7G2KJ"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EKX1W7G2KJ', { send_page_view: false });
          `,
        }}
      />

      {/* Hotjar */}
      <Script
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6516561,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script'); r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />

      {/* OneSignal SDK */}
      <Script
        src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
        strategy="afterInteractive"
      />
      <Script
        id="onesignal-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "053937ec-a899-4041-a83c-8095b8fa898b",
                notifyButton: { enable: true },
                serviceWorkerPath: '/OneSignalSDKWorker.js',
              });
            });
          `,
        }}
      />
    </>
  );
}
