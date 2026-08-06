import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { Section as LayoutSection } from "@/components/layout/Section";
import { Section as SectionType } from "@/content-service/types";

interface CertificationItemData {
  title: string;
  issuer?: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
}

interface CertificationsSectionData {
  title?: string;
  subtitle?: string;
  certifications?: CertificationItemData[];
}

function CertificationRow({ certification }: { certification: CertificationItemData }) {
  const meta = [certification.credentialId && `ID ${certification.credentialId}`]
    .filter(Boolean)
    .join(" — ");

  return (
    <li className="grid grid-cols-1 gap-6 border-t border-border py-10 first:pt-0 lg:grid-cols-[160px_1fr_160px] lg:gap-12">
      <div className="flex flex-row items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
        {certification.issueDate && (
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {certification.issueDate}
          </span>
        )}
        {certification.issuer && (
          <span className="text-sm text-muted-foreground">{certification.issuer}</span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-2xl font-light leading-[1.15] tracking-[-0.01em] text-foreground md:text-3xl">
          {certification.title}
        </h3>

        {certification.description && (
          <p className="max-w-[65ch] text-[15px] leading-[1.6] text-muted-foreground">
            {certification.description}
          </p>
        )}

        {meta && (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {meta}
          </span>
        )}
      </div>

      <div className="flex flex-row items-center justify-between gap-4 lg:flex-col lg:items-end lg:justify-start lg:gap-4">
        <span
          aria-hidden
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border"
        >
          <Award className="h-5 w-5 text-muted-foreground/40" />
        </span>

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View credential — ${certification.title}`}
            className="inline-flex items-center gap-1.5 rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            View Credential
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        )}
      </div>
    </li>
  );
}

export function CertificationsComponent({ section }: { section: SectionType<CertificationsSectionData> }) {
  const certifications = section.data?.certifications || [];

  return (
    <LayoutSection id={section.id || "certifications"} aria-label="Certifications" variant="surface" containerSize="2xl">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span className="h-px w-8 bg-border" aria-hidden />
          05 — Certifications
        </div>

        <h2 className="mt-8 font-heading text-[48px] font-light leading-[1.05] tracking-[-0.02em] text-foreground md:text-[56px]">
          {section.data?.title || "Certifications"}
        </h2>

        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.6] text-muted-foreground">
          {section.data?.subtitle || "Verified credentials, reverse-chronological."}
        </p>
      </div>

      {certifications.length > 0 ? (
        <ol className="mt-12 flex flex-col">
          {certifications.map((certification) => (
            <CertificationRow key={certification.title} certification={certification} />
          ))}
        </ol>
      ) : (
        <p className="mt-12 border-t border-border pt-10 text-[15px] italic leading-[1.6] text-muted-foreground">
          Additional credentials will be published soon.
        </p>
      )}
    </LayoutSection>
  );
}
