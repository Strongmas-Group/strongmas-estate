
"use client";

import * as React from "react";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import DiscoverProperties from "@/components/custom/discover-properties";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const leadershipTeam = [
  {
    "name": "MICHEAL SHOBUKOLA",
    "role": "Founder & Managing Director",
    "imageUrl": "https://res.cloudinary.com/dbczzmftw/image/upload/v1753280071/umjzpb7cx3msnnemrltz.png",
    "description": "Micheal Shobukola is the visionary Founder and Managing Director of Strongmas Group — a dynamic entrepreneur whose influence spans over a decade of building impactful, future-forward businesses in Nigeria’s evolving real estate landscape. With a B.Sc. in Computer and Information Science from Lead City University and a Master’s degree from the University of East Anglia, Micheal combines technical insight with business acumen to lead Strongmas with precision, innovation, and purpose. He has been the architect of the company’s transformation — from a single idea into a diversified group — overseeing the conceptualization, development, construction, and management of some of the most sophisticated premium housing estates and smart gated communities in Nigeria. His strategic leadership and exceptional ability to mobilize capital have been instrumental to the exponential growth of Strongmas. Today, the company stands as a symbol of modern living, innovation, and lifestyle excellence — a vision Micheal continues to expand with bold thinking and an unrelenting drive for quality. Micheal is widely travelled and highly respected in the real estate and business sector.",
    "hint": "man smiling suit"
  },
  {
    "name": "KIKELOMO WILLIAMS",
    "role": "Executive Director",
    "imageUrl": "https://res.cloudinary.com/dbczzmftw/image/upload/v1753280272/nln9cxrfh1zva14ix4eu.jpg",
    "description": "Kikelomo Williams is a seasoned strategic leader whose professional journey spans over a decade across both local and multinational environments. Prior to joining Strongmas, she successfully led several revenue transformation initiatives — building high-performing sales teams, driving consistent year-on-year profit growth, and repositioning brands for long-term success. Her impact has been particularly strong in the real estate sector, where she implemented innovative sales and marketing systems that delivered measurable results to the bottom line. She holds a degree in History and International Relations from Lagos State University, as well as a diploma in Mass Communication from the University of Lagos. Kikelomo also holds certifications from Curtin University and PRCAN and is a proud member of the International Management Consultants (IMC). Now at Strongmas, Kikelomo brings her results-driven leadership to the Executive Team — with a clear focus on increasing revenue through strategic sales execution, brand strategy, market positioning, and operational growth. Her role is central to scaling the company’s influence, optimizing customer experience, and unlocking new revenue channels through strategic partnerships, corporate communications, and team development — all reinforcing Strongmas’ vision of becoming a household name in luxury real estate.",
    "hint": "woman professional headshot"
  },
  {
    "name": "DOHARE PAUL",
    "role": "Chief Financial Controller",
    "imageUrl": "https://res.cloudinary.com/dbczzmftw/image/upload/v1753280434/xxzpxto1gcdcrbycvas1.jpg",
    "description": "Dohare Paul is an accomplished finance executive with over 11 years of cross-industry experience in accounting, financial reporting, data analytics, treasury, and business advisory. Since joining Strongmas in 2023, he has significantly strengthened the company’s financial architecture and operational controls. Known for his integrity and attention to detail, Dohare champions sound financial governance, strict compliance, and ethical conduct. His expertise ensures that Strongmas maintains fiscal discipline while scaling its portfolio of luxury developments with confidence and credibility.",
    "hint": "man professional headshot"
  },
  {
    "name": "IBRAHIM SULE OMOYEMI",
    "role": "Senior Project Manager",
    "imageUrl": "https://res.cloudinary.com/dbczzmftw/image/upload/v1753280511/oebojjok8bb0gdxri0nc.jpg",
    "description": "Ibrahim Sule Omoyemi is a seasoned civil engineering professional with a distinguished track record in delivering high-impact infrastructure and real estate developments across Nigeria. A registered member of the Council for the Regulation of Engineering in Nigeria (COREN), Ibrahim combines technical expertise with strong project leadership. He holds an HND in Civil Engineering Technology from the Federal Polytechnic, Auchi, and both a Postgraduate Diploma (PGD) and an MBA from Ladoke Akintola University of Technology (LAUTECH), Ogbomoso. Over the years, Ibrahim has led and contributed to the successful execution of numerous landmark projects, including: Federal Ministry of Finance Complex, Central District, Abuja (2014); Sunrise Hills Estate, Abuja (2014); Bayelsa International Airport (2018); and Niger Delta University Senate Building, Amassoma, Bayelsa (2019). Now serving as Senior Project Manager at Strongmas Residence, Ibrahim brings extensive experience in substructure and superstructure concrete works, structural analysis, quantity estimation, and full-cycle project delivery. His attention to detail, results-driven mindset, and unwavering commitment to quality continue to shape the delivery of Strongmas’ luxury estates — ensuring every structure meets the highest standards in design, safety, and functionality.",
    "hint": "man construction hardhat"
  }
];

export default function AboutPage() {

   const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative h-[40vh] md:h-[50vh] bg-black">
          <Image
            src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753019980/kttuzjqesi4zf3ipmkti.png"
            alt="About us background"
            fill
            className="object-cover opacity-40"
            data-ai-hint="office building interior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/50" />
          <div className="relative z-10 h-full flex flex-col justify-center items-start text-white container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold font-headline">
              ABOUT US
            </h1>
            <p className="mt-2 text-sm font-sans">
              <Link href="/" className="hover:underline">Home</Link> / About Us
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background font-sans">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-[550px] w-full order-last lg:order-first">
                <Image
                  src="https://res.cloudinary.com/dbczzmftw/image/upload/v1752970206/f7po08vfgnluvu3wv4l9.png"
                  alt="Business handshake"
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint="business handshake"
                />
              </div>
              <div className="text-white order-first lg:order-last px-4 sm:px-0">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                  GET TO KNOW US!
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We at Strongmas Residence and Development Limited, a subsidiary
                  of Strongmas Group, is a trusted leader in smart building
                  development in Nigeria. Since delivering our first set of
                  beautifully crafted projects, we've made a significant impact
                  on both residential and commercial architecture. Renowned for
                  offering "luxurious yet comfortable" properties, we combine
                  elegant designs with the latest technology and uphold the
                  highest quality standards.
                </p>
                 <p className="text-muted-foreground leading-relaxed">
                  Our fully serviced estates provide 24-hour power, security, treated
                  water, fire alarms, home automation, and a range of modern
                  conveniences for a truly seamless living experience. With just a 40%
                  down payment, you can join our growing community of homeowners or
                  investors enjoying our luxurious properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white text-black font-sans">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                WHAT WE OFFER
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether for living or investment, explore our current projects and discover the finest in modern residential and commercial properties, designed to meet your highest standards. At Strongmas, we offer a wide range of residential and commercial properties designed to meet your highest standards.
              </p>
            </div>
          </div>
        </section>

        <Separator className="bg-accent h-[2px]" />

        <section className="py-16 sm:py-24 bg-white text-black font-sans">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                MEET OUR LEADERSHIP TEAM
              </h2>
            </div>
             <Carousel
              plugins={[plugin.current]}
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.play()}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {leadershipTeam.map((member, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-4">
                      <div className="text-left">
                        <h3 className="text-3xl font-bold font-headline">{member.name}</h3>
                        <p className="text-accent font-bold mb-6">{member.role}</p>
                        <p className="text-muted-foreground leading-relaxed text-black/60">
                          {member.description}
                        </p>
                      </div>
                      <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          fill
                          className="object-contain rounded-lg"
                          data-ai-hint={member.hint}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots className="mt-8 justify-center" />
            </Carousel>
          </div>
        </section>
        <DiscoverProperties />
      </main>
      <Footer />
    </div>
  );
}
