import { registerSection } from "../registry";
import { CertificationsComponent } from "./Component";
import { certificationsSectionSchema } from "./schema";

registerSection({
  type: "certificationsSection",
  component: CertificationsComponent,
  schema: certificationsSectionSchema,
  defaultTitle: "Certifications",
});
