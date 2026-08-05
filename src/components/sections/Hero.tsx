import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { heroContent } from "@/content/hero";
import { aboutContent } from "@/content/about";

// Role label for the eyebrow is derived from the existing subheadline
// ("Expert in Platform Engineering | AIOPS | MLOPS") — no new copy.
const roleLabel = heroContent.subheadline
  .split("|")[0]
  .trim()
  .replace(/^Expert in\s+/i, "");

// Name is split off the existing headline ("Hi, I am Sarav Jagadeesan") so
// it can render as a two-line display heading — no words are invented,
// the lead-in greeting is simply not rendered per the reference layout.
const headlineWords = heroContent.headline.trim().split(" ");
const lastName = headlineWords.pop() ?? "";
const firstName = headlineWords.pop() ?? "";

export function Hero() {
  return (
    <Section
      id="about"
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
              {heroContent.subheadline}
            </p>
          </div>

          <div className="relative aspect-[6/5] w-full max-w-[625px] justify-self-center rounded-xl bg-background lg:mt-10 lg:justify-self-end">
            <div className="absolute inset-0 flex items-center justify-center">
              {/*
                The source PNG's circular portrait is inscribed in a larger
                canvas with an opaque near-white margin (measured by pixel
                scan: circle bounding box is x:89-613, y:107-631 inside a
                696x757 canvas — a 524x524 square, off-center vertically).
                object-fit (contain/cover) can't crop that margin away
                exactly, so this wrapper is sized to the *measured* circle
                diameter and the image is scaled/offset by the exact ratios
                (696/524, 757/524, 89/524, 107/524) to land only the circle
                inside it — then rounded-full + overflow-hidden clips to a
                perfect circle. No border/shadow/extra frame.
              */}
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

      <div className="-mx-2 mt-[44px] grid items-start gap-4 border-t border-border/20 pt-6 md:-mx-3 md:mt-[52px] lg:grid-cols-[100px_1fr] lg:gap-[40px]">
        <span className="ml-[12px] font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Profile
        </span>
        <p className="max-w-[70ch] font-normal text-[16px] leading-[1.7] text-[#2b3440] md:text-[18px] lg:max-w-[95ch]">
          {aboutContent.description}
        </p>
      </div>
    </Section>
  );
}
