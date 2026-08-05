import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { experienceContent, type ExperienceItem } from "@/content/experience";

function ExperienceCard({ item, align }: { item: ExperienceItem; align: "left" | "right" }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-lg border border-border p-6",
        align === "right" ? "md:text-left" : "md:text-right",
      )}
    >
      <p className="text-lg font-semibold leading-[1.25] text-foreground">{item.title}</p>
      {item.company && <p className="text-base text-foreground">{item.company}</p>}
      {item.location && (
        <p className="text-sm text-muted-foreground">{item.location}</p>
      )}
      {(item.startDate || item.endDate) && (
        <p className="text-sm text-muted-foreground">
          {item.startDate}
          {item.startDate && item.endDate && " – "}
          {item.endDate}
        </p>
      )}
      <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">
        {item.duration}
      </p>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" aria-label="Experience" containerSize="2xl">
      <div className="flex flex-col gap-16">
        <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight md:text-[36px]">
          Experience
        </h2>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2"
          />

          <ol className="flex flex-col gap-12">
            {experienceContent.map((item, index) => {
              const isRight = index % 2 === 1;
              return (
                <li
                  key={item.order}
                  className="relative pl-12 md:grid md:grid-cols-2 md:items-start md:gap-4 md:pl-0 lg:gap-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-border bg-background md:left-1/2 md:top-6"
                  />

                  <div className={cn(!isRight && "md:pr-6 lg:pr-12")}>
                    {!isRight && <ExperienceCard item={item} align="left" />}
                  </div>
                  <div className={cn(isRight && "md:pl-6 lg:pl-12")}>
                    {isRight && <ExperienceCard item={item} align="right" />}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
