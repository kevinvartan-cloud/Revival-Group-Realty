import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import PageHero from "@/app/components/PageHero";
import SectionHeader from "@/app/components/SectionHeader";
import AnimateIn from "@/app/components/AnimateIn";
import InsightCard from "@/app/components/InsightCard";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import { getAllArticles, CATEGORIES } from "@/app/data/insights";

export const metadata: Metadata = {
  title: "Insights & Research | Revival Group Realty",
  description:
    "Articles and long-form research on buying, selling, investing, and development in San Diego — perspective grounded in market fundamentals and a development-informed lens.",
  openGraph: {
    title: "Insights & Research | Revival Group Realty",
    description:
      "Articles and long-form research on San Diego real estate from Revival Group Realty.",
    url: "https://revivalgrouprealty.com/insights",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
};

export default function InsightsPage() {
  const articles = getAllArticles();
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured?.slug);

  return (
    <>
      <Navigation />
      <PageHero eyebrow="Insights & Research" title="Insights &" accent="Research." maxWidth="7xl" />

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-20 px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <AnimateIn className="lg:col-span-4" direction="left">
              <SectionHeader label="Overview" className="mb-6" />
              <p className="font-serif text-forest text-2xl leading-snug mt-8">
                Considered writing on San Diego real estate — strategy, research,
                and perspective.
              </p>
            </AnimateIn>
            <AnimateIn className="lg:col-span-8" delay={120}>
              <div className="space-y-5 font-sans text-muted text-base leading-[1.85] max-w-xl">
                <p>
                  We publish articles and longer-form research for clients and
                  partners who want to think carefully about real estate decisions
                  — informed by market fundamentals, due diligence, and a
                  development-minded view of value.
                </p>
                <p>
                  Topics span buying and selling strategy, investment
                  fundamentals, land and development, and occasional market
                  commentary. Each piece is meant to be useful well beyond the day
                  it&rsquo;s published.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {CATEGORIES.map((c) => (
                  <span
                    key={c}
                    className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted/70 border border-sage-light/50 px-4 py-2"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-parchment py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeader label="Latest" className="mb-12 pb-7 border-b border-sage-light/50" />
          </AnimateIn>

          {featured && (
            <AnimateIn>
              <div className="mb-5">
                <InsightCard article={featured} featured />
              </div>
            </AnimateIn>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((article, i) => (
                <AnimateIn key={article.slug} delay={(i % 3) * 80}>
                  <InsightCard article={article} />
                </AnimateIn>
              ))}
            </div>
          )}

          <AnimateIn>
            <p className="mt-14 font-sans text-[11px] text-muted/40 leading-relaxed max-w-2xl">
              Articles are provided for general informational purposes and do not
              constitute legal, tax, financial, or investment advice. More research
              is published periodically.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Have a question"
        accent="our research raised?"
        body="If a topic here is relevant to a decision you're weighing, we're glad to talk it through directly."
        primary={{ label: "Work With Us", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
