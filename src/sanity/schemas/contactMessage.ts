export const contactMessageSchema = {
  name: "contactMessage",
  title: "Contact Messages",
  type: "document",
  fields: [
    { name: "name", title: "Sender Name", type: "string" },
    { name: "email", title: "Sender Email", type: "string" },
    { name: "subject", title: "Subject", type: "string" },
    { name: "message", title: "Message", type: "text" },
    { name: "submittedAt", title: "Submitted At", type: "datetime" },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Read", value: "read" },
          { title: "Archived", value: "archived" },
        ],
      },
      initialValue: "new",
    },
  ],
};
