import React from "react";
import { Section as LayoutSection } from "@/components/layout/Section";
import { Section as SectionType } from "@/content-service/types";

interface CoreExpertiseData {
  heading?: string;
  description?: string;
  specialties?: string[];
  technicalSkills?: string[];
}

export function CoreExpertiseComponent({ section }: { section: SectionType<CoreExpertiseData> }) {
  const columns = [
    { heading: "Cloud", items: ["AWS", "Azure", "GCP", "Multi-Cloud"] },
    { heading: "Infrastructure", items: ["Terraform", "Chef", "Packer", "Consul", "Vault"] },
    { heading: "DevOps", items: ["Docker", "Kubernetes", "Jenkins", "GitHub", "Bamboo"] },
    { heading: "Monitoring", items: ["Grafana", "Sumologic", "Redis", "NoSQL"] },
  ];

  return (
    <LayoutSection
      id={section.id || "core-expertise"}
      aria-label="Core expertise"
      containerSize="2xl"
      className="pt-0 pb-[72px] lg:pt-0 lg:pb-[96px]"
    >
      <div className="grid gap-16 lg:grid-cols-[220px_1fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[#4b5c74]">
            {section.data?.heading || "Core Expertise"}
          </h2>
          <p className="max-w-[28ch] text-[15px] leading-[1.6] text-[#5f6f86]">
            {section.data?.description ||
              "Technologies and platforms I work with to build scalable cloud infrastructure and AI-powered systems."}
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
    </LayoutSection>
  );
}
