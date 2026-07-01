"use client";

import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import CldImage from "@/components/custom/cld-image";
import React, { useState } from "react";

const bgColors = ["bg-neutral-800", "bg-neutral-600", "bg-neutral-800"];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<{ [key: number]: number | null }>({});

  const toggle = (catIdx: number, questionIdx: number) => {
    setOpenIndex((prev) => ({
      ...prev,
      [catIdx]: prev[catIdx] === questionIdx ? null : questionIdx,
    }));
  };

  const faqData = [
    {
      category: "Project & Construction",
      questions: [
        {
          q: "What stage is Elysian Rise currently at?",
          a: "Elysian Rise is currently at the piling stage, the substructure work is actively underway. This marks a strategic window for off-plan investors to secure units at the most favorable entry pricing.",
        },
        {
          q: "What is the depth of piling for Elysian Rise?",
          a: "Based on comprehensive soil tests and structural evaluations, the approved piling specification for Elysian Rise is 18 metres in depth with an 800mm diameter. At Strongmas, we are strictly executing this standard to ensure optimal load-bearing capacity and long-term structural integrity.",
        },
        {
          q: "When is the estimated completion date?",
          a: "Elysian Rise is projected for completion within 36 months—comprising 24 months dedicated to structural construction and an additional 12 months for luxury interior finishes and final handover.",
        },
        {
          q: "What type of cement is used for construction?",
          a: "We utilize only premium-grade cement, including top-tier options from Dangote and Lafarge, to guarantee superior structural integrity and long-term durability.",
        },
        {
          q: "What is the reinforcement standard used?",
          a: "We comply with international steel reinforcement codes, with high-tensile rods and quality mesh in all structural elements, supervised by certified engineers.",
        },
        {
          q: "What is “car space movement”?",
          a: "This refers to the vehicular traffic flow and allocation design within the premises. Elysian Rise features a well-structured 2-level parking system, with 70+ car parking bays and smooth ingress/egress pathways.",
        },
        {
          q: "How many car parking spaces are available?",
          a: "We have provision for over 70 car parking spaces, including dedicated slots per unit, guest parking, and optional EV charging bays.",
        },
        {
          q: "Can I resell my Strongmas property after purchase?",
          a: "Absolutely. Elysian Rise is a prime investment property with high resale value. We also support referrals, secondary sales, and ROI assessments.",
        },
        {
          q: "Who are the engineers and consultants behind this project?",
          a: (
            <>
              We collaborate with a seasoned team including:
              <ul className="list-disc list-inside mt-2 text-neutral-300">
                <li>NIROYS Engineering Limited</li>
              </ul>
            </>
          ),
        },
        {
          q: "Where is Elysian Rise located?",
          a: "Elysian Rise is strategically located in Victoria Island, Lagos — a high-demand district known for luxury living, waterfront views, and vibrant urban energy.",
        },
        {
          q: "Are Strongmas homes smart-enabled?",
          a: "Yes. Elysian Rise is fully smart-home enabled, offering remote access control, intelligent climate regulation, smart lighting, AI-powered security, and energy-saving features.",
        },
      ],
    },
    {
      category: "Payments & Investment",
      questions: [
        {
          q: "What is the minimum deposit required to own a home?",
          a: "You can secure a unit with a 40% deposit, with the balance spread across 12–24 months, depending on the payment plan.",
        },
        {
          q: "Do you offer flexible payment plans or mortgage options?",
          a: "Yes. We offer structured off-plan payment options and collaborate with Stanbic IBTC and other partners for mortgage financing.",
        },
        {
          q: "Are your homes good for investment?",
          a: (
            <>
              Absolutely. Elysian Rise offers:
              <ul className="list-disc list-inside mt-2 text-neutral-300">
                <li>Rental income potential (Airbnb & long-term let)</li>
                <li>Capital appreciation from off-plan to handover</li>
                <li>30% projected ROI yearly depending on unit type</li>
              </ul>
            </>
          ),
        },
        {
          q: "Can I schedule a site inspection?",
          a: "Yes, we host weekly site inspections for subscribers and investors. Virtual walkthroughs are available for diaspora clients.",
        },
      ],
    },
    {
      category: "Documentation & Legal Assurance",
      questions: [
        {
          q: "Are your land titles genuine and verifiable?",
          a: "Yes. Elysian Rise is backed by verifiable legal titles, including a Certificate of Occupancy (C of O). All documents are available for due diligence.",
        },
        {
          q: "What documentation do I receive upon full payment?",
          a: (
            <>
              Upon completion of payment and paperwork, you will receive:
              <ul className="list-disc list-inside mt-2 text-neutral-300">
                <li>Deed of Assignment</li>
                <li>Survey Plan</li>
                <li>Allocation Letter</li>
                <li>Other applicable legal documents</li>
              </ul>
            </>
          ),
        },
        {
          q: "Are there any other charges aside from the property price?",
          a: (
            <>
              Yes. Buyers are required to pay:
              <ul className="list-disc list-inside mt-2 text-neutral-300">
                <li>Legal Fees – 5% (documentation & title registration)</li>
                <li>Infrastructure Fee – 3.5% (roads, drainage, water, etc.)</li>
              </ul>
            </>
          ),
        },
        {
          q: "Can diaspora buyers own property through Strongmas?",
          a: "Yes. We work with diaspora clients worldwide, offering proxy purchases, virtual tours, and financing support.",
        },
        {
          q: "Are there service charges after handover?",
          a: "Yes. A standard service charge covers security, waste management, maintenance, and shared utilities.",
        },
        {
          q: "Will my unit come fully finished or semi-finished?",
          a: "All units are delivered fully finished with fitted kitchens, bathrooms, lighting, flooring, and wardrobes. Furnishing packages are available on request.",
        },
        {
          q: "Do you offer property management or rental services?",
          a: "Yes. Strongmas Residence Maison Ltd offers Airbnb hosting, long-term leasing, and rental yield optimization services.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-neutral-900 text-white font-poppins min-h-screen">
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
            .font-poppins { font-family: 'Poppins', sans-serif; }
          `}</style>

          {/* Hero */}
          <section className="relative h-[40vh] bg-black">
            <CldImage
              src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753027728/lpffnelemh8hfbr1b3ei.jpg"
              alt="FAQ Hero"
              width={1920}
              sizes="100vw"
              loading="eager"
              className="absolute inset-0 object-cover w-full h-full opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <p className="text-sm text-neutral-300 mt-2">
                <a href="/" className="underline hover:text-white">
                  Home
                </a>{" "}
                / FAQs
              </p>
            </div>
          </section>

          {/* FAQ Sections */}
          <main className="py-16 px-4 sm:px-6 lg:px-8 space-y-12">
            {faqData.map((category, catIndex) => (
              <section
                key={catIndex}
                className={`p-6 rounded-lg shadow-lg ${bgColors[catIndex % bgColors.length]}`}
              >
                <h2 className="text-2xl font-semibold mb-6 border-b border-neutral-500 pb-2">
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const isOpen = openIndex[catIndex] === qIndex;
                    return (
                      <div
                        key={qIndex}
                        className="border border-neutral-700 rounded-lg overflow-hidden"
                      >
                        <button
                          className="flex justify-between w-full items-center px-4 py-3 text-left text-base font-medium text-white bg-neutral-800 hover:bg-neutral-700"
                          onClick={() => toggle(catIndex, qIndex)}
                        >
                          <span>{item.q}</span>
                          <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
                            ▼
                          </span>
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          } bg-neutral-900 text-neutral-300 border-t border-neutral-700 px-4`}
                        >
                          <div className="py-4">
                            {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </main>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
