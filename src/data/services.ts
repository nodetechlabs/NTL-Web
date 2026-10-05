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
    summary: "Scalable and secure solutions tailored to your business.",
    description:
      "We design and ship production-grade software — web, mobile and backend systems built to scale with your business. From greenfield builds to modernizing legacy platforms, our engineers pair deep technical craft with product thinking.",
    features: [
      "Custom web & mobile applications",
      "API design and microservices architecture",
      "Legacy system modernization",
      "Quality engineering & automated testing",
    ],
  },
  {
    slug: "cloud-infrastructure",
    icon: "☁",
    name: "Cloud & Infrastructure",
    summary: "Plan, migrate and manage your cloud environment.",
    description:
      "We help you move faster and spend smarter in the cloud. From multi-cloud strategy to zero-downtime migrations, we build infrastructure that's resilient, observable and cost-efficient by design.",
    features: [
      "Cloud migration & multi-cloud strategy",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Kubernetes & container orchestration",
      "Cost optimization & FinOps",
    ],
  },
  {
    slug: "ai-automation",
    icon: "✦",
    name: "AI & Automation",
    summary: "Leverage AI to unlock efficiency and new opportunities.",
    description:
      "We build applied AI systems that move the needle — LLM-powered products, intelligent automation and predictive models grounded in your real business data, not demos.",
    features: [
      "LLM & generative AI integration",
      "Workflow & process automation",
      "Predictive analytics & ML pipelines",
      "AI readiness & governance strategy",
    ],
    highlight: true,
  },
  {
    slug: "it-consulting",
    icon: "◎",
    name: "IT Consulting",
    summary: "Strategic advisory to align technology with your goals.",
    description:
      "Technology decisions carry years of consequence. We act as an embedded advisory partner — auditing systems, shaping roadmaps and de-risking the big bets before you make them.",
    features: [
      "Technology strategy & roadmapping",
      "Architecture & systems audits",
      "Vendor & platform evaluation",
      "Digital transformation advisory",
    ],
  },
  {
    slug: "product-engineering",
    icon: "▣",
    name: "Product Engineering",
    summary: "From ideation to deployment, we build digital products.",
    description:
      "We partner end-to-end — research, design, engineering and launch — to take products from a whiteboard sketch to something real customers rely on every day.",
    features: [
      "Product discovery & UX research",
      "Rapid prototyping & MVP delivery",
      "Full-stack product builds",
      "Post-launch iteration & scaling",
    ],
  },
];
