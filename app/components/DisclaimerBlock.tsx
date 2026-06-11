type Props = {
  /** Background context the block sits on. */
  tone?: "light" | "dark";
  children: React.ReactNode;
  className?: string;
};

/**
 * Fine-print compliance/disclaimer copy. Kept visually quiet and separated by
 * a hairline rule so legal language never competes with the editorial content.
 */
export default function DisclaimerBlock({ tone = "light", children, className = "" }: Props) {
  const rule = tone === "dark" ? "border-cream/10" : "border-sage-light/30";
  const text = tone === "dark" ? "text-cream/30" : "text-muted/35";
  return (
    <div className={`border-t ${rule} pt-8 ${className}`}>
      <p className={`font-sans text-[10px] leading-relaxed ${text} max-w-3xl`}>{children}</p>
    </div>
  );
}
