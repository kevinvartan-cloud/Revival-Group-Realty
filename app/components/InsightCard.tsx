import { type Article, formatDate } from "@/app/data/insights";

/**
 * Article preview card for the Insights & Research index.
 * `featured` renders a larger, full-width treatment.
 */
export default function InsightCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const { slug, title, category, excerpt, author, date, readingTime } = article;

  return (
    <a
      href={`/insights/${slug}`}
      className={`group flex flex-col h-full border border-sage-light/40 bg-cream hover:border-sage-light transition-colors duration-300 ${
        featured ? "p-9 lg:p-12" : "p-8"
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-sage/70">
          {category}
        </span>
      </div>

      <h3
        className={`font-serif text-forest leading-tight mb-4 group-hover:text-sage transition-colors duration-300 ${
          featured ? "text-[clamp(1.75rem,3vw,2.5rem)]" : "text-2xl"
        }`}
      >
        {title}
      </h3>

      <p
        className={`font-sans text-muted leading-[1.8] mb-8 ${
          featured ? "text-base max-w-2xl" : "text-sm"
        }`}
      >
        {excerpt}
      </p>

      <div className="mt-auto pt-5 border-t border-sage-light/40 flex items-center justify-between gap-4">
        <span className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted/50">
          {author} &nbsp;·&nbsp; {formatDate(date)} &nbsp;·&nbsp; {readingTime}
        </span>
        <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted/60 group-hover:text-sage transition-colors duration-200 flex items-center gap-2 flex-shrink-0">
          Read
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </a>
  );
}
