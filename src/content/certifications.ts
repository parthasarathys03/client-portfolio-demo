export interface Certification {
  title: string;
  issuer?: string;
  issueDate?: string;
  credentialUrl?: string;
  image?: string;
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
