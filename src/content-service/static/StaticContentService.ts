import {
  ContentService,
  SiteSettings,
  Section,
  ProjectItem,
  ExperienceItem,
  CertificationItem,
  ExpertiseCategory,
  ContactMessagePayload,
} from "../types";
import { heroContent } from "@/content/hero";
import { aboutContent } from "@/content/about";
import { projectsContent } from "@/content/projects";
import { experienceContent } from "@/content/experience";
import { expertiseContent } from "@/content/expertise";
import { certificationsContent } from "@/content/certifications";
import { contactContent } from "@/content/contact";

export class StaticContentService implements ContentService {
  async getSiteSettings(): Promise<SiteSettings> {
    return {
      name: "Sarav Jagadeesan",
      designation: "Platform Engineering Leader",
      tagline: "Expert in Platform Engineering | AIOPS | MLOPS",
      socials: [
        { platform: "LinkedIn", url: contactContent.linkedin || "https://linkedin.com" },
        { platform: "Portfolio", url: contactContent.portfolioUrl || "https://sarav.ai" },
      ],
      resumeUrl: "/resume.pdf",
      seo: {
        title: "Sarav Jagadeesan — Platform Engineering Leader",
        description: aboutContent.description,
        keywords: [...aboutContent.specialties],
      },
      theme: {
        accentColor: "#3b82f6",
        defaultColorScheme: "dark",
      },
      schemaVersion: 1,
    };
  }

  async getVisibleSections(): Promise<Section[]> {
    const defaultSections: Section[] = [
      {
        id: "hero",
        type: "heroSection",
        title: "Hero",
        visible: true,
        order: 1,
        schemaVersion: 1,
        presentation: { background: "base", paddingY: "default" },
        data: {
          headline: heroContent.headline,
          subheadline: heroContent.subheadline,
          stats: heroContent.stats,
        },
      },
      {
        id: "metrics",
        type: "metricsSection",
        title: "Metrics",
        visible: true,
        order: 2,
        schemaVersion: 1,
        presentation: { background: "surface", paddingY: "compact" },
        data: {
          stats: heroContent.stats,
        },
      },
      {
        id: "about",
        type: "coreExpertiseSection",
        title: "Core Expertise",
        visible: true,
        order: 3,
        schemaVersion: 1,
        presentation: { background: "base", paddingY: "default" },
        data: {
          heading: aboutContent.heading,
          description: aboutContent.description,
          specialties: [...aboutContent.specialties],
          technicalSkills: [...aboutContent.technicalSkills],
        },
      },
      {
        id: "experience",
        type: "experienceSection",
        title: "Experience",
        visible: true,
        order: 4,
        schemaVersion: 1,
        presentation: { background: "surface", paddingY: "default" },
        data: {
          entries: experienceContent,
        },
      },
      {
        id: "skills",
        type: "expertiseSection",
        title: "Skills",
        visible: true,
        order: 5,
        schemaVersion: 1,
        presentation: { background: "base", paddingY: "default" },
        data: {
          categories: expertiseContent,
        },
      },
      {
        id: "projects",
        type: "projectsSection",
        title: "Projects",
        visible: true,
        order: 6,
        schemaVersion: 1,
        presentation: { background: "surface", paddingY: "default" },
        data: {
          projects: projectsContent,
        },
      },
      {
        id: "certifications",
        type: "certificationsSection",
        title: "Certifications",
        visible: true,
        order: 7,
        schemaVersion: 1,
        presentation: { background: "base", paddingY: "default" },
        data: {
          certifications: certificationsContent,
        },
      },
      {
        id: "contact",
        type: "contactSection",
        title: "Contact",
        visible: true,
        order: 8,
        schemaVersion: 1,
        presentation: { background: "surface", paddingY: "default" },
        data: {
          email: contactContent.email || "sarav@sarav.ai",
          location: contactContent.location,
          socials: { linkedin: contactContent.linkedin },
        },
      },
    ];

    return defaultSections
      .filter((s) => s.visible)
      .sort((a, b) => a.order - b.order);
  }

  async getProjects(): Promise<ProjectItem[]> {
    return projectsContent.map((p, idx) => ({
      id: `project-${idx}`,
      title: p.title,
      description: p.description || "",
      tags: p.technologies || [],
      order: idx + 1,
    }));
  }

  async getExperiences(): Promise<ExperienceItem[]> {
    return experienceContent.map((e, idx) => ({
      id: `exp-${idx}`,
      role: e.title,
      company: e.company || "",
      period: [e.startDate, e.endDate].filter(Boolean).join(" – ") || e.duration,
      description: "",
      highlights: [],
      order: e.order || idx + 1,
    }));
  }

  async getCertifications(): Promise<CertificationItem[]> {
    return certificationsContent.map((c, idx) => ({
      id: `cert-${idx}`,
      title: c.title,
      issuer: c.issuer || "",
      issueDate: c.issueDate,
      url: c.credentialUrl,
      order: idx + 1,
    }));
  }

  async getExpertiseCategories(): Promise<ExpertiseCategory[]> {
    return expertiseContent.map((c, idx) => ({
      id: `cat-${idx}`,
      category: c.category,
      skills: c.technologies,
      order: idx + 1,
    }));
  }

  async submitContactMessage(payload: ContactMessagePayload) {
    console.log("[StaticContentService] Received contact submission:", payload);
    return { success: true, messageId: `msg-${Date.now()}` };
  }
}
