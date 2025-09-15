import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#151515] text-foreground font-sans">
      <div className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-8">
          <div className="flex flex-col items-start md:items-start text-left md:text-left">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753087548/vvqvqpq20asthbcthx4b.png"
                alt="Strongmas Residence Logo"
                width={200}
                height={44}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-foreground mb-4 text-sm max-w-xs">
              With over 30 satisfied clients and the delivery of 50+
              state-of-the-art apartments and duplexes, we proudly showcase our
              commitment to excellence.
            </p>
            <div className="flex gap-2 justify-start">
  {[
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/14HGgmE8vPu/?mibextid=wwXIfr",
      label: "Visit our Facebook page",
    },
    { Icon: Twitter, href: "https://x.com/Strongmasres", label: "Visit our Twitter page" },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/strongmasresidences?igsh=MWF6YXByN3RiNmxwZQ==",
      label: "Visit our Instagram page",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/strongmasresidence/",
      label: "Visit our LinkedIn page",
    },
  ].map(({ Icon, href, label }, index) => (
    <Link
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label} // Accessibility fix
      className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
    >
      <Icon className="h-4 w-4" />
    </Link>
  ))}
</div>

          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-4 font-headline text-white">
              Useful Link
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href="/faq"
                className="text-foreground hover:text-foreground/80"
              >
                FAQ
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-foreground/80"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-foreground/80"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-foreground/80"
              >
                About us
              </Link>
            </nav>
          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-4 font-headline text-white">
              Address & Contact Info
            </h4>
            <address className="space-y-2 text-foreground not-italic text-sm">
              <p>
              Adjacent Lagos Business School, Lekki - Epe Expressway, Lagos - Nigeria.
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+2349010777777"
                  className="hover:text-foreground/80"
                >
                  +234 901 077 7777
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@strongmasng.com"
                  className="hover:text-foreground/80"
                >
                  hello@strongmasng.com
                </a>
              </p>
            </address>
          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-4 font-headline text-white">
              Sign Up For Our Exclusive Newsletter
            </h4>
            <form className="flex flex-col gap-2 w-full max-w-xs">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-secondary border-muted-foreground/50 rounded-full pr-28 text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  variant="default"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 rounded-full bg-[#EFC59D] text-accent-foreground hover:bg-accent/90"
                >
                  SUBMIT
                </Button>
              </div>
              <p className="text-sm text-foreground">
                By signing up you accept our{" "}
                <Link href="#" className="underline hover:text-foreground/80">
                  terms and conditions
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="py-3 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-foreground gap-y-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <Link href="#" className="hover:text-foreground/80">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:text-foreground/80">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-foreground/80">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground/80">
              Corporate Communications Policy
            </Link>
          </div>
          <p className="text-center md:text-right w-full md:w-auto">
            &copy; {new Date().getFullYear()} Strongmas Properties. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
