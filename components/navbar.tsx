"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Truck } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Truck className={`h-8 w-8 ${isScrolled ? "text-primary" : "text-white"}`} />
            <span className={`text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
              IdealX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  isScrolled ? "text-gray-600 hover:text-primary" : "text-white hover:text-gray-200"
                } transition-colors`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant={isScrolled ? "default" : "outline"}
              className={!isScrolled ? "text-white border-white hover:bg-white hover:text-black" : ""}
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full">Kontakt</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const navItems = [
  { label: "Start", href: "/" },
  { label: "Über uns", href: "#about" },
  { label: "Dienstleistungen", href: "#services" },
  { label: "Referenzen", href: "#references" },
];