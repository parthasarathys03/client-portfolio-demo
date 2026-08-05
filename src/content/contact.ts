export interface ContactContent {
  linkedin?: string;
  github?: string;
  twitter?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  email?: string;
  location?: string;
}

// Source: CONTENT_INVENTORY.md §7. Email is explicitly flagged in the
// source as an unreplaced placeholder ("info@example.com ... appears to be
// a placeholder, not a real address") — excluded rather than reused.
// GitHub, X/Twitter, and a resume file are not present in any verified
// source, so those stay unset rather than pointing at dead/fake links —
// Contact.tsx only renders a link when its field is set. LinkedIn and the
// site's own URL (siteConfig.url) are the only verified real links.
//
// `location` was supplied directly by the requester for this section —
// updated per their follow-up request to "San Francisco Bay Area", which
// matches what sarav.ai/LinkedIn list.
export const contactContent: ContactContent = {
  linkedin: "https://www.linkedin.com/in/saravananjagadeesan/",
  portfolioUrl: "https://sarav.ai",
  location: "San Francisco Bay Area",
};
