export interface ContactContent {
  linkedin?: string;
}

// Source: CONTENT_INVENTORY.md §7. Email is explicitly flagged in the
// source as an unreplaced placeholder ("info@example.com ... appears to be
// a placeholder, not a real address") — excluded rather than reused.
// Phone, website, and address are not present in the source. LinkedIn is
// the only verified, real contact value.
export const contactContent: ContactContent = {
  linkedin: "https://www.linkedin.com/in/saravananjagadeesan/",
};
