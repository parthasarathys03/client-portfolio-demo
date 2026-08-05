import { Section } from "@/components/layout/Section";
import { heroContent } from "@/content/hero";

export function Hero() {
  return (
    <Section
      id="hero"
      aria-label="Hero"
      containerSize="2xl"
      className="flex min-h-[calc(100vh-4rem)] items-center py-16 lg:py-20"
    >
      <div className="grid items-center gap-16 md:gap-20 lg:grid-cols-2 lg:gap-28">
        <div className="flex flex-col gap-8">
          <hgroup>
            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[56px] lg:text-[72px]">
              {heroContent.headline}
            </h1>
          </hgroup>

          <p className="max-w-[60ch] text-[18px] leading-[1.6] text-muted-foreground md:text-[20px]">
            {heroContent.subheadline}
          </p>

          <section aria-label="Key metrics" className="border-t border-border pt-10">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {heroContent.stats.map((stat) => (
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
          aria-hidden
          className="relative aspect-[4/5] w-full max-w-md scale-90 justify-self-center lg:max-w-none lg:justify-self-end"
        >
          <div className="absolute -inset-5 rounded-xl border border-border" />
          <div className="relative h-full w-full rounded-xl border border-border bg-surface" />
        </div>
      </div>
    </Section>
  );
}
