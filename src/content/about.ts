export interface AboutStat {
  label: string;
  value: string;
}

export const aboutContent = {
  heading: "About",
  // Combines two verified sentences live on sarav.ai (the original one-line
  // bio, plus a "Professional Summary" line not previously captured in
  // CONTENT_INVENTORY.md) with already-verified skills/specialties from
  // this file and siteConfig.description. No unverified achievements,
  // titles, or technologies (e.g. "AI Infrastructure", "Site Reliability")
  // are introduced — those aren't present in any verified source.
  description:
    "Experienced platform engineering leader with 16+ years managing global teams and high-value projects across cloud, infrastructure, and DevOps automation. Work spans AWS, Azure, and GCP, Kubernetes and container orchestration, CI/CD, and observability tooling, with a focus on incident management and multi-cloud operations — driven by a passion for innovation, efficiency, and impactful results.",
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
