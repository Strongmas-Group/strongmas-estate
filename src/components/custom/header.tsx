"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <div>
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

      <Link
        href="/properties"
        className="mt-4 block border-t border-white/10 pt-3 text-sm text-[#EFC59D] hover:text-white"
      >
        View all developments →
      </Link>
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
          <NavLink href="/properties">All Properties</NavLink>
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

/** Above this relative luminance (0 = black, 1 = white) a background counts as light. */
const LIGHT_THRESHOLD = 0.6;

/** Shortest gap between two background samples while scrolling. */
const MEASURE_INTERVAL_MS = 100;

/** How many points across the bar get sampled, and how far in the outermost sit. */
const SAMPLE_COUNT = 7;
const EDGE_INSET = 24;

const RGB = /^rgba?\(([^)]+)\)$/;

/** Relative luminance of an "rgb()"/"rgba()" string, or null when see-through. */
const opaqueLuminance = (value: string) => {
  const match = RGB.exec(value);
  if (!match) return null;

  const [r, g, b, a = 1] = match[1].split(",").map(Number);
  if (!Number.isFinite(r) || a < 0.5) return null;

  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
};

/**
 * Whether the page behind a given point is a light surface. Walks the paint
 * stack front to back and answers from the first element that paints an opaque
 * colour. Photos and gradients say nothing reliable about legibility, so they
 * are stepped over in favour of the surface they sit on: a hero image resolves
 * to its black section, a blog card image to the white card behind it. Scrims
 * still count, because an opaque-enough overlay is what the bar actually sits
 * on. Returns null when nothing at that point is decisive.
 */
const isOverLightSurface = (x: number, y: number) => {
  for (const el of document.elementsFromPoint(x, y)) {
    if (el.closest("header")) continue;

    const style = getComputedStyle(el);
    if (style.backgroundImage !== "none") continue;

    const luminance = opaqueLuminance(style.backgroundColor);
    if (luminance !== null) return luminance > LIGHT_THRESHOLD;
  }
  return null;
};

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

const Header = () => {
  const pathname = usePathname();
  const barRef = React.useRef<HTMLDivElement>(null);

  // The bar keeps its glass treatment over artwork and dark sections, and only
  // takes a solid navy fill where it would otherwise wash out against a light
  // section. Nothing outside the bar itself is ever filled in.
  const [onLight, setOnLight] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let frame = 0;
    let lastMeasured = 0;

    const measure = () => {
      const rect = bar.getBoundingClientRect();
      const y = rect.top + rect.height / 2;
      const step = (rect.width - 2 * EDGE_INSET) / (SAMPLE_COUNT - 1);

      // A light patch under any part of the bar is enough to fill it: the bar
      // is only readable if all of it has contrast, and light sections are not
      // always as wide as the bar. Aurum's floor-plan panel is narrower than
      // the bar, so it only ever shows up in the middle samples.
      const readings = Array.from({ length: SAMPLE_COUNT }, (_, i) =>
        isOverLightSurface(rect.left + EDGE_INSET + i * step, y)
      );

      setOnLight(readings.some((reading) => reading === true));
    };

    // Hit testing plus a walk of computed styles is not free, so it runs at
    // most every MEASURE_INTERVAL_MS rather than on every scroll frame. A
    // background swap lagging a tenth of a second is invisible; dropped frames
    // on the parallax home page would not be.
    const tick = () => {
      frame = 0;
      const now = performance.now();
      if (now - lastMeasured < MEASURE_INTERVAL_MS) {
        schedule();
        return;
      }
      lastMeasured = now;
      measure();
    };

    // Hoisted so `tick` can re-arm itself when it defers a measurement.
    function schedule() {
      if (frame) return;
      frame = requestAnimationFrame(tick);
    }

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full flex justify-center pt-5 px-6 font-headline">
      <div
        ref={barRef}
        className={`w-full max-w-[1240px] backdrop-blur-md border rounded-2xl px-6 h-12 flex items-center justify-between text-white relative transition-colors duration-300 ${
          onLight
            ? "bg-[#0D1B36] border-white/15 shadow-lg shadow-black/20"
            : "bg-white/10 border-white/25"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/strongmas-development-wordmark-light.png"
              alt="Strongmas Development"
              width={600}
              height={109}
              fetchPriority="high"
              className="w-[120px] md:w-[140px] lg:w-[160px] h-auto object-contain"
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
            <NavLink href="/about">About us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/blog">News &amp; Insights</NavLink>
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
              h-dvh flex flex-col gap-0
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
                  <img
                    src="/strongmas-development-wordmark-light.png"
                    alt="Strongmas Development"
                    width={600}
                    height={109}
                    loading="lazy"
                    className="w-[130px] h-auto"
                  />
                </Link>
              </SheetHeader>

              {/* Sheet Body */}
              <div className="flex flex-1 min-h-0 flex-col px-6 pb-4 overflow-hidden">
                {/* Scrollable Nav */}
                <nav className="flex-1 overflow-y-auto flex flex-col gap-3 text-base mt-2 pr-2">
                  <NavLink href="/">Home</NavLink>
                  <BrowseAccordion />
                  <NavLink href="/services">Services</NavLink>
                  <NavLink href="/about">About us</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                  <NavLink href="/blog">News &amp; Insights</NavLink>
                </nav>

                {/* Sticky Button Area */}
                <div className="sticky bottom-0 bg-background pt-4 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
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
