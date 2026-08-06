# Release Notes — Portfolio CMS v1.0.0

### Title
**Portfolio CMS v1.0.0**

### Overview
Initial production release of `sarav-ai-v2` content-driven Portfolio CMS.

### Key Features
- **Sanity CMS Cloud Integration:** Live dataset `oxhvuyz5` with hosted Sanity Studio at `/studio`.
- **ContentService Abstraction Layer:** Decoupled React UI from CMS providers (`SanityContentService` vs `StaticContentService`).
- **Single-Call Section Registry:** Co-located components, schemas, and titles in `src/sections/`.
- **Universal Content Block Engine:** Reusable block components (`richText`, `quote`, `cta`) rendered via `<Blocks />`.
- **On-Demand Webhook Cache Purge:** `/api/revalidate` endpoint purges Next.js cache within seconds of publishing.
- **System Health Monitor:** Diagnostic dashboard at `/admin/system`.
- **Document Schema Versioning:** Enforced `schemaVersion: 1` on document schemas for migration safety.
- **Automated Deployment:** GitHub repository integration with Netlify serverless runtime functions.

### Status
`Production Baseline — Frozen`
