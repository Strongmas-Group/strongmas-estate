"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="py-4 sm:py-6 bg-background">
      <div className="container mx-auto px-4">
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
              <p className="text-muted-foreground leading-relaxed">
                We at Strongmas Residence and Development Limited, a subsidiary
                of Strongmas Group, are a trusted leader in smart building
                development in Nigeria. Since delivering our first set of
                beautifully crafted projects, we've made a significant impact on
                both residential and commercial architecture. Renowned for
                offering "luxurious yet comfortable" properties, we combine
                elegant designs with the latest technology and uphold the
                highest quality standards.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
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
