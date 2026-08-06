# Architecture Specification

This document details the system design, domain model, abstraction layers, and extensibility contracts of **`sarav-ai-v2`**.

---

## 🏗️ System Overview

```text
        React UI Layer (Components & Layout Primitives)
                             │
                             ▼  depends ONLY on domain types
    ┌──────────────────────────────────────────────────┐
    │  ContentService  (Interface Contract)           │
    │  - getSiteSettings(): SiteSettings               │
    │  - getVisibleSections(): Section[]               │
    │  - getProjects(): ProjectItem[]                  │
    └──────────────────────────────────────────────────┘
                             ▲  implemented by
        ┌────────────────────┴────────────────────┐
        │                                         │
  SanityContentService                    StaticContentService
  (Live Sanity Cloud queries via GROQ)    (Zero-config local fallback)
```

---

## 🔑 Core Design Patterns

### 1. CMS Independence (`ContentService`)
React components never import `next-sanity`, GROQ queries, or Sanity clients directly. They consume domain types from `@/content-service`. Swapping CMS providers in the future touches only one adapter implementation.

### 2. Single-File Section Registration (`registerSection`)
Each section is a self-contained module in `src/sections/<name>/`:
- `schema.ts`: Sanity object schema definition.
- `Component.tsx`: React section renderer consuming `{ section: Section<T> }` props.
- `index.ts`: Single-line call to `registerSection({ type, component, schema, defaultTitle })`.

### 3. Universal Content Block Engine (`registerBlock` & `<Blocks />`)
Generic layout blocks (RichText, Quotes, CTAs, Images, Video) are registered via `registerBlock()`. Rendering a block array via `<Blocks value={blocks}/>` enables creating content sections in Studio with zero React code.

### 4. Schema Versioning (`schemaVersion: 1`)
Documents maintain a read-only `schemaVersion` attribute, establishing document contracts for automated future data migrations.
