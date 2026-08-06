import { registerSection } from "../registry";
import { ProjectsComponent } from "./Component";
import { projectsSectionSchema } from "./schema";

registerSection({
  type: "projectsSection",
  component: ProjectsComponent,
  schema: projectsSectionSchema,
  defaultTitle: "Projects",
});
