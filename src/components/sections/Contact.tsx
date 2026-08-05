"use client";

import { useState, type FormEvent, type SVGProps } from "react";
import { ArrowUpRight, Globe, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { contactContent } from "@/content/contact";

// lucide-react ships no brand/logo icons (LinkedIn, GitHub, X) — same
// reason Footer.tsx uses a raw inline SVG for the LinkedIn mark.
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

// Curated from already-verified content — about.ts specialties/
// technicalSkills, hero.ts's role tagline, and the "Machine Learning
// Specialization" certification — not a re-typed copy of the requested
// list, which included several tools/disciplines (Databricks, LLM
// Applications, Generative AI, Agentic AI, Data Engineering, Cloud
// Architecture, "AI Engineering") absent from every verified source and
// dropped rather than added.
const areasOfExpertise = [
  "Platform Engineering",
  "Machine Learning",
  "Python",
  "AWS",
  "Azure",
  "Multi-cloud",
  "Kubernetes",
  "CI/CD",
  "DevOps Automation",
];

const links = [
  { label: "LinkedIn", href: contactContent.linkedin, icon: LinkedinIcon },
  { label: "Portfolio", href: contactContent.portfolioUrl, icon: Globe },
].filter((link): link is { label: string; href: string; icon: typeof LinkedinIcon } =>
  Boolean(link.href),
);

const inputClasses =
  "w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus-visible:border-white/60";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // No EmailJS (or any backend) is wired up yet — this only validates the
  // UI locally and shows a confirmation state. It does not send anything,
  // since there's no verified destination email to send it to.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section
      id="contact"
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
            Let&apos;s build something great.
          </h2>

          <p className="mt-6 max-w-[55ch] text-[15px] leading-[1.6] text-white/60">
            Invite recruiters, founders, engineering leaders, and potential clients to connect.
          </p>

          {links.length > 0 && (
            <ul className="mt-10 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-sm text-sm text-white/70 outline-none transition-colors hover:text-white focus-visible:ring-3 focus-visible:ring-white/30"
                  >
                    <link.icon className="h-4 w-4" aria-hidden />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {contactContent.location && (
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/50">
                Based In
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4" aria-hidden />
                {contactContent.location}
              </p>
            </div>
          )}

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/50">
              Areas of Expertise
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {areasOfExpertise.map((area) => (
                <li key={area} className="text-sm text-white/70">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/50">
            Direct Message
          </p>

          {submitted ? (
            <p className="mt-8 text-sm leading-[1.6] text-white/70">
              Thanks — your message has been noted. I&apos;ll follow up soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
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
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#12151c] transition-colors outline-none hover:bg-white/85 focus-visible:ring-3 focus-visible:ring-white/40"
              >
                Send Message
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
