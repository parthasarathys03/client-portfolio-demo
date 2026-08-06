export interface SectionPresentation {
  background?: "base" | "surface" | "accent";
  paddingY?: "compact" | "default" | "spacious";
  columns?: 2 | 3 | 4;
}

export interface Section<T = unknown> {
  id: string;
  type: string;
  title: string;
  visible: boolean;
  order: number;
  presentation?: SectionPresentation;
  data: T;
  schemaVersion?: number;
}

export interface SeoSettings {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImageUrl?: string;
}

export interface ThemeSettings {
  accentColor?: string;
  defaultColorScheme?: "dark" | "light" | "system";
  logoUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName?: string;
}

export interface SiteSettings {
  name: string;
  designation: string;
  tagline: string;
  socials: SocialLink[];
  resumeUrl?: string;
  seo?: SeoSettings;
  theme?: ThemeSettings;
  schemaVersion?: number;
}

export interface Block<T = unknown> {
  _key?: string;
  type: string;
  data: T;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  githubUrl?: string;
  featuredUrl?: string;
  imageUrl?: string;
  metrics?: { label: string; value: string }[];
  order?: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  order?: number;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  url?: string;
  badgeUrl?: string;
  order?: number;
}

export interface ExpertiseSkill {
  name: string;
  level?: string;
}

export interface ExpertiseCategory {
  id: string;
  category: string;
  skills: string[] | ExpertiseSkill[];
  order?: number;
}

export interface MetricItem {
  id?: string;
  value: string;
  label: string;
  description?: string;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContentService {
  getSiteSettings(): Promise<SiteSettings>;
  getVisibleSections(): Promise<Section[]>;
  getProjects(): Promise<ProjectItem[]>;
  getExperiences(): Promise<ExperienceItem[]>;
  getCertifications(): Promise<CertificationItem[]>;
  getExpertiseCategories(): Promise<ExpertiseCategory[]>;
  submitContactMessage(payload: ContactMessagePayload): Promise<{ success: boolean; messageId?: string; error?: string }>;
}
