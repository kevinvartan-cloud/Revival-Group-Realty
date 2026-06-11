type Props = {
  label: string;
  tone?: "light" | "dark";
  className?: string;
  /** Optional right-aligned link (e.g. "View All →"). */
  action?: { label: string; href: string };
};

/**
 * The eyebrow + hairline-rule section label used throughout the site.
 * `light` = on cream/parchment backgrounds; `dark` = on forest backgrounds.
 */
export default function SectionHeader({ label, tone = "light", className = "", action }: Props) {
  const rule = tone === "dark" ? "bg-cream/20" : "bg-forest/30";
  const text = tone === "dark" ? "text-cream/35" : "text-muted";
  const actionText =
    tone === "dark"
      ? "text-cream/40 hover:text-cream"
      : "text-muted hover:text-forest";

  return (
    <div className={`flex items-end justify-between ${className}`}>
      <div className="flex items-center gap-4">
        <div className={`w-8 h-px ${rule}`} />
        <span className={`font-sans text-[9px] tracking-[0.4em] uppercase ${text}`}>
          {label}
        </span>
      </div>
      {action && (
        <a
          href={action.href}
          className={`font-sans text-[9px] tracking-[0.2em] uppercase transition-colors duration-200 flex items-center gap-2 group ${actionText}`}
        >
          {action.label}
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </a>
      )}
    </div>
  );
}
