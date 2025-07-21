import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import DiscoverProperties from "@/components/custom/discover-properties";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative h-[40vh] md:h-[50vh] bg-black">
          <Image
            src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753019980/kttuzjqesi4zf3ipmkti.png"
            alt="About us background"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
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
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold font-headline">Micheal Shobukola</h3>
                <p className="text-accent font-bold mb-6">Managing Director</p>
                <p className="text-muted-foreground leading-relaxed">
                  Micheal Shobukola, Founder and Managing Director of Strongmas Group, has over a decade of experience in building successful enterprises in Nigeria. He holds a B.Sc. in Computer and Information Science from Lead City University and a master's degree from the University of East Anglia. His leadership in developing world-class properties and expertise in fundraising have driven Strongmas' growth in housing estates and gated communities.
                </p>
              </div>
              <div className="relative h-96 md:h-[550px] w-full">
                <Image
                  src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753020241/lwiwgwhy2eqyo04xtfgn.png"
                  alt="Micheal Shobukola"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  data-ai-hint="man smiling suit"
                />
              </div>
            </div>
          </div>
        </section>
        <DiscoverProperties />
      </main>
      <Footer />
    </div>
  );
}
