import AnimateIn from "@/app/components/AnimateIn";
import SectionHeader from "@/app/components/SectionHeader";
import { getAllArticles, formatDate } from "@/app/data/insights";

export default function InsightsTeaser() {
  const latest = getAllArticles().slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className="bg-parchment py-16 lg:py-24 px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionHeader
            label="Insights & Research"
            className="mb-12 pb-7 border-b border-sage-light/50"
            action={{ label: "View All", href: "/insights" }}
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          {latest.map((article, i) => (
            <AnimateIn key={article.slug} delay={i * 80}>
              <a href={`/insights/${article.slug}`} className="group flex flex-col h-full">
                <div className="font-sans text-[8px] tracking-[0.3em] uppercase text-sage/70 mb-4">
                  {article.category}
                </div>
                <h3 className="font-serif text-forest text-xl lg:text-[1.4rem] leading-snug mb-3 group-hover:text-sage transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="font-sans text-muted text-sm leading-[1.8] mb-6">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-5 border-t border-sage-light/40 flex items-center justify-between gap-4">
                  <span className="font-sans text-[9px] tracking-[0.1em] uppercase text-muted/50">
                    {formatDate(article.date)} &nbsp;·&nbsp; {article.readingTime}
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted/60 group-hover:text-sage transition-colors duration-200 flex items-center gap-2 flex-shrink-0">
                    Read
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
