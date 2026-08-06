import { registerSection } from "../registry";
import { CoreExpertiseComponent } from "./Component";
import { coreExpertiseSectionSchema } from "./schema";

registerSection({
  type: "coreExpertiseSection",
  component: CoreExpertiseComponent,
  schema: coreExpertiseSectionSchema,
  defaultTitle: "Core Expertise",
});
