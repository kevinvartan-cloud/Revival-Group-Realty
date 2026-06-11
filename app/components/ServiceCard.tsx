type Props = {
  number: string;
  heading: string;
  body: string;
};

/**
 * Numbered advisory card — bordered, hover-lifted border, used across the
 * Buy / Sell / Invest / Develop service grids.
 */
export default function ServiceCard({ number, heading, body }: Props) {
  return (
    <div className="border border-sage-light/40 bg-cream/40 p-8 lg:p-9 h-full hover:border-sage-light transition-colors duration-300 group">
      <div className="font-sans text-[9px] tracking-[0.3em] text-muted/30 mb-4">{number}</div>
      <h3 className="font-serif text-forest text-xl mb-3 group-hover:text-sage transition-colors duration-300">
        {heading}
      </h3>
      <p className="font-sans text-muted text-sm leading-[1.8]">{body}</p>
    </div>
  );
}
