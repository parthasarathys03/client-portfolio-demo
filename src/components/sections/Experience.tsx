import { Section } from "@/components/layout/Section";
import { experienceContent } from "@/content/experience";

// Editorial numbered layout (title / company / role / metadata) using only
// the verified fields in experience.ts — order, title, company, location,
// dates, duration. Per-role responsibilities, key-impact bullets, and a
// technologies-per-role breakdown are NOT rendered: CONTENT_INVENTORY.md §3
// and §8 document that no verified source (sarav.ai or LinkedIn) has that
// detail for any role, only titles + dates. Inventing them was explicitly
// ruled out, so those fields are omitted entirely rather than fabricated.
export function Experience() {
  return (
    <Section
      id="experience"
      aria-label="Experience"
      containerSize="2xl"
      className="pt-0 pb-[72px] lg:pt-0 lg:pb-[96px]"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span className="h-px w-8 bg-border" aria-hidden />
          02 — Experience
        </div>

        <h2 className="mt-8 font-heading text-[48px] font-light leading-[1.05] tracking-[-0.02em] text-foreground md:text-[56px]">
          Experience
        </h2>

        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.6] text-muted-foreground">
          Roles held across engineering and platform teams, reverse-chronological.
        </p>
      </div>

      <ol className="mt-12 flex flex-col">
        {experienceContent.map((item) => {
          const dateRange = [item.startDate, item.endDate].filter(Boolean).join(" – ");
          return (
            <li
              key={item.order}
              className="grid grid-cols-1 gap-6 border-t border-border py-12 first:pt-0 lg:grid-cols-[96px_1fr_220px] lg:gap-12"
            >
              <span
                aria-hidden
                className="font-heading text-6xl font-light leading-none text-border md:text-7xl"
              >
                {String(item.order).padStart(2, "0")}
              </span>

              <div className="flex flex-col gap-4">
                <hgroup>
                  <h3 className="font-heading text-3xl font-light leading-[1.1] tracking-[-0.02em] text-foreground md:text-4xl">
                    {item.title}
                  </h3>
                  {item.company && (
                    <p className="mt-2 font-heading text-lg italic leading-[1.4] text-muted-foreground">
                      {item.company}
                      {item.location && ` · ${item.location}`}
                    </p>
                  )}
                </hgroup>

                <dl className="grid grid-cols-2 gap-4 pt-2 sm:max-w-sm">
                  {item.company && (
                    <div className="flex flex-col gap-1">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        Company
                      </dt>
                      <dd className="text-[15px] text-foreground">{item.company}</dd>
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Role
                    </dt>
                    <dd className="text-[15px] text-foreground">{item.title}</dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-col gap-1 lg:items-end lg:text-right">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.duration}
                </span>
                {dateRange && <span className="text-sm text-muted-foreground">{dateRange}</span>}
                {item.location && (
                  <span className="text-sm text-muted-foreground">{item.location}</span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
