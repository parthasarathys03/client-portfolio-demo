import { Section } from "@/components/layout/Section";
import { expertiseContent } from "@/content/expertise";

export function Expertise() {
  return (
    <Section id="expertise" aria-label="Technical Expertise" variant="surface" containerSize="2xl">
      <div className="flex flex-col gap-16">
        <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight md:text-[36px]">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertiseContent.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-4 rounded-lg border border-border p-6"
            >
              <h3 className="text-xl font-semibold leading-[1.25] md:text-2xl">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-sm border border-border px-3 py-1 text-sm text-foreground"
                  >
                    {technology}
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
