import { GRAIN } from "@/app/lib/grain";

type Props = {
  eyebrow: string;
  title: string;
  /** Italic gold second line (optional). */
  accent?: string;
  /** Constrain content width to match the page below it. */
  maxWidth?: "5xl" | "7xl";
};

/**
 * Forest-toned interior page hero — grain texture, eyebrow rule, serif headline
 * with an optional italic gold accent line. Matches the home hero's palette.
 */
export default function PageHero({ eyebrow, title, accent, maxWidth = "5xl" }: Props) {
  return (
    <section className="relative bg-forest min-h-[45vh] flex flex-col items-center justify-end px-8 pb-20 pt-40">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }}
      />
      <div className={`relative w-full ${maxWidth === "7xl" ? "max-w-7xl" : "max-w-5xl"} mx-auto`}>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-cream/20" />
          <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold/60">
            {eyebrow}
          </span>
        </div>
        <h1 className="font-serif text-cream text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
          {title}
          {accent && (
            <>
              <br />
              <span className="italic text-gold">{accent}</span>
            </>
          )}
        </h1>
      </div>
    </section>
  );
}
