export const heroSectionSchema = {
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    { name: "headline", title: "Headline", type: "string" },
    { name: "subheadline", title: "Subheadline", type: "string" },
    {
      name: "presentation",
      title: "Presentation Settings",
      type: "object",
      fields: [
        { name: "background", title: "Background", type: "string" },
        { name: "paddingY", title: "Vertical Padding", type: "string" },
      ],
    },
  ],
};
