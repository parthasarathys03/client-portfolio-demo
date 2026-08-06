export const certificationsSectionSchema = {
  name: "certificationsSection",
  title: "Certifications Section",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    {
      name: "certifications",
      title: "Certifications List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Certification Name", type: "string" },
            { name: "issuer", title: "Issuer", type: "string" },
            { name: "issueDate", title: "Issue Date / Year", type: "string" },
            { name: "credentialId", title: "Credential ID", type: "string" },
            { name: "credentialUrl", title: "Credential URL", type: "string" },
          ],
        },
      ],
    },
  ],
};
