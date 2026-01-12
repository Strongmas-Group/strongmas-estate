"use client";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ModalProvider } from "@/providers/modal-provider";
import { useHotjar } from "@/lib/hotjar";
import useAnalytics from "@/lib/use-analytics";
import Script from "next/script";
import { Suspense } from "react";

function AnalyticsWrapper() {
  useAnalytics();
  return null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useHotjar();

  return (
    <html lang="en">
      <head>
        <title>Strongmas Residence</title>
        <meta name="description" content="Luxury Real Estate" />

        {/* Fav Icon */}
        <link
          rel="icon"
          href="https://res.cloudinary.com/dbczzmftw/image/upload/v1754055166/hogt7ycsjcm6fcof7cah.png"
        />

        {/* Preconnect & Preload Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="prepreconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@24..96,400;24..96,700&family=Montserrat:wght@400;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@24..96,400;24..96,700&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad={(event) => (event.currentTarget.media = "all")}
        />

        {/* Cero Pro Font */}
        <style>
          {`
            @font-face {
              font-family: 'Cero Pro';
              src: url('/fonts/CeroPro-Regular.woff2') format('woff2'),
                  url('/fonts/CeroPro-Regular.woff') format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>

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
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        {/* META PIXEL */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1163500775997386');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1163500775997386&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className="font-body antialiased bg-background text-foreground">
        <ModalProvider />
        <Suspense>
          <AnalyticsWrapper />
        </Suspense>
        {children}
        <Toaster />

                {/* LiveChat Widget */}
                <Script id="livechat-widget" strategy="afterInteractive">
          {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19449911;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";

            ;(function(n,t,c){
              function i(n){
                return e._h ? e._h.apply(null,n) : e._q.push(n)
              }
              var e={
                _q:[],
                _h:null,
                _v:"2.0",
                on:function(){i(["on",c.call(arguments)])},
                once:function(){i(["once",c.call(arguments)])},
                off:function(){i(["off",c.call(arguments)])},
                get:function(){
                  if(!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                  return i(["get",c.call(arguments)])
                },
                call:function(){i(["call",c.call(arguments)])},
                init:function(){
                  var n=t.createElement("script");
                  n.async=true;
                  n.type="text/javascript";
                  n.src="https://cdn.livechatinc.com/tracking.js";
                  t.head.appendChild(n);
                }
              };
              !n.__lc.asyncInit && e.init();
              n.LiveChatWidget = n.LiveChatWidget || e;
            }(window, document, [].slice));
          `}
        </Script>

      </body>
    </html>
  );
}
