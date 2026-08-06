# Changelog

All notable changes to **`sarav-ai-v2`** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] — `v1.1.0` Milestone

### Added
- GitHub Actions CI pipeline (`.github/workflows/ci.yml`) for automated pull request builds and type checks.
- Extended documentation suite: `docs/SECURITY.md`, `docs/CONTRIBUTING.md`, `docs/CHANGELOG.md`.
- Milestone checklist for `v1.1.0` release candidate.

---

## [v1.0.0] — 2026-08-06

### Added
- **Sanity CMS Integration:** Live dataset `oxhvuyz5` with hosted Sanity Studio at `/studio`.
- **ContentService Abstraction:** Decoupled React UI from CMS providers (`SanityContentService` vs `StaticContentService`).
- **Single-Call Section Registry:** Co-located components, schemas, and titles in `src/sections/`.
- **Universal Content Block Engine:** Reusable block components (`richText`, `quote`, `cta`) rendered via `<Blocks />`.
- **On-Demand Cache Revalidation:** `/api/revalidate` endpoint purges Next.js cache within seconds of publishing.
- **System Health Monitor:** Diagnostic dashboard at `/admin/system`.
- **Schema Versioning:** Enforced `schemaVersion: 1` contract on documents.
- **Automated Deployment:** GitHub repository integration with Netlify serverless runtime functions.
