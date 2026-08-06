export const experienceEntrySchema = {
  name: "experienceEntry",
  title: "Experience Entries",
  type: "document",
  fields: [
    { name: "schemaVersion", title: "Schema Version", type: "number", initialValue: 1, readOnly: true },
    { name: "title", title: "Role Title", type: "string" },
    { name: "company", title: "Company Name", type: "string" },
    { name: "order", title: "Order Number", type: "number" },
    { name: "location", title: "Location", type: "string" },
    { name: "startDate", title: "Start Date", type: "string" },
    { name: "endDate", title: "End Date", type: "string" },
    { name: "duration", title: "Duration", type: "string" },
    { name: "description", title: "Description", type: "text" },
  ],
};
