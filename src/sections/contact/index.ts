import { registerSection } from "../registry";
import { ContactComponent } from "./Component";
import { contactSectionSchema } from "./schema";

registerSection({
  type: "contactSection",
  component: ContactComponent,
  schema: contactSectionSchema,
  defaultTitle: "Contact",
});
