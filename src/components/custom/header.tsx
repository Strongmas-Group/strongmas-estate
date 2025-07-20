import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="transition-colors hover:text-white/80 block py-2">
        {children}
    </Link>
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
                    <NavLink href="#featured">Browse</NavLink>
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="#insight">In sight</NavLink>
                    <NavLink href="/about">About us</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </nav>

                <Button asChild className="ml-6 hidden md:inline-flex bg-[#142B54] text-white hover:bg-[#142B54]/90 rounded-[6px] h-[50px] px-[30px] flex-shrink-0">
                    <Link href="#">Book an Inspection</Link>
                </Button>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden ml-4">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background text-white w-[250px] sm:w-[300px]">
                        <div className="flex flex-col h-full p-6">
                            <nav className="flex flex-col gap-4 text-lg mt-8">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="#featured">Browse</NavLink>
                                <NavLink href="/services">Services</NavLink>
                                <NavLink href="#insight">In sight</NavLink>
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
