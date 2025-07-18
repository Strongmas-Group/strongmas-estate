import Link from "next/link";
import { Building2, Facebook, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-accent" />
              <span className="font-bold text-lg font-headline">StrongHome</span>
            </Link>
            <p className="text-muted-foreground">
              Building dreams, one home at a time. Your trusted partner in real
              estate.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-accent">
                <Facebook />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent">
                <Twitter />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent">
                <Instagram />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-muted-foreground hover:text-accent">
                About Us
              </Link>
              <Link href="#featured" className="text-muted-foreground hover:text-accent">
                Properties
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent">
                Agents
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent">
                Blog
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Luxury Lane, Suite 100</li>
              <li>Beverly Hills, CA 90210</li>
              <li>(123) 456-7890</li>
              <li>contact@stronghome.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest properties.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-background"
              />
              <Button type="submit" variant="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/20">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} StrongHome. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
