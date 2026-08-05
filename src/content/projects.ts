export interface Project {
  title: string;
  role?: string;
  organization?: string;
  technologies?: string[];
  duration?: string;
  description?: string;
  outcome?: string;
  /** Editorial-list left column, e.g. "2023". */
  year?: string;
  /** Editorial-list left column, e.g. "Platform Engineering". */
  category?: string;
  /** Right-column metadata (tech stack / cloud / platform), distinct from
   * the `technologies` chip list rendered in the middle column. */
  techStack?: string[];
}

// CONTENT_INVENTORY.md §5: no individually named/described projects exist
// on sarav.ai or LinkedIn — only four generic "Portfolio Highlights"
// bullets, with no titles, tech stacks, dates, or outcomes attached.
//
// The 5 entries below are TEMPORARY MOCK DATA for UI/layout validation
// only — generic engineering-themed placeholders with no real employer,
// client, company name, or measurable business outcome attached to any of
// them. They are not a claim about Sarav's actual project history.
//
// TODO: Replace mock Featured Projects with verified Sarav project data before production.
export const projectsContent: Project[] = [
  {
    title: "Enterprise Kubernetes Platform",
    year: "2024",
    category: "Platform Engineering",
    description:
      "Architected a multi-tenant Kubernetes platform supporting containerized workloads across engineering teams. Standardized deployment patterns, autoscaling, and observability hooks for production services. Focused on developer self-service and operational consistency.",
    technologies: ["Kubernetes", "Helm", "Terraform"],
    techStack: ["Kubernetes", "Platform"],
  },
  {
    title: "Multi-Cloud Infrastructure Modernization",
    year: "2023",
    category: "Cloud Infrastructure",
    description:
      "Led the design of a unified infrastructure layer spanning multiple cloud providers to reduce vendor lock-in and improve resilience. Established consistent networking, IAM, and provisioning patterns across environments.",
    technologies: ["AWS", "Azure", "GCP"],
    techStack: ["Multi-Cloud", "IaC"],
  },
  {
    title: "CI/CD Automation Framework",
    year: "2023",
    category: "DevOps Automation",
    description:
      "Built a standardized CI/CD framework to streamline build, test, and deployment workflows across services. Introduced reusable pipeline templates and automated quality gates to reduce manual release overhead.",
    technologies: ["Jenkins", "GitHub", "Docker"],
    techStack: ["CI/CD", "Automation"],
  },
  {
    title: "Infrastructure as Code Transformation",
    year: "2022",
    category: "Infrastructure as Code",
    description:
      "Modernized infrastructure provisioning by codifying environments as version-controlled, repeatable definitions. Replaced manual configuration with declarative, auditable infrastructure code across environments.",
    technologies: ["Terraform", "Chef", "Packer"],
    techStack: ["IaC", "Automation"],
  },
  {
    title: "Centralized Observability Platform",
    year: "2022",
    category: "Observability",
    description:
      "Designed a centralized observability stack unifying metrics, logs, and dashboards across services. Focused on giving engineering teams shared visibility into system health, built around open-source monitoring tooling.",
    technologies: ["Grafana", "Sumologic"],
    techStack: ["Observability", "Monitoring"],
  },
];
