export interface HeroStat {
  label: string;
  value: string;
}

export const heroContent = {
  headline: "Hi, I am Sarav Jagadeesan",
  subheadline: "Expert in Platform Engineering | AIOPS | MLOPS",
  stats: [
    { label: "Experience", value: "16+ years" },
    { label: "Projects", value: "12+ completed" },
    { label: "Global Teams", value: "5+" },
  ] satisfies HeroStat[],
} as const;
