import React from "react";
import { registerBlock } from "../registry";
import { Block } from "@/content-service/types";

interface CtaData {
  label: string;
  url: string;
  variant?: "primary" | "secondary";
}

function CtaBlockComponent({ block }: { block: Block<CtaData> }) {
  const { label, url, variant = "primary" } = block.data || {};
  const isPrimary = variant === "primary";

  return (
    <div className="my-4">
      <a
        href={url}
        target={url?.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
          isPrimary
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
            : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
        }`}
      >
        {label}
      </a>
    </div>
  );
}

export const ctaBlockSchema = {
  name: "ctaBlock",
  title: "CTA Button Block",
  type: "object",
  fields: [
    { name: "label", title: "Button Label", type: "string" },
    { name: "url", title: "Destination URL", type: "string" },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
    },
  ],
};

registerBlock<CtaData>({
  type: "ctaBlock",
  component: CtaBlockComponent,
  schema: ctaBlockSchema,
});
