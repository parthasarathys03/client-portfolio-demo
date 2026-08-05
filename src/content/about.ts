export interface AboutStat {
  label: string;
  value: string;
}

export const aboutContent = {
  heading: "About",
  description:
    "I would enjoy fast paced environment contributing for multiple projects.",
  technicalSkills: [
    "Artifactory",
    "AWS",
    "Azure",
    "Bamboo",
    "Chef",
    "Consul",
    "Docker",
    "GCP",
    "GitHub",
    "Golang",
    "Grafana",
    "Jenkins",
    "Kubernetes",
    "Microservices",
    "NoSQL",
    "Packer",
    "Python",
    "Qualys",
    "Redis",
    "Stash",
    "Sumologic",
    "Terraform",
    "Vault",
  ],
  specialties: [
    "AWS",
    "Build & Release",
    "CI/CD",
    "Deployment",
    "DevOps Automation",
    "Docker",
    "Incident Management",
    "Kubernetes",
    "Monitoring",
    "Multi-cloud",
  ],
  stats: [
    { label: "Experience", value: "16+ years" },
    { label: "Projects", value: "12+ completed" },
    { label: "Global Teams", value: "5+" },
  ] satisfies AboutStat[],
} as const;
