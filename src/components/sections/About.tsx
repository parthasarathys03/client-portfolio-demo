import { Section } from "@/components/layout/Section";
import { aboutContent } from "@/content/about";

export function About() {
  return (
    <Section id="about" aria-label="About" variant="surface" containerSize="2xl">
      <div className="grid items-center gap-16 md:gap-20 lg:grid-cols-2 lg:gap-28">
        <div className="flex flex-col gap-8">
          <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight md:text-[36px]">
            {aboutContent.heading}
          </h2>

          <p className="max-w-[60ch] text-[18px] leading-[1.6] text-muted-foreground md:text-[20px]">
            {aboutContent.description}
          </p>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
              Technical Skills
            </h3>
            <ul className="flex flex-wrap gap-2">
              {aboutContent.technicalSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-border px-3 py-1 text-sm text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
              Specialties
            </h3>
            <ul className="flex flex-wrap gap-2">
              {aboutContent.specialties.map((specialty) => (
                <li
                  key={specialty}
                  className="rounded-sm border border-border px-3 py-1 text-sm text-foreground"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          <section aria-label="Key metrics" className="border-t border-border pt-10">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {aboutContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-2 rounded-lg border border-border p-6"
                >
                  <dt className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl font-semibold leading-[1.25] text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <div
          aria-hidden="true"
          className="relative aspect-[4/5] w-full max-w-md scale-90 justify-self-center lg:max-w-none lg:justify-self-end"
        >
          <div className="absolute -inset-5 rounded-xl border border-border" />
          <div className="relative h-full w-full rounded-xl border border-border" />
        </div>
      </div>
    </Section>
  );
}
