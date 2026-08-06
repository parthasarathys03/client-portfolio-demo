import React from "react";
import { Section } from "@/content-service/types";

export interface SectionDefinition<T = any> {
  type: string;
  component: React.ComponentType<{ section: Section<T> }>;
  schema: any; // Sanity object schema definition
  defaultTitle?: string;
}

export const SECTION_REGISTRY = new Map<string, React.ComponentType<{ section: Section<any> }>>();
export const SECTION_SCHEMAS: any[] = [];
export const SECTION_NAV_TITLES = new Map<string, string>();

export function registerSection<T = any>(definition: SectionDefinition<T>) {
  if (SECTION_REGISTRY.has(definition.type)) {
    console.warn(`[SectionRegistry] Duplicate section registration for type: ${definition.type}`);
  }
  SECTION_REGISTRY.set(definition.type, definition.component);
  SECTION_SCHEMAS.push(definition.schema);
  if (definition.defaultTitle) {
    SECTION_NAV_TITLES.set(definition.type, definition.defaultTitle);
  }
}

export function getSectionComponent(type: string) {
  return SECTION_REGISTRY.get(type);
}
