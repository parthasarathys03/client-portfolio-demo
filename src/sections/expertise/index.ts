import { registerSection } from "../registry";
import { ExpertiseComponent } from "./Component";
import { expertiseSectionSchema } from "./schema";

registerSection({
  type: "expertiseSection",
  component: ExpertiseComponent,
  schema: expertiseSectionSchema,
  defaultTitle: "Skills",
});
