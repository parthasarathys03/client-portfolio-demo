export const metricsSectionSchema = {
  name: "metricsSection",
  title: "Metrics Section",
  type: "object",
  fields: [
    {
      name: "items",
      title: "Metric Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
            { name: "caption", title: "Caption", type: "string" },
          ],
        },
      ],
    },
  ],
};
