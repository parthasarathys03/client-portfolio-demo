import { Section } from "@/components/layout/Section";
import { contactContent } from "@/content/contact";

export function Contact() {
  const hasVerifiedContact = Boolean(contactContent.linkedin);

  return (
    <Section id="contact" aria-label="Contact" containerSize="2xl">
      <div className="flex flex-col gap-16">
        <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight md:text-[36px]">
          Contact
        </h2>

        <div className="flex justify-center">
          <article className="flex min-h-56 w-full max-w-sm flex-col items-center justify-center gap-3 rounded-lg border border-border p-8 text-center">
            {hasVerifiedContact ? (
              contactContent.linkedin && (
                <>
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                    Professional profile
                  </p>
                  <a
                    href={contactContent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm text-lg font-semibold leading-[1.25] text-foreground underline-offset-4 outline-none transition-colors hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    LinkedIn
                  </a>
                </>
              )
            ) : (
              <p className="text-sm text-muted-foreground">
                No verified contact information available.
              </p>
            )}
          </article>
        </div>
      </div>
    </Section>
  );
}
