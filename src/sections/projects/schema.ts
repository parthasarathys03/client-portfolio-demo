export const projectsSectionSchema = {
  name: "projectsSection",
  title: "Projects Section",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    {
      name: "projects",
      title: "Projects List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Project Title", type: "string" },
            { name: "year", title: "Year", type: "string" },
            { name: "category", title: "Category", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "technologies",
              title: "Technologies",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "techStack",
              title: "Tech Stack Badges",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "link", title: "External Link", type: "string" },
          ],
        },
      ],
    },
  ],
};
