import React from "react";
import { Block } from "@/content-service/types";

export interface BlockDefinition<T = any> {
  type: string;
  component: React.ComponentType<{ block: Block<T> }>;
  schema: any;
}

export const BLOCK_REGISTRY = new Map<string, React.ComponentType<{ block: Block<any> }>>();
export const BLOCK_SCHEMAS: any[] = [];

export function registerBlock<T = any>(definition: BlockDefinition<T>) {
  if (BLOCK_REGISTRY.has(definition.type)) {
    console.warn(`[BlockRegistry] Duplicate block registration for type: ${definition.type}`);
  }
  BLOCK_REGISTRY.set(definition.type, definition.component);
  BLOCK_SCHEMAS.push(definition.schema);
}

export function getBlockComponent(type: string) {
  return BLOCK_REGISTRY.get(type);
}
