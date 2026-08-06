import { registerSection } from "../registry";
import { HeroComponent } from "./Component";
import { heroSectionSchema } from "./schema";

registerSection({
  type: "heroSection",
  component: HeroComponent,
  schema: heroSectionSchema,
  defaultTitle: "About",
});
