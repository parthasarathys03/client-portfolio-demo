import React from "react";
import Image from "next/image";
import { Section as LayoutSection } from "@/components/layout/Section";
import { Section as SectionType } from "@/content-service/types";

interface HeroData {
  headline?: string;
  subheadline?: string;
}

export function HeroComponent({ section }: { section: SectionType<HeroData> }) {
  const headline = section.data?.headline || "Hi, I am Sarav Jagadeesan";
  const subheadline =
    section.data?.subheadline || "Expert in Platform Engineering | AIOPS | MLOPS";

  const roleLabel = subheadline.split("|")[0].trim().replace(/^Expert in\s+/i, "");
  const headlineWords = headline.trim().split(" ");
  const lastName = headlineWords.pop() ?? "";
  const firstName = headlineWords.pop() ?? "";

  return (
    <LayoutSection
      id={section.id || "about"}
      aria-label="About"
      containerSize="2xl"
      containerClassName="pl-2 md:pl-4 lg:pl-5 pr-[33px] md:pr-[41px] lg:pr-[45px]"
      className="pt-[27px] pb-[72px] md:pt-[27px] md:pb-[84px] lg:pt-[27px] lg:pb-[96px]"
    >
      <div className="flex min-h-[calc(100vh-12rem)] items-start md:min-h-[calc(100vh-14rem)]">
        <div className="grid w-full items-start gap-[68px] md:gap-[76px] lg:grid-cols-[1fr_1.15fr] lg:gap-[76px] xl:gap-[84px]">
          <div className="-mt-2 flex flex-col">
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-px w-8 bg-[#3a3a3a]" aria-hidden />
              01 — {roleLabel}
            </div>

            <hgroup className="mb-8">
              <h1 className="font-heading text-[44px] font-light leading-[0.95] tracking-[-0.03em] md:text-[72px] lg:text-[88px] xl:text-[104px]">
                {firstName}
                <br />
                <span className="ml-1 font-normal italic">{lastName}.</span>
              </h1>
            </hgroup>

            <p className="max-w-[48ch] font-heading text-[19px] font-normal leading-[1.35] text-[#2b3440] md:text-[22px]">
              {subheadline}
            </p>
          </div>

          <div className="relative aspect-[6/5] w-full max-w-[625px] justify-self-center rounded-xl bg-background lg:mt-10 lg:justify-self-end">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative overflow-hidden rounded-full"
                style={{ height: "84%", width: "auto", aspectRatio: "1 / 1" }}
              >
                <Image
                  src="/images/sarav-portrait.png"
                  alt="Sarav Jagadeesan"
                  width={696}
                  height={757}
                  priority
                  className="absolute max-w-none"
                  style={{
                    width: "132.82%",
                    height: "144.47%",
                    top: "-20.42%",
                    left: "-16.98%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}
