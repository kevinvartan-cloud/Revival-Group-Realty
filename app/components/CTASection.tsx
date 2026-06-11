import { GRAIN } from "@/app/lib/grain";

type Props = {
  eyebrow: string;
  title: string;
  /** Italic gold second line (optional). */
  accent?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/**
 * Forest-toned closing call-to-action band. Used at the foot of every page
 * to route clients toward a consultation.
 */
export default function CTASection({
  eyebrow,
  title,
  accent,
  body,
  primary = { label: "Work With Us", href: "/contact" },
  secondary,
}: Props) {
  return (
    <section className="relative bg-forest py-20 lg:py-28 px-8 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-8 h-px bg-cream/20" />
          <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold/60">
            {eyebrow}
          </span>
          <div className="w-8 h-px bg-cream/20" />
        </div>
        <h2 className="font-serif text-cream text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] tracking-[-0.01em] mb-7">
          {title}
          {accent && (
            <>
              <br />
              <span className="italic text-gold">{accent}</span>
            </>
          )}
        </h2>
        {body && (
          <p className="font-sans text-cream/40 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10">
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primary.href}
            className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase bg-cream text-forest px-10 py-3.5 hover:bg-gold-light transition-all duration-300"
          >
            {primary.label}
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-cream border border-cream/30 px-10 py-3.5 hover:border-cream/70 hover:bg-cream/5 transition-all duration-300"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
