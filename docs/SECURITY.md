# Security Policy & Guidelines

This document outlines security protocols, token management, environment variable scoping, and secret protection for **`sarav-ai-v2`**.

---

## 🔒 Secret & Token Management

1. **Environment File Security:**
   - `.env.local` is strictly listed in `.gitignore` and NEVER committed to source control.
   - Public client variables MUST start with `NEXT_PUBLIC_` (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`).

2. **Sanity API Tokens:**
   - **Read Tokens:** Not required for public datasets.
   - **Write Tokens (`SANITY_API_WRITE_TOKEN`):** Required ONLY for seed scripts and contact form server action entries. Scope must be limited to **Editor**.
   - Server-side tokens MUST NOT be prefixed with `NEXT_PUBLIC_` to prevent leaking to client JavaScript bundles.

3. **Webhook Authentication:**
   - On-demand revalidation endpoint `/api/revalidate` requires a secret query parameter (`?secret=...`).
   - Requests without a valid secret return HTTP `401 Unauthorized` and block cache invalidation attempts.

---

## 🛡️ Content Security & CORS

- **CORS Allowed Origins:** Restrict Sanity API access explicitly to `http://localhost:3000` (development) and `https://sarav-portfolio.netlify.app` (production).
- **Sanity Studio Authentication:** Hosted `/studio` route enforces Sanity OAuth / IAM permissions. Unauthorized users cannot edit CMS records.
