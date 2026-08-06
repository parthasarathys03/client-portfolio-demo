export const homePageSchema = {
  name: "homePage",
  title: "Home Page Builder",
  type: "document",
  fields: [
    { name: "schemaVersion", title: "Schema Version", type: "number", initialValue: 1, readOnly: true },
    { name: "title", title: "Page Title", type: "string", initialValue: "Home Page" },
    {
      name: "sections",
      title: "Page Sections (Drag to Reorder)",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "metricsSection" },
        { type: "coreExpertiseSection" },
        { type: "experienceSection" },
        { type: "expertiseSection" },
        { type: "projectsSection" },
        { type: "certificationsSection" },
        { type: "contactSection" },
      ],
    },
  ],
};
