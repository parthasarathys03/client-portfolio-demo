export const experienceSectionSchema = {
  name: "experienceSection",
  title: "Experience Section",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    {
      name: "entries",
      title: "Experience Entries",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "order", title: "Order", type: "number" },
            { name: "title", title: "Role Title", type: "string" },
            { name: "company", title: "Company", type: "string" },
            { name: "location", title: "Location", type: "string" },
            { name: "startDate", title: "Start Date", type: "string" },
            { name: "endDate", title: "End Date", type: "string" },
            { name: "duration", title: "Duration", type: "string" },
          ],
        },
      ],
    },
  ],
};
