"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { properties } from "@/lib/properties";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="transition-colors hover:text-white/80 block py-2"
  >
    {children}
  </Link>
);

const BrowseDropdown = () => {
  const ongoingProjects = properties.filter(
    (property) => property.status.toLowerCase() === "ongoing"
  );
  const completedProjects = properties.filter(
    (property) => property.status.toLowerCase() === "completed"
  );

  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-[180px] space-y-2">
        <DropdownMenuLabel className="font-bold text-white text-base">
          Completed Projects
        </DropdownMenuLabel>
        <div className="space-y-1">
          {completedProjects.map((property) => (
            <DropdownMenuItem
              key={property.name}
              asChild
              className="hover:bg-[#EFC59D] text-base text-white"
            >
              <Link
                href={`/properties/${property.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {property.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-[180px] space-y-2">
        <DropdownMenuLabel className="font-bold text-white text-base">
          Ongoing Projects
        </DropdownMenuLabel>
        <div className="space-y-1">
          {ongoingProjects.map((property) => (
            <DropdownMenuItem
              key={property.name}
              asChild
              className="hover:bg-[#EFC59D] text-base text-white"
            >
              <Link
                href={`/properties/${property.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {property.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </div>
    </div>
  );
};

const BrowseAccordion = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1" className="border-none">
      <AccordionTrigger className="hover:no-underline py-2 text-white hover:text-white/80">
        Our Properties
      </AccordionTrigger>
      <AccordionContent className="pl-4">
        <div className="flex flex-col gap-2">
          <NavLink href="/#featured">All Properties</NavLink>
          {properties.map((property) => (
            <NavLink
              key={property.name}
              href={`/properties/${property.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {property.name}
            </NavLink>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/20 backdrop-blur-sm font-headline h-20 flex items-center">
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753087548/vvqvqpq20asthbcthx4b.png"
              alt="Strongmas Residence Logo"
              width={200}
              height={44}
              className="w-[150px] h-[33px] md:w-[200px] md:h-[44px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center gap-6 text-sm font-medium whitespace-nowrap">
            <NavLink href="/">Home</NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-white/80 outline-none">
                Our Properties <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-background text-white border-border p-4 min-w-[500px] mt-4"
              >
                <BrowseDropdown />
              </DropdownMenuContent>
            </DropdownMenu>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/#locations">Insight</NavLink>
            <NavLink href="/about">About us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex-1 flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background text-white w-[250px] sm:w-[300px] p-0"
            >
              <SheetHeader className="p-6 border-b border-border">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753087548/vvqvqpq20asthbcthx4b.png"
                    alt="Strongmas Residence Logo"
                    width={100}
                    height={13}
                    className="h-auto w-auto"
                  />
                </Link>
              </SheetHeader>

              <div className="flex flex-col h-full px-6 pb-6">
                <nav className="flex flex-col gap-2 text-lg mt-2">
                  <NavLink href="/">Home</NavLink>
                  <BrowseAccordion />
                  <NavLink href="/services">Services</NavLink>
                  <NavLink href="/#locations">Insight</NavLink>
                  <NavLink href="/about">About us</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                  <NavLink href="/blog">Blog</NavLink>
                </nav>

                {/* Book a Tour button for mobile */}
                <Link href="/book-inspection" className="mt-auto">
                  <Button className="w-full bg-[#142B54] text-white hover:bg-[#142B54]/90 rounded-[6px]">
                    Book A Tour
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Book a Tour button for desktop */}
      <div className="hidden md:block absolute right-[30px] top-1/2 -translate-y-1/2">
        <Link href="/book-inspection">
          <Button className="bg-[#142B54] text-white hover:bg-[#142B54]/90 rounded-[6px] h-[50px] px-[30px] flex-shrink-0">
            Book A Tour
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
