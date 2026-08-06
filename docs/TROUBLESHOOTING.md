# Troubleshooting Guide

### 1. Studio Displaying "Project Not Found"
- **Cause:** `NEXT_PUBLIC_SANITY_PROJECT_ID` set to placeholder `demo-project-id` or contains invalid characters (e.g. underscores).
- **Fix:** Ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set to valid 8-character ID (e.g. `oxhvuyz5`).

### 2. Studio Displaying "Connect this Studio to your project" / CORS Error
- **Cause:** Current domain (e.g. `http://localhost:3000` or `https://sarav-portfolio.netlify.app`) not authorized in Sanity CORS origins.
- **Fix:** Go to `sanity.io/manage/project/<id>/api`, click **Add CORS Origin**, enter domain (without trailing slash), check **Allow credentials**, and save.

### 3. Website Shows Stale Data After Publishing
- **Cause:** `useCdn: true` was caching responses at Sanity edge API CDN.
- **Fix:** In `src/sanity/client.ts`, ensure `useCdn: false` is set for real-time queries, and check `/api/revalidate?secret=...` webhook log.

### 4. Seed Script Fails
- **Cause:** Missing `SANITY_API_WRITE_TOKEN`.
- **Fix:** Create API Token in Sanity Console with **Editor** permissions and add to `.env.local`.
