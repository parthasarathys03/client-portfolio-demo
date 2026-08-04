# Sarav.ai — Content Architecture

Information architecture only. No copy written here — every field below defines *what* content is needed, its *format*, and its *constraints*. Actual copy sourced from Sarav directly and filled into `src/content/` later.

---

## 1. Hero

| Field | Format / Constraint |
|---|---|
| Eyebrow/label | Optional, uppercase, ≤4 words (e.g. role tag or availability status) |
| Headline | 1 sentence, ≤12 words, states who Sarav is + core value prop, `display` type scale |
| Subheadline | 1–2 sentences, ≤30 words, expands on headline with specificity (domain, focus area) |
| CTA buttons | Exactly 2: one `primary` (action: view work / start project), one `secondary`/`ghost` (action: about / resume) — each label ≤3 words |
| Trust indicators | 3–5 items: logos (past companies/clients) or short proof stats (e.g. "X years", "Y projects shipped") — logo assets required as SVG, monochrome variant for consistent treatment |
| Hero image/visual | Portrait or abstract visual; requirements: min 1600×2000px source, WebP/AVIF export, subject off-center (right or left third) to leave text space, transparent or removable background preferred for layering |

---

## 2. About

| Field | Format / Constraint |
|---|---|
| Purpose | Internal note only (not rendered): section answers "who is this person, why should I trust them" — precedes Experience |
| Short bio | 2–3 paragraphs, first-person or third-person (pick one, consistent site-wide), ≤150 words total |
| Key highlights | 3–4 bullet items, ≤10 words each, each pairs with an icon (from `lucide-react`) |
| Statistics | 3–4 stat blocks, each: `value` (number + unit, e.g. "12+", "40M") + `label` (≤3 words, e.g. "Years Experience") — values must be verifiable/real, sourced from Sarav |

---

## 3. Experience

| Field | Format / Constraint |
|---|---|
| Timeline structure | Reverse-chronological list, vertical timeline on desktop, stacked cards on mobile; each entry = one role (not one company, if multiple roles at same company, list separately) |
| Company card structure | `company` (name), `logo` (SVG, monochrome), `role` (title), `duration` (start–end, "Present" if current), `location` (optional, city or "Remote"), `summary` (1 sentence, ≤25 words) |
| Achievement format | 2–4 bullet points per role, each following structure: **[Action verb] + [what was built/led] + [quantified outcome]** (e.g. metric, scale, % improvement) — no vague claims, every bullet needs a real number or concrete deliverable |

---

## 4. Technical Expertise

| Field | Format / Constraint |
|---|---|
| Categories | 4–6 groupings (e.g. Languages, Frameworks, Infrastructure/Cloud, AI/ML, Tools) — category names ≤2 words |
| Technologies | Per category: 4–8 items max, each item = name + optional icon (brand icon set, e.g. `simple-icons` — separate from `lucide-react` UI icons) |
| Display format | Grouped grid or tag/pill cluster, NOT a skill-bar/percentage meter (percentage claims read as arbitrary, avoid) — group headers use `label` type scale |

---

## 5. Featured Projects

| Field | Format / Constraint |
|---|---|
| Card structure | Image/thumbnail (16:9 or 4:3, consistent ratio across all cards) + title + short description + tag list |
| Required information | `title` (≤6 words), `description` (1–2 sentences, ≤35 words, outcome-focused not feature-list), `role` (Sarav's role on project), `tags` (2–4 tech/domain tags), `year` or `duration`, `link` (live URL and/or case study route — external link icon if leaves site) |
| CTA | Per card: "View project" / "Read case study" — `link` variant, arrow icon; section-level CTA at bottom: "View all projects" linking to `/projects` |

---

## 6. Certifications

| Field | Format / Constraint |
|---|---|
| Card structure | Compact card: issuer logo + certification name + issue date + optional credential ID/verify link |
| Metadata | `name` (official cert title, exact), `issuer` (organization name), `date_issued` (month/year), `expires` (optional, if applicable), `credential_url` (verification link, required if claiming the cert — links to issuer's official verification page) |

---

## 7. Contact

| Field | Format / Constraint |
|---|---|
| Contact methods | Email (primary, required), LinkedIn, GitHub, optionally X/Twitter or Calendly-style booking link — each as icon + label, opens in new tab except email (mailto) |
| CTA | Section headline (≤8 words, direct invitation e.g. "Let's build something") + single `primary` button ("Send a message" / "Book a call") — form or mailto, not both competing for primary attention |
| Footer content | Copyright line (`© {year} Sarav.ai`), site nav repeat (secondary, small text), social icon row (matches contact methods), optional "Built with" credit line (small, muted) |

---

## 8. SEO

| Field | Format / Constraint |
|---|---|
| Title | ≤60 characters, format: `{Name} — {Primary role/value prop}` (e.g. matches hero headline intent), unique per route |
| Description | ≤155 characters, action/value-oriented summary, includes primary keyword naturally, unique per route |
| Keywords | Not a meta tag (deprecated for SEO) — instead: 3–5 target search phrases per page used to inform heading/copy word choice naturally (e.g. role + domain + location if relevant) |
| Additional | `og:title`, `og:description`, `og:image` (1200×630px, branded, per-route where relevant), `twitter:card` = `summary_large_image`, canonical URL per route, `sitemap.xml` + `robots.ts` (already planned in `src/app/`) |

---

*Real content (bio text, project descriptions, stats, cert details) to be supplied by Sarav and placed into `src/content/` per the schema above — no placeholder/lorem ipsum used anywhere in implementation.*
