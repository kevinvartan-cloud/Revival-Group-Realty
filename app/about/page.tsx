import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/app/components/Navigation";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import AnimateIn from "@/app/components/AnimateIn";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "About | Revival Group Realty",
  description:
    "Revival Group Realty is a boutique San Diego brokerage combining disciplined representation with a development-informed advisory process shaped by market knowledge and due diligence.",
  openGraph: {
    title: "About | Revival Group Realty",
    description: "A boutique San Diego brokerage with a disciplined, development-informed advisory process.",
    url: "https://revivalgrouprealty.com/about",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
};

const PRINCIPLES = [
  {
    number: "01",
    heading: "Development-Informed Brokerage",
    body: "Our background spans development, construction, and entitlement realities. That perspective shapes how we read condition, feasibility, and long-term value — for every client, not just developers.",
  },
  {
    number: "02",
    heading: "San Diego Focus",
    body: "We concentrate on the San Diego neighborhoods and property types we know firsthand, rather than spreading thin. Local knowledge is something we practice, not advertise.",
  },
  {
    number: "03",
    heading: "A Disciplined Process",
    body: "Goals first, then a clear plan grounded in due diligence. We'd rather give you a reason to pause than push a transaction that doesn't serve you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <PageHero eyebrow="About" title="About Revival" accent="Group Realty." />

      {/* Philosophy */}
      <section className="bg-cream py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <AnimateIn className="lg:col-span-4" direction="left">
              <SectionHeader label="Our Philosophy" className="mb-6" />
            </AnimateIn>
            <AnimateIn className="lg:col-span-8" delay={120}>
              <h2 className="font-serif text-forest text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.01em] mb-7">
                Real estate decisions deserve<br className="hidden sm:block" />{" "}
                more than surface-level guidance.
              </h2>
              <div className="space-y-5 font-sans text-muted text-base leading-[1.8] max-w-xl">
                <p>
                  Revival Group Realty was created around a simple belief: that
                  the most important real estate decisions deserve real judgment,
                  not a transaction-first approach. The firm combines boutique
                  representation with a disciplined advisory process shaped by
                  market knowledge, due diligence, and development perspective.
                </p>
                <p>
                  We keep our client roster intentionally small so that every
                  engagement gets genuine attention — the kind of careful,
                  unhurried work that complex decisions actually require.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-parchment py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeader label="What Defines Us" className="mb-12 pb-7 border-b border-sage-light/50" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {PRINCIPLES.map((p, i) => (
              <AnimateIn key={p.number} delay={i * 80}>
                <div className="border-t border-sage-light/50 pt-6">
                  <div className="font-sans text-[9px] tracking-[0.3em] text-muted/30 mb-4">
                    {p.number}
                  </div>
                  <h3 className="font-serif text-forest text-xl mb-3">{p.heading}</h3>
                  <p className="font-sans text-muted text-sm leading-[1.8]">{p.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Founders */}
      <section className="bg-cream py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <SectionHeader label="Co-Founders" className="mb-12 pb-7 border-b border-sage-light/50" />
          </AnimateIn>

          <div className="space-y-16 lg:space-y-24">
            {/* Kevin Vartan */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <AnimateIn className="lg:col-span-4" direction="left">
                <div className="relative w-full overflow-hidden bg-parchment" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/images/kevin-vartan.webp"
                    alt="Kevin Vartan, Co-Founder & Broker of Revival Group Realty"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                  />
                </div>
              </AnimateIn>
              <AnimateIn className="lg:col-span-8" delay={120}>
                <h3 className="font-serif text-forest text-3xl mb-1.5">Kevin Vartan</h3>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted/60 mb-6">
                  Co-Founder &amp; Broker · CA DRE #02222010
                </p>
                <div className="space-y-5 font-sans text-muted text-base leading-[1.8] max-w-xl">
                  <p>
                    Kevin Vartan is a co-founder of Revival Group Realty, a San Diego
                    boutique brokerage built around multidisciplinary real estate
                    guidance and client-first representation. With experience spanning
                    real estate, engineering, construction, contracting, and
                    development, Kevin brings a deeper advisory perspective to buyers,
                    sellers, investors, and development-minded clients.
                  </p>
                  <p>
                    Rather than approaching brokerage as a purely transactional
                    service, Kevin co-founded Revival Group Realty to provide thoughtful,
                    white-glove representation rooted in strategy, due diligence,
                    market knowledge, and long-term client value.
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* Sam Wuellner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <AnimateIn className="lg:col-span-4" direction="left">
                <div className="relative w-full overflow-hidden bg-parchment" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/images/sam-wuellner.webp"
                    alt="Sam Wuellner, Co-Founder of Revival Group Realty"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </AnimateIn>
              <AnimateIn className="lg:col-span-8" delay={120}>
                <h3 className="font-serif text-forest text-3xl mb-1.5">Sam Wuellner</h3>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted/60 mb-6">
                  Co-Founder · Civil Engineering &amp; Entitlement Advisory
                </p>
                <div className="space-y-5 font-sans text-muted text-base leading-[1.8] max-w-xl">
                  <p>
                    Sam Wuellner brings a technical and development-focused perspective
                    to Revival Group Realty through his background in civil engineering,
                    site feasibility, and entitlement strategy. His experience supports
                    the firm&rsquo;s multidisciplinary approach to real estate,
                    particularly for clients evaluating land, infill opportunities,
                    development potential, and property constraints.
                  </p>
                  <p>
                    As co-founder, Sam helps strengthen Revival&rsquo;s ability to look
                    beyond the transaction and consider the physical, regulatory, and
                    long-term factors that shape real estate value.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Platform + License */}
      <section className="bg-parchment py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimateIn>
              <SectionHeader label="Revival Group Platform" className="mb-6" />
              <p className="font-sans text-muted text-base leading-[1.8] mt-8">
                Revival Group Realty is part of the broader Revival Group
                platform, alongside development and advisory capabilities. That
                connection is what lets the brokerage bring a development-informed
                perspective to land, infill, and repositioning opportunities.
              </p>
              <a
                href="https://www.revivaldevelopmentgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-6 font-sans text-[10px] tracking-[0.25em] uppercase text-forest border border-forest/30 px-7 py-3 hover:bg-forest hover:text-cream transition-all duration-300"
              >
                Explore Revival Group Development ↗
              </a>
            </AnimateIn>

            <AnimateIn delay={120}>
              <SectionHeader label="License & Contact" className="mb-6" />
              {/* TODO(about): office address still a placeholder — fill before launch. */}
              <dl className="mt-8 space-y-5">
                {[
                  { t: "Brokerage", d: "Revival Group Realty" },
                  { t: "CA DRE License #", d: "02222010" },
                  { t: "Broker of Record", d: "Kevin Vartan, DRE #02222010" },
                  { t: "Office", d: "[Office Address], San Diego, CA [ZIP]" },
                  { t: "Email", d: "kevinvartan@revivalgrouprealty.com" },
                  { t: "Phone", d: "310-779-2038" },
                ].map(({ t, d }) => (
                  <div key={t}>
                    <dt className="font-sans text-[8px] tracking-[0.4em] uppercase text-muted/50 mb-1.5">
                      {t}
                    </dt>
                    <dd className="font-serif text-forest text-lg">{d}</dd>
                  </div>
                ))}
              </dl>
              <p className="font-sans text-[10px] text-muted/40 leading-relaxed mt-8 border-t border-sage-light/40 pt-6">
                Equal Housing Opportunity. Information deemed reliable but not guaranteed.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Let's start"
        accent="a conversation."
        body="Whether you're buying, selling, investing, or building in San Diego, we'd welcome the chance to talk through it."
        primary={{ label: "Work With Us", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
