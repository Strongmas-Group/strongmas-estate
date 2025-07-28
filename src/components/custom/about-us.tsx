"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="py-4 sm:py-6 bg-background">
      <div className=" mx-auto px-4">
        <motion.div
          className="bg-card p-6 md:p-12 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // 👈 replay animation
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} // 👈 replay animation
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-white space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                WHAT IS STRONGMAS?
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                STRONGMAS is more than just a collection of luxury
                properties—it's a vision of sustainable, tech-enabled living
                refined. With over a decade of experience in real estate
                development, we’ve set new benchmarks for modern,
                high-performance housing in Lagos, Nigeria, and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our zero-energy consumption homes blend architectural excellence
                with cutting-edge smart technologies and eco-conscious design.
                STRONGMAS delivers livable spaces that transform lives, create
                lasting value, and build legacies for a discerning global
                clientele. With an expansion focus across Africa, we are
                committed to redefining how luxury and sustainability coexist in
                the built environment.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 cursor-pointer"
              >
                <Link href="/about">LEARN MORE</Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[650px] w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <Image
                src="https://res.cloudinary.com/dbczzmftw/image/upload/v1752970206/f7po08vfgnluvu3wv4l9.png"
                alt="Business handshake"
                fill
                className="object-cover rounded-lg"
                data-ai-hint="business handshake"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
