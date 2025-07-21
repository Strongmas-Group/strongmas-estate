import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#151515] text-foreground font-sans">
      <div className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
                <span className="text-3xl font-bold tracking-wider">STRONGMAS</span>
                <div className="flex items-center">
                    <div className="h-0.5 w-8 bg-accent mr-2"></div>
                    <span className="text-sm tracking-[0.2em] text-accent">RESIDENCE</span>
                </div>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm max-w-xs">
              With over 30 satisfied clients and the delivery of 50+
              state-of-the-art apartments and duplexes, we proudly showcase our
              commitment to excellence.
            </p>
            <div className="flex gap-2 mt-auto">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 font-headline text-accent">Useful Link</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground">Carrier</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">FAQ</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">About us</Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 font-headline text-accent">Address & Contact Info</h4>
            <address className="space-y-2 text-muted-foreground not-italic text-sm">
              <p>
                Km 49, Olokonla Bus Stop, Lekki - Epe Expressway, Beside
                Petrocam Filling Station, Ajah, Lagos - Nigeria.
              </p>
              <p>Phone: <a href="tel:+2349010777777" className="hover:text-foreground">+234 901 077 7777</a></p>
              <p>Email: <a href="mailto:hello@strongmasng.com" className="hover:text-foreground">hello@strongmasng.com</a></p>
            </address>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 font-headline text-accent">
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
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  SUBMIT
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                By signing up you accept our{" "}
                <Link href="#" className="underline hover:text-foreground">
                  terms and conditions
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-3 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-xs text-muted-foreground">
           <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2">
               <Link href="#" className="hover:text-foreground">Terms and Conditions</Link>
               <Link href="#" className="hover:text-foreground">Cookie Policy</Link>
               <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
               <Link href="#" className="hover:text-foreground">Corporate Communications Policy</Link>
           </div>
          <p className="text-center">&copy; {new Date().getFullYear()} Strongmas Properties. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
