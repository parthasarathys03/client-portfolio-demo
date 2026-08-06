import React from "react";
import { registerBlock } from "../registry";
import { Block } from "@/content-service/types";

interface RichTextData {
  content: string;
}

function RichTextBlockComponent({ block }: { block: Block<RichTextData> }) {
  return (
    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
      <p>{block.data?.content}</p>
    </div>
  );
}

export const richTextBlockSchema = {
  name: "richTextBlock",
  title: "Rich Text Block",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "text",
      rows: 5,
    },
  ],
};

registerBlock<RichTextData>({
  type: "richTextBlock",
  component: RichTextBlockComponent,
  schema: richTextBlockSchema,
});
