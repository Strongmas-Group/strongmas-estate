import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-auto">
          <span className="text-3xl font-bold tracking-wider text-primary">
            STRONGMAS
          </span>
          <div className="flex items-center">
            <div className="h-0.5 w-8 bg-accent mr-2"></div>
            <span className="text-sm tracking-[0.2em] text-accent">
              RESIDENCE
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="#featured"
            className="transition-colors hover:text-accent"
          >
            Featured
          </Link>
          <Link
            href="#locations"
            className="transition-colors hover:text-accent"
          >
            Locations
          </Link>
          <Link href="#contact" className="transition-colors hover:text-accent">
            Contact
          </Link>
        </nav>
        <Button asChild className="ml-6 hidden md:inline-flex">
          <Link href="#">Get In Touch</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
