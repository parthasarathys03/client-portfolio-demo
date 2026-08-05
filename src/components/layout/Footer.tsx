import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import { contactContent } from "@/content/contact";

// Minimal, subtle footer (design note: matches the Contact section's
// "Based In" location rather than repeating the full nav/LinkedIn icon
// that used to live here).
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container
        size="2xl"
        className="flex flex-col gap-2 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"
      >
        <p>
          © {year} {siteConfig.name}
        </p>
        {contactContent.location && <p>{contactContent.location}</p>}
      </Container>
    </footer>
  );
}
