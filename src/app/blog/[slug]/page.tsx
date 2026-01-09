"use client";

import React from "react";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const blog = {
  slug: "elysian-rise-victoria-island",
  title: "Elysian Rise in Victoria Island: Why Off-Plan Buyers Stand to Gain the Most",
  author: "Strongmas Residence Team",
  date: "October 28, 2025",
  heroImage:
    "https://res.cloudinary.com/dbczzmftw/image/upload/v1753056651/izgmyjnwklmrqjgzsi7l.jpg",
  images: {
    rooftop:
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1761665070/living_Scene_1.Denoiser_copy_ueza51.jpg",
    night: "https://res.cloudinary.com/dbtqditjh/image/upload/v1761658137/rooftop_kc1unb.png",
  },
  content: [
    {
      text: `In Lagos’ competitive luxury real estate market, good timing determines returns. The most successful investors understand that maximum ROI lie not in waiting for property completion, but in identifying value before the market does. Rising prominently on 3A Musa Yar’Adua Street, Victoria Island, Elysian Rise by Strongmas Residence stands as a 13-floor architectural masterpiece, a seamless blend of smart innovation, modern design, and wealth-building potential. For discerning investors, securing an off-plan unit at Elysian Rise is more than a property purchase; it’s a calculated strategy for long-term financial growth.
      `,
    },
    {
      heading: "Appreciation that Outperforms the Market",
      text: `Positioned in one of Lagos’ most exclusive districts, Elysian Rise enjoys the unrivaled advantage of Victoria Island’s limited land availability and enduring demand. Properties in this location record a <a href="https://theafricanvestor.com/blogs/news/lagos-property-investment-still-profitable" class="hover:text-blue-800" target="_blank" rel="noopener noreferrer"> 10–15% location-driven ROI annually</a>, driven by the area’s dual reputation as a corporate hub and lifestyle destination.

      By buying into Elysian Rise by Strongmas Residence at the off-plan stage, investors benefit from today’s pricing while capturing an additional 5–15% value gain during construction, even before handover. This compound appreciation positions early buyers for exponential returns as the project nears completion, translating foresight into tangible profit.`,
      image: "rooftop",
    },
    {
      heading: "Early Investment, Elevated Returns",
      text: `With Lagos’ premium real estate market appreciating <a href="https://theafricanvestor.com/blogs/news/lagos-property-investment-still-profitable" class="hover:text-blue-800" target="_blank" rel="noopener noreferrer"> 25–45% annually </a>, each delay in acquisition can mean millions lost in unrealized gains. Early buyers at Elysian Rise are perfectly positioned to leverage both construction-stage appreciation and post-completion demand surge.

  Backed by Strongmas Residence’s track record of architectural delivery and credibility, investors gain more than just property ownership - they gain association with a brand renowned for consistency, innovation, and value preservation. Every floor completed at Elysian Rise not only raises the skyline but also the net worth of its early stakeholders.`,
    },
    {
      heading: "Crafted for Luxury, Designed for Longevity",
      text: `Elysian Rise by Strongmas Residence redefines luxury through technological precision and timeless design. The development integrates AI-powered smart automation, EV charging stations, rooftop infinity pools, private cinemas, children’s play zones, clubhouse lounges, concierge and spa facilities, and hazard detection systems - all within a fully powered, secure, and serene environment.

  Available units — including 2-bedroom apartments, 3-bedroom apartments, 4-bedroom maisonettes, and a 5-bedroom penthouse, Elysian Rise offers a lifestyle that commands premium rental yields and enduring resale value.`,
      image: "night",
    },
    {
      heading: "Flexible Payment. Lasting Leverage.",
      text: `Another reason off-plan investors at Elysian Rise stand to gain is the flexible payment structure. With an initial 40% deposit and balance spread across 12–18 months, buyers secure high-value assets without overextending liquidity. This structure provides financial leverage, allowing investors to diversify while their property appreciates steadily in the background.

  Compared to ready-to-move properties demanding full payment upfront, off-plan ownership at Elysian Rise creates a built-in hedge against inflation and price escalation in Victoria Island. Simply put, investors enjoy growing equity while paying progressively, a rare win-win in Lagos’ dynamic real estate market.`,
    },
    {
      heading: "Now Selling — Few Units Available",
      text: `Timing is everything in real estate, and the window to buy at today’s prices is closing quickly. With construction advancing rapidly and limited units remaining, those who hesitate risk paying significantly higher rates upon completion.

  Elysian Rise isn’t just a luxury home; it’s a legacy investment engineered for wealth preservation and generational growth.

  Don’t wait for completion. Secure your skyline today. Call <a href="tel:+2348028940857" class="hover:text-blue-800"> +234 802 894 0857</a>, <a href="tel:+2349010777777" class="hover:text-blue-800"> +234 901 077 7777  </a>  or visit <a href="https://strongmasresidence.com/properties/the-elysian-rise" class="hover:text-blue-800" target="_blank" rel="noopener noreferrer"> www.strongmasresidence.com/elysianrise</a> to book a private or virtual property tour.

  Elysian Rise: Where Vision Becomes Structure.`,
    },
  ],
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  if (slug !== blog.slug) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] bg-black">
          <Image
            src={blog.heroImage}
            alt="Elysian Rise Facade"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20" />
          <div className="relative z-10 h-full flex flex-col justify-center items-start text-white container mx-auto px-6">
            <h1 className="text-3xl md:text-5xl font-bold font-headline max-w-3xl leading-tight">
              {blog.title}
            </h1>
            <p className="mt-3 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>{" "}
              / Elysian Rise
            </p>
          </div>
        </section>

        {/* Blog Meta */}
        <section className="py-8 text-center bg-gray-50">
          <p className="text-gray-700 font-medium">
            {blog.author} • {blog.date}
          </p>
        </section>

        {/* Blog Content */}
        <section className="py-16 container mx-auto px-6 lg:px-12 text-gray-800 space-y-16">
          {blog.content.map((section, i) => (
            <div key={i} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.heading}</h2>
              <p
                className="whitespace-pre-line leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: section.text }}
              />

              {section.image && (
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mt-6">
                  <Image
                    src={blog.images[section.image as keyof typeof blog.images]}
                    alt={`${section.heading} image`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Back to Blog */}
        <div className="container mx-auto px-6 pb-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
