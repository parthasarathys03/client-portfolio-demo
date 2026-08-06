# Deployment & Production Setup Guide

This document outlines deployment configuration for Netlify and Sanity CMS Cloud.

---

## 1. Netlify Setup
1. Connect GitHub repository `parthasarathys03/client-portfolio-demo`.
2. Build Command: `npm run build`
3. Publish Directory: `.next` (automatically handled by Netlify Next.js Runtime plugin `@netlify/plugin-nextjs`).

### Environment Variables
Configure under **Netlify Site Configuration → Environment variables**:
- `NEXT_PUBLIC_SANITY_PROJECT_ID=oxhvuyz5`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01`
- `SANITY_API_WRITE_TOKEN=sk...`
- `SANITY_REVALIDATE_SECRET=dev_secret_key`

---

## 2. Sanity CORS Configuration
Add live production origin under **Sanity Management Console (sanity.io/manage/project/oxhvuyz5/api)**:
- **Origin:** `https://sarav-portfolio.netlify.app`
- **Allow credentials:** `Checked (Yes)`

---

## 3. Revalidation Webhook Setup
Configure Webhook under **sanity.io/manage/project/oxhvuyz5/api → Webhooks**:
- **URL:** `https://sarav-portfolio.netlify.app/api/revalidate?secret=dev_secret_key`
- **Dataset:** `production`
- **HTTP Method:** `POST`
- **Trigger on:** Create, Update, Delete
- **Secret:** `dev_secret_key`
