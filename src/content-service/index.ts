import { ContentService } from "./types";
import { StaticContentService } from "./static/StaticContentService";
import { SanityContentService } from "./sanity/SanityContentService";

let serviceInstance: ContentService | null = null;

export function getContentService(): ContentService {
  if (!serviceInstance) {
    const isSanityConfigured =
      Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) &&
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "demo-project-id";

    serviceInstance = isSanityConfigured
      ? new SanityContentService()
      : new StaticContentService();
  }
  return serviceInstance;
}

export * from "./types";
