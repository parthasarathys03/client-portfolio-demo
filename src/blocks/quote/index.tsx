import React from "react";
import { registerBlock } from "../registry";
import { Block } from "@/content-service/types";

interface QuoteData {
  quote: string;
  author?: string;
  role?: string;
}

function QuoteBlockComponent({ block }: { block: Block<QuoteData> }) {
  const { quote, author, role } = block.data || {};
  return (
    <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-slate-300 bg-slate-900/50 p-4 rounded-r-lg">
      <p className="text-lg">"{quote}"</p>
      {author && (
        <footer className="mt-2 text-sm text-slate-400 not-italic">
          — <strong className="text-slate-200">{author}</strong> {role ? `, ${role}` : ""}
        </footer>
      )}
    </blockquote>
  );
}

export const quoteBlockSchema = {
  name: "quoteBlock",
  title: "Quote Block",
  type: "object",
  fields: [
    { name: "quote", title: "Quote Text", type: "text" },
    { name: "author", title: "Author", type: "string" },
    { name: "role", title: "Role / Title", type: "string" },
  ],
};

registerBlock<QuoteData>({
  type: "quoteBlock",
  component: QuoteBlockComponent,
  schema: quoteBlockSchema,
});
