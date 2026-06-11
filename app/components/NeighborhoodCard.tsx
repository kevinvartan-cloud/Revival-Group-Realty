import type { Neighborhood } from "@/app/data/neighborhoods";

export default function NeighborhoodCard({ neighborhood }: { neighborhood: Neighborhood }) {
  const { name, region, character, housing, consideration } = neighborhood;

  return (
    <div className="flex flex-col h-full bg-cream border border-sage-light/40 p-8 hover:border-sage-light transition-colors duration-300 group">
      <div className="flex items-baseline justify-between mb-4">
        <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-sage/60">
          {region}
        </span>
      </div>

      <h3 className="font-serif text-forest text-2xl leading-tight mb-4 group-hover:text-sage transition-colors duration-300">
        {name}
      </h3>

      <p className="font-sans text-muted text-sm leading-[1.8] mb-6">{character}</p>

      <dl className="mt-auto pt-5 border-t border-sage-light/40 space-y-4">
        <div>
          <dt className="font-sans text-[8px] tracking-[0.3em] uppercase text-muted/50 mb-1.5">
            Housing
          </dt>
          <dd className="font-sans text-muted/80 text-xs leading-[1.7]">{housing}</dd>
        </div>
        <div>
          <dt className="font-sans text-[8px] tracking-[0.3em] uppercase text-muted/50 mb-1.5">
            Considerations
          </dt>
          <dd className="font-sans text-muted/80 text-xs leading-[1.7]">{consideration}</dd>
        </div>
      </dl>
    </div>
  );
}
