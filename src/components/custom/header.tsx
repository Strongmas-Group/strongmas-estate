"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
  <Link href={href} onClick={onClick} className="transition-colors hover:text-white/80 block py-2">
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
              <Link href={`/properties/${property.name.toLowerCase().replace(/\s+/g, "-")}`}>
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
              <Link href={`/properties/${property.name.toLowerCase().replace(/\s+/g, "-")}`}>
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
              href={`/properties/${property.name.toLowerCase().replace(/\s+/g, "-")}`}
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
    <header className="fixed top-0 z-50 w-full flex justify-center pt-5 px-6 font-headline">
      <div className="w-full max-w-[1240px] bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-6 h-12 flex items-center justify-between text-white relative">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753087548/vvqvqpq20asthbcthx4b.png"
              alt="Strongmas Residence Logo"
              width={200}
              height={44}
              className="w-[110px] h-[24px] md:w-[130px] md:h-[28px] lg:w-[150px] lg:h-[32px] object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center flex-1">
          <nav className="flex items-center gap-4 xl:gap-5 text-xs font-medium whitespace-nowrap">
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

        {/* Desktop Button */}
        <div className="hidden lg:flex ml-auto pl-4">
          <Link href="/book-inspection">
            <Button className="bg-[#142B54] text-white hover:bg-[#1b3a72] rounded-lg h-[34px] px-4 text-xs flex-shrink-0 shadow-md">
              Book A Tour
            </Button>
          </Link>
        </div>

        {/* Mobile / Tablet Menu */}
        <div className="flex lg:hidden items-center ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
              bg-background text-white
              w-[280px] sm:w-[320px]
              p-0
              data-[state=open]:animate-in
              data-[state=closed]:animate-out
              data-[state=closed]:slide-out-to-right
              data-[state=open]:slide-in-from-right
              duration-300
            "
            >
              {/* Sheet Header */}
              <SheetHeader className="p-6 border-b border-border">
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753087548/vvqvqpq20asthbcthx4b.png"
                    alt="Strongmas Residence Logo"
                    width={120}
                    height={28}
                    className="h-auto w-auto"
                  />
                </Link>
              </SheetHeader>

              {/* Sheet Body */}
              <div className="flex flex-col h-[calc(100vh-88px)] px-6 pb-4 overflow-hidden">
                {/* Scrollable Nav */}
                <nav className="flex-1 overflow-y-auto flex flex-col gap-3 text-base mt-2 pr-2">
                  <NavLink href="/">Home</NavLink>
                  <BrowseAccordion />
                  <NavLink href="/services">Services</NavLink>
                  <NavLink href="/#locations">Insight</NavLink>
                  <NavLink href="/about">About us</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                  <NavLink href="/blog">Blog</NavLink>
                </nav>

                {/* Sticky Button Area */}
                <div className="sticky bottom-0 bg-background pt-4 pb-2">
                  <div className="h-px bg-white/10 mb-4" />
                  <Link href="/book-inspection">
                    <Button
                      className="
                      w-full 
                      bg-[#142B54] 
                      text-white 
                      hover:bg-[#1b3a72] 
                      rounded-xl
                      py-6
                      text-lg
                      shadow-lg
                    "
                    >
                      Book A Tour
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
