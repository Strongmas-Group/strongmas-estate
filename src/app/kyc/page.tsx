"use client";

import * as React from "react";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

export default function KYCPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline">
              Know Your Customer (KYC) Form
            </h1>

            <div className="max-w-5xl mx-auto shadow-lg border border-gray-200 rounded-2xl overflow-hidden">
              <iframe
                aria-label="KYC Form"
                src="https://forms.zohopublic.com/strongmas1/form/UserRegistrationForm/formperma/n39gbTifJCqBHh2cDK8YUFjCXREBNQWsHe19SaLdzzM"
                style={{
                  height: "90vh",
                  width: "100%",
                  border: "none",
                }}
                title="KYC Form"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
