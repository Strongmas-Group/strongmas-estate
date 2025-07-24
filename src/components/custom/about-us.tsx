import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="bg-card p-6 md:p-12 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                WHAT IS STRONGMAS?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We at Strongmas Residence and Development Limited, a subsidiary
                of Strongmas Group, is a trusted leader in smart building
                development in Nigeria. Since delivering our first set of
                beautifully crafted projects, we've made a significant impact
                on both residential and commercial architecture. Renowned for
                offering "luxurious yet comfortable" properties, we combine
                elegant designs with the latest technology and uphold the
                highest quality standards.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/about">LEARN MORE</Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-[450px] w-full">
              <Image
                src="https://res.cloudinary.com/dbczzmftw/image/upload/v1752970206/f7po08vfgnluvu3wv4l9.png"
                alt="Business handshake"
                fill
                className="object-cover rounded-lg"
                data-ai-hint="business handshake"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
