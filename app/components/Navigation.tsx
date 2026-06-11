"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Invest", href: "/invest" },
  { label: "Develop", href: "/develop" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      ref={drawerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/96 backdrop-blur-md border-b border-sage-light/30"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-8 lg:px-12 py-5 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="group flex flex-col" aria-label="Revival Group Realty — home">
          <span
            className={`font-serif text-base sm:text-lg font-semibold tracking-[0.2em] uppercase leading-none transition-colors duration-500 ${
              scrolled ? "text-forest" : "text-cream"
            }`}
          >
            Revival
          </span>
          <span
            className={`font-sans text-[8px] tracking-[0.35em] uppercase leading-none mt-1 transition-colors duration-500 ${
              scrolled ? "text-muted" : "text-cream/50"
            }`}
          >
            Group Realty
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          className={`hidden lg:flex items-center gap-6 xl:gap-7 transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-[10px] tracking-[0.25em] uppercase hover:opacity-50 transition-opacity duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="/contact"
            className={`font-sans text-[10px] tracking-[0.25em] uppercase px-6 py-2.5 border transition-all duration-300 ${
              scrolled
                ? "border-forest/60 text-forest hover:bg-forest hover:text-cream"
                : "border-cream/40 text-cream hover:border-cream hover:bg-cream/5"
            }`}
          >
            Work With Us
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 p-1 transition-colors duration-500 ${
            scrolled ? "text-forest" : "text-cream"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden bg-forest transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-[34rem] border-b border-cream/10" : "max-h-0"
        }`}
      >
        <div className="px-8 pt-2 pb-8 flex flex-col gap-6">
          {[...LINKS, { label: "Work With Us", href: "/contact" }].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-[11px] tracking-[0.3em] uppercase text-cream/70 hover:text-cream transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
