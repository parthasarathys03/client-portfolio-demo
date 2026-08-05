export interface ExpertiseCategory {
  category: string;
  technologies: string[];
}

// Verified grouping from CONTENT_INVENTORY.md §4. Categories and their
// membership come directly from the source table — nothing regrouped or
// invented. Technologies alphabetized within each category (source lists
// them as a flat, unordered set per category).
export const expertiseContent: ExpertiseCategory[] = [
  { category: "Cloud", technologies: ["AWS", "Azure", "GCP"] },
  {
    category: "Infrastructure / IaC",
    technologies: ["Chef", "Consul", "Packer", "Terraform"],
  },
  { category: "Containers / Orchestration", technologies: ["Docker", "Kubernetes"] },
  {
    category: "CI/CD",
    technologies: ["Artifactory", "Bamboo", "GitHub", "Jenkins", "Stash"],
  },
  { category: "Languages", technologies: ["Golang", "Python"] },
  { category: "Data / Cache", technologies: ["NoSQL", "Redis"] },
  { category: "Observability", technologies: ["Grafana", "Sumologic"] },
  { category: "Security", technologies: ["Qualys", "Vault"] },
  { category: "Architecture", technologies: ["Microservices"] },
];
