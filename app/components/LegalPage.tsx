import Navigation from "@/app/components/Navigation";
import PageHero from "@/app/components/PageHero";
import AnimateIn from "@/app/components/AnimateIn";
import Footer from "@/app/components/Footer";

export type LegalSection = {
  heading: string;
  body: React.ReactNode[];
};

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  updated: string;
  intro: React.ReactNode[];
  sections: LegalSection[];
};

/**
 * Shared long-form layout for legal/compliance pages (Privacy Policy, Terms of
 * Use). Narrow measure for readability; numbered serif section headings in the
 * brand style.
 */
export default function LegalPage({ eyebrow, title, accent, updated, intro, sections }: Props) {
  return (
    <>
      <Navigation />
      <PageHero eyebrow={eyebrow} title={title} accent={accent} />

      <section className="bg-cream py-16 lg:py-24 px-8">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted/50 mb-10">
              Last Updated: {updated}
            </p>
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className="space-y-5 font-sans text-muted text-base leading-[1.85] mb-14 pb-12 border-b border-sage-light/50">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </AnimateIn>

          <div className="space-y-12">
            {sections.map((s, i) => (
              <AnimateIn key={s.heading}>
                <div>
                  <h2 className="font-serif text-forest text-2xl mb-4 flex items-baseline gap-4">
                    <span className="font-sans text-[10px] tracking-[0.3em] text-muted/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s.heading}</span>
                  </h2>
                  <div className="space-y-4 font-sans text-muted text-[15px] leading-[1.85] pl-0 sm:pl-10">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
