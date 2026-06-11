import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import PageHero from "@/app/components/PageHero";
import AnimateIn from "@/app/components/AnimateIn";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

// Hidden, future-facing placeholder. Intentionally NOT linked in the primary
// navigation while the brokerage is pre-listing. Excluded from indexing until
// a real listing experience exists.
export const metadata: Metadata = {
  title: "Properties | Revival Group Realty",
  description: "Property search and featured listings from Revival Group Realty — coming soon.",
  robots: { index: false, follow: true },
};

// TODO(listings): Stand up the real properties experience once live on the MLS.
//  - [ ] Integrate an IDX / MLS data provider (feed + detail pages + search)
//  - [ ] Complete MLS membership and IDX approval / compliance review
//  - [ ] Add required MLS attribution and IDX disclaimers per local MLS rules
//  - [ ] Build Featured Listings, Property Search, Sold Portfolio, and Private
//        Opportunities views (future "Properties" dropdown in the nav)
//  - [ ] Obtain brokerage approval before publishing any live listing data

export default function PropertiesPage() {
  return (
    <>
      <Navigation />
      <PageHero eyebrow="Properties" title="Property" accent="Search." />

      <section className="bg-cream py-20 lg:py-28 px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-px bg-forest/30" />
              <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted">
                Coming Soon
              </span>
              <div className="w-8 h-px bg-forest/30" />
            </div>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h2 className="font-serif text-forest text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] tracking-[-0.01em] mb-6">
              Property search and featured listings integration coming soon.
            </h2>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p className="font-sans text-muted text-base leading-[1.8] max-w-xl mx-auto">
              We&rsquo;re building a property search experience backed by the MLS.
              Until it&rsquo;s live, the most direct path is a conversation —
              tell us what you&rsquo;re after and we&rsquo;ll source
              opportunities for you, including properties before they reach the
              open market.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        eyebrow="Start a Search"
        title="Tell us what"
        accent="you're looking for."
        body="Share your neighborhoods, budget, and priorities, and we'll begin sourcing on your behalf."
        primary={{ label: "Work With Us", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
