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
    summary: "A unified patient platform with AI-assisted triage, cutting average wait times by 38%.",
    challenge:
      "A regional health network was running five disconnected patient systems, forcing staff to re-enter data manually and leaving patients with no unified view of their care.",
    solution:
      "We built a HIPAA-compliant platform unifying scheduling, records and messaging, with an AI triage assistant that routes patients to the right care tier before they ever speak to staff.",
    results: ["38% reduction in average wait time", "5 legacy systems consolidated into 1", "92% patient satisfaction post-launch", "HIPAA & SOC 2 compliant from day one"],
  },
  {
    slug: "scalable-ecommerce-infrastructure",
    title: "Scalable E-commerce Infrastructure",
    client: "DTC Retail Brand",
    tags: ["Cloud", "DevOps", "E-commerce"],
    theme: "ecom",
    summary: "Rebuilt commerce infrastructure to survive 40x traffic spikes without a single outage.",
    challenge:
      "A fast-growing retail brand's monolithic storefront kept falling over during flash sales, costing an estimated $200K in lost revenue per major outage.",
    solution:
      "We re-architected the platform onto a headless, auto-scaling cloud stack with edge caching and queue-based order processing, load-tested to 40x baseline traffic.",
    results: ["Zero downtime across 3 major sales events", "40x peak traffic capacity", "60% reduction in infrastructure cost", "Page load time cut from 4.1s to 0.9s"],
  },
  {
    slug: "enterprise-automation-for-finance",
    title: "Enterprise Automation for Finance",
    client: "Mid-Market Financial Services Firm",
    tags: ["Automation", "AI", "Finance"],
    theme: "finance",
    summary: "Automated reconciliation and reporting workflows, saving 1,200+ analyst hours per quarter.",
    challenge:
      "Manual reconciliation across dozens of spreadsheets was consuming hundreds of analyst hours every month and introducing costly compliance risk.",
    solution:
      "We delivered an automation layer that ingests data from every source system, reconciles it against rules-based and ML-assisted checks, and generates audit-ready reports automatically.",
    results: ["1,200+ analyst hours saved per quarter", "99.6% reconciliation accuracy", "Reporting cycle cut from 5 days to 4 hours", "Full audit trail for compliance"],
  },
];
