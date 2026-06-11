import AnimateIn from "@/app/components/AnimateIn";
import SectionHeader from "@/app/components/SectionHeader";

const POINTS = [
  {
    number: "01",
    heading: "Boutique Representation",
    body: "A deliberately small client roster means direct access to a principal and full attention on every decision — not a handoff to a junior team.",
  },
  {
    number: "02",
    heading: "San Diego Focus",
    body: "We concentrate on the neighborhoods and property types we know firsthand, from uptown corridors to the coast, rather than spreading thin across a region.",
  },
  {
    number: "03",
    heading: "Development-Informed",
    body: "A background in development, construction, and entitlement realities lets us read condition, feasibility, and upside that a sign-and-show approach misses.",
  },
  {
    number: "04",
    heading: "A Strategic Process",
    body: "Goals first, then a clear plan — comparing options, modeling trade-offs, and structuring offers and timelines with intent.",
  },
  {
    number: "05",
    heading: "Due-Diligence Mindset",
    body: "Property condition, HOA and condo documents, zoning, and long-term ownership costs reviewed carefully before you're committed.",
  },
  {
    number: "06",
    heading: "Calm, Professional Guidance",
    body: "Steady counsel through complex transactions — measured advice, clear communication, and no pressure to act before you're ready.",
  },
];

export default function WhyRevival() {
  return (
    <section className="bg-cream py-16 lg:py-24 px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionHeader label="Why Revival" className="mb-12 pb-7 border-b border-sage-light/50" />
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="font-serif text-forest text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.01em] mb-12">
            A disciplined approach,<br />
            <span className="italic text-sage">start to finish.</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {POINTS.map((point, i) => (
            <AnimateIn key={point.number} delay={(i % 3) * 80}>
              <div className="border-t border-sage-light/50 pt-6">
                <div className="font-sans text-[9px] tracking-[0.3em] text-muted/30 mb-4">
                  {point.number}
                </div>
                <h3 className="font-serif text-forest text-xl mb-3">{point.heading}</h3>
                <p className="font-sans text-muted text-sm leading-[1.8]">{point.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
