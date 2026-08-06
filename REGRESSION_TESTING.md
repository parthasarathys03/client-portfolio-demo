# Portfolio CMS Regression Test Suite

This document defines the comprehensive **30-Point Regression Test Suite (TC-001 to TC-030)** and **Release Checklist** for `sarav-ai-v2`. Every release must pass this suite before deployment to production.

---

## A. Content CRUD

### TC-001 Create Content
* **Steps:** Create a new Project in Sanity Studio → Click **Publish**.
* **Expected Result:** Appears on website immediately; no duplicate cards or missing key props.

### TC-002 Edit Content
* **Steps:** Edit Hero subheadline or title in Studio → Click **Publish**.
* **Expected Result:** Live site displays updated value; old value is completely removed.

### TC-003 Delete Content
* **Steps:** Delete a Project document in Studio → Click **Publish**.
* **Expected Result:** Project disappears cleanly from site; layout grid remains intact.

### TC-004 Reorder Content
* **Steps:** Drag Project #5 above Project #1 in Home Page Builder → Click **Publish**.
* **Expected Result:** Frontend order matches Sanity Studio order.

---

## B. Dynamic Rendering

### TC-005 Hide Section
* **Steps:** Set `visible: false` on a section in Studio → Click **Publish**.
* **Expected Result:** Section disappears from body AND from header navigation.

### TC-006 Show Section
* **Steps:** Set `visible: true` on a hidden section → Click **Publish**.
* **Expected Result:** Section returns to page and nav bar.

### TC-007 Empty Collection
* **Steps:** Delete all Projects → Click **Publish**.
* **Expected Result:** Displays clean empty state ("Additional projects will be published soon."); no crashes.

---

## C. Images & Media

### TC-008 Replace Profile Image
* **Steps:** Upload new portrait image in Site Settings → Click **Publish**.
* **Expected Result:** New image displayed cleanly with proper aspect ratio clipping and no CLS.

### TC-009 Delete Image
* **Steps:** Remove portrait image → Click **Publish**.
* **Expected Result:** Displays fallback placeholder icon; no broken image symbol.

### TC-010 Resume Upload
* **Steps:** Upload new PDF in Site Settings → Click **Download Resume**.
* **Expected Result:** New PDF file downloads cleanly.

---

## D. Navigation

### TC-011 Dynamic Navigation
* **Steps:** Add new section to Home Page Builder → Click **Publish**.
* **Expected Result:** Navigation updates automatically without code changes.

### TC-012 Section Anchor
* **Steps:** Click nav link (e.g. `04 Projects`).
* **Expected Result:** Smoothly scrolls to `#projects` with sticky header offset accounted for.

---

## E. Revalidation

### TC-013 Publish Update
* **Steps:** Edit content → Click **Publish**.
* **Expected Result:** Webhook hits `/api/revalidate?secret=...`; website updates within 2-5 seconds.

### TC-014 Multiple Updates
* **Steps:** Publish 5 edits in rapid succession.
* **Expected Result:** Live site always reflects the latest published state without race conditions.

### TC-015 Browser Cache
* **Steps:** Perform hard refresh (Ctrl+Shift+R) / Incognito / Mobile.
* **Expected Result:** Identical updated content across all browsers and devices.

---

## F. Data Integrity

### TC-016 Duplicate Content
* **Steps:** Create two projects with identical titles.
* **Expected Result:** Unique `_key` or `_id` assigned; React keys remain unique; rendering succeeds.

### TC-017 Duplicate Images
* **Steps:** Upload same image asset twice.
* **Expected Result:** Sanity asset pipeline deduplicates asset references cleanly.

### TC-018 Duplicate Sections
* **Steps:** Attempt adding a second Hero section.
* **Expected Result:** Prevented by singleton/schema rules or rendered gracefully without ID collision.

### TC-019 Missing Required Fields
* **Steps:** Leave Project title empty → Try **Publish**.
* **Expected Result:** Sanity Studio validation error prevents publishing.

### TC-020 Invalid URL
* **Steps:** Enter invalid GitHub URL (e.g. `not-a-url`) → Try **Publish**.
* **Expected Result:** Schema validation prevents publishing invalid URL formats.

---

## G. Contact Form

### TC-021 Submit Message
* **Steps:** Submit form on website with Name, Email, Subject, Message.
* **Expected Result:** Server Action executes `submitContactMessage()`; document created under `contactMessage` schema in Studio.

### TC-022 Spam Protection
* **Steps:** Submit identical message multiple times quickly.
* **Expected Result:** Handled gracefully by Server Action with validation checks.

---

## H. Performance

### TC-023 Large Dataset
* **Steps:** Query 100+ projects via GROQ.
* **Expected Result:** Page renders statically or with server-side streaming; Lighthouse performance score ≥ 90.

### TC-024 Large Images
* **Steps:** Upload 10MB raw image in Studio.
* **Expected Result:** `@sanity/image-url` auto-formats to WebP/AVIF with dynamic width/height optimization.

---

## I. Security

### TC-025 Unauthorized Access
* **Steps:** Access `/studio` without Sanity login.
* **Expected Result:** Prompted for Sanity OAuth login; unauthorized edits blocked.

### TC-026 Invalid Revalidation Secret
* **Steps:** POST `/api/revalidate?secret=invalid_secret`.
* **Expected Result:** Returns `401 Unauthorized`; cache is NOT invalidated.

---

## J. Regression

### TC-027 No Static Imports
* **Steps:** Code audit of `src/app/page.tsx` and section renderers.
* **Expected Result:** Zero imports from `src/content/*` in production components; strictly driven by `ContentService`.

### TC-028 Component Registry
* **Steps:** Register a new section module via `registerSection({ type, component, schema })`.
* **Expected Result:** Exactly 1 file co-locates component, schema, and title; zero edits across multiple files.

### TC-029 Universal Blocks
* **Steps:** Build a section array using `richText`, `quote`, and `cta` blocks.
* **Expected Result:** `<Blocks value={blocks}/>` renders all items without creating new React components.

### TC-030 Health Check
* **Steps:** Navigate to `/admin/system`.
* **Expected Result:** Diagnostic monitor reports green for ContentService adapter, Environment Variables, Schema Version (`v1`), and Revalidation Webhook.

---

## 📋 Release Checklist (Run Before Every Production Release)

- [ ] ✅ Build compiles cleanly (`npm run build` passes with 0 errors)
- [ ] ✅ No duplicate content or React key collisions
- [ ] ✅ Images optimized with no CLS (Cumulative Layout Shift)
- [ ] ✅ Resume download link verified
- [ ] ✅ Contact form submissions reach Studio Messages Inbox
- [ ] ✅ Dynamic navigation updates when sections are reordered/hidden
- [ ] ✅ Webhook revalidation verified (`/api/revalidate`)
- [ ] ✅ Security secret validated on `/api/revalidate`
- [ ] ✅ Mobile responsive across phone, tablet, desktop
- [ ] ✅ Lighthouse scores > 90 across Performance, Accessibility, Best Practices, and SEO
- [ ] ✅ Netlify build and deployment successful
