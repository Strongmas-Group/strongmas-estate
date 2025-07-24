import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative h-[40vh] md:h-[50vh] bg-black">
          <Image
            src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753019980/kttuzjqesi4zf3ipmkti.png"
            alt="Contact us background"
            fill
            className="object-cover opacity-40"
            data-ai-hint="office building interior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/50" />
          <div className="relative z-10 h-full flex flex-col justify-center items-start text-white container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold font-headline">
              CONTACT US
            </h1>
            <p className="mt-2 text-sm font-sans">
              <Link href="/" className="hover:underline">Home</Link> / Contact Us
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white text-black font-sans">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl font-bold font-headline mb-4">REACH OUT TO US</h2>
                  <p className="text-muted-foreground">
                    Interested in the services we offer? Get in touch with our team to discuss your needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold font-headline text-lg mb-2">Visit Our Office</h3>
                  <p className="text-muted-foreground">
                    Km 49, Olokonla Bus Stop, Lekki - Epe Expressway, Beside Petrocam Filling Station, Ajah, Lagos - Nigeria.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold font-headline text-lg mb-2">Send Email</h3>
                  <p className="text-muted-foreground">hello@strongmasng.com</p>
                </div>
                <div>
                  <h3 className="font-bold font-headline text-lg mb-2">Contact/WhatsApp</h3>
                  <p className="text-muted-foreground">+234 901 077 7777</p>
                </div>
                <div>
                  <h3 className="font-bold font-headline text-lg mb-2">Find us on Social Media:</h3>
                  <div className="flex gap-4">
                    <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input placeholder="Full Name" className="bg-white" />
                    <Input placeholder="Email Address" className="bg-white" />
                  </div>
                  <Input placeholder="Phone Number" className="bg-white" />
                  <Input placeholder="Subject" className="bg-white" />
                  <Textarea placeholder="Write Message" rows={5} className="bg-white" />
                  <Button type="submit" size="lg" className="w-full bg-[#142B54] text-white hover:bg-[#142B54]/90 font-headline">
                    CONTACT US
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-[300px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63435.789871376786!2d3.4902400631003414!3d6.427842004237196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKm%2049%2C%20Olokonla%20Bus%20Stop%2C%20Lekki%20-%20Epe%20Expressway%2C%20Beside%20Petrocam%20Filling%20Station%2C%20Ajah%2C%20Lagos%20-%20Nigeria.!5e0!3m2!1sen!2sng!4v1753022482341!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
}
