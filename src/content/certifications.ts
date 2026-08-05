export interface Certification {
  title: string;
  issuer?: string;
  issueDate?: string;
  credentialUrl?: string;
  image?: string;
  /** Short 1-2 line summary for the editorial row's center column. */
  description?: string;
  /** Credential/verification ID, shown in the metadata row when present. */
  credentialId?: string;
  /** Skills covered, shown in the metadata row when present. */
  skills?: string[];
}

// Source: CONTENT_INVENTORY.md §6. Both entries have a verified title and
// issue date; issuer is explicitly "Not specified on site" and credential
// link/image are explicitly "Not present" in the source — all three fields
// omitted rather than invented.
export const certificationsContent: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issueDate: "Oct 2016",
  },
  {
    title: "Interactive Programming in Python",
    issueDate: "Sep 2014",
  },
];
