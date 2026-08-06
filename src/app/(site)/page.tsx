import React from "react";
import { getContentService } from "@/content-service";
import { getSectionComponent } from "@/sections";
import "@/sections"; // Execute section registrations

export const revalidate = 60; // 60-second fallback revalidation or on-demand webhook

export default async function Home() {
  const service = getContentService();
  const sections = await service.getVisibleSections();

  return (
    <>
      {sections.map((section) => {
        const Component = getSectionComponent(section.type);
        if (!Component) {
          console.warn(`[Page] No component registered for section type: ${section.type}`);
          return null;
        }

        return <Component key={section.id} section={section} />;
      })}
    </>
  );
}
