# Portfolio CMS Production Regression & Validation Suite

This document defines the rigorous **40-Point Test Matrix (TC-001 to TC-040)** and **Production Smoke Test Checklist** for `sarav-ai-v2`. It explicitly distinguishes between **Implementation Verification** (static code audit / compilation) and **Observed Production Runtime Validation** (live environment execution).

---

## 📊 Test Verification Classification

### Group 1: Observed Production Runtime Validated ✅
- **TC-001 (Create Content):** Verified via `seed.ts` creating documents in dataset `oxhvuyz5`.
- **TC-002 (Edit Content):** Verified editing Hero Subheadline & publishing to live site.
- **TC-005 (Hide Section):** Verified `visible: false` filtering sections & nav items.
- **TC-011 (Dynamic Nav):** Verified [`Header.tsx`](file:///c:/Users/New%20User/Music/New%20folder/sarav-ai-v2/src/components/layout/Header.tsx) deriving links from active sections.
- **TC-013 (Publish Update):** Verified POST `/api/revalidate?secret=...` webhook returning 200 OK.
- **TC-021 (Submit Message):** Verified Server Action writing `contactMessage` schema.
- **TC-026 (Invalid Revalidation Secret):** Verified 401 Unauthorized check on invalid secret.
- **TC-030 (Health Check):** Verified diagnostic page at [`/admin/system`](file:///c:/Users/New%20User/Music/New%20folder/sarav-ai-v2/src/app/admin/system/page.tsx).
- **TC-035 (Deployment Regression):** Verified automated GitHub push triggering clean Netlify deployment.
- **TC-040 (Production Smoke Test):** Verified homepage, studio, and health check rendering in browser.

---

### Group 2: Extended Production Runtime Validation Matrix (TC-031 to TC-040)

#### TC-031 Rollback Test
* **Goal:** Verify document revision restoration in Sanity Studio reverts live website.
* **Steps:** Edit Hero title in Studio → Publish → Open Sanity History Inspector → Restore previous revision → Publish.
* **Expected Result:** Live website updates to restored revision within seconds via webhook.

#### TC-032 Network Failure / Offline Graceful Handling
* **Goal:** Verify application behavior when offline or Sanity Cloud API is unreachable.
* **Steps:** Disconnect network / block API request.
* **Expected Result:** App falls back gracefully to cached page / StaticContentService without throwing unhandled 500 errors.

#### TC-033 Concurrent Editors
* **Goal:** Verify real-time collaborative editing conflict resolution.
* **Steps:** Open Sanity Studio at `/studio` in two separate browser windows simultaneously → Edit same Project description.
* **Expected Result:** Sanity Studio real-time multiplayer engine syncs operational transforms smoothly without data loss.

#### TC-034 Webhook Failure Recovery
* **Goal:** Verify behavior when webhook is temporarily disabled or fails.
* **Steps:** Disable Netlify webhook in Sanity Management Console → Publish edit → Verify stale cache → Re-enable webhook.
* **Expected Result:** Webhook re-enablement or 60s Next.js fallback revalidation restores sync.

#### TC-035 Deployment Regression
* **Goal:** Verify full build pipeline on code changes.
* **Steps:** Push new commit to GitHub `main` branch → Wait for Netlify build runner.
* **Expected Result:** Site builds cleanly (0 TypeScript errors) and deploys serverless handler.

#### TC-036 Browser Compatibility
* **Goal:** Verify cross-browser layout & font rendering.
* **Environments:** Chrome, Edge, Firefox, Safari (iOS / macOS).
* **Expected Result:** Identical visual typography (Inter, JetBrains Mono, Fraunces) and layout alignment.

#### TC-037 Responsive Layout Verification
* **Goal:** Verify viewport responsiveness.
* **Breakpoints:** Mobile (375px), Tablet (768px), Desktop (1024px+).
* **Expected Result:** Header collapses to mobile menu; grid columns scale cleanly from 1 to 4; no horizontal overflow.

#### TC-038 Accessibility & Keyboard Navigation (a11y)
* **Goal:** Verify WCAG compliance.
* **Steps:** Navigate page using `Tab` / `Shift+Tab` / `Enter`.
* **Expected Result:** Visible focus rings on all interactive links/buttons; "Skip to main content" link appears on first tab; aria-labels intact.

#### TC-039 Backup & Recovery
* **Goal:** Verify dataset export & restore capability.
* **Steps:** Run `sanity dataset export production backup.tar.gz` → Delete test doc → Run `sanity dataset import`.
* **Expected Result:** Dataset restored with full data integrity.

#### TC-040 Production Smoke Test Checklist
* **Run after every production deployment:**
  - [x] Homepage loads (`200 OK`)
  - [x] Hero section displays correct subheadline
  - [x] Header navigation links scroll smoothly to section anchors
  - [x] Featured Projects render from live Sanity dataset
  - [x] Images & portrait load with proper aspect ratio
  - [x] Resume PDF download link is valid
  - [x] Contact form submits to `contactMessage` schema
  - [x] Studio accessible at `/studio`
  - [x] Publish triggers `/api/revalidate` webhook
  - [x] Health check page at `/admin/system` reports green status

---

## 📋 Full 40-Point Test Index

1. **TC-001:** Create Content
2. **TC-002:** Edit Content
3. **TC-003:** Delete Content
4. **TC-004:** Reorder Content
5. **TC-005:** Hide Section
6. **TC-006:** Show Section
7. **TC-007:** Empty Collection
8. **TC-008:** Replace Profile Image
9. **TC-009:** Delete Image
10. **TC-010:** Resume Upload
11. **TC-011:** Dynamic Navigation
12. **TC-012:** Section Anchor
13. **TC-013:** Publish Update
14. **TC-014:** Multiple Updates
15. **TC-015:** Browser Cache
16. **TC-016:** Duplicate Content
17. **TC-017:** Duplicate Images
18. **TC-018:** Duplicate Sections
19. **TC-019:** Missing Required Fields
20. **TC-020:** Invalid URL
21. **TC-021:** Submit Message
22. **TC-022:** Spam Protection
23. **TC-023:** Large Dataset
24. **TC-024:** Large Images
25. **TC-025:** Unauthorized Access
26. **TC-026:** Invalid Revalidation Secret
27. **TC-027:** No Static Imports
28. **TC-028:** Component Registry
29. **TC-029:** Universal Blocks
30. **TC-030:** Health Check
31. **TC-031:** Rollback Test
32. **TC-032:** Network Failure
33. **TC-033:** Concurrent Editors
34. **TC-034:** Webhook Failure
35. **TC-035:** Deployment Regression
36. **TC-036:** Browser Compatibility
37. **TC-037:** Responsive Testing
38. **TC-038:** Accessibility
39. **TC-039:** Backup & Recovery
40. **TC-040:** Production Smoke Test
