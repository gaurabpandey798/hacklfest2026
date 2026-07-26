"use client";

import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { navData } from "@/data/nav";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMobileMenu = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeMobileMenu = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  // Close modal when clicking backdrop
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeMobileMenu();
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm" : "bg-transparent py-6"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            <Link href="/" className="text-xl font-heading font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              {navData.logo}
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navData.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button asChild variant="default">
                <Link href={navData.cta.href}>{navData.cta.label}</Link>
              </Button>
            </div>

            <button
              className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={openMobileMenu}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </Container>
      </header>

      {/* Native Dialog for Mobile Menu providing robust Focus Trap and Escape handling */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        onClose={() => { document.body.style.overflow = ""; }}
        className="fixed inset-0 m-auto w-full h-full max-w-none max-h-none bg-background/95 backdrop-blur-md p-0 text-foreground backdrop:bg-black/50 open:flex flex-col z-[100] border-none"
        aria-label="Mobile Navigation Menu"
      >
        <div className="flex flex-col w-full h-full p-6">
          <div className="flex justify-end">
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-muted-foreground"
              aria-label="Close mobile menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-10" aria-label="Mobile Navigation Links">
            <ul className="flex flex-col items-center gap-8">
              {navData.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-3xl font-heading font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-4 py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="default" size="lg" className="w-full max-w-[200px]" onClick={closeMobileMenu}>
              <Link href={navData.cta.href}>{navData.cta.label}</Link>
            </Button>
          </nav>
        </div>
      </dialog>
    </>
  );
}
