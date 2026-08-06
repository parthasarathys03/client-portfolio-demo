export const expertiseSectionSchema = {
  name: "expertiseSection",
  title: "Expertise Section",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    {
      name: "cards",
      title: "Expertise Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Card Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "items",
              title: "Technologies / Skills",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};
