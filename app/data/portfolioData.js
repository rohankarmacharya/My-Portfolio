import {
  SiGo, SiTypescript, SiJavascript, SiPython,
  SiExpress, SiNodedotjs,
  SiPostgresql, SiMongodb, SiMysql, SiRedis,
  SiPrisma,
  SiDocker, SiGit, SiGithub,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiSwagger, SiFirebase, SiGooglegemini, SiLangchain,
} from "react-icons/si";

// Rotating hero descriptor lines — each one is a real, specific claim, not a buzzword.
export const heroLines = [
  "Building resilient APIs.",
  "Designing clean architectures.",
  "Shipping RBAC & auth systems.",
  "Exploring AI-native backends.",
];

// Floating background chips in the hero — kept short, mono-styled.
export const heroFloatingTags = [
  "Go", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "REST", "RBAC",
];

// "Technical Philosophy" principle cards in the About section.
export const philosophyPrinciples = [
  {
    title: "Clean Architecture first",
    description:
      "Domain logic stays independent of frameworks and delivery mechanisms — services, handlers, and data access are separated so systems stay testable as they grow.",
  },
  {
    title: "APIs are contracts",
    description:
      "Every endpoint is documented and versioned like a promise to whoever consumes it — REST API design and Swagger specs come before implementation, not after.",
  },
  {
    title: "Security isn't optional",
    description:
      "Authentication, RBAC, and 2FA are load-bearing parts of the architecture, not bolted-on middleware — access control is designed in from the first schema.",
  },
  {
    title: "Design for scale",
    description:
      "Background jobs, caching layers, and monorepo boundaries exist so the system degrades gracefully under load instead of falling over quietly.",
  },
];

// Tech stack, grouped for the interactive grid. `icon` is a react-icons component
// where a maintained brand icon exists; entries without one fall back to a
// monogram tile rendered by TechStack.jsx (kept visually consistent, not "missing").
export const techStack = [
  {
    category: "Languages",
    items: [
      { name: "Go", icon: SiGo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Fiber", icon: null },
      { name: "Echo", icon: null },
      { name: "Express", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "ORM & Docs",
    items: [
      { name: "Prisma", icon: SiPrisma },
      { name: "GORM", icon: null },
      { name: "Swagger", icon: SiSwagger },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    category: "Frontend familiarity",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "AI & Integrations",
    items: [
      { name: "Gemini API", icon: SiGooglegemini },
      { name: "LangChain", icon: SiLangchain },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
];

// Derived, honest stats — every number below is directly countable from the
// content in this file (stack items, projects, security mechanisms). None of
// these are estimated years-of-experience or client counts.
export const stats = [
  { value: 5, suffix: "", label: "Flagship systems designed" },
  { value: techStack.reduce((n, g) => n + g.items.length, 0), suffix: "+", label: "Technologies across the stack" },
  { value: 4, suffix: "", label: "Database engines" },
  { value: 3, suffix: "", label: "Auth layers — JWT, RBAC, 2FA" },
];

// Flagship case-study projects — no outbound links (proprietary/client work).
export const projects = [
  {
    slug: "grc-platform",
    name: "GRC Platform",
    thesis: "An enterprise Governance, Risk & Compliance platform for organizations that can't afford ambiguity in who can see or change what.",
    context:
      "Built to help enterprise teams manage compliance frameworks, audits, and risk workflows in one place. The hard part isn't the CRUD — it's making sure every action is attributable, every permission is scoped correctly, and the system holds up under audit scrutiny. Clean Architecture keeps the domain rules (who can approve what, how frameworks map to controls) independent of the delivery layer, so the platform can grow new compliance modules without rewriting the core.",
    highlights: [
      "Clean Architecture",
      "RBAC",
      "AI-powered guidelines",
      "Compliance frameworks",
      "Audit & activity logs",
      "2FA",
      "Background jobs",
      "Monorepo",
    ],
    stack: ["TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
    visual: "grc",
  },
  {
    slug: "school-erp",
    name: "School ERP",
    thesis: "A school administration backend that turns student records, fees, and installment plans into one coherent system instead of three disconnected spreadsheets.",
    context:
      "Covers student management and fee management end to end, including installment scheduling — the part that usually breaks when a family pays late or partially. It integrates with Tigg for accounting, so a fee payment inside the ERP reflects correctly in the school's books without manual reconciliation.",
    highlights: [
      "Student management",
      "Fee management",
      "Installment scheduling",
      "Tigg accounting integration",
      "Backend APIs",
    ],
    stack: ["Node.js", "TypeScript", "REST APIs"],
    visual: "school-erp",
  },
  {
    slug: "tigg-sdk",
    name: "Tigg SDK Integration",
    thesis: "An integration layer over Tigg's accounting APIs — contacts, journals, and accounts — so other systems can post financial data without touching accounting internals directly.",
    context:
      "Wraps Tigg's accounting primitives (contacts, journal entries, chart of accounts) behind a consistent interface, used by the School ERP and other internal systems to keep financial records in sync. The goal was a boundary clean enough that consuming systems never need to know how Tigg models a transaction internally.",
    highlights: [
      "Accounting APIs",
      "Contacts",
      "Journals",
      "Accounts",
      "Financial data sync",
    ],
    stack: ["Node.js", "TypeScript", "REST APIs"],
    visual: "tigg",
  },
  {
    slug: "rbcommerce",
    name: "RBCommerce",
    thesis: "A backend API for an e-commerce platform — products, orders, and inventory, built to stay predictable as catalog size and order volume grow.",
    context:
      "Handles the core commerce data model and the request paths that matter most under load: browsing, checkout, and order state changes. Authentication and clear API boundaries keep the storefront and admin surfaces working against the same reliable contract.",
    highlights: [
      "Product catalog",
      "Order management",
      "Inventory",
      "Authentication",
      "REST API design",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    visual: "rbcommerce",
  },
  {
    slug: "aatmaveda",
    name: "AatmaVeda Backend",
    thesis: "A backend for a content and knowledge-sharing platform, built around clear content models and straightforward API access for the client apps that consume it.",
    context:
      "Focused on structuring and serving content reliably — the unglamorous but essential work of getting data modeling, retrieval, and API boundaries right so the frontend never has to work around the backend.",
    highlights: [
      "Content modeling",
      "REST APIs",
      "Authentication",
    ],
    stack: ["Node.js", "TypeScript", "MongoDB"],
    visual: "aatmaveda",
  },
];

// Node-graph annotations for the Architecture Mindset section — a stylised
// request lifecycle through a typical system here.
export const architectureNodes = [
  { id: "client", label: "Client", sub: "Web / mobile" },
  { id: "gateway", label: "API Gateway", sub: "Routing, rate limits" },
  { id: "auth", label: "Auth Middleware", sub: "JWT · RBAC · 2FA" },
  { id: "service", label: "Service Layer", sub: "Clean Architecture" },
  { id: "cache", label: "Cache", sub: "Redis" },
  { id: "db", label: "Database", sub: "PostgreSQL / MongoDB" },
];

export const architectureEdges = [
  ["client", "gateway"],
  ["gateway", "auth"],
  ["auth", "service"],
  ["service", "cache"],
  ["service", "db"],
];

// AI & LLM section — grounded in the real GRC Platform "AI-powered guidelines" feature.
export const aiExperience = {
  intro:
    "The GRC Platform's guideline engine uses the Gemini API and LangChain to help teams turn raw compliance requirements into structured, actionable guidance — the backend equivalent of a well-organized filing system that also happens to read the filings for you.",
  points: [
    { label: "Gemini API", description: "Structured generation for compliance guideline drafting" },
    { label: "LangChain", description: "Chaining prompts and context for multi-step AI workflows" },
    { label: "LLMs", description: "Treated as a service dependency — versioned, tested, monitored" },
  ],
};

// Engineering Journey — only real, confirmed facts. No invented job titles or dates.
export const journey = [
  {
    stage: "Foundations",
    title: "BSc. Computer Science & Information Technology",
    detail: "Nagarjuna College of Information Technology (NCIT), Lalitpur — expected graduation February 2026.",
  },
  {
    stage: "Building",
    title: "From frontend projects to backend systems",
    detail: "Moved from React/Next.js class projects toward backend-first work — clean architecture, RBAC, and multi-service systems like the GRC Platform and School ERP.",
  },
  {
    stage: "Now",
    title: "Currently exploring",
    detail: "Go's concurrency model, distributed-systems patterns, and AI-native backends built around Gemini and LangChain.",
  },
];

// Personal projects — built independently, distinct from the client/company
// case studies above: real public repos, so these link out directly.
export const personalProjects = [
  {
    slug: "bodhya-react",
    title: "Bodhya",
    description: "An e-commerce storefront for Bodhya, my self-owned apparel brand — product browsing, cart, and checkout.",
    stack: ["React"],
    link: "https://github.com/rohankarmacharya/Bodhya-React",
    visual: "bodhya",
  },
  {
    slug: "sujhavmitra",
    title: "SujhavMitra",
    description: "A personalized recommendation system for books and movies, using content-based and collaborative filtering.",
    stack: ["React", "Python", "Flask"],
    link: "https://github.com/rohankarmacharya/SujhavMitra",
    visual: "sujhavmitra",
  },
  {
    slug: "barcode-pdf417-reader",
    title: "Barcode / PDF417 Reader",
    description: "A barcode and PDF-417 reader for store checkout, decoding codes straight from a camera feed with Python.",
    stack: ["Python", "OpenCV", "React"],
    link: "https://github.com/rohankarmacharya/BarCode_PDF417_reader",
    visual: "barcode",
  },
  {
    slug: "digital-yatra-nepal",
    title: "Digital Yatra Nepal",
    description: "A tourism companion for Nepal — destinations, recommendations, travel news, and passport/portal info for visitors.",
    stack: ["TypeScript", "React"],
    link: "https://github.com/rohankarmacharya/Digital-Yatra-Nepal",
    visual: "yatra",
  },
];

// "Off the clock" — personality expressed visually/quietly, not as paragraphs.
export const personalityItems = [
  { key: "music", label: "Music", caption: "Usually something in the background while reading a stack trace." },
  { key: "cinematography", label: "Cinematography", caption: "Drawn to how framing and light do the storytelling work." },
  { key: "fragrance", label: "Fragrances", caption: "Same instinct as API design — composition, balance, restraint." },
];

// Command palette actions.
export const commandActions = (helpers) => [
  { id: "home", label: "Go to Home", section: "top" },
  { id: "about", label: "Go to About", section: "about" },
  { id: "stack", label: "Go to Tech Stack", section: "stack" },
  { id: "work", label: "Go to Projects", section: "work" },
  { id: "journey", label: "Go to Journey", section: "journey" },
  { id: "personal", label: "Go to Personal Projects", section: "personal" },
  { id: "contact", label: "Go to Contact", section: "contact" },
  { id: "theme", label: "Toggle theme", action: helpers?.toggleTheme },
  { id: "email", label: "Copy email address", action: helpers?.copyEmail },
  { id: "resume", label: "Download résumé", action: helpers?.downloadResume },
  { id: "github", label: "Open GitHub profile", href: "https://github.com/rohankarmacharya" },
];
