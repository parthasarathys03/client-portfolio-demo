export const auditLogSchema = {
  name: "auditLog",
  title: "Activity / Audit Log",
  type: "document",
  fields: [
    { name: "actor", title: "Actor", type: "string" },
    { name: "action", title: "Action", type: "string" },
    { name: "docType", title: "Document Type", type: "string" },
    { name: "docTitle", title: "Document Title", type: "string" },
    { name: "timestamp", title: "Timestamp", type: "datetime" },
  ],
};
