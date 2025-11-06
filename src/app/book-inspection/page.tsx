"use client";

import * as React from "react";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function BookInspectionPage() {
  // Function to trigger conversion event
  const handleConversion = () => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-10936399778/H5BXCNrwiLsbEKLv8N4o",
        event_callback: () => {
          console.log("Google Ads conversion recorded.");
        },
      });
    } else {
      console.warn("gtag not defined");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Embed gtag_report_conversion script safely */}
      <Script id="google-conversion-snippet" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-10936399778/H5BXCNrwiLsbEKLv8N4o',
              'event_callback': callback
            });
            return false;
          }
        `}
      </Script>

      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] bg-black">
          <Image
            src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753380962/nvojeyyxcnracxrw1zyb.png"
            alt="Book a Tour background"
            fill
            className="object-cover opacity-70"
            data-ai-hint="luxury real estate exterior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/50" />
          <div className="relative z-10 h-full flex flex-col justify-center items-start text-white container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold font-headline">
              BOOK A TOUR
            </h1>
            <p className="mt-2 text-sm font-sans">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / Book a Tour
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 sm:py-24 bg-white text-black font-sans">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto shadow-lg border border-gray-200 rounded-2xl overflow-hidden h-[85vh] md:h-[90vh]">
              {/* 
                Since Zoho form is in an iframe, you can’t attach an onSubmit directly here.
                Instead, attach the conversion trigger to a known event (like a button click or form submission redirect).
              */}
              <iframe
                src="https://forms.zohopublic.com/strongmas1/form/BookATour/formperma/MMee_AahBlWQ_1veM5wwNc5TrcIkVWXWncFb2ULX8FE?zf_rszfm=1"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Book a Tour"
                onLoad={() => {
                  console.log("Zoho form loaded");
                }}
              ></iframe>
            </div>

            {/* Example: Conversion trigger button (if needed) */}
            <div className="text-center mt-6">
              <button
                onClick={handleConversion}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
              >
                Test Conversion Trigger
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
