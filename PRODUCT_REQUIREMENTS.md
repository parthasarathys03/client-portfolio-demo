# Sarav.ai — Product Requirements Document (v1)

References: `DESIGN_SYSTEM.md`, `CONTENT_ARCHITECTURE.md`, `CONTENT_INVENTORY.md`

---

## 1. Project Vision

Rebuild sarav.ai as a premium, editorial-grade personal brand site for Sarav Jagadeesan — Platform Engineering / AIOps / MLOps expert. Design language inspired by petrosaviuk.com's minimal, confident, enterprise-executive aesthetic, applied to Sarav's own identity, content, and career narrative — not a visual clone.

---

## 2. Business Goal

- Establish credibility as a senior platform/DevOps/MLOps expert for recruiters, hiring managers, and potential clients/collaborators.
- Convert visitors into contact/inquiry actions (email, LinkedIn, call booking).
- Replace outdated current site (generic template feel, placeholder contact email, no detailed project portfolio) with a differentiated, modern presence.

---

## 3. Target Audience

- **Recruiters / hiring managers** at enterprise or high-growth companies evaluating senior platform/infra/DevOps/MLOps talent.
- **Engineering leaders / CTOs** seeking consulting, fractional, or advisory engagement.
- **Peers / industry network** (conference contacts, LinkedIn connections) validating credibility.
- **Potential collaborators or clients** for freelance/consulting work.

---

## 4. User Goals

- Quickly understand who Sarav is and his core expertise (within seconds, hero section).
- Assess depth of experience (years, companies, scale of work) without digging.
- Review concrete project outcomes, not just job titles.
- Verify credentials (certifications, education) credibly.
- Find a clear, low-friction way to make contact.

---

## 5. Success Criteria

- Lighthouse scores: Performance ≥95, Accessibility ≥95, Best Practices ≥95, SEO 100 (mobile + desktop).
- Core Web Vitals pass: LCP <2.5s, CLS <0.1, INP <200ms.
- Real, working contact method live (no placeholder email).
- At least the currently-known projects/experience represented with real detail (pending content in `CONTENT_INVENTORY.md` § 8 gaps).
- Fully responsive, no layout breakage from 320px to 2560px viewport widths.
- Site indexed and passing Google Search Console validation post-launch.

---

## 6. Design Principles

Inherited from `DESIGN_SYSTEM.md`:
- Editorial over decorative — typography-led hierarchy, generous whitespace.
- Monochrome-first with single sparse accent color.
- Motion supports comprehension (scroll reveals, hover feedback), never distracts.
- Consistency from defined scales (spacing, radius, shadow, type) — no one-off values.
- Performance treated as a design constraint, not an afterthought.

---

## 7. Functional Requirements

- Hero section with name, role, headline, CTA buttons (per `CONTENT_ARCHITECTURE.md` § 1).
- About section with bio, highlights, stats.
- Experience timeline, reverse-chronological, expandable per-role detail.
- Technical expertise grouped by category (cloud, IaC, containers, CI/CD, languages, observability, security).
- Featured projects grid/list with case-study-level links where available.
- Certifications section with issuer, date, verification link.
- Contact section with working email, LinkedIn, and any additional real social/contact channels.
- Global navigation (sticky or reveal-on-scroll-up), consistent across routes.
- Footer with copyright, nav repeat, social icons.
- `sitemap.xml` and `robots.ts` generated (App Router route handlers).
- Dark mode support (toggle or system-preference based), per `DESIGN_SYSTEM.md` dual palette.

---

## 8. Non-Functional Requirements

- Codebase: Next.js App Router, TypeScript strict mode, Tailwind CSS — per existing scaffold.
- Content decoupled from components (`src/content/`) so copy updates don't require touching component code.
- No placeholder/lorem ipsum content shipped to production.
- Componentized per approved architecture (`components/ui`, `components/sections`, `components/layout`, `components/motion`).
- Deployable to Vercel with zero manual config beyond environment variables (if any, e.g. contact form provider key).
- Animations respect `prefers-reduced-motion`.

---

## 9. Page Structure

- `/` — home: Hero, About (condensed), Experience (condensed/highlights), Featured Projects (top 3–4), Contact CTA.
- `/about` — full bio, full experience timeline, education, certifications.
- `/projects` — full project list/grid.
- `/projects/[slug]` — individual case study (only for projects with sufficient detail; simple projects may link out directly instead).
- `/contact` — contact methods, form (optional), booking link (if available).

(Single-page long-scroll vs multi-route split to be confirmed — default assumption above follows multi-route for SEO depth per page; can collapse to single-page if content volume stays low.)

---

## 10. Section Objectives

| Section | Objective |
|---|---|
| Hero | Establish identity + value prop in <5 seconds |
| About | Build trust via narrative + quantified credibility |
| Experience | Prove depth/progression of career |
| Technical Expertise | Signal breadth and relevance of stack to target roles |
| Featured Projects | Prove impact with concrete, outcome-driven evidence |
| Certifications | Add third-party credibility signal |
| Contact | Convert interest into an actionable next step |

---

## 11. Technical Stack

Per prior approved decisions:
- Next.js (App Router, latest stable)
- TypeScript
- Tailwind CSS
- shadcn/ui (base primitives)
- Framer Motion (animation)
- next/font, next/image (performance primitives)
- Vercel (hosting, analytics, speed insights)
- MDX (optional, if case-study/blog content added later)

---

## 12. Accessibility Requirements

- WCAG 2.1 AA minimum compliance.
- Full keyboard navigability, visible focus states (per `DESIGN_SYSTEM.md` focus-ring token).
- Semantic HTML landmarks (`nav`, `main`, `header`, `footer`, proper heading order, no skipped levels).
- Color contrast ratios ≥4.5:1 for body text, ≥3:1 for large text, in both light and dark palettes.
- Alt text required for all meaningful images; decorative images marked `aria-hidden`.
- Motion respects `prefers-reduced-motion: reduce`.
- Form fields (contact) properly labeled, with accessible error messaging.

---

## 13. Performance Requirements

- LCP <2.5s, CLS <0.1, INP <200ms (mobile 4G throttled baseline).
- Images served via `next/image`, modern formats (WebP/AVIF), responsive `sizes`.
- Fonts self-hosted via `next/font`, zero layout shift, no external font CDN.
- JS bundle kept lean — avoid unnecessary client components; default to Server Components except where interactivity/animation requires client boundary.
- Static generation (SSG/ISR) preferred over full SSR where content isn't dynamic per-request.

---

## 14. SEO Requirements

Per `CONTENT_ARCHITECTURE.md` § 8:
- Unique `title` (≤60 chars) and `description` (≤155 chars) per route.
- Open Graph + Twitter card metadata, branded `og:image` per route.
- Canonical URLs, `sitemap.xml`, `robots.ts`.
- Semantic heading structure supporting target keywords naturally (no keyword stuffing).
- Structured data (JSON-LD `Person` schema) for name, role, sameAs (LinkedIn/GitHub) — improves rich result eligibility.

---

## 15. Responsive Requirements

Per `DESIGN_SYSTEM.md` breakpoints (`sm` 640 / `md` 768 / `lg` 1024 / `xl` 1280 / `2xl` 1536):
- Mobile-first build order.
- No horizontal scroll at any breakpoint.
- Touch targets ≥44px on mobile.
- Navigation collapses to mobile menu below `md`.
- Timeline/grid layouts reflow to single column below `md`.

---

## 16. Future Enhancements

- Blog / long-form writing section (MDX-powered).
- CMS integration (Sanity/Contentful) to replace static `src/content/` once content volume grows.
- Case-study deep dives with process/problem/solution breakdowns.
- Testimonials/recommendations section (sourced from LinkedIn or direct quotes).
- Newsletter signup.
- i18n support if targeting non-English-speaking markets.
- Analytics-driven A/B testing on hero CTA copy.

---

## 17. Out of Scope (Version 1)

- CMS integration (static content only for v1).
- Blog/long-form content system.
- Multi-language support.
- User authentication or gated content.
- E-commerce or payment functionality.
- Testimonials section (pending content availability).
- Dedicated case-study routes for every project (only for those with sufficient detail — see `CONTENT_INVENTORY.md` § 8 gaps).

---

*This PRD depends on unresolved content gaps listed in `CONTENT_INVENTORY.md` § 8 (real email, project details, cert issuers, etc.) — these must be resolved before final content freeze, not before build start.*
