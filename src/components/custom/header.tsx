
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
    DropdownMenuSeparator,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { properties } from "@/lib/properties";
import { useModal } from "@/hooks/use-modal";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="transition-colors hover:text-white/80 block py-2">
        {children}
    </Link>
);

const ongoingProjects = properties.filter(p => p.status === "ONGOING");
const completedProjects = properties.filter(p => p.status.includes("COMPLETED") || p.status.includes("SOLD OUT"));
const commercialProjects = properties.filter(p => p.status === "COMMERCIAL");


const BrowseDropdown = () => (
    <div className="grid grid-cols-2 gap-4">
        <div>
            <DropdownMenuLabel className="font-bold text-[#151515]">Ongoing Projects</DropdownMenuLabel>
            <DropdownMenuGroup>
                {ongoingProjects.map(property => (
                    <DropdownMenuItem key={property.name} asChild>
                        <Link href={`/properties/${property.name.toLowerCase().replace(/\s+/g, '-')}`}>{property.name}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuGroup>
        </div>
        <div>
            <DropdownMenuLabel className="font-bold text-[#151515]">Completed Projects</DropdownMenuLabel>
             <DropdownMenuGroup>
                {completedProjects.map(property => (
                    <DropdownMenuItem key={property.name} asChild>
                        <Link href={`/properties/${property.name.toLowerCase().replace(/\s+/g, '-')}`}>{property.name}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuGroup>
        </div>
    </div>
);

const BrowseAccordion = () => (
     <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:no-underline py-2 text-white hover:text-white/80">
                Our Properties
            </AccordionTrigger>
            <AccordionContent className="pl-4">
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold mt-2">Ongoing Projects</h4>
                    {ongoingProjects.map(property => (
                        <NavLink key={property.name} href={`/properties/${property.name.toLowerCase().replace(/\s+/g, '-')}`}>{property.name}</NavLink>
                    ))}
                    <h4 className="font-bold mt-4">Completed Projects</h4>
                    {completedProjects.map(property => (
                        <NavLink key={property.name} href={`/properties/${property.name.toLowerCase().replace(/\s+/g, '-')}`}>{property.name}</NavLink>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

const Header = () => {
    const { onOpen } = useModal();
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
                            className="h-auto w-auto"
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
                            <DropdownMenuContent className="bg-white text-[#151515] border-border w-[400px] p-4">
                                <BrowseDropdown />
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <NavLink href="/services">Services</NavLink>
                        <NavLink href="/#locations">Insight</NavLink>
                        <NavLink href="/about">About us</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </nav>
                </div>
                
                <div className="hidden md:flex flex-1 justify-end">
                     {/* Placeholder for alignment */}
                </div>

                {/* Mobile Navigation */}
                 <div className="md:hidden flex-1 flex justify-end">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background text-white w-[250px] sm:w-[300px] p-0">
                            <SheetHeader className="p-6 border-b border-border">
                                <SheetTitle className="sr-only">Menu</SheetTitle>
                                <Link href="/" className="flex-shrink-0">
                                    <Image
                                        src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753087548/vvqvqpq20asthbcthx4b.png"
                                        alt="Strongmas Residence Logo"
                                        width={180}
                                        height={40}
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
                                </nav>
                                <Button onClick={onOpen} className="mt-auto bg-[#142B54] text-white hover:bg-[#142B54]/90 rounded-[6px]">
                                    Book A Tour
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                 </div>
            </div>
            
            <div className="hidden md:block absolute right-[30px] top-1/2 -translate-y-1/2">
                <Button onClick={onOpen} className="bg-[#142B54] text-white hover:bg-[#142B54]/90 rounded-[6px] h-[50px] px-[30px] flex-shrink-0">
                    Book A Tour
                </Button>
            </div>
        </header>
    );
};

export default Header;
