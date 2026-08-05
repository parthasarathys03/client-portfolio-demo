import { Section } from "@/components/layout/Section";
import { expertiseContent } from "@/content/expertise";

// Columns are curated from expertiseContent (src/content/expertise.ts) —
// grouped differently than the "Expertise" section further down, but every
// technology listed here already exists in that verified data. Nothing is
// added that isn't already in the codebase's content/*. Headings are kept
// to a single word so each stays on one line; "Multi-Cloud" and
// "Monitoring" are pulled from about.ts's verified specialties list.
function techsFor(...categories: string[]) {
  return expertiseContent
    .filter((group) => categories.includes(group.category))
    .flatMap((group) => group.technologies);
}

const columns = [
  { heading: "Cloud", items: [...techsFor("Cloud"), "Multi-Cloud"] },
  { heading: "Infrastructure", items: techsFor("Infrastructure / IaC") },
  {
    heading: "DevOps",
    items: [...techsFor("Containers / Orchestration"), "Jenkins", "GitHub"],
  },
  {
    heading: "Monitoring",
    items: [...techsFor("Observability"), ...techsFor("Security")],
  },
];

export function CoreExpertise() {
  return (
    <Section
      id="core-expertise"
      aria-label="Core expertise"
      containerSize="2xl"
      className="pt-0 pb-[72px] lg:pt-0 lg:pb-[96px]"
    >
      <div className="grid gap-16 lg:grid-cols-[220px_1fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[#4b5c74]">
            Core Expertise
          </h2>
          <p className="max-w-[28ch] text-[15px] leading-[1.6] text-[#5f6f86]">
            Technologies and platforms I work with to build scalable cloud infrastructure and
            AI-powered systems.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-[60px] gap-y-12 sm:grid-cols-4">
          {columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-4">
              <h3 className="border-b border-[#24344d]/12 pb-3 font-mono text-xs uppercase tracking-[0.16em] text-[#4b5c74]">
                {column.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={item} className="text-[15px] text-[#24344d]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
