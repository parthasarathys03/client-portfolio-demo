import React from "react";
import { Block } from "@/content-service/types";
import { getBlockComponent } from "./registry";

interface BlocksProps {
  value?: Block[];
  className?: string;
}

export function Blocks({ value, className = "" }: BlocksProps) {
  if (!value || !Array.isArray(value) || value.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {value.map((block, idx) => {
        const Component = getBlockComponent(block.type);
        if (!Component) {
          console.warn(`[Blocks] No block component registered for type: ${block.type}`);
          return null;
        }

        return <Component key={block._key || `block-${idx}`} block={block} />;
      })}
    </div>
  );
}
