import type { Block } from "@/app/data/insights";

/** Renders an article's typed content blocks into styled long-form prose. */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="font-serif text-forest text-2xl lg:text-[1.75rem] leading-snug pt-6"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="font-serif text-forest text-xl leading-snug pt-3">
                {b.text}
              </h3>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-gold/50 pl-6 my-2 font-serif italic text-forest text-xl lg:text-2xl leading-relaxed"
              >
                {b.text}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="space-y-2.5">
                {b.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 font-sans text-muted text-[15px] lg:text-base leading-[1.85]"
                  >
                    <span className="text-gold/60 mt-0.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          default:
            return (
              <p
                key={i}
                className="font-sans text-muted text-[15px] lg:text-base leading-[1.9]"
              >
                {b.text}
              </p>
            );
        }
      })}
    </div>
  );
}
