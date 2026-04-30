"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

/**
 * Utility for Tailwind class merging
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Handle scroll effect for high-contrast header transition
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white border-black py-2" 
          : "bg-white/80 backdrop-blur-md py-4 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 items-center gap-4">
          
          {/* Mobile Menu Trigger (Visible only on small screens) */}
          <div className="flex md:hidden items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-black hover:text-white transition-colors">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] border-x-2 border-black">
                <nav className="flex flex-col gap-6 mt-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-2xl font-bold uppercase tracking-tighter hover:underline"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <hr className="border-black" />
                  <Link href="/cart" className="text-2xl font-bold uppercase tracking-tighter">
                    Cart
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Brand Logo */}
          <div className="col-span-2 md:col-span-3 flex justify-start items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden border border-black">
                <Image
                  src="/logo.jpg"
                  alt="Pep Tide High, LLC Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-lg font-black uppercase tracking-tight leading-none hidden sm:block">
                Pep Tide High
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Grid items centered/spread */}
          <nav className="hidden md:flex md:col-span-6 items-center justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions (Cart) */}
          <div className="col-span-2 md:col-span-3 flex items-center justify-end gap-4">
            <Link href="/cart" className="relative group p-2">
              <ShoppingCart className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
              <span className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
              <span className="sr-only">View Cart</span>
            </Link>
            
            {/* Optional Desktop Cart Label */}
            <Link 
              href="/cart" 
              className="hidden md:block text-sm font-black uppercase tracking-tighter border-2 border-black px-4 py-1 hover:bg-black hover:text-white transition-all"
            >
              Cart
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;