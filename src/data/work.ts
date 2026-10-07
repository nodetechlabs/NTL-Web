export interface WorkItem {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  theme: "health" | "ecom" | "finance";
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const work: WorkItem[] = [
  {
    slug: "ai-powered-healthcare-platform",
    title: "AI-powered Healthcare Platform",
    client: "Regional Health Network",
    tags: ["AI", "Healthcare", "Cloud"],
    theme: "health",
    summary: "Front-desk staff were retyping the same patient into five different systems. Wait times dropped 38% once they stopped.",
    challenge:
      "Five patient systems, none of which talked to each other. A scheduling change in one didn't show up in the others, so staff were manually copying updates between screens all day — and patients still showed up for appointments that had already been moved.",
    solution:
      "One platform for scheduling, records and messaging, with an AI triage step up front that routes patients to the right care tier before a human ever picks up the phone. The legacy systems didn't get replaced overnight — we ran them in parallel for two months until the data matched.",
    results: ["38% reduction in average wait time", "5 legacy systems consolidated into 1", "92% patient satisfaction post-launch", "HIPAA & SOC 2 compliant from day one"],
  },
  {
    slug: "scalable-ecommerce-infrastructure",
    title: "Scalable E-commerce Infrastructure",
    client: "DTC Retail Brand",
    tags: ["Cloud", "DevOps", "E-commerce"],
    theme: "ecom",
    summary: "Their storefront went down during their own flash sale, twice. It hasn't happened since.",
    challenge:
      "The site was a single monolith that worked fine on a normal Tuesday and fell over the moment a sale email went out. Each outage meant an estimated $200K in lost orders, plus a few thousand customers who wouldn't come back to try again.",
    solution:
      "We split the storefront off from the order system, put edge caching in front of everything, and moved checkout onto a queue so a traffic spike slows down instead of crashing. Then we load-tested it to 40x normal traffic before trusting it with a real sale.",
    results: ["Zero downtime across 3 major sales events", "40x peak traffic capacity", "60% reduction in infrastructure cost", "Page load time cut from 4.1s to 0.9s"],
  },
  {
    slug: "enterprise-automation-for-finance",
    title: "Enterprise Automation for Finance",
    client: "Mid-Market Financial Services Firm",
    tags: ["Automation", "AI", "Finance"],
    theme: "finance",
    summary: "Analysts were losing a week every month to spreadsheet reconciliation. Now it takes four hours.",
    challenge:
      "Every month, a team of analysts manually matched numbers across a dozen spreadsheets from different source systems. It worked, barely, until someone made a copy-paste error that took three weeks to find during an audit.",
    solution:
      "An automation layer pulls from every source system directly, runs the same reconciliation checks a human would (plus a few an ML model catches that humans tend to miss), and spits out a report with every number traceable back to its source. The analysts still review it — they just don't build it by hand anymore.",
    results: ["1,200+ analyst hours saved per quarter", "99.6% reconciliation accuracy", "Reporting cycle cut from 5 days to 4 hours", "Full audit trail for compliance"],
  },
];
