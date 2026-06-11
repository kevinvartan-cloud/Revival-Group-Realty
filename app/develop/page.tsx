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
  title: "Developer & Land Advisory | Revival Group Realty",
  description:
    "Development-informed real estate advisory in San Diego — land acquisition, infill opportunities, site feasibility, entitlement-aware guidance, and builder/developer representation.",
  openGraph: {
    title: "Developer & Land Advisory | Revival Group Realty",
    description: "Real estate advisory informed by development, construction, and entitlement realities.",
    url: "https://revivalgrouprealty.com/develop",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
};

const SERVICES = [
  {
    number: "01",
    heading: "Land Acquisition",
    body: "Sourcing and evaluating land and underutilized parcels with an eye toward what can realistically be built — and what stands in the way before you buy.",
  },
  {
    number: "02",
    heading: "Infill Development Opportunities",
    body: "Identifying infill and small-lot opportunities across established San Diego neighborhoods where added density or repositioning is supported.",
  },
  {
    number: "03",
    heading: "Site Feasibility Review",
    body: "Early-stage feasibility thinking on access, constraints, and buildability — a development-informed gut-check, coordinated with the right consultants as a project advances.",
  },
  {
    number: "04",
    heading: "Entitlement-Aware Acquisition",
    body: "Acquisition guidance that accounts for zoning, overlays, and entitlement realities up front, so the path and timeline are understood before capital is at risk.",
  },
  {
    number: "05",
    heading: "Builder / Developer Representation",
    body: "Brokerage representation tuned to how builders and developers actually work — acquisition strategy, disposition, and a partner who speaks the language.",
  },
  {
    number: "06",
    heading: "Property Repositioning",
    body: "A plan for properties with untapped potential — renovation, conversion, or repositioning to a higher and better use, grounded in cost and market reality.",
  },
  {
    number: "07",
    heading: "Development-Minded Support",
    body: "Coordination with development consultants, architects, engineers, contractors, and entitlement professionals where appropriate, so the brokerage work fits the bigger plan.",
  },
];

export default function DevelopPage() {
  return (
    <>
      <Navigation />
      <PageHero eyebrow="Developer & Land Advisory" title="Developer &" accent="Land Advisory." />

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <AnimateIn className="lg:col-span-4" direction="left">
              <SectionHeader label="The Engagement" className="mb-6" />
              <p className="font-serif text-forest text-2xl leading-snug mt-8">
                Real estate advisory informed by development, construction, and
                entitlement realities.
              </p>
            </AnimateIn>
            <AnimateIn className="lg:col-span-8" delay={120}>
              <div className="space-y-5 font-sans text-muted text-base leading-[1.8] max-w-xl">
                <p>
                  This is where Revival Group Realty is built to stand apart. We
                  come to brokerage from a development background, so we evaluate
                  land, infill, and repositioning opportunities through the lens
                  of what can actually be built — and what it takes to get there.
                </p>
                <p>
                  That means thinking about zoning and entitlements, site
                  constraints, feasibility, and risk before a purchase, and
                  coordinating with development consultants, architects,
                  engineers, contractors, and entitlement professionals where
                  appropriate. We identify the issues early, while there&rsquo;s
                  still room to act on them.
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
            <SectionHeader label="How We Support Developers" className="mb-12 pb-7 border-b border-sage-light/50" />
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
              Revival Group Realty provides real estate brokerage services only and does not provide
              architectural, engineering, land-use, legal, or construction services. Feasibility,
              zoning, entitlement, and development outcomes are not guaranteed and depend on factors
              outside the brokerage&rsquo;s control. Clients should engage qualified design,
              engineering, legal, and entitlement professionals and confirm all requirements with the
              applicable jurisdiction.
            </DisclaimerBlock>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Discuss a"
        accent="development opportunity."
        body="Bring us a site, a parcel, or an idea, and we'll talk through acquisition strategy, feasibility, and risk."
        primary={{ label: "Discuss a Development Opportunity", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
