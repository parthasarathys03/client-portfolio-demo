"use client";

import React, { useState, FormEvent, SVGProps } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Section as LayoutSection } from "@/components/layout/Section";
import { Section as SectionType } from "@/content-service/types";
import { submitContactForm } from "@/app/actions/contact";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

interface ContactData {
  title?: string;
  subtitle?: string;
  email?: string;
  location?: string;
  socials?: { linkedin?: string; github?: string };
}

const inputClasses =
  "w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus-visible:border-white/60";

export function ContactComponent({ section }: { section: SectionType<ContactData> }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);
    setLoading(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMsg(result.error || "Failed to submit. Please try again.");
    }
  }

  return (
    <LayoutSection
      id={section.id || "contact"}
      aria-label="Contact"
      containerSize="2xl"
      className="bg-[#12151c] text-white"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:gap-20">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-white/50">
            <span className="h-px w-8 bg-white/20" aria-hidden />
            06 — Contact
          </div>

          <h2 className="mt-8 font-heading text-[40px] font-light leading-[1.05] tracking-[-0.02em] text-white md:text-[52px]">
            {section.data?.title || "Let's build something great."}
          </h2>

          <p className="mt-6 max-w-[55ch] text-[15px] leading-[1.6] text-white/60">
            {section.data?.subtitle ||
              "Invite recruiters, founders, engineering leaders, and potential clients to connect."}
          </p>

          <ul className="mt-10 flex flex-col gap-4">
            <li>
              <a
                href={section.data?.socials?.linkedin || "https://linkedin.com/in/sarav-jagadeesan"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-sm text-sm text-white/70 outline-none transition-colors hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
            </li>
          </ul>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/50">
              Based In
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4" aria-hidden />
              {section.data?.location || "Austin, TX (Open to Remote / Hybrid)"}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/50">
            Direct Message
          </p>

          {submitted ? (
            <p className="mt-8 text-sm leading-[1.6] text-white/70">
              Thanks — your message has been received! I will follow up soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
              {errorMsg && <p className="text-xs text-red-400">{errorMsg}</p>}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                  Name
                </label>
                <input id="contact-name" name="name" type="text" required className={inputClasses} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                  Email
                </label>
                <input id="contact-email" name="email" type="email" required className={inputClasses} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-subject" className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                  Subject
                </label>
                <input id="contact-subject" name="subject" type="text" className={inputClasses} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#12151c] transition-colors outline-none hover:bg-white/85 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </form>
          )}
        </div>
      </div>
    </LayoutSection>
  );
}
