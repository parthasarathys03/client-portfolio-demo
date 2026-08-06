import { client } from "@/sanity/client";
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
import { StaticContentService } from "../static/StaticContentService";

export class SanityContentService implements ContentService {
  private fallback = new StaticContentService();

  async getSiteSettings(): Promise<SiteSettings> {
    try {
      const settings = await client.fetch(
        `*[_type == "siteSettings"][0]`,
        {},
        { next: { tags: ["content", "siteSettings"] } }
      );
      if (!settings) return this.fallback.getSiteSettings();
      return {
        name: settings.name || "Sarav Jagadeesan",
        designation: settings.designation || "Platform Engineering Leader",
        tagline: settings.tagline || "Expert in Platform Engineering | AIOPS | MLOPS",
        socials: settings.socials || [],
        resumeUrl: settings.resume?.asset ? settings.resume.asset.url : "/resume.pdf",
        seo: settings.seo,
        theme: settings.theme,
        schemaVersion: settings.schemaVersion || 1,
      };
    } catch {
      return this.fallback.getSiteSettings();
    }
  }

  async getVisibleSections(): Promise<Section[]> {
    try {
      const [homeDoc, settings] = await Promise.all([
        client.fetch(
          `*[_type == "homePage"][0]{ sections }`,
          {},
          { next: { tags: ["content", "homePage"] } }
        ),
        this.getSiteSettings().catch(() => null),
      ]);

      if (!homeDoc || !homeDoc.sections || homeDoc.sections.length === 0) {
        return this.fallback.getVisibleSections();
      }

      const defaultName = settings?.name || "Sarav Jagadeesan";
      const defaultTagline = settings?.tagline || "Expert in Platform Engineering | AIOPS | MLOPS";
      const linkedinUrl = settings?.socials?.find((s: any) =>
        (s.platform || s.name || "").toLowerCase().includes("linkedin")
      )?.url;

      return homeDoc.sections
        .map((sec: any, idx: number) => {
          const type = sec._type || sec.type;
          let enrichedData = { ...sec };

          if (type === "heroSection" || type === "hero") {
            enrichedData.headline = sec.headline || `Hi, I am ${defaultName}`;
            enrichedData.subheadline = sec.subheadline || defaultTagline;
          } else if (type === "contactSection" || type === "contact") {
            if (linkedinUrl && (!sec.socials || !sec.socials.linkedin)) {
              enrichedData.socials = {
                ...(sec.socials || {}),
                linkedin: linkedinUrl,
              };
            }
          }

          return {
            id: sec._key || type || `sec-${idx}`,
            type,
            title: sec.title || type,
            visible: sec.visible !== false,
            order: idx + 1,
            presentation: sec.presentation,
            data: enrichedData,
            schemaVersion: sec.schemaVersion || 1,
          };
        })
        .filter((s: Section) => s.visible);
    } catch {
      return this.fallback.getVisibleSections();
    }
  }

  async getProjects(): Promise<ProjectItem[]> {
    try {
      const projects = await client.fetch(
        `*[_type == "project"] | order(order asc)`,
        {},
        { next: { tags: ["content", "project"] } }
      );
      if (!projects || projects.length === 0) return this.fallback.getProjects();
      return projects.map((p: any, idx: number) => ({
        id: p._id || `project-${idx}`,
        title: p.title,
        description: p.description || "",
        tags: p.technologies || [],
        link: p.link,
        githubUrl: p.githubUrl,
        imageUrl: p.imageUrl,
        order: p.order || idx + 1,
      }));
    } catch {
      return this.fallback.getProjects();
    }
  }

  async getExperiences(): Promise<ExperienceItem[]> {
    try {
      const exps = await client.fetch(
        `*[_type == "experienceEntry"] | order(order asc)`,
        {},
        { next: { tags: ["content", "experienceEntry"] } }
      );
      if (!exps || exps.length === 0) return this.fallback.getExperiences();
      return exps.map((e: any, idx: number) => ({
        id: e._id || `exp-${idx}`,
        role: e.title,
        company: e.company || "",
        period: [e.startDate, e.endDate].filter(Boolean).join(" – ") || e.duration || "",
        description: e.description || "",
        highlights: e.highlights || [],
        order: e.order || idx + 1,
      }));
    } catch {
      return this.fallback.getExperiences();
    }
  }

  async getCertifications(): Promise<CertificationItem[]> {
    try {
      const certs = await client.fetch(
        `*[_type == "certification"] | order(order asc)`,
        {},
        { next: { tags: ["content", "certification"] } }
      );
      if (!certs || certs.length === 0) return this.fallback.getCertifications();
      return certs.map((c: any, idx: number) => ({
        id: c._id || `cert-${idx}`,
        title: c.title,
        issuer: c.issuer || "",
        issueDate: c.issueDate,
        url: c.credentialUrl,
        order: c.order || idx + 1,
      }));
    } catch {
      return this.fallback.getCertifications();
    }
  }

  async getExpertiseCategories(): Promise<ExpertiseCategory[]> {
    try {
      const cats = await client.fetch(
        `*[_type == "expertiseCategory"] | order(order asc)`,
        {},
        { next: { tags: ["content", "expertiseCategory"] } }
      );
      if (!cats || cats.length === 0) return this.fallback.getExpertiseCategories();
      return cats.map((c: any, idx: number) => ({
        id: c._id || `cat-${idx}`,
        category: c.category,
        skills: c.technologies || [],
        order: c.order || idx + 1,
      }));
    } catch {
      return this.fallback.getExpertiseCategories();
    }
  }

  async submitContactMessage(payload: ContactMessagePayload) {
    try {
      if (!process.env.SANITY_API_WRITE_TOKEN) {
        return this.fallback.submitContactMessage(payload);
      }
      const doc = {
        _type: "contactMessage",
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
        submittedAt: new Date().toISOString(),
        status: "new",
      };
      const res = await client.create(doc, { token: process.env.SANITY_API_WRITE_TOKEN });
      return { success: true, messageId: res._id };
    } catch (err: any) {
      return { success: false, error: err.message || "Failed to submit message" };
    }
  }
}
