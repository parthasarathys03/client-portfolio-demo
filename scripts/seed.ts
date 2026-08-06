import { createClient } from "next-sanity";
import { heroContent } from "../src/content/hero";
import { aboutContent } from "../src/content/about";
import { projectsContent } from "../src/content/projects";
import { experienceContent } from "../src/content/experience";
import { expertiseContent } from "../src/content/expertise";
import { certificationsContent } from "../src/content/certifications";
import { contactContent } from "../src/content/contact";

import fs from "fs";
import path from "path";

// Load .env.local manually for standalone TS script
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, "utf-8");
  envConfig.split("\n").forEach((line) => {
    const [key, ...value] = line.split("=");
    if (key && value.length > 0) {
      process.env[key.trim()] = value.join("=").trim();
    }
  });
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Error: NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN must be set to run seed script.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-03-01",
  token,
  useCdn: false,
});

async function seed() {
  console.log("Seeding Sanity CMS dataset and collection documents...");

  // 1. Site Settings Document
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    schemaVersion: 1,
    name: "Sarav Jagadeesan",
    designation: "Platform Engineering Leader",
    tagline: "Expert in Platform Engineering | AIOPS | MLOPS",
    socials: [
      { _key: "s1", platform: "LinkedIn", url: contactContent.linkedin || "https://linkedin.com" },
    ],
    seo: {
      title: "Sarav Jagadeesan — Platform Engineering Leader",
      description: aboutContent.description,
      keywords: aboutContent.specialties,
    },
    theme: {
      accentColor: "#3b82f6",
      defaultColorScheme: "dark",
    },
  });

  // 2. Home Page Document with ordered sections
  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",
    schemaVersion: 1,
    title: "Home Page",
    sections: [
      {
        _key: "hero",
        _type: "heroSection",
        headline: heroContent.headline,
        subheadline: heroContent.subheadline,
      },
      {
        _key: "metrics",
        _type: "metricsSection",
        items: heroContent.stats.map((s, idx) => ({
          _key: `m-${idx}`,
          label: s.label,
          value: s.value,
        })),
      },
      {
        _key: "coreExpertise",
        _type: "coreExpertiseSection",
        heading: aboutContent.heading,
        description: aboutContent.description,
        specialties: aboutContent.specialties,
        technicalSkills: aboutContent.technicalSkills,
      },
      {
        _key: "experience",
        _type: "experienceSection",
        title: "Experience",
        subtitle: "Roles held across engineering and platform teams, reverse-chronological.",
        entries: experienceContent.map((e, idx) => ({
          _key: `exp-${idx}`,
          order: e.order,
          title: e.title,
          company: e.company,
          location: e.location,
          startDate: e.startDate,
          endDate: e.endDate,
          duration: e.duration,
        })),
      },
      {
        _key: "expertise",
        _type: "expertiseSection",
        title: "Technical Expertise",
        subtitle: "Platforms, tooling, and domains I work with across cloud infrastructure and engineering operations.",
      },
      {
        _key: "projects",
        _type: "projectsSection",
        title: "Featured Projects",
        subtitle: "Selected engineering work — published as detailed write-ups become available.",
        projects: projectsContent.map((p, idx) => ({
          _key: `p-${idx}`,
          title: p.title,
          year: p.year,
          category: p.category,
          description: p.description,
          technologies: p.technologies,
          techStack: p.techStack,
        })),
      },
      {
        _key: "certifications",
        _type: "certificationsSection",
        title: "Certifications",
        subtitle: "Verified credentials, reverse-chronological.",
        certifications: certificationsContent.map((c, idx) => ({
          _key: `c-${idx}`,
          title: c.title,
          issuer: c.issuer,
          issueDate: c.issueDate,
          credentialId: c.credentialId,
          credentialUrl: c.credentialUrl,
        })),
      },
      {
        _key: "contact",
        _type: "contactSection",
        title: "Let's build something great.",
        subtitle: "Invite recruiters, founders, engineering leaders, and potential clients to connect.",
        email: contactContent.email,
        location: contactContent.location,
      },
    ],
  });

  // 3. Standalone Projects Collection Documents
  for (let idx = 0; idx < projectsContent.length; idx++) {
    const p = projectsContent[idx];
    await client.createOrReplace({
      _id: `project-${idx + 1}`,
      _type: "project",
      schemaVersion: 1,
      title: p.title,
      description: p.description,
      technologies: p.technologies || p.techStack || [],
      order: idx + 1,
      featured: true,
    });
  }

  // 4. Standalone Experience Collection Documents
  for (let idx = 0; idx < experienceContent.length; idx++) {
    const e = experienceContent[idx];
    await client.createOrReplace({
      _id: `experience-${idx + 1}`,
      _type: "experienceEntry",
      schemaVersion: 1,
      title: e.title,
      company: e.company,
      location: e.location,
      startDate: e.startDate,
      endDate: e.endDate,
      duration: e.duration,
      order: e.order || idx + 1,
    });
  }

  // 5. Standalone Certifications Collection Documents
  for (let idx = 0; idx < certificationsContent.length; idx++) {
    const c = certificationsContent[idx];
    await client.createOrReplace({
      _id: `certification-${idx + 1}`,
      _type: "certification",
      schemaVersion: 1,
      title: c.title,
      issuer: c.issuer,
      issueDate: c.issueDate,
      credentialId: c.credentialId,
      credentialUrl: c.credentialUrl,
      order: idx + 1,
    });
  }

  // 6. Standalone Skills / Expertise Collection Documents
  const skillCategories = [
    { category: "Cloud & Infrastructure", skills: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"] },
    { category: "MLOps & AIOps", skills: ["Kubeflow", "MLflow", "Prometheus", "Grafana", "Python"] },
    { category: "CI/CD & DevOps", skills: ["GitHub Actions", "ArgoCD", "Docker", "Helm", "Bash"] },
  ];
  for (let idx = 0; idx < skillCategories.length; idx++) {
    const s = skillCategories[idx];
    await client.createOrReplace({
      _id: `skill-category-${idx + 1}`,
      _type: "expertiseCategory",
      schemaVersion: 1,
      category: s.category,
      technologies: s.skills,
      order: idx + 1,
    });
  }

  console.log("Seeding completed successfully with all collection documents!");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
