import AnimateIn from "@/app/components/AnimateIn";
import SectionHeader from "@/app/components/SectionHeader";

const PATHS = [
  {
    number: "01",
    name: "Buy",
    line: "Thoughtful representation for clients who want clarity before they commit.",
    href: "/buy",
  },
  {
    number: "02",
    name: "Sell",
    line: "Preparation, positioning, and negotiation handled with discipline.",
    href: "/sell",
  },
  {
    number: "03",
    name: "Invest",
    line: "Guidance for investors who care about fundamentals, not hype.",
    href: "/invest",
  },
  {
    number: "04",
    name: "Develop",
    line: "Development-aware support for land, infill, and repositioning opportunities.",
    href: "/develop",
  },
];

export default function ClientPaths() {
  return (
    <section id="services" className="bg-parchment py-16 lg:py-24 px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionHeader label="How We Help" className="mb-12 pb-7 border-b border-sage-light/50" />
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="font-serif text-forest text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.01em] mb-12">
            Four ways to work with us.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PATHS.map((path, i) => (
            <AnimateIn key={path.number} delay={i * 80}>
              <a
                href={path.href}
                className="flex flex-col h-full border border-sage-light/40 bg-cream/40 p-8 lg:p-10 hover:border-sage-light hover:bg-cream/70 transition-all duration-300 group"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-sans text-[9px] tracking-[0.3em] text-muted/30">
                    {path.number}
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted/40 group-hover:text-sage transition-colors duration-200 flex items-center gap-2">
                    Learn More
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
                <h3 className="font-serif text-forest text-[clamp(1.75rem,3vw,2.5rem)] leading-tight mb-4 group-hover:text-sage transition-colors duration-300">
                  {path.name}
                </h3>
                <p className="font-sans text-muted text-sm leading-[1.85] max-w-sm">
                  {path.line}
                </p>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
