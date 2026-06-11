import AnimateIn from "@/app/components/AnimateIn";
import SectionHeader from "@/app/components/SectionHeader";

const PILLARS = [
  { label: "Representation", value: "Buy · Sell · Invest · Develop" },
  { label: "Approach", value: "Boutique Advisory" },
  { label: "Geography", value: "San Diego, CA" },
];

export default function Approach() {
  return (
    <section id="about" className="bg-cream py-16 lg:py-24 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left — label */}
          <AnimateIn className="lg:col-span-3 lg:pt-2" direction="left">
            <SectionHeader label="Our Approach" />
          </AnimateIn>

          {/* Right — content */}
          <div className="lg:col-span-9">
            <AnimateIn delay={100}>
              <h2 className="font-serif text-forest text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.01em] mb-7">
                Real estate decisions deserve<br className="hidden sm:block" />{" "}
                more than surface-level guidance.
              </h2>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="space-y-6 font-sans text-muted text-lg leading-[1.8] max-w-2xl">
                <p>
                  Revival Group Realty is a San Diego brokerage built for clients
                  who want thoughtful guidance, disciplined representation, and
                  advice grounded in market fundamentals, due diligence, and a
                  development perspective.
                </p>
                <p>
                  We work with a deliberately small number of clients so every
                  engagement gets real attention — from comparing neighborhoods
                  and evaluating property condition to structuring offers and
                  thinking several moves ahead on resale, improvement, and
                  long-term value.
                </p>
                <p>
                  Our background spans development, construction, and entitlement
                  realities, so we see what a property is — and what it could
                  become.{" "}
                  <em className="font-serif text-forest not-italic">
                    Clarity before you commit.
                  </em>
                </p>
              </div>
            </AnimateIn>

            {/* Pillars */}
            <AnimateIn delay={350}>
              <div className="mt-8 pt-8 border-t border-sage-light/50 flex flex-wrap gap-x-14 gap-y-8">
                {PILLARS.map(({ label, value }) => (
                  <div key={label}>
                    <div className="font-sans text-[8px] tracking-[0.4em] uppercase text-muted/50 mb-2">
                      {label}
                    </div>
                    <div className="font-serif text-forest text-xl">{value}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
