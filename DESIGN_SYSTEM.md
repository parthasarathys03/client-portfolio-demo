# Sarav.ai — Design System

Editorial, premium, enterprise-grade personal portfolio. Minimal surface, maximal clarity. Content leads, chrome disappears.

---

## 1. Design Philosophy

- **Editorial over decorative.** Layout behaves like a well-typeset publication — text hierarchy, generous margins, deliberate line lengths. No gratuitous gradients, no glassmorphism noise.
- **Whitespace is a material.** Space communicates confidence. Never fill space to "look busy" — let sections breathe.
- **Motion supports, never distracts.** Animation confirms state changes and guides attention on scroll. No motion for its own sake, no bouncing, no attention-stealing loops.
- **Monochrome-first, accent-sparse.** Near-black/near-white base with a single accent color used deliberately (links, CTAs, active states) — not decoratively.
- **Consistency over cleverness.** Every button, card, spacing value comes from the scale below. No one-off magic numbers.
- **Performance is a design constraint.** Every visual decision (fonts, images, animation) is judged against load time and CLS, not just aesthetics.

---

## 2. Color Palette

### Light mode

| Token | Value | Usage |
|---|---|---|
| `background` | `#FFFFFF` | page base |
| `surface` | `#F7F7F5` | section alt background, cards |
| `foreground` | `#0A0A0A` | primary text |
| `muted-foreground` | `#5C5C5C` | secondary text, captions |
| `border` | `#E5E5E2` | dividers, card borders |
| `accent` | `#2B5CE6` | links, CTA, focus ring |
| `accent-foreground` | `#FFFFFF` | text on accent |
| `destructive` | `#D64545` | errors only |

### Dark mode

| Token | Value | Usage |
|---|---|---|
| `background` | `#0A0A0A` | page base |
| `surface` | `#141414` | section alt background, cards |
| `foreground` | `#F5F5F3` | primary text |
| `muted-foreground` | `#9A9A9A` | secondary text, captions |
| `border` | `#262626` | dividers, card borders |
| `accent` | `#5B8DFF` | links, CTA, focus ring (lightened for contrast) |
| `accent-foreground` | `#0A0A0A` | text on accent |
| `destructive` | `#F27272` | errors only |

Rule: accent used in ≤10% of any viewport. Everything else stays monochrome.

---

## 3. Typography System

- **Display / heading font:** modern grotesk (e.g. Geist Sans, Inter, or custom self-hosted) — self-hosted via `next/font`, variable weight.
- **Body font:** same family as heading (single-family system) unless a serif pairing is explicitly chosen for editorial contrast (optional: serif for pull-quotes only).
- **Mono font:** used only for code snippets, labels like `role`, `stack`, timestamps.

| Token | Size (desktop) | Size (mobile) | Weight | Line-height | Usage |
|---|---|---|---|---|---|
| `display` | 72px | 40px | 600 | 1.05 | hero headline |
| `h1` | 48px | 32px | 600 | 1.1 | page titles |
| `h2` | 36px | 28px | 600 | 1.15 | section titles |
| `h3` | 24px | 20px | 600 | 1.25 | card/subsection titles |
| `body-lg` | 20px | 18px | 400 | 1.6 | intro paragraphs |
| `body` | 16px | 16px | 400 | 1.6 | default copy |
| `body-sm` | 14px | 14px | 400 | 1.5 | captions, meta |
| `label` | 12px | 12px | 500 | 1.4 | uppercase tags, eyebrow text, letter-spacing 0.08em |

Max line length: 70ch for body copy, 100ch for hero.

---

## 4. Spacing Scale

Base unit: `4px`. Tailwind default scale adopted as canonical — no custom spacing tokens.

| Token | px | Usage |
|---|---|---|
| `space-1` | 4 | icon-to-text gaps |
| `space-2` | 8 | tight inline gaps |
| `space-3` | 12 | form field gaps |
| `space-4` | 16 | default component padding |
| `space-6` | 24 | card padding |
| `space-8` | 32 | small section gaps |
| `space-12` | 48 | component-to-component |
| `space-16` | 64 | subsection spacing |
| `space-24` | 96 | section vertical padding (mobile) |
| `space-32` | 128 | section vertical padding (desktop) |

Rule: section vertical rhythm always from `space-24`/`space-32` tier — never arbitrary.

---

## 5. Border Radius Scale

| Token | px | Usage |
|---|---|---|
| `radius-sm` | 6 | tags, badges, small buttons |
| `radius-md` | 10 | buttons, inputs |
| `radius-lg` | 16 | cards |
| `radius-xl` | 24 | large image containers, modals |
| `radius-full` | 9999 | avatars, pills |

Rule: sharp/minimal by default (`md`/`lg` tier). No heavy rounded (`2xl`+) — reads as playful, not enterprise.

---

## 6. Shadow System

Shadows stay subtle — signal elevation, not decoration.

| Token | Value | Usage |
|---|---|---|
| `shadow-xs` | `0 1px 2px rgba(0,0,0,0.04)` | inputs, subtle card rest state |
| `shadow-sm` | `0 2px 8px rgba(0,0,0,0.06)` | card default |
| `shadow-md` | `0 8px 24px rgba(0,0,0,0.08)` | card hover, dropdowns |
| `shadow-lg` | `0 16px 48px rgba(0,0,0,0.12)` | modals, popovers |

Dark mode: reduce opacity values by ~half, rely more on `border` token than shadow for separation.

---

## 7. Button Variants

| Variant | Style | Usage |
|---|---|---|
| `primary` | solid `accent` background, `accent-foreground` text, `radius-md` | main CTA (e.g. "Get in touch") |
| `secondary` | `surface` background, `border` outline, `foreground` text | secondary actions |
| `outline` | transparent background, `border` outline | tertiary, low-emphasis |
| `ghost` | transparent, no border, hover `surface` background | nav links, icon buttons |
| `link` | no background, `accent` text, underline on hover | inline text CTAs |

States: `hover` (subtle darken/lighten 8%), `active` (translate-y 1px, per shadcn convention), `disabled` (50% opacity, no pointer events), `focus-visible` (2px `accent` ring, offset 2px).

Sizes: `sm` (36px height), `default` (44px height), `lg` (52px height). Minimum 44px tap target on mobile regardless of size token.

---

## 8. Card Variants

| Variant | Style | Usage |
|---|---|---|
| `default` | `surface` bg, `border` 1px, `radius-lg`, `shadow-sm` | project cards, content blocks |
| `outlined` | transparent bg, `border` 1px only, no shadow | dense lists, secondary content |
| `elevated` | `background` bg, `shadow-md`, no border | featured/highlighted card |
| `interactive` | `default` + hover lifts to `shadow-md` + slight scale (1.01) transition | clickable project/case-study cards |

Padding: `space-6` default, `space-8` for feature cards. Image inside card: full-bleed top, `radius-lg` matched on top corners only.

---

## 9. Icon Usage Guidelines

- Library: `lucide-react` (already installed via shadcn/ui init).
- Default size: 20px inline with body text, 24px in nav/buttons, 16px in badges/tags.
- Stroke width: 1.5 (default) — never mix stroke weights on same screen.
- Color: inherits `currentColor` — never hardcode icon colors independent of text token.
- Icons are supportive, never decorative-only — every icon pairs with a text label except universally recognized actions (close, menu, external link, social).

---

## 10. Animation Principles

- Library: Framer Motion (installed).
- Duration: `150ms` micro-interactions (hover, focus), `300–400ms` element transitions, `600–800ms` scroll-reveal entrances.
- Easing: custom `cubic-bezier(0.16, 1, 0.3, 1)` ("ease-out-expo" feel) for entrances; `ease-in-out` for toggles.
- Scroll-triggered reveal: fade + 16px translate-Y, staggered 60–80ms per sibling, trigger once (no re-animate on scroll-up).
- Page transitions: simple fade/slide, ≤400ms, no full-page wipes or gimmicks.
- Reduced motion: all animation respects `prefers-reduced-motion` — fallback to opacity-only, no transforms.
- No parallax heavier than 0.2 factor — avoid nausea-inducing scroll speed mismatches.
- Hover states: transform/opacity only (GPU-cheap), never animate `width`/`height`/`top`/`left`.

---

## 11. Container Widths

| Token | Max-width | Usage |
|---|---|---|
| `container-sm` | 640px | forms, narrow text content |
| `container-md` | 768px | article/case-study body copy |
| `container-lg` | 1024px | standard section content |
| `container-xl` | 1280px | full section wrapper |
| `container-2xl` | 1440px | hero, full-bleed sections |

Horizontal padding: `24px` mobile, `48px` tablet, `64px` desktop, applied consistently via a shared `Container` layout primitive.

---

## 12. Responsive Breakpoints

Tailwind default breakpoints adopted as canonical:

| Token | Min-width | Target |
|---|---|---|
| `sm` | 640px | large phones |
| `md` | 768px | tablets |
| `lg` | 1024px | small laptops |
| `xl` | 1280px | desktops |
| `2xl` | 1536px | large desktops |

Design mobile-first. Every component's base styles target mobile; enhancements layer up via `md:`/`lg:`/`xl:` prefixes. No desktop-only or mobile-only components — same component, responsive props.

---

*This document is the single source of truth for visual decisions. Any new color, spacing, or animation value must be added here before use in code.*
