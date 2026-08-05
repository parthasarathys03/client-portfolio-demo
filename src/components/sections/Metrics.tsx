import { Section } from "@/components/layout/Section";
import { heroContent } from "@/content/hero";
import { experienceContent } from "@/content/experience";
import { expertiseContent } from "@/content/expertise";

// Every value below is read directly from existing content/* — nothing
// fabricated. Years/Projects/Global Teams reuse heroContent.stats verbatim
// (just split into a big number + short caption). Cloud Platforms is a
// literal count of expertise.ts's "Cloud" category, and its caption is that
// category's technologies joined — not a new fact, a different rendering
// of one already in the codebase.
const [years, projects, teams] = heroContent.stats;
const cloudCategory = expertiseContent.find((group) => group.category === "Cloud");

function splitValue(value: string) {
  const match = value.match(/^(\S+)\s*(.*)$/);
  return { number: match?.[1] ?? value, caption: match?.[2] ?? "" };
}

const yearsSplit = splitValue(years.value);
const projectsSplit = splitValue(projects.value);

const metrics = [
  {
    label: "Years of Experience",
    value: yearsSplit.number,
    caption: experienceContent[0]?.title ?? yearsSplit.caption,
  },
  {
    label: "Projects Completed",
    value: projectsSplit.number,
    caption: projectsSplit.caption,
  },
  {
    label: teams.label,
    value: teams.value,
    caption: "Across global teams",
  },
  {
    label: "Cloud Platforms",
    value: String(cloudCategory?.technologies.length ?? 0),
    caption: cloudCategory?.technologies.join(" • ") ?? "",
  },
];

export function Metrics() {
  return (
    <Section
      id="metrics"
      aria-label="Credibility metrics"
      containerSize="2xl"
      className="pt-0 pb-[72px] lg:pt-0 lg:pb-[96px]"
    >
      <dl className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-2 px-8 py-12 first:pl-0 last:pr-0">
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {metric.label}
            </dt>
            <dd className="font-heading text-4xl font-light leading-[1.1] tracking-[-0.02em] text-foreground md:text-5xl">
              {metric.value}
            </dd>
            {metric.caption && (
              <p className="font-mono text-xs text-muted-foreground/70">{metric.caption}</p>
            )}
          </div>
        ))}
      </dl>
    </Section>
  );
}
