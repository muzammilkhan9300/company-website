"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/#team" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll to #team using Lenis (smooth) or native fallback.
  // Works from any page: if already on "/" scroll immediately,
  // otherwise navigate first then scroll after Next.js hydrates.
  const handleTeamClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      const scrollToTeam = () => {
        const el = document.getElementById("team");
        if (!el) return;
        const lenis = (window as unknown as Record<string, unknown>).lenis as
          | { scrollTo: (target: HTMLElement, opts?: object) => void }
          | undefined;
        if (lenis) {
          lenis.scrollTo(el, { offset: -88, duration: 1.2 });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      if (pathname === "/") {
        scrollToTeam();
      } else {
        router.push("/");
        // Wait for Next.js navigation + React render before scrolling
        setTimeout(scrollToTeam, 600);
      }
    },
    [pathname, router]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-pureWhite/95 backdrop-blur-md shadow-sm border-b border-border-custom py-3"
        : "bg-pureWhite py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* LEFT: Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-1"
          >
            <Image
              src="/logo.png"
              alt="Brother Solutions Logo"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* CENTER / RIGHT: Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              if (link.href === "/#team") {
                return (
                  <button
                    key={link.name}
                    onClick={handleTeamClick}
                    className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-gold text-mutedText"
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-gold ${isActive ? "text-darkText font-semibold" : "text-mutedText"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gold text-darkText font-medium px-5 py-2.5 rounded-full text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              Let&apos;s Talk
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-darkText hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-pureWhite border-b border-border-custom px-4 pt-4 pb-6 space-y-3 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                if (link.href === "/#team") {
                  return (
                    <button
                      key={link.name}
                      onClick={handleTeamClick}
                      className="px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between w-full text-mutedText hover:bg-offWhite hover:text-darkText"
                    >
                      {link.name}
                    </button>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${isActive
                      ? "bg-offWhite text-darkText font-semibold border-l-4 border-gold"
                      : "text-mutedText hover:bg-offWhite hover:text-darkText"
                      }`}
                  >
                    {link.name}
                    {isActive && <div className="w-2 h-2 rounded-full bg-gold" />}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-gold text-darkText font-semibold px-5 py-3 rounded-full text-base hover:bg-gold/90 transition-colors shadow-md"
                >
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
