export interface Industry {
  slug: string;
  icon: string;
  name: string;
  summary: string;
  description: string;
  solutions: string[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    icon: "✚",
    name: "Healthcare",
    summary: "Patient data is not the place to move fast and break things.",
    description:
      "Healthcare software has a lower tolerance for mistakes than most — a dropped record or a slow telehealth call isn't just a bug, it's someone's care. We've built patient-facing apps and clinical data pipelines that take HIPAA seriously without making every feature a six-month compliance review.",
    solutions: ["Patient portals people actually log back into", "Getting two clinical systems to agree with each other", "Telehealth infrastructure that doesn't drop calls", "AI tooling for diagnostics, kept on a short leash"],
  },
  {
    slug: "finance",
    icon: "◆",
    name: "Finance",
    summary: "Auditors will read this code eventually. Plan for it.",
    description:
      "We've built the unglamorous parts of financial software — reconciliation, fraud checks, core banking integrations — where the standard isn't 'works on my machine,' it's 'survives an audit.' Every system we ship leaves a paper trail, because at some point someone's going to ask why a number changed.",
    solutions: ["Fraud and risk models that explain their decisions", "Payments infrastructure that doesn't lose a cent", "Reporting that doesn't require a spreadsheet at month-end", "Core banking integrations, done once, done right"],
  },
  {
    slug: "retail-ecommerce",
    icon: "▤",
    name: "Retail & E-commerce",
    summary: "Your infrastructure's real test is Black Friday, not the demo.",
    description:
      "We've rebuilt storefronts that fell over during their own marketing campaigns. The fix is rarely more servers — it's finding the one query or queue that chokes at 40x normal traffic, before your busiest day of the year finds it for you.",
    solutions: ["Headless storefronts that don't need a rebuild to add a feature", "Personalization that's based on behavior, not guesswork", "Inventory and orders that stay in sync across channels", "Load-tested for the traffic spike you're planning for"],
  },
  {
    slug: "education",
    icon: "✎",
    name: "Education",
    summary: "Built for enrollment week, not just the pitch deck.",
    description:
      "Campus systems get judged in the first week of the semester, when every student logs in at once. We've built LMS integrations and student data systems that hold up under that load, with accessibility treated as a requirement from day one, not a retrofit before an audit.",
    solutions: ["LMS integrations that don't break every update cycle", "Student data systems built for FERPA, not around it", "Accessibility work that starts in design, not QA", "Virtual classrooms that hold up at peak enrollment"],
  },
  {
    slug: "manufacturing",
    icon: "⚙",
    name: "Manufacturing",
    summary: "The plant floor doesn't care about your cloud migration timeline.",
    description:
      "Connecting a factory floor to the cloud means dealing with sensors that predate your company, networks that were never meant to carry this much data, and zero tolerance for downtime. We've done that integration work, and we build the predictive maintenance models on top of it that actually reduce unplanned stops.",
    solutions: ["Getting old sensors talking to new systems", "Maintenance models trained on your own failure history", "Supply chain visibility without a dozen spreadsheets", "Automation that fits around existing plant-floor hardware"],
  },
];
