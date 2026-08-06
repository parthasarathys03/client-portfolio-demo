export const projectSchema = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Project Title", type: "string" },
    { name: "order", title: "Order Number", type: "number" },
    { name: "year", title: "Year", type: "string" },
    { name: "category", title: "Category", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "technologies", title: "Technologies Used", type: "array", of: [{ type: "string" }] },
    { name: "link", title: "Live Link", type: "url" },
    { name: "githubUrl", title: "GitHub URL", type: "url" },
    { name: "image", title: "Featured Image", type: "image" },
  ],
};
