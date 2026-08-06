import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";

import { projectId, dataset } from "@/sanity/client";
import { SECTION_SCHEMAS } from "@/sections";
import { BLOCK_SCHEMAS } from "@/blocks";
import { siteSettingsSchema } from "@/sanity/schemas/siteSettings";
import { homePageSchema } from "@/sanity/schemas/homePage";
import { contactMessageSchema } from "@/sanity/schemas/contactMessage";
import { auditLogSchema } from "@/sanity/schemas/auditLog";
import { projectSchema } from "@/sanity/schemas/project";
import { experienceEntrySchema } from "@/sanity/schemas/experienceEntry";
import { certificationSchema } from "@/sanity/schemas/certification";
import { expertiseCategorySchema } from "@/sanity/schemas/expertiseCategory";

export default defineConfig({
  basePath: "/studio",
  name: "sarav-portfolio-cms",
  title: "Sarav Portfolio CMS Admin",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("CMS Admin")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.listItem()
              .title("Home Page Builder")
              .child(S.document().schemaType("homePage").documentId("homePage")),
            S.divider(),
            S.documentTypeListItem("project").title("Projects Collection"),
            S.documentTypeListItem("experienceEntry").title("Experience Collection"),
            S.documentTypeListItem("certification").title("Certifications Collection"),
            S.documentTypeListItem("expertiseCategory").title("Skills Collection"),
            S.divider(),
            S.documentTypeListItem("contactMessage").title("Messages Inbox"),
            S.documentTypeListItem("auditLog").title("Activity Feed"),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) =>
                ![
                  "siteSettings",
                  "homePage",
                  "contactMessage",
                  "auditLog",
                  "project",
                  "experienceEntry",
                  "certification",
                  "expertiseCategory",
                ].includes(item.getId() || "")
            ),
          ]),
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: [
      siteSettingsSchema,
      homePageSchema,
      contactMessageSchema,
      auditLogSchema,
      projectSchema,
      experienceEntrySchema,
      certificationSchema,
      expertiseCategorySchema,
      ...SECTION_SCHEMAS,
      ...BLOCK_SCHEMAS,
    ],
  },
});
