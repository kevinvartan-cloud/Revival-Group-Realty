import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import NeighborhoodCard from "@/app/components/NeighborhoodCard";
import AnimateIn from "@/app/components/AnimateIn";
import DisclaimerBlock from "@/app/components/DisclaimerBlock";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import { NEIGHBORHOODS } from "@/app/data/neighborhoods";

export const metadata: Metadata = {
  title: "San Diego Neighborhoods | Revival Group Realty",
  description:
    "A guide to San Diego neighborhoods — character, housing types, and considerations for buyers, sellers, investors, and developers, from uptown corridors to the coast.",
  openGraph: {
    title: "San Diego Neighborhoods | Revival Group Realty",
    description: "Neighborhood character, housing types, and considerations across San Diego.",
    url: "https://revivalgrouprealty.com/neighborhoods",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
};

const REGION_ORDER = ["Uptown", "Central", "Coastal", "Coastal North County"];

export default function NeighborhoodsPage() {
  const byRegion = REGION_ORDER.map((region) => ({
    region,
    items: NEIGHBORHOODS.filter((n) => n.region === region),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <Navigation />
      <PageHero eyebrow="Local Knowledge" title="San Diego" accent="Neighborhoods." maxWidth="7xl" />

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-20 px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <AnimateIn className="lg:col-span-4" direction="left">
              <SectionHeader label="Overview" className="mb-6" />
              <p className="font-serif text-forest text-2xl leading-snug mt-8">
                San Diego is a collection of distinct neighborhoods, each with
                its own character and considerations.
              </p>
            </AnimateIn>
            <AnimateIn className="lg:col-span-8" delay={120}>
              <div className="space-y-5 font-sans text-muted text-base leading-[1.8] max-w-xl">
                <p>
                  The right neighborhood depends entirely on your goals — how you
                  want to live, what you want to own, and what you want a
                  property to do over time. The notes below describe the general
                  character and housing types of areas we work in, along with the
                  kinds of considerations worth weighing as a buyer, seller,
                  investor, or developer.
                </p>
                <p>
                  Consider this a starting point for a conversation, not a
                  substitute for one. We&rsquo;re happy to go deeper on any
                  neighborhood and how it fits what you&rsquo;re trying to do.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Neighborhoods by region */}
      <section className="bg-parchment py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {byRegion.map((group) => (
            <div key={group.region}>
              <AnimateIn>
                <SectionHeader label={group.region} className="mb-10 pb-6 border-b border-sage-light/50" />
              </AnimateIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((n, i) => (
                  <AnimateIn key={n.name} delay={(i % 3) * 80}>
                    <NeighborhoodCard neighborhood={n} />
                  </AnimateIn>
                ))}
              </div>
            </div>
          ))}

          <AnimateIn>
            <DisclaimerBlock tone="light">
              Neighborhood descriptions are general and provided for informational purposes only.
              They are not statements about the people who live in any area and are not intended to
              indicate any preference, limitation, or discrimination based on race, color, religion,
              sex, disability, familial status, national origin, or any other protected
              characteristic. Revival Group Realty supports Equal Housing Opportunity.
            </DisclaimerBlock>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Explore San Diego"
        accent="with Revival."
        body="Tell us which neighborhoods you're weighing and what you want to accomplish, and we'll help you narrow it down."
        primary={{ label: "Work With Us", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
