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
    summary: "Secure, compliant platforms for modern care delivery.",
    description:
      "We build HIPAA-aware platforms that help providers deliver better care — from patient-facing apps to clinical data infrastructure — without compromising on security or compliance.",
    solutions: ["Patient engagement platforms", "Clinical data interoperability", "Telehealth infrastructure", "AI-assisted diagnostics tooling"],
  },
  {
    slug: "finance",
    icon: "◆",
    name: "Finance",
    summary: "Resilient systems for regulated financial environments.",
    description:
      "From core banking integrations to fraud detection, we deliver systems that meet the bar financial institutions demand — auditable, secure and built for scale.",
    solutions: ["Fraud detection & risk models", "Payments infrastructure", "Regulatory reporting automation", "Core banking integrations"],
  },
  {
    slug: "retail-ecommerce",
    icon: "▤",
    name: "Retail & E-commerce",
    summary: "Commerce infrastructure built for scale and conversion.",
    description:
      "We help retailers handle peak traffic, personalize every touchpoint and unify commerce across channels — without the infrastructure falling over on Black Friday.",
    solutions: ["Headless commerce architecture", "Personalization engines", "Inventory & order orchestration", "Peak-traffic scaling"],
  },
  {
    slug: "education",
    icon: "✎",
    name: "Education",
    summary: "Digital learning platforms that scale with institutions.",
    description:
      "We design learning platforms and campus systems that stay reliable at enrollment scale, with accessibility and data privacy built in from day one.",
    solutions: ["LMS platforms & integrations", "Student data systems", "Accessibility-first design", "Virtual classroom infrastructure"],
  },
  {
    slug: "manufacturing",
    icon: "⚙",
    name: "Manufacturing",
    summary: "Connected systems for modern industrial operations.",
    description:
      "We bring IoT, automation and predictive maintenance together to help manufacturers cut downtime and modernize operations floor to cloud.",
    solutions: ["IoT & sensor integration", "Predictive maintenance models", "Supply chain visibility", "Plant-floor automation"],
  },
];
