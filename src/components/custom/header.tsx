import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
            <span className="text-xl font-bold tracking-wider">STRONGMAS</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
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
      </div>
    </header>
  );
};

export default Header;
