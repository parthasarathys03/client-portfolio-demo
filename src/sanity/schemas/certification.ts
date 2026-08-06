export const certificationSchema = {
  name: "certification",
  title: "Certifications",
  type: "document",
  fields: [
    { name: "title", title: "Certification Title", type: "string" },
    { name: "issuer", title: "Issuer", type: "string" },
    { name: "order", title: "Order Number", type: "number" },
    { name: "issueDate", title: "Issue Date / Year", type: "string" },
    { name: "credentialId", title: "Credential ID", type: "string" },
    { name: "credentialUrl", title: "Credential URL", type: "url" },
  ],
};
