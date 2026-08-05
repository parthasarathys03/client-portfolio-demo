import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { certificationsContent, type Certification } from "@/content/certifications";

function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-lg border border-border p-6">
      {certification.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full rounded-md border border-border"
        />
      )}

      <h3 className="text-xl font-semibold leading-[1.25] text-foreground md:text-2xl">
        {certification.title}
      </h3>

      {certification.issuer && (
        <p className="text-sm text-muted-foreground">{certification.issuer}</p>
      )}

      {certification.issueDate && (
        <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">
          {certification.issueDate}
        </p>
      )}

      {certification.credentialUrl && (
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent underline-offset-4 hover:underline"
        >
          View credential
        </a>
      )}
    </div>
  );
}

export function Certifications() {
  const isSparse = certificationsContent.length > 0 && certificationsContent.length < 3;

  return (
    <Section id="certifications" aria-label="Certifications" variant="surface" containerSize="2xl">
      <div className="flex flex-col gap-16">
        <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight md:text-[36px]">
          Certifications
        </h2>

        {certificationsContent.length > 0 ? (
          <div
            className={cn(
              isSparse
                ? "flex flex-wrap justify-center gap-6"
                : "grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {certificationsContent.map((certification) => (
              <div key={certification.title} className={cn(isSparse && "w-full max-w-sm")}>
                <CertificationCard certification={certification} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[360px] flex-col items-center justify-center gap-2 rounded-lg border border-border p-20 text-center">
            <p className="text-lg font-semibold leading-[1.25] text-foreground">
              Certifications coming soon
            </p>
            <p className="max-w-[50ch] text-sm leading-[1.6] text-muted-foreground">
              Verified credentials will be published here.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
