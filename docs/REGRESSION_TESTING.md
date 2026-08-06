# 40-Point Production Regression Test Suite

This document defines the 40-Point Test Matrix (TC-001 to TC-040) distinguishing between **Static Code Verification** and **Observed Production Runtime Validation**.

---

## 📊 Verification Classification

### Level 1 – Static Verification
- Build passes (`npm run build`)
- TypeScript type check (`tsc`)
- Sanity Schema validation
- Section & block registry wiring
- Environment variable security

### Level 2 – Automated Runtime
- Dataset seed script (`scripts/seed.ts`)
- System Health Monitor (`/admin/system`)
- On-Demand Revalidation API (`/api/revalidate`)
- Contact Form Server Action (`src/app/actions/contact.ts`)
- Netlify serverless deploy pipeline

### Level 3 – Manual End-to-End
- Create, edit, delete, reorder content in Studio
- Upload profile image & resume PDF
- Hide/show sections & verify dynamic nav updates
- Submit contact form & check Studio Inbox
- Mobile, tablet, and desktop responsive testing

### Level 4 – Production Smoke Test Checklist
- Homepage loads (`200 OK`)
- Studio loads (`/studio`)
- Hero section displays active subheadline
- Featured Projects render from dataset
- Images load with WebP optimization
- Revalidation webhook purges cache on publish
- System health monitor reports green status
