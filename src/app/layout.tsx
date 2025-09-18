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

        {/* Cero Pro Font with swap for better LCP */}
        <style>
          {`
            @font-face {
              font-family: 'Cero Pro';
              src: url('/fonts/CeroPro-Regular.woff2') format('woff2'),
                  url('/fonts/CeroPro-Regular.woff') format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap; /* Ensures text shows immediately */
            }
          `}
        </style>

        {/* Preload Hero Poster for Better LCP */}
        {/* <link rel="preload" as="image" href="/background-poster.jpg" /> */}

        {/* Google Analytics: Load after interaction */}
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

        {/* Hotjar: Load after interaction */}
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
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ModalProvider />
        <Suspense>
          <AnalyticsWrapper />
        </Suspense>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
