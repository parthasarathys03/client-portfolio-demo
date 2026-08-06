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
  console.log("Seeding Sanity CMS dataset...");

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

  console.log("Seeding completed successfully!");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
