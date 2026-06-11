// ─────────────────────────────────────────────────────────────────────────
// Insights & Research content
//
// To publish a new article or research piece, add an object to ARTICLES below.
// No build config or database needed — pages are generated automatically from
// this file. Body content uses simple typed "blocks" (no HTML/JSX required):
//
//   { type: "p",     text: "A paragraph." }
//   { type: "h2",    text: "A section heading" }
//   { type: "h3",    text: "A sub-heading" }
//   { type: "list",  items: ["First point", "Second point"] }
//   { type: "quote", text: "A pulled quote." }
//
// Keep claims evergreen and factual — avoid fabricated statistics, prices, or
// performance figures. Date format is ISO: "YYYY-MM-DD".
// ─────────────────────────────────────────────────────────────────────────

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string; // ISO YYYY-MM-DD
  readingTime: string;
  featured?: boolean;
  body: Block[];
};

export const CATEGORIES = [
  "Market Commentary",
  "Buying in San Diego",
  "Selling Strategy",
  "Investor Notes",
  "Development & Land",
] as const;

export const ARTICLES: Article[] = [
  {
    slug: "buyer-due-diligence-san-diego",
    title: "What to Diligence Before You Commit: A San Diego Buyer's Field Guide",
    category: "Buying in San Diego",
    excerpt:
      "The questions worth answering before you remove contingencies — condition, HOA health, zoning, and the long view on resale.",
    author: "Kevin Vartan",
    date: "2026-06-09",
    readingTime: "7 min read",
    featured: true,
    body: [
      {
        type: "p",
        text: "The strongest position a buyer can be in is an informed one. By the time you are deciding whether to remove contingencies, most of the leverage has shifted — so the work that matters happens earlier, while you still have room to ask questions, renegotiate, or walk away. Here is how we think about diligence on a San Diego home.",
      },
      { type: "h2", text: "Start with the goal, not the granite" },
      {
        type: "p",
        text: "Finishes are the easiest thing to notice and the easiest thing to change. Before a property's surface qualities pull you in, it is worth being honest about what you actually need the purchase to do: how long you intend to hold it, whether it has to work for resale, and how much disruption you are willing to take on. A home that is wrong for your timeline is wrong no matter how good it looks on a Saturday tour.",
      },
      { type: "h2", text: "Condition and the true cost of ownership" },
      {
        type: "p",
        text: "Price is what you pay to acquire a property. Cost is what you pay to own it. The two can diverge quickly when systems are near the end of their life or past work was done without permits. A careful read of condition — supported by qualified inspectors — protects you from inheriting someone else's deferred decisions.",
      },
      {
        type: "list",
        items: [
          "Age and remaining life of the roof, HVAC, water heater, and major systems.",
          "Foundation, grading, and drainage — especially on hillside and canyon-adjacent lots.",
          "Permit history for additions, conversions, and ADUs; unpermitted work can affect value, insurance, and financing.",
          "Signs of deferred maintenance that hint at larger underlying issues.",
        ],
      },
      { type: "h2", text: "HOA and condo health" },
      {
        type: "p",
        text: "For condominiums and attached homes, you are buying into an association as much as a unit. The documents tell you whether that association is well-run and adequately funded — or whether a special assessment is waiting on the other side of closing.",
      },
      {
        type: "list",
        items: [
          "Operating budget and reserve study — is the building saving for what it will eventually need?",
          "Pending or recent special assessments and major planned projects.",
          "Rules and restrictions, including rental and pet policies, that could affect how you use or later lease the home.",
        ],
      },
      { type: "h2", text: "Zoning, use, and what you can change" },
      {
        type: "p",
        text: "What a property is today is not always what it could be. Zoning, overlays, and coastal regulations shape whether you can add square footage, build an ADU, or reconfigure the space down the line. Understanding those constraints up front turns a vague sense of \"potential\" into a concrete, checkable plan — and keeps you from paying for upside that the rules will not allow.",
      },
      { type: "h2", text: "The resale view" },
      {
        type: "p",
        text: "Even if you plan to stay a long time, every purchase is also a future sale. The factors that make a home easy to live in — location, light, layout, a sensible relationship to the street — tend to be the same ones that make it easier to sell later. Buying with that lens helps protect your downside without asking you to compromise on the things you actually care about.",
      },
      {
        type: "quote",
        text: "Diligence is not about finding a reason to say no. It is about being able to say yes with your eyes open.",
      },
      {
        type: "p",
        text: "Done well, none of this slows you down — it speeds up the decision by replacing anxiety with information. That is the entire point of representation: to do this work alongside you so that when the right home appears, you can move on it with confidence.",
      },
    ],
  },
  {
    slug: "reading-a-property-like-a-developer",
    title: "Reading a Property Like a Developer",
    category: "Development & Land",
    excerpt:
      "Feasibility, constraints, and upside — how a development background changes the way a property gets evaluated.",
    author: "Sam Wuellner",
    date: "2026-05-28",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Most people look at a property and see what is there. A development lens trains you to also see what could be there — and, just as importantly, what stands in the way. That second question is where value is won or lost, long before a shovel touches the ground.",
      },
      { type: "h2", text: "Feasibility comes before vision" },
      {
        type: "p",
        text: "It is easy to fall in love with an idea for a site. The discipline is to test that idea against physical and regulatory reality early, while the cost of changing course is still a conversation rather than a construction change order. Feasibility thinking asks a simple sequence of questions: what does the site allow, what does it physically support, and what would it actually take to get there?",
      },
      {
        type: "list",
        items: [
          "Site characteristics — topography, access, utilities, soils, and drainage.",
          "Regulatory envelope — zoning, setbacks, height limits, overlays, and applicable coastal or historic rules.",
          "The gap between as-is condition and the intended use, expressed in time and cost, not just imagination.",
        ],
      },
      { type: "h2", text: "Constraints are information, not obstacles" },
      {
        type: "p",
        text: "A constraint discovered early is a gift. It either reshapes the plan into something achievable or tells you to pass before you are committed. The expensive version of the same information arrives after closing, when options have narrowed and the budget is already moving.",
      },
      { type: "h2", text: "Coordinating the right expertise" },
      {
        type: "p",
        text: "No single person carries the full picture. The value is in knowing which questions belong to a civil engineer, which to an architect or land-use professional, and which to a contractor — and in sequencing those conversations so the answers arrive in the order that decisions need them. A development-informed perspective is largely about asking the right question of the right person at the right time.",
      },
      {
        type: "quote",
        text: "Identify the issues while there is still room to act on them. After that, you are just managing consequences.",
      },
      {
        type: "p",
        text: "For buyers, investors, and owners, this way of reading a property is not about turning everyone into a developer. It is about bringing that rigor to ordinary decisions, so the physical, regulatory, and long-term factors that shape value are on the table from the start.",
      },
    ],
  },
  {
    slug: "underwriting-income-property-on-fundamentals",
    title: "Underwriting Income Property on Fundamentals, Not Hype",
    category: "Investor Notes",
    excerpt:
      "A disciplined way to look at small multifamily and value-add opportunities without getting carried away by a pro forma.",
    author: "Revival Group Realty",
    date: "2026-05-15",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Every income property comes with a story about what it could earn. The story is rarely a lie, but it is usually optimistic. Disciplined investing is the practice of separating what a property does today from what someone hopes it will do tomorrow — and pricing the difference honestly.",
      },
      { type: "h2", text: "Start with in-place reality" },
      {
        type: "p",
        text: "Before modeling any upside, understand the asset as it actually operates: current rents, real expenses, lease terms, and condition. A pro forma built on today's truth is a foundation. One built on tomorrow's assumptions is a wish dressed up as a spreadsheet.",
      },
      {
        type: "list",
        items: [
          "Actual rents versus the rents a listing assumes you can achieve.",
          "Operating expenses that reflect how the property really runs, including the costs owners tend to leave out.",
          "Condition and deferred maintenance — the work that has to happen regardless of strategy.",
        ],
      },
      { type: "h2", text: "Value-add is a plan, not a hope" },
      {
        type: "p",
        text: "Repositioning a property can create real value, but only if the plan to get there is concrete: what work, at what cost, over what timeline, to support what change in income. \"There's upside here\" is a sentence, not a strategy. The number that matters is what is left after the work is paid for and the risk is accounted for.",
      },
      { type: "h2", text: "Underwrite the risks, not just the returns" },
      {
        type: "p",
        text: "Fundamentals cut both ways. The same rigor that confirms an opportunity also surfaces the things that could undermine it — regulatory exposure, condition surprises, financing assumptions, and what happens if the timeline slips. Knowing those before you commit is what separates an investment from a bet.",
      },
      {
        type: "quote",
        text: "Decide on the exit before the entry. A deal that only works under perfect conditions is not a deal — it is a gamble with extra steps.",
      },
      {
        type: "p",
        text: "None of this is about being pessimistic. It is about being able to act decisively when the fundamentals genuinely line up, precisely because you have done the work to know the difference.",
      },
    ],
  },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Deterministic date formatting (no locale) to avoid hydration mismatches. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[(m ?? 1) - 1]} ${d}, ${y}`;
}

/** All articles, newest first. */
export function getAllArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
