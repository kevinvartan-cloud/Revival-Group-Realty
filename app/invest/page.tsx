import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import ServiceCard from "@/app/components/ServiceCard";
import AnimateIn from "@/app/components/AnimateIn";
import DisclaimerBlock from "@/app/components/DisclaimerBlock";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Investment Advisory | Revival Group Realty",
  description:
    "Investment property brokerage guidance in San Diego — acquisition, small multifamily, value-add, rental review, ADU and redevelopment potential, risk due diligence, and exit strategy.",
  openGraph: {
    title: "Investment Advisory | Revival Group Realty",
    description: "Brokerage guidance for investors who care about fundamentals, not hype.",
    url: "https://revivalgrouprealty.com/invest",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
};

const SERVICES = [
  {
    number: "01",
    heading: "Investment Property Acquisition",
    body: "Sourcing and evaluating income properties against your criteria — location, property type, condition, and the fundamentals that actually drive returns.",
  },
  {
    number: "02",
    heading: "Small Multifamily",
    body: "Focused guidance on duplexes through small apartment buildings — unit mix, condition, and the operational realities of owning and holding them.",
  },
  {
    number: "03",
    heading: "Value-Add Properties",
    body: "Identifying properties where renovation, repositioning, or better operations can create value, and a clear-eyed view of the work and cost required to get there.",
  },
  {
    number: "04",
    heading: "Rental Property Review",
    body: "Reviewing rent and expense assumptions, lease structure, and condition. Any figures we model are illustrative placeholders for discussion — not live or guaranteed data.",
  },
  {
    number: "05",
    heading: "ADU Potential",
    body: "Assessing where accessory dwelling units may add income or value, with attention to lot constraints and the awareness that feasibility requires professional confirmation.",
  },
  {
    number: "06",
    heading: "Redevelopment Potential",
    body: "A development-informed read on properties with upside through redevelopment or repositioning, including zoning and entitlement awareness early in the process.",
  },
  {
    number: "07",
    heading: "Risk & Due Diligence",
    body: "Surfacing condition, title, regulatory, and market risks before you commit — the questions worth answering while you still have room to walk away.",
  },
  {
    number: "08",
    heading: "Exit Strategy Thinking",
    body: "Considering the end at the beginning — hold horizon, resale, refinance, and disposition scenarios — so an acquisition fits a long-term plan, not just today's numbers.",
  },
];

export default function InvestPage() {
  return (
    <>
      <Navigation />
      <PageHero eyebrow="Investment Advisory" title="Investment" accent="Advisory." />

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <AnimateIn className="lg:col-span-4" direction="left">
              <SectionHeader label="The Engagement" className="mb-6" />
              <p className="font-serif text-forest text-2xl leading-snug mt-8">
                Brokerage guidance for investors who care about fundamentals,
                not hype.
              </p>
            </AnimateIn>
            <AnimateIn className="lg:col-span-8" delay={120}>
              <div className="space-y-5 font-sans text-muted text-base leading-[1.8] max-w-xl">
                <p>
                  Investment real estate rewards discipline. We help investors
                  evaluate income property in San Diego the way an operator
                  would — looking past the pitch to rent and expense
                  assumptions, condition, value-add potential, and the risks
                  that determine whether a deal actually works.
                </p>
                <p>
                  Our development background adds another lens: ADU and
                  redevelopment potential, zoning and entitlement awareness, and
                  a habit of thinking through the exit before the acquisition.
                  The goal is a decision you can defend on fundamentals.
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
            <SectionHeader label="How We Advise Investors" className="mb-12 pb-7 border-b border-sage-light/50" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <AnimateIn key={s.number} delay={(i % 3) * 80}>
                <ServiceCard {...s} />
              </AnimateIn>
            ))}
          </div>
          <AnimateIn>
            <DisclaimerBlock className="mt-14">
              Revival Group Realty provides real estate brokerage services only. Nothing on this
              page is legal, tax, accounting, financial, or investment advice, and no return is
              promised or guaranteed. Any rent, expense, or feasibility figures discussed are
              illustrative placeholders for conversation, not live data. Investors should conduct
              independent due diligence and consult qualified legal, tax, and financial
              professionals before acquiring property.
            </DisclaimerBlock>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Discuss an"
        accent="investment strategy."
        body="Share your objectives and criteria, and we'll talk through opportunities, fundamentals, and risk."
        primary={{ label: "Discuss an Investment Strategy", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
