import AnimateIn from "@/app/components/AnimateIn";

/**
 * Subtle, intentionally low-key placeholder for the future property-search /
 * featured-listings experience. Kept quiet so the brokerage does not appear
 * "listing-thin" before a feed exists.
 *
 * TODO(listings): Build out once the brokerage is live on the MLS.
 *  - [ ] Select and integrate an IDX/IDX-RETS or MLS data provider
 *  - [ ] Complete MLS membership + IDX approval / compliance review
 *  - [ ] Add required MLS attribution + IDX disclaimers (per local MLS rules)
 *  - [ ] Configure the listing feed (search, detail pages, saved searches)
 *  - [ ] Add Featured Listings, Sold Portfolio, and Private Opportunities views
 *  - [ ] Obtain brokerage approval before publishing any live listing data
 * A hidden, non-navigation placeholder route already exists at /properties.
 */
export default function FutureListings() {
  return (
    <section className="bg-cream py-14 lg:py-20 px-8 border-t border-sage-light/40">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-px bg-forest/30 mt-3" />
              <div>
                <div className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted/60 mb-2">
                  Property Search
                </div>
                <p className="font-serif text-forest text-xl md:text-2xl leading-snug max-w-xl">
                  Property search and featured listings integration coming soon.
                </p>
                <p className="font-sans text-muted/70 text-sm leading-relaxed max-w-lg mt-3">
                  In the meantime, tell us what you&rsquo;re looking for and we&rsquo;ll
                  source opportunities directly — including properties before they
                  reach the open market.
                </p>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-block flex-shrink-0 font-sans text-[10px] tracking-[0.3em] uppercase text-forest border border-forest/30 px-8 py-3.5 hover:bg-forest hover:text-cream transition-all duration-300"
            >
              Start a Search
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
