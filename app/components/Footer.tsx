const YEAR = new Date().getFullYear();

const NAV = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Invest", href: "/invest" },
  { label: "Develop", href: "/develop" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// TODO(platform): point these at the live Revival Group platform routes /
// external sites once available. Placeholders for now.
const PLATFORM = [
  { label: "Revival Group Development", href: "#" },
  { label: "Development Advisory", href: "#" },
  { label: "Construction / Feasibility", href: "#" },
  { label: "Investment Strategy", href: "/invest" },
];

// TODO(compliance): replace placeholder routes with real Privacy Policy, Terms,
// and MLS/IDX disclaimer pages before launch.
const COMPLIANCE = [
  { label: "Guides", href: "/guides" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-forest">
      <div className="py-14 px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-cream/8">

            {/* Brand */}
            <div className="md:col-span-4">
              <div className="font-serif text-cream text-2xl mb-1.5">Revival</div>
              <div className="font-sans text-[8px] tracking-[0.35em] uppercase text-cream/30 mb-6">
                Group Realty
              </div>
              <p className="font-sans text-cream/30 text-xs leading-relaxed max-w-[230px] mb-6">
                Boutique brokerage in San Diego, California. Strategic
                representation for buyers, sellers, investors, and
                development-minded clients.
              </p>
              {/* TODO(platform): link to the live Revival Group Development site. */}
              <a
                href="#"
                className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold/60 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5"
              >
                Part of the Revival Group platform
                <span className="text-[10px]">↗</span>
              </a>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <div className="font-sans text-[8px] tracking-[0.4em] uppercase text-cream/25 mb-5">
                Navigation
              </div>
              <ul className="space-y-3.5">
                {NAV.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-sans text-sm text-cream/40 hover:text-cream/80 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform */}
            <div className="md:col-span-3">
              <div className="font-sans text-[8px] tracking-[0.4em] uppercase text-cream/25 mb-5">
                Platform
              </div>
              <ul className="space-y-3.5">
                {PLATFORM.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-sans text-sm text-cream/40 hover:text-cream/80 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance */}
            <div className="md:col-span-2">
              <div className="font-sans text-[8px] tracking-[0.4em] uppercase text-cream/25 mb-5">
                Compliance
              </div>
              <ul className="space-y-3.5">
                {COMPLIANCE.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-sans text-sm text-cream/40 hover:text-cream/80 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 font-sans text-[10px] text-cream/30 leading-relaxed">
                CA DRE #02222010
                <br />
                Equal Housing Opportunity
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="pt-8 space-y-4">
            <p className="font-sans text-[10px] text-cream/25 leading-relaxed max-w-4xl">
              {/* TODO(compliance): add MLS/IDX attribution + disclaimer once a listing
                  feed is integrated. */}
              Revival Group Realty is a licensed California real estate broker. Information on this
              site is provided for general informational purposes and is deemed reliable but not
              guaranteed. Nothing here constitutes legal, tax, financial, or investment advice;
              consult qualified professionals regarding your specific circumstances. Equal Housing
              Opportunity.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-cream/18">
                © {YEAR} Revival Group Realty
              </span>
              <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-cream/18">
                CA DRE #02222010 · Equal Housing Opportunity
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
