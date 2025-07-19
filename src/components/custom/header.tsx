import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full bg-black/20 backdrop-blur-sm">
      <div className="container flex h-20 items-center px-4 sm:px-6 lg:px-8 text-white">
        <Link href="/" className="mr-auto">
          <span className="text-3xl font-bold tracking-wider">
            STRONGMAS
          </span>
          <div className="flex items-center">
            <div className="h-0.5 w-8 bg-white mr-2"></div>
            <span className="text-sm tracking-[0.2em]">
              RESIDENCE
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-white/80"
          >
            Homepage
          </Link>
          <Link
            href="#featured"
            className="transition-colors hover:text-white/80"
          >
            Browse property
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-white/80"
          >
            Services
          </Link>
           <Link
            href="#insight"
            className="transition-colors hover:text-white/80"
          >
            In sight
          </Link>
           <Link
            href="#about"
            className="transition-colors hover:text-white/80"
          >
            About us
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-white/80"
          >
            Contact
          </Link>
        </nav>
        <Button asChild variant="outline" className="ml-6 hidden md:inline-flex bg-transparent border-white text-white hover:bg-white hover:text-primary">
          <Link href="#">Book an Inspection</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
