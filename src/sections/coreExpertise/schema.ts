export const coreExpertiseSectionSchema = {
  name: "coreExpertiseSection",
  title: "Core Expertise Section",
  type: "object",
  fields: [
    { name: "heading", title: "Heading", type: "string" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "specialties",
      title: "Specialties",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "technicalSkills",
      title: "Technical Skills",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
