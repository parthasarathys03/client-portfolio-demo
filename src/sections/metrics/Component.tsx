import React from "react";
import { Section as LayoutSection } from "@/components/layout/Section";
import { Section as SectionType } from "@/content-service/types";

interface MetricData {
  items?: { label: string; value: string; caption?: string }[];
  stats?: { label: string; value: string }[];
}

export function MetricsComponent({ section }: { section: SectionType<MetricData> }) {
  const defaultMetrics = [
    { label: "Years of Experience", value: "16+", caption: "Platform Leader" },
    { label: "Projects Completed", value: "12+", caption: "Enterprise Delivery" },
    { label: "Global Teams", value: "5+", caption: "Across global teams" },
    { label: "Cloud Platforms", value: "3", caption: "AWS • Azure • GCP" },
  ];

  const metrics = section.data?.items && section.data.items.length > 0 ? section.data.items : defaultMetrics;

  return (
    <LayoutSection
      id={section.id || "metrics"}
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
    </LayoutSection>
  );
}
