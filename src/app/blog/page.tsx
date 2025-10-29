"use client";

import * as React from "react";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    slug: "elysian-rise-victoria-island",
    title: "Elysian Rise in Victoria Island: Why Off-Plan Buyers Stand to Gain the Most",
    excerpt:
      "Invest early in Elysian Rise by Strongmas Residence, Victoria Island’s signature high-rise. Enjoy 10–15% annual ROI, 25–45% value growth, and flexible payment options that guarantee future capital appreciation.",
    image:
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1761658131/ely2_t3kf0b.jpg",
    date: "October 2025",
    author: "Strongmas Residence",
  },
  // Add more blogs later...
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] bg-black">
          <Image
            src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753056651/izgmyjnwklmrqjgzsi7l.jpg"
            alt="Elysian Rise Hero"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/50" />
          <div className="relative z-10 h-full flex flex-col justify-center items-start text-white container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold font-headline">
              OUR BLOG
            </h1>
            <p className="mt-2 text-sm font-sans">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / Blog
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 bg-gray-50 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold font-headline mb-4 text-gray-800">
              Insights, Updates & Investment Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest articles on luxury real estate, market trends, and
              investment strategies from Strongmas Residence.
            </p>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-16 sm:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {blog.date} • {blog.author}
                  </p>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
