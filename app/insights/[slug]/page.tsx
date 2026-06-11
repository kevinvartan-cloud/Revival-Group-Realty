import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/app/components/Navigation";
import AnimateIn from "@/app/components/AnimateIn";
import ArticleBody from "@/app/components/ArticleBody";
import DisclaimerBlock from "@/app/components/DisclaimerBlock";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import { ARTICLES, getArticle, formatDate } from "@/app/data/insights";
import { GRAIN } from "@/app/lib/grain";

// Pre-render a static page for every article at build time.
export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article Not Found | Revival Group Realty" };

  return {
    title: `${article.title} | Revival Group Realty`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://revivalgrouprealty.com/insights/${article.slug}`,
      siteName: "Revival Group Realty",
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { title, category, author, date, readingTime, body } = article;

  return (
    <>
      <Navigation />

      {/* Article header */}
      <section className="relative bg-forest px-8 pt-40 pb-16 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.3em] uppercase text-cream/40 hover:text-cream transition-colors duration-200 mb-10 group"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
            Insights &amp; Research
          </Link>
          <div className="flex items-center gap-4 mb-7">
            <div className="w-8 h-px bg-cream/20" />
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold/60">
              {category}
            </span>
          </div>
          <h1 className="font-serif text-cream text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.01em] mb-8">
            {title}
          </h1>
          <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/40">
            {author} &nbsp;·&nbsp; {formatDate(date)} &nbsp;·&nbsp; {readingTime}
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-cream py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <ArticleBody blocks={body} />
          </AnimateIn>

          <AnimateIn>
            <DisclaimerBlock className="mt-14">
              This article is provided for general informational purposes only and does not
              constitute legal, tax, financial, investment, or other professional advice. Real
              estate decisions depend on facts specific to your situation; consult qualified
              professionals before acting. Revival Group Realty is a licensed California real estate
              broker (CA DRE #02222010). Equal Housing Opportunity.
            </DisclaimerBlock>
          </AnimateIn>

          <AnimateIn>
            <div className="mt-12 pt-8 border-t border-sage-light/50">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase text-forest border border-forest/30 px-7 py-3 hover:bg-forest hover:text-cream transition-all duration-300 group"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                All Insights &amp; Research
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        eyebrow="Work With Us"
        title="Thinking through"
        accent="a real decision?"
        body="If this is relevant to something you're weighing, we're glad to talk it through directly — no pressure, no pitch."
        primary={{ label: "Start a Conversation", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
