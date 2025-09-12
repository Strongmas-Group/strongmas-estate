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
        <link
          rel="icon"
          href="https://res.cloudinary.com/dbczzmftw/image/upload/v1754055166/hogt7ycsjcm6fcof7cah.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@24..96,400;24..96,700&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            @font-face {
              font-family: 'Cero Pro';
              src: url('/fonts/CeroPro-Regular.woff2') format('woff2'),
                  url('/fonts/CeroPro-Regular.woff') format('woff');
              font-weight: 400;
              font-style: normal;
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
