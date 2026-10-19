// Portfolio projects. Each entry gets a card on the home page and its own
// case-study page at /work/<slug>.
//
// PLACEHOLDERS: these sample projects stand in until the real Behance
// projects are added. For each Behance project, copy its title, cover image
// URL (right-click the cover > Copy image address, a mir-s3-cdn-cf.behance.net
// link) and project URL into an entry below. Extra images go in `gallery`.

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: "Mobile App" | "Web Design" | "Dashboard" | "Branding";
  tags: string[];
  year: string;
  role: string;
  tools: string[];
  cover: string;
  gallery?: string[];
  behanceUrl: string;
  accent: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "coffee-website",
    title: "Coffee — Café Website Design",
    summary: "A warm, inviting website for a neighbourhood café that turns visitors into regulars.",
    category: "Web Design",
    tags: ["Website", "Landing page", "Café"],
    year: "2026", // TODO: confirm year
    role: "UI design, visual design",
    tools: ["Figma"], // TODO: confirm tools
    cover: "/projects/coffee-website.jpg",
    behanceUrl: "https://www.behance.net/gallery/253994339/COFFEE-WEBSITE-WEB-DESIGN",
    accent: "#c9864a",
    challenge:
      "A local café needed a web presence that captured the cosy, crafted feel of the shop and made booking a table easy.",
    solution:
      "Earthy browns and cream tones, real café photography, a bold headline \"Crafted with Care. Shared in Good company.\" with clear Book Now and About Us actions, and a features row showcasing espresso, latte and cold brew.",
    outcome: "A clean, on-brand homepage design with a simple navigation of Home, Menu, About and Contact.",
  },
  {
    slug: "pulze-telehealth-app",
    title: "Pulze — Telehealth App",
    summary: "A calm telehealth app that gets patients in front of a doctor in about two minutes.",
    category: "Mobile App",
    tags: ["Mobile", "Healthcare", "UI/UX"],
    year: "2026", // TODO: confirm year
    role: "UI/UX design",
    tools: ["Figma"], // TODO: confirm tools
    cover: "/projects/pulze-telehealth.jpg",
    behanceUrl: "https://www.behance.net/gallery/252162077/Pulze-Telehealth-App-UIUX-Design",
    accent: "#2bb39a",
    challenge:
      "Getting medical help online often means long forms and waiting rooms, which is the last thing someone feeling unwell wants.",
    solution:
      "A home screen built around one question, \"Need help now?\", with a one-tap Start visit, a Doctors online 24/7 indicator, and quick access to booking, medications, records and messages.",
    outcome: "A soft, trustworthy teal-and-cream interface that keeps urgent care and everyday health tasks one tap away.",
  },
  {
    slug: "solox-footwear-website",
    title: "SOLOX — Footwear Brand Website",
    summary: "A bold, responsive e-commerce site for a multi-brand sneaker store. Step into greatness.",
    category: "Web Design",
    tags: ["E-commerce", "Website", "Responsive"],
    year: "2026", // TODO: confirm year
    role: "UI/UX design, visual design",
    tools: ["Figma"], // TODO: confirm tools
    cover: "/projects/solox-website.jpg",
    behanceUrl: "https://www.behance.net/gallery/257335301/Footwear-Brand-SOLOX-Website-Design",
    accent: "#ff6a1a",
    challenge:
      "SOLOX sells authentic shoes from Nike, Adidas, Puma, Under Armour, Reebok and Vans, and needed a storefront that felt premium while making it easy to shop across brands.",
    solution:
      "A clean black, white and orange design with a cinematic \"Step into Greatness\" hero, Shop Now and Explore Brands actions, a new-arrival callout, a Top Brands grid, and clear navigation for Men, Women, Kids, Brands and Sale.",
    outcome: "A consistent desktop and mobile experience, with free-delivery and easy-returns messaging up front to build trust.",
  },
  {
    slug: "fintech-wallet-app",
    title: "Pocket — Fintech Wallet App",
    summary: "A mobile wallet that makes sending money, tracking spending and saving feel effortless.",
    category: "Mobile App",
    tags: ["Mobile", "Fintech", "UI/UX"],
    year: "2025",
    role: "UX research, UI design, prototyping",
    tools: ["Figma", "Protopie"],
    cover: "/projects/fintech.svg",
    behanceUrl: "https://www.behance.net/efazahmed01",
    accent: "#c8ff4d",
    challenge:
      "Existing wallet apps overwhelmed first-time users with dense dashboards and jargon, causing drop-off during onboarding.",
    solution:
      "A card-first home screen, plain-language copy and a three-step send flow, backed by a compact component library.",
    outcome: "A clickable prototype tested with 8 users; task completion for sending money improved in every round.",
  },
  {
    slug: "saas-analytics-dashboard",
    title: "Metrica — SaaS Analytics Dashboard",
    summary: "A data-dense dashboard redesigned around the questions teams actually ask every morning.",
    category: "Dashboard",
    tags: ["SaaS", "Dashboard", "Data viz"],
    year: "2025",
    role: "Product design, design system",
    tools: ["Figma", "FigJam"],
    cover: "/projects/dashboard.svg",
    behanceUrl: "https://www.behance.net/efazahmed01",
    accent: "#7c9cff",
    challenge: "Teams were exporting data to spreadsheets because the dashboard buried key metrics under menus.",
    solution: "Customisable widgets, a clear KPI row and consistent chart styles built on a token-based system.",
    outcome: "A scalable dashboard kit with 60+ components ready for engineering handoff.",
  },
  {
    slug: "food-delivery-app",
    title: "Tasty — Food Delivery App",
    summary: "Ordering food in a few taps, with live tracking and personalised recommendations.",
    category: "Mobile App",
    tags: ["Mobile", "Food", "iOS & Android"],
    year: "2024",
    role: "UX flows, UI design",
    tools: ["Figma", "Illustrator"],
    cover: "/projects/food.svg",
    behanceUrl: "https://www.behance.net/efazahmed01",
    accent: "#ff6b5b",
    challenge: "Users struggled to find restaurants and reorder favourites quickly.",
    solution: "Mood-based discovery, one-tap reorder and a friendly, illustrated visual language.",
    outcome: "40+ screens covering discovery, cart, checkout and live order tracking.",
  },
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
