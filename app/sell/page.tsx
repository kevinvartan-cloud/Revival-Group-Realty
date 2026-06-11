import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import ServiceCard from "@/app/components/ServiceCard";
import AnimateIn from "@/app/components/AnimateIn";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Sell with Revival | Revival Group Realty",
  description:
    "Seller representation in San Diego — pricing strategy, property preparation, positioning and marketing, offer review, negotiation, and escrow coordination, handled with discipline.",
  openGraph: {
    title: "Sell with Revival | Revival Group Realty",
    description: "We help sellers prepare, position, and negotiate with discipline.",
    url: "https://revivalgrouprealty.com/sell",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
};

const SERVICES = [
  {
    number: "01",
    heading: "Pricing Strategy",
    body: "A pricing approach grounded in comparable sales, current conditions, and an honest read of your property's condition — set with intent, not guesswork.",
  },
  {
    number: "02",
    heading: "Property Preparation",
    body: "Clear guidance on the repairs, updates, and presentation that actually influence buyers — and the ones to skip, so effort and budget go where they count.",
  },
  {
    number: "03",
    heading: "Positioning & Marketing",
    body: "Thoughtful positioning with professional photography and a focused marketing plan that reaches qualified buyers across the channels where they're searching.",
  },
  {
    number: "04",
    heading: "Offer Review",
    body: "Side-by-side review of offers on more than price alone — terms, contingencies, financing strength, and timelines — so you understand the real trade-offs.",
  },
  {
    number: "05",
    heading: "Negotiation",
    body: "Disciplined negotiation through the deal points that matter — credits, repairs, contingencies, and timing — handled calmly and in your interest.",
  },
  {
    number: "06",
    heading: "Escrow Coordination",
    body: "Steady management of inspections, disclosures, and escrow milestones, keeping the transaction organized and on track through to a clean close.",
  },
];

export default function SellPage() {
  return (
    <>
      <Navigation />
      <PageHero eyebrow="Seller Representation" title="Sell" accent="with Revival." />

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <AnimateIn className="lg:col-span-4" direction="left">
              <SectionHeader label="The Engagement" className="mb-6" />
              <p className="font-serif text-forest text-2xl leading-snug mt-8">
                We help sellers prepare, position, and negotiate with discipline.
              </p>
            </AnimateIn>
            <AnimateIn className="lg:col-span-8" delay={120}>
              <div className="space-y-5 font-sans text-muted text-base leading-[1.8] max-w-xl">
                <p>
                  Selling well is a process, not a sign in the yard. It starts
                  with preparation and a pricing strategy built on real
                  comparables and an honest assessment of your property — then
                  careful positioning to reach the right buyers.
                </p>
                <p>
                  From there we focus on the parts that protect your outcome:
                  reviewing offers on their full terms, negotiating with
                  discipline, and coordinating escrow to a clean, on-time close.
                  Our development background helps us see which improvements move
                  the needle and which simply cost you.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-parchment py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeader label="How We Represent Sellers" className="mb-12 pb-7 border-b border-sage-light/50" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <AnimateIn key={s.number} delay={(i % 3) * 80}>
                <ServiceCard {...s} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Schedule a private"
        accent="seller consultation."
        body="Tell us about your property and timeline, and we'll walk you through preparation, pricing, and the plan to bring it to market."
        primary={{ label: "Schedule a Seller Consultation", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
