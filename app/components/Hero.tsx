"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-forest flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(10,20,15,0.55)_100%)]" />

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-cream/10" />

      {/* Main content */}
      <div className="relative z-10 text-center px-8 w-full max-w-6xl mx-auto">

        {/* Eyebrow */}
        <p
          className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold/70 mb-8"
          style={{ animation: "fadeUp 0.8s ease-out 0.1s both" }}
        >
          Boutique Brokerage &nbsp;·&nbsp; San Diego, California
        </p>

        {/* Decorative vertical rule — parallax */}
        <div
          className="w-px h-8 bg-cream/15 mx-auto mb-8"
          style={{
            animation: "fadeIn 0.8s ease-out 0.3s both",
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />

        {/* Primary heading */}
        <h1 className="font-serif text-cream leading-[0.88] tracking-[-0.02em]">
          <span
            className="block text-[clamp(3.25rem,8.5vw,8rem)]"
            style={{ animation: "fadeUp 0.9s ease-out 0.35s both" }}
          >
            Find your
          </span>
          <span
            className="block text-[clamp(3.25rem,8.5vw,8rem)] italic text-gold"
            style={{ animation: "fadeUp 0.9s ease-out 0.5s both" }}
          >
            place
          </span>
          <span
            className="block text-[clamp(3.25rem,8.5vw,8rem)]"
            style={{ animation: "fadeUp 0.9s ease-out 0.65s both" }}
          >
            in San Diego.
          </span>
        </h1>

        {/* Decorative vertical rule — parallax */}
        <div
          className="w-px h-8 bg-cream/15 mx-auto mt-8 mb-8"
          style={{
            animation: "fadeIn 0.8s ease-out 0.8s both",
            transform: `translateY(${scrollY * 0.06}px)`,
          }}
        />

        {/* Tagline */}
        <p
          className="font-sans text-cream/50 text-sm md:text-base tracking-[0.06em] max-w-xl mx-auto leading-relaxed"
          style={{ animation: "fadeUp 0.9s ease-out 0.9s both" }}
        >
          Strategic representation for buying, selling, investing, and{" "}
          <br className="hidden md:block" />
          development-minded real estate decisions across San Diego.
        </p>

        {/* CTA */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeUp 0.9s ease-out 1.05s both" }}
        >
          <a
            href="/contact"
            className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-forest bg-cream px-10 py-3.5 hover:bg-gold-light transition-all duration-300"
          >
            Work With Us
          </a>
          <a
            href="#services"
            className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-cream border border-cream/30 px-10 py-3.5 hover:border-cream/70 hover:bg-cream/5 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/10" />
    </section>
  );
}
