'use client';

import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ModalProvider } from '@/providers/modal-provider';
import { useHotjar } from '@/lib/hotjar';
import useAnalytics from '@/lib/use-analytics';
import Script from 'next/script';
import { Suspense, useEffect } from 'react';
import MetaPixel from '@/components/custom/meta-pixel';

function AnalyticsWrapper() {
  useAnalytics();
  return null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useHotjar();

  return (
    <html lang="en">
      <head>
        <title>Strongmas Residence</title>
        <meta name="description" content="Luxury Real Estate" />

        {/* Favicon */}
        <link
          rel="icon"
          href="https://res.cloudinary.com/dbczzmftw/image/upload/v1754055166/hogt7ycsjcm6fcof7cah.png"
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@24..96,400;24..96,700&family=Montserrat:wght@400;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@24..96,400;24..96,700&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad={(event) => (event.currentTarget.media = 'all')}
        />

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
        <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" strategy="afterInteractive" />
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
      </head>

      <body className="font-body antialiased bg-background text-foreground">
        {/* Providers */}
        <ModalProvider />

        {/* Analytics */}
        <Suspense>
          <AnalyticsWrapper />
        </Suspense>

        {/* Meta Pixel */}
        <MetaPixel />

        {/* Page content */}
        {children}
        <Toaster />

        {/* Tawk.to Chat Widget */}
        <Script id="tawk-widget" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/6964eec1895de4198b8ffe63/1jep498vj';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
