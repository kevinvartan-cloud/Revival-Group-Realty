import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import ServiceCard from "@/app/components/ServiceCard";
import AnimateIn from "@/app/components/AnimateIn";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Buy in San Diego | Revival Group Realty",
  description:
    "Thoughtful buyer representation in San Diego — neighborhood guidance, offer strategy, property due diligence, HOA review, and development-informed analysis.",
  openGraph: {
    title: "Buy in San Diego | Revival Group Realty",
    description: "Thoughtful buyer representation for clients who want clarity before they commit.",
    url: "https://revivalgrouprealty.com/buy",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
};

const SERVICES = [
  {
    number: "01",
    heading: "Buyer Representation",
    body: "Dedicated representation focused on your interests — understanding your goals, timeline, and budget before a single showing, then advocating for you through to the keys.",
  },
  {
    number: "02",
    heading: "Neighborhood Guidance",
    body: "Honest, firsthand comparison of San Diego neighborhoods — character, housing types, commute and walkability, and how each fits the way you actually want to live.",
  },
  {
    number: "03",
    heading: "Offer Strategy",
    body: "Competitive, well-structured offers built around current conditions — price, terms, contingencies, and timelines designed to win without overexposing you.",
  },
  {
    number: "04",
    heading: "Property Due Diligence",
    body: "A careful read of condition, disclosures, and the questions a listing won't answer on its own — so you understand what you're buying before you commit.",
  },
  {
    number: "05",
    heading: "Condo & HOA Review",
    body: "Review of HOA budgets, reserves, rules, and pending assessments for condos and attached homes, so ongoing costs and restrictions hold no surprises.",
  },
  {
    number: "06",
    heading: "Inspection & Escrow Guidance",
    body: "Coordination of inspections and a steady hand through escrow — interpreting findings, structuring requests, and keeping the timeline on track to close.",
  },
  {
    number: "07",
    heading: "Development-Informed Review",
    body: "A development perspective on long-term ownership — resale potential, improvement and ADU possibilities, and the upside or limits hidden in a property's bones and zoning.",
  },
];

export default function BuyPage() {
  return (
    <>
      <Navigation />
      <PageHero eyebrow="Buyer Representation" title="Buy in" accent="San Diego." />

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <AnimateIn className="lg:col-span-4" direction="left">
              <SectionHeader label="The Engagement" className="mb-6" />
              <p className="font-serif text-forest text-2xl leading-snug mt-8">
                Thoughtful buyer representation for clients who want clarity
                before they commit.
              </p>
            </AnimateIn>
            <AnimateIn className="lg:col-span-8" delay={120}>
              <div className="space-y-5 font-sans text-muted text-base leading-[1.8] max-w-xl">
                <p>
                  Buying a home is part financial decision, part long-term
                  commitment. We start with your goals — not a property — and
                  build the search from there, comparing neighborhoods and
                  property types against how you want to live and what you want
                  the purchase to do for you.
                </p>
                <p>
                  From there it&rsquo;s disciplined work: evaluating condition,
                  reviewing HOA and condo considerations, structuring a
                  competitive offer, coordinating inspections, and navigating
                  escrow. Our development background means we&rsquo;re also
                  thinking past the closing — about resale, improvement, and
                  long-term ownership.
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
            <SectionHeader label="How We Represent Buyers" className="mb-12 pb-7 border-b border-sage-light/50" />
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
        title="Schedule a"
        accent="buyer consultation."
        body="Tell us what you're looking for and we'll map out neighborhoods, priorities, and a plan to find the right home."
        primary={{ label: "Schedule a Buyer Consultation", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
