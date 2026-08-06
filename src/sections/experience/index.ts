import { registerSection } from "../registry";
import { ExperienceComponent } from "./Component";
import { experienceSectionSchema } from "./schema";

registerSection({
  type: "experienceSection",
  component: ExperienceComponent,
  schema: experienceSectionSchema,
  defaultTitle: "Experience",
});
