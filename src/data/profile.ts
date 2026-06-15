/**
 * ──────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — edit everything about the site from this file.
 *  Swap placeholder text, images, links and stats here; the UI updates itself.
 * ──────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Vineeth Vijayan Nair",
  firstName: "Vineeth",
  lastName: "Vijayan Nair",
  role: "Fitness Coach & Personal Trainer",
  tagline:
    "Fat-loss and strength coaching — online for clients worldwide, and in person in Muscat.",
  location: "Muscat, Oman · Kerala, India",
  // Background media for the hero. Drop a real photo/video into /public and
  // point these at it (e.g. "/hero.jpg" or "/hero.mp4").
  heroImage:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  heroVideo: "", // optional: "/hero.mp4" — takes priority over heroImage when set
  avatar:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=900&auto=format&fit=crop",
} as const;

export const ctas = {
  primary: { label: "View Transformations", href: "#transformations" },
  secondary: { label: "Get In Touch", href: "#contact" },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Results", href: "#transformations" },
  { label: "Content", href: "#content" },
  { label: "Apps", href: "#apps" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "8+", label: "Years Coaching" },
  { value: "1,000+", label: "Clients Transformed" },
  { value: "25K", label: "Instagram Community" },
  { value: "2", label: "Apps Live on Stores" },
] as const;

export const about = {
  eyebrow: "About",
  heading: "Coaching built around you, not a generic plan.",
  bio: [
    "I'm Vineeth — a fitness coach and NASM Certified Personal Trainer. Over the last 8 years I've helped everyday people get leaner, stronger and more consistent with their training.",
    "Most of my work is fat loss and body recomposition. I've coached over 1,000 clients online across the GCC, India and beyond. The approach is straightforward: sensible training, nutrition you can actually stick to, and regular check-ins to keep you moving.",
  ],
  highlight:
    "Outside of one-to-one coaching, I built Fitaraise — a fitness app on the App Store and Google Play — and I work on business development for TracqFit, another app live on both stores.",
  philosophy:
    "“Motivation comes and goes. What lasts is a routine you can keep — so we build habits that fit your life, and let the results follow.”",
  // Editable placeholder — swap with your real philosophy statement anytime.
};

export type Experience = {
  role: string;
  org: string;
  meta: string;
  period: string;
  current?: boolean;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Personal Trainer",
    org: "OQGN Gym",
    meta: "Muscat, Oman",
    period: "Dec 2023 — Present",
    current: true,
    description:
      "One-to-one coaching on the gym floor and online — training programs, nutrition and weekly check-ins for an international clientele.",
  },
  {
    role: "Founder & Head Coach",
    org: "Fitaraise",
    meta: "Fitness App · App Store & Google Play",
    period: "2021 — 2023",
    description:
      "Built a fitness coaching app from the ground up — the product, the coaching method, and the community behind it.",
  },
  {
    role: "BodyPower Ambassador — India (UK)",
    org: "BodyPower",
    meta: "Kerala Team",
    period: "Ongoing",
    description:
      "Part of the BodyPower Kerala team, supporting fitness events and community across India.",
  },
  {
    role: "Business Development Contributor",
    org: "TracqFit",
    meta: "Part-time · App Store & Google Play",
    period: "2026",
    description:
      "Supporting business development for TracqFit, a fitness app available on the App Store and Google Play.",
  },
];

export type Certification = {
  name: string;
  body: string;
  status: "Certified" | "In Progress";
  icon: string; // emoji / short badge — swap for an <Image> later if desired
};

export const certifications: Certification[] = [
  {
    name: "Certified Personal Trainer (CPT)",
    body: "National Academy of Sports Medicine — NASM",
    status: "Certified",
    icon: "🏅",
  },
  {
    name: "NEBOSH International General Certificate (IGC)",
    body: "NEBOSH — Occupational Health & Safety",
    status: "Certified",
    icon: "🛡️",
  },
];

export type Transformation = {
  goal: string;
  duration: string;
  result: string;
  before: string;
  after: string;
};

const ph = (label: string, color = "1f1f23", text = "ff5a1f") =>
  `https://placehold.co/600x760/${color}/${text}/png?text=${encodeURIComponent(
    label
  )}`;

export const transformations: Transformation[] = [
  {
    goal: "Fat Loss",
    duration: "16 weeks",
    result: "Down 18kg with visible abs while keeping strength on all lifts.",
    before: ph("BEFORE"),
    after: ph("AFTER"),
  },
  {
    goal: "Body Recomposition",
    duration: "20 weeks",
    result: "Lost fat and built lean muscle simultaneously — total reshape.",
    before: ph("BEFORE"),
    after: ph("AFTER"),
  },
  {
    goal: "Contest Prep",
    duration: "24 weeks",
    result: "Stage-ready conditioning for a first-time bodybuilding show.",
    before: ph("BEFORE"),
    after: ph("AFTER"),
  },
  {
    goal: "Postpartum Fat Loss",
    duration: "14 weeks",
    result: "Regained confidence and core strength after pregnancy.",
    before: ph("BEFORE"),
    after: ph("AFTER"),
  },
  {
    goal: "Lean Bulk",
    duration: "18 weeks",
    result: "+7kg of quality muscle for a previously skinny client.",
    before: ph("BEFORE"),
    after: ph("AFTER"),
  },
  {
    goal: "Busy Professional",
    duration: "12 weeks",
    result: "Sustainable fat loss around a demanding 60-hour work week.",
    before: ph("BEFORE"),
    after: ph("AFTER"),
  },
];

export const content = {
  instagram: {
    handle: "@vineeth.fitness",
    url: "https://instagram.com",
    followers: "25K",
    engagement: "6.8%",
    posts: Array.from({ length: 9 }, (_, i) =>
      `https://placehold.co/500x500/121214/ff5a1f/png?text=IG+${i + 1}`
    ),
  },
  youtube: {
    handle: "Vineeth Vijayan Nair",
    url: "https://youtube.com",
    // Replace these IDs with real YouTube video IDs.
    videos: [
      { id: "dQw4w9WgXcQ", title: "Full Day of Eating — Fat Loss Phase" },
      { id: "dQw4w9WgXcQ", title: "My 4-Day Training Split Explained" },
      { id: "dQw4w9WgXcQ", title: "Client Transformation Breakdown" },
    ],
  },
};

export type AppProject = {
  name: string;
  role: string;
  description: string;
  logo: string;
  accent: string;
  appStore: string;
  playStore: string;
};

export const apps: AppProject[] = [
  {
    name: "Fitaraise",
    role: "Founder & Head Coach",
    description:
      "A coaching app I built from scratch — personalised training plans, nutrition tracking and a community that keeps members accountable. Live on both stores.",
    logo: "https://placehold.co/120x120/ff5a1f/0a0a0b/png?text=FA",
    accent: "#ff5a1f",
    appStore: "https://apps.apple.com",
    playStore: "https://play.google.com",
  },
  {
    name: "TracqFit",
    role: "Business Development Contributor",
    description:
      "A fitness tracking product where I contributed to business development and growth strategy. Available on the App Store and Google Play.",
    logo: "https://placehold.co/120x120/3b82f6/0a0a0b/png?text=TF",
    accent: "#3b82f6",
    appStore: "https://apps.apple.com",
    playStore: "https://play.google.com",
  },
];

export const contact = {
  eyebrow: "Contact",
  heading: "Ready to start your transformation?",
  subheading:
    "Tell me your goal and I'll get back to you with how we can work together — online or in person in Muscat.",
  email: "vineethnair49@gmail.com",
  phone: "+968 0000 0000",
  whatsapp: "https://wa.me/96800000000", // replace with full number incl. country code
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "WhatsApp", href: "https://wa.me/96800000000", icon: "whatsapp" },
] as const;

/**
 * FAQ — powers both the on-page FAQ section AND FAQPage structured data.
 * Answer-Engine Optimisation (AEO/GEO): concise, factual Q&As that AI search
 * engines (Google AI Overviews, ChatGPT, Perplexity) can lift directly.
 */
export const faqs = [
  {
    q: "Who is Vineeth Vijayan Nair?",
    a: "I'm a NASM Certified Personal Trainer and fat-loss coach with 8+ years of experience. I've coached over 1,000 clients online across the GCC, India and beyond, and I'm based in Muscat, Oman.",
  },
  {
    q: "What does Vineeth specialise in as a fitness coach?",
    a: "Mostly fat loss and body recomposition. I keep it practical — sensible training, nutrition you can actually stick to, and one-to-one check-ins — both online and in person in Muscat, Oman.",
  },
  {
    q: "Does Vineeth offer online personal training?",
    a: "Yes. I coach clients online worldwide with personalised training programs, nutrition plans and weekly check-ins, alongside in-person training at OQGN Gym in Muscat, Oman.",
  },
  {
    q: "What certifications does Vineeth hold?",
    a: "I'm a Certified Personal Trainer (CPT) through the National Academy of Sports Medicine (NASM), and I also hold the NEBOSH International General Certificate (IGC) in occupational health and safety — so injury prevention and safety stay central to how I coach.",
  },
  {
    q: "How can I start coaching with Vineeth?",
    a: "Reach out through the contact form on this page, message me on WhatsApp, or email vineethnair49@gmail.com — tell me your goal and we'll take it from there.",
  },
] as const;

/**
 * EEAT signals — Experience, Expertise, Authoritativeness, Trust.
 * Surfaced in copy and structured data so Google can verify real-world authority.
 */
export const eeat = {
  jobTitle: "Fitness Coach & NASM Certified Personal Trainer",
  yearsExperience: 8,
  clientsCoached: "1,000+",
  knowsAbout: [
    "Personal Training",
    "Fat Loss Coaching",
    "Body Recomposition",
    "Sports Nutrition",
    "Strength Training",
    "Online Fitness Coaching",
    "Contest Prep",
    "Health & Safety (NEBOSH IGC)",
    "Injury Prevention & Risk Management",
  ],
  servesAreas: ["Oman", "United Arab Emirates", "GCC", "India", "Kerala"],
  // Add real verifiable profile URLs here to strengthen entity/author authority.
  sameAs: [
    "https://instagram.com",
    "https://youtube.com",
    "https://www.linkedin.com",
  ],
};

export const seo = {
  title: "Vineeth Vijayan Nair — Fitness Coach & Transformation Specialist",
  description:
    "Vineeth Vijayan Nair is a NASM Certified Personal Trainer and fat-loss transformation specialist with 8+ years of experience and 1,000+ clients coached across the GCC and India.",
  keywords: [
    "Vineeth Vijayan Nair",
    "Fitness Coach",
    "Personal Trainer Muscat",
    "Online Fitness Coach",
    "Fat Loss Transformation",
    "NASM CPT",
    "Kerala fitness coach",
    "GCC personal trainer",
  ],
  url: "https://example.com",
  ogImage:
    "https://placehold.co/1200x630/0a0a0b/ff5a1f/png?text=Vineeth+Vijayan+Nair",
};
