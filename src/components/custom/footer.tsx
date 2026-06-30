import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const GOLD = "#EFC59D";

const socials = [
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
];

const usefulLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "About us", href: "/about" },
];

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="relative mb-6 font-headline text-base font-semibold text-white">
    {children}
    <span
      className="absolute -bottom-2 left-0 block h-px w-10"
      style={{ background: GOLD }}
    />
  </h4>
);

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-[#1b1b1b] to-[#111111] text-foreground font-sans"
    >
      {/* Gold top accent line */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
        }}
      />

      <div className="container py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start lg:col-span-4">
            <Link href="/" className="mb-5 inline-block">
              <Image
                src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753087548/vvqvqpq20asthbcthx4b.png"
                alt="Strongmas Residence Logo"
                width={200}
                height={44}
                className="h-auto w-auto"
              />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-foreground/80">
              With over 70 satisfied clients and the delivery of 71+ state-of-the-art apartments and
              duplexes, we proudly showcase our commitment to excellence.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:text-black"
                >
                  <span
                    className="absolute inset-0 scale-0 rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                    style={{ background: GOLD }}
                    aria-hidden
                  />
                  <Icon className="relative z-10 h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Useful links */}
          <div className="lg:col-span-2">
            <SectionHeading>Useful Links</SectionHeading>
            <nav className="flex flex-col gap-3 text-sm">
              {usefulLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-white"
                >
                  <ArrowRight
                    className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    style={{ color: GOLD }}
                  />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <SectionHeading>Address &amp; Contact</SectionHeading>
            <address className="space-y-4 not-italic text-sm text-foreground/80">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: GOLD }} />
                <span>Adjacent Lagos Business School, Lekki - Epe Expressway, Lagos - Nigeria.</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: GOLD }} />
                <span>
                  <a href="tel:+2349010777777" className="transition-colors hover:text-white">
                    +234 901 077 7777
                  </a>
                  <br />
                  <a href="tel:+2348028940857" className="transition-colors hover:text-white">
                    +234 802 894 0857
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: GOLD }} />
                <a href="mailto:hello@strongmasng.com" className="transition-colors hover:text-white">
                  hello@strongmasng.com
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <SectionHeading>Exclusive Newsletter</SectionHeading>
            <p className="mb-4 text-sm leading-relaxed text-foreground/70">
              Be the first to hear about new launches and exclusive offers.
            </p>
            <form className="flex flex-col gap-3 w-full max-w-xs">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="h-11 rounded-full border-white/10 bg-white/5 pr-28 text-foreground placeholder:text-muted-foreground focus-visible:ring-1"
                />
                <Button
                  type="submit"
                  variant="default"
                  className="absolute right-1 top-1/2 h-9 -translate-y-1/2 rounded-full bg-[#EFC59D] font-medium text-black hover:bg-[#e6b587]"
                >
                  SUBSCRIBE
                </Button>
              </div>
              <p className="text-xs text-foreground/60">
                By signing up you accept our{" "}
                <Link href="#" className="underline underline-offset-2 hover:text-white">
                  terms and conditions
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-y-3 py-5 px-4 text-xs text-foreground/70 sm:px-6 md:flex-row lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start">
            <Link href="#" className="transition-colors hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Cookie Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Corporate Communications Policy
            </Link>
          </div>
          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Strongmas Properties. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
