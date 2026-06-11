import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import AnimateIn from "@/app/components/AnimateIn";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Guides | Revival Group Realty",
  description:
    "Guides and notes on buying, selling, investing, and development in San Diego from Revival Group Realty.",
};

// Structure only — no fake dated posts. Categories are placeholders for future
// editorial content.
// TODO(guides): replace placeholder categories with real guides/notes. Mark any
// demo content clearly as placeholder until published.
const CATEGORIES = [
  { name: "Buying in San Diego", note: "Process, neighborhoods, and due diligence for buyers." },
  { name: "Selling Strategy", note: "Preparation, pricing, and positioning for sellers." },
  { name: "Investor Notes", note: "Fundamentals, value-add, and risk for income property." },
  { name: "Development & Land", note: "Feasibility, entitlement awareness, and infill." },
  { name: "Market Commentary", note: "Occasional, measured perspective on San Diego real estate." },
];

export default function GuidesPage() {
  return (
    <>
      <Navigation />
      <PageHero eyebrow="Insights & Guides" title="Guides." />

      <section className="bg-cream py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeader label="Coming Soon" className="mb-12 pb-7 border-b border-sage-light/50" />
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="font-serif text-forest text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] max-w-2xl mb-14">
              Considered writing on buying, selling, investing, and development in
              San Diego — published as we have something worth saying.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((c, i) => (
              <AnimateIn key={c.name} delay={(i % 3) * 80}>
                <div className="border border-sage-light/40 bg-cream/40 p-8 h-full">
                  <div className="font-sans text-[8px] tracking-[0.3em] uppercase text-sage/60 mb-4">
                    Category
                  </div>
                  <h3 className="font-serif text-forest text-xl mb-3">{c.name}</h3>
                  <p className="font-sans text-muted text-sm leading-[1.8] mb-5">{c.note}</p>
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-muted/40">
                    Coming Soon
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="In the Meantime"
        title="Have a question"
        accent="we could answer?"
        body="We're happy to talk through your situation directly while the guides are in the works."
        primary={{ label: "Work With Us", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
