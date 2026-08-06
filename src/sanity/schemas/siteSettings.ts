export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "schemaVersion", title: "Schema Version", type: "number", initialValue: 1, readOnly: true },
    { name: "name", title: "Site Name", type: "string" },
    { name: "designation", title: "Designation", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "resume", title: "Resume (PDF)", type: "file" },
    {
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "url", title: "URL", type: "string" },
          ],
        },
      ],
    },
    {
      name: "seo",
      title: "SEO Metadata",
      type: "object",
      fields: [
        { name: "title", title: "Page Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text" },
        { name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }] },
        { name: "ogImage", title: "OG Share Image", type: "image" },
      ],
    },
    {
      name: "theme",
      title: "Theme Options",
      type: "object",
      fields: [
        {
          name: "accentColor",
          title: "Accent Color",
          type: "string",
          options: {
            list: [
              { title: "Blue (#3b82f6)", value: "#3b82f6" },
              { title: "Emerald (#10b981)", value: "#10b981" },
              { title: "Violet (#8b5cf6)", value: "#8b5cf6" },
              { title: "Amber (#f59e0b)", value: "#f59e0b" },
            ],
          },
        },
        {
          name: "defaultColorScheme",
          title: "Default Color Scheme",
          type: "string",
          options: {
            list: [
              { title: "Dark", value: "dark" },
              { title: "Light", value: "light" },
            ],
          },
        },
      ],
    },
  ],
};
