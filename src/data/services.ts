export interface Service {
  slug: string;
  icon: string;
  name: string;
  summary: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export const services: Service[] = [
  {
    slug: "software-development",
    icon: "</>",
    name: "Software Development",
    summary: "Web, mobile and backend builds that hold up once real users show up.",
    description:
      "Most of our work starts with someone's existing system — a Rails app held together with duct tape, a mobile build that never got past v1, an API nobody wants to touch anymore. We untangle it, or we build it from scratch when that's actually faster. Either way, you get code a future developer won't curse you for.",
    features: [
      "Web and mobile apps, built for the long haul",
      "APIs and microservices that don't fall over under load",
      "Rescuing legacy systems nobody wants to inherit",
      "Tests that actually catch bugs before your users do",
    ],
  },
  {
    slug: "cloud-infrastructure",
    icon: "☁",
    name: "Cloud & Infrastructure",
    summary: "Fewer 3am pages, smaller AWS bills.",
    description:
      "We've seen what happens when infrastructure grows by accident — nobody owns it, nobody understands the bill, and nobody wants to touch the Terraform. We come in, figure out what's actually running and why, and rebuild it so a migration or a traffic spike doesn't turn into a weekend emergency.",
    features: [
      "Migrations that don't take the site down",
      "Terraform and Pulumi, written so the next person can read it",
      "Kubernetes setups sized for what you actually need",
      "Cutting the AWS bill without cutting corners",
    ],
  },
  {
    slug: "ai-automation",
    icon: "✦",
    name: "AI & Automation",
    summary: "AI that ships, not a slide deck about AI.",
    description:
      "There's a lot of AI theater out there — demos that work great in a meeting and fall apart on real data. We build the boring, reliable version: a model trained on your actual numbers, an automation that replaces the spreadsheet someone updates by hand every Friday. Less magic, more math.",
    features: [
      "LLM features wired into your product, not bolted on",
      "Automating the manual process everyone complains about",
      "Forecasting models built on your own historical data",
      "A straight answer on whether AI is even the right tool here",
    ],
    highlight: true,
  },
  {
    slug: "it-consulting",
    icon: "◎",
    name: "IT Consulting",
    summary: "An outside opinion before you sign the five-year contract.",
    description:
      "Big technology decisions are hard to undo once you've made them. We've sat on both sides of that table — so when you're choosing a platform, planning a migration, or wondering why last year's roadmap didn't survive contact with reality, we'll tell you what we'd actually do, not what's easiest to say in a deck.",
    features: [
      "A second opinion before the big platform decision",
      "Honest audits of what's working and what's duct tape",
      "Helping you pick between vendors who all sound the same",
      "Roadmaps built to survive the next reorg",
    ],
  },
  {
    slug: "product-engineering",
    icon: "▣",
    name: "Product Engineering",
    summary: "From a napkin sketch to something people actually use.",
    description:
      "We've shipped products that started as a single Figma file and a hunch. Our job is to figure out what's worth building before writing a line of code, get a real version in front of users fast, and keep shaping it once it's live — because the first release is never the interesting part.",
    features: [
      "Talking to actual users before we design anything",
      "A working prototype in weeks, not a deck in months",
      "One team, full stack, no handoffs between agencies",
      "Sticking around after launch to fix what we got wrong",
    ],
  },
];
