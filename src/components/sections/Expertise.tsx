"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { expertiseContent } from "@/content/expertise";

// Card copy (description + tech lists) provided directly by the requester
// for this section; tech items match expertiseContent's verified spelling
// (e.g. "Sumologic") rather than being re-typed from scratch.
function techsFor(...categories: string[]) {
  return expertiseContent
    .filter((group) => categories.includes(group.category))
    .flatMap((group) => group.technologies);
}

const cards = [
  {
    title: "Cloud",
    description: "Designing secure and scalable multi-cloud infrastructure for enterprise platforms.",
    items: [...techsFor("Cloud"), "Multi-Cloud"],
  },
  {
    title: "Platform & DevOps",
    description: "Building internal platforms, container orchestration and infrastructure automation.",
    items: [...techsFor("Containers / Orchestration"), "Terraform", "CI/CD"],
  },
  {
    title: "CI/CD Tooling",
    description: "Automating software delivery and release pipelines.",
    items: techsFor("CI/CD"),
  },
  {
    title: "Observability & Security",
    description: "Monitoring, logging, compliance and production security tooling.",
    items: [...techsFor("Observability"), ...techsFor("Security")],
  },
];

const CARD_GAP_PX = 32;

function useVisibleCount() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setVisible(query.matches ? 3 : 1);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return visible;
}

export function Expertise() {
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, cards.length - visibleCount);
  const [rawIndex, setIndex] = useState(0);
  // Clamp at render time (not via a setState-in-effect) so a breakpoint
  // change that shrinks maxIndex can't leave the slide past the end.
  const index = Math.min(rawIndex, maxIndex);

  const progressLabel = String(index + 1).padStart(2, "0");
  const totalLabel = String(cards.length).padStart(2, "0");
  // Fill reflects "current slide / total" (01/04 ≈ 25%, 04/04 = 100%) — not
  // how many cards are visible in the window, so the gray track past the
  // fill stays visible until the last slide.
  const fillPercent = ((index + 1) / cards.length) * 100;

  return (
    <Section id="expertise" aria-label="Technical Expertise" variant="surface" containerSize="2xl">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span className="h-px w-8 bg-border" aria-hidden />
          03 — Expertise
        </div>

        <h2 className="mt-8 font-heading text-[48px] font-light leading-[1.05] tracking-[-0.02em] text-foreground md:text-[56px]">
          Technical Expertise
        </h2>

        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.6] text-muted-foreground">
          Platforms, tooling, and domains I work with across cloud infrastructure and
          engineering operations.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between gap-8">
        <div className="flex min-w-0 flex-1 items-center gap-4 font-mono text-xs text-muted-foreground">
          <span>{progressLabel}</span>
          <span className="relative h-px flex-1 bg-[#d9d9d6]">
            <span
              className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-300"
              style={{ width: `${fillPercent}%` }}
            />
          </span>
          <span>{totalLabel}</span>
        </div>

        <div className="flex flex-shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setIndex(Math.max(0, index - 1))}
            disabled={index === 0}
            aria-label="Previous"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors outline-none hover:bg-muted disabled:pointer-events-none disabled:opacity-30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setIndex(Math.min(maxIndex, index + 1))}
            disabled={index === maxIndex}
            aria-label="Next"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors outline-none hover:bg-muted disabled:pointer-events-none disabled:opacity-30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden">
        <MotionConfig reducedMotion="user">
          <motion.div
            className="flex items-stretch"
            style={{ gap: `${CARD_GAP_PX}px` }}
            animate={{ x: `-${index * (100 / visibleCount)}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {cards.map((card, cardIndex) => (
              <div
                key={card.title}
                style={{
                  flex: `0 0 calc(${100 / visibleCount}% - ${(CARD_GAP_PX * (visibleCount - 1)) / visibleCount}px)`,
                }}
                className="flex flex-col gap-4 rounded-xl border border-[rgba(17,24,39,0.08)] bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {card.title}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground/70">
                    {String(cardIndex + 1).padStart(2, "0")} / {totalLabel}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-light leading-[1.2] tracking-[-0.01em] text-foreground md:text-2xl">
                  {card.title}
                </h3>

                <p className="text-[14px] leading-[1.6] text-muted-foreground">
                  {card.description}
                </p>

                <ul className="mt-auto flex flex-col divide-y divide-border/40 border-t border-border/40 pt-1">
                  {card.items.map((item) => (
                    <li key={item} className="py-3.5 text-[14px] text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </MotionConfig>
      </div>
    </Section>
  );
}
