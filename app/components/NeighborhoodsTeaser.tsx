import AnimateIn from "@/app/components/AnimateIn";
import SectionHeader from "@/app/components/SectionHeader";
import { NEIGHBORHOODS } from "@/app/data/neighborhoods";

export default function NeighborhoodsTeaser() {
  return (
    <section className="bg-parchment py-16 lg:py-24 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          <AnimateIn className="lg:col-span-4" direction="left">
            <SectionHeader label="Local Knowledge" className="mb-8" />
            <h2 className="font-serif text-forest text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.01em] mb-6">
              We know the<br />
              <span className="italic text-sage">neighborhoods.</span>
            </h2>
            <p className="font-sans text-muted text-base leading-[1.8] max-w-md mb-8">
              San Diego is a collection of distinct neighborhoods, each with its
              own character, housing types, and considerations for buyers,
              sellers, investors, and developers. We help you match the right
              place to the right goals.
            </p>
            <a
              href="/neighborhoods"
              className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-forest border border-forest/30 px-8 py-3.5 hover:bg-forest hover:text-cream transition-all duration-300"
            >
              Explore San Diego With Revival →
            </a>
          </AnimateIn>

          <AnimateIn className="lg:col-span-8" delay={120}>
            <div className="flex flex-wrap gap-3">
              {NEIGHBORHOODS.map((n) => (
                <a
                  key={n.name}
                  href="/neighborhoods"
                  className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted/70 border border-sage-light/50 px-5 py-3 hover:border-sage hover:text-forest transition-colors duration-200"
                >
                  {n.name}
                </a>
              ))}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
