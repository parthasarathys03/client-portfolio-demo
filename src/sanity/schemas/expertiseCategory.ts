export const expertiseCategorySchema = {
  name: "expertiseCategory",
  title: "Expertise Categories",
  type: "document",
  fields: [
    { name: "schemaVersion", title: "Schema Version", type: "number", initialValue: 1, readOnly: true },
    { name: "category", title: "Category Name", type: "string" },
    { name: "order", title: "Order Number", type: "number" },
    { name: "technologies", title: "Technologies", type: "array", of: [{ type: "string" }] },
  ],
};
