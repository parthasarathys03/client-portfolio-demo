import { registerSection } from "../registry";
import { MetricsComponent } from "./Component";
import { metricsSectionSchema } from "./schema";

registerSection({
  type: "metricsSection",
  component: MetricsComponent,
  schema: metricsSectionSchema,
  defaultTitle: "Metrics",
});
