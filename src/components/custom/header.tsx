import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="transition-colors hover:text-white/80 block py-2">
        {children}
    </Link>
);

const BrowseDropdown = () => (
    <>
        <DropdownMenuItem asChild>
            <Link href="/#featured">All Properties</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <Link href="#">Apartments</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <Link href="#">Houses</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <Link href="#">Villas</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <Link href="#">Condos</Link>
        </DropdownMenuItem>
    </>
);

const BrowseAccordion = () => (
     <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:no-underline py-2 text-white hover:text-white/80">
                Browse
            </AccordionTrigger>
            <AccordionContent className="pl-4">
                <div className="flex flex-col gap-2">
                    <NavLink href="/#featured">All Properties</NavLink>
                    <NavLink href="#">Apartments</NavLink>
                    <NavLink href="#">Houses</NavLink>
                    <NavLink href="#">Villas</NavLink>
                    <NavLink href="#">Condos</NavLink>
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

const Header = () => {
    return (
        <header className="absolute top-0 z-50 w-full bg-black/20 backdrop-blur-sm font-headline">
            <div className="container flex h-20 items-center px-4 sm:px-6 lg:px-8 text-white">
                <Link href="/" className="mr-auto flex-shrink-0">
                    <span className="text-2xl md:text-3xl font-bold tracking-wider">
                        STRONGMAS
                    </span>
                    <div className="flex items-center">
                        <div className="h-0.5 w-8 bg-white mr-2"></div>
                        <span className="text-xs md:text-sm tracking-[0.2em]">
                            RESIDENCE
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium whitespace-nowrap">
                    <NavLink href="/">Home</NavLink>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-white/80 outline-none">
                            Browse <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-background text-white border-border">
                            <BrowseDropdown />
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/#locations">In sight</NavLink>
                    <NavLink href="/about">About us</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </nav>

                <Button asChild className="ml-6 hidden md:inline-flex bg-[#142B54] text-white hover:bg-[#142B54]/90 rounded-[6px] h-[50px] px-[30px] flex-shrink-0">
                    <Link href="#">Book an Inspection</Link>
                </Button>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden ml-4">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background text-white w-[250px] sm:w-[300px] p-0">
                        <SheetHeader className="p-6 border-b border-border">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                             <Link href="/" className="flex-shrink-0">
                                <span className="text-xl font-bold tracking-wider">
                                    STRONGMAS
                                </span>
                                <div className="flex items-center">
                                    <div className="h-0.5 w-6 bg-white mr-1"></div>
                                    <span className="text-xs tracking-[0.2em]">
                                        RESIDENCE
                                    </span>
                                </div>
                            </Link>
                        </SheetHeader>
                        <div className="flex flex-col h-full px-6 pb-6">
                            <nav className="flex flex-col gap-2 text-lg mt-2">
                                <NavLink href="/">Home</NavLink>
                                <BrowseAccordion />
                                <NavLink href="/services">Services</NavLink>
                                <NavLink href="/#locations">In sight</NavLink>
                                <NavLink href="/about">About us</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
                            </nav>
                            <Button asChild className="mt-auto bg-[#142B54] text-white hover:bg-[#142B54]/90 rounded-[6px]">
                                <Link href="#">Book an Inspection</Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;
