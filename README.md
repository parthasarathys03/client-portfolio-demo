# Content-Driven Portfolio CMS (`sarav-ai-v2`)

An enterprise-grade, content-driven Portfolio application built with **Next.js 16 (App Router & Turbopack)** and **Sanity CMS Cloud**.

---

## 🌐 Live URLs & Access

- 🖥️ **Live Portfolio Website:** [https://sarav-portfolio.netlify.app](https://sarav-portfolio.netlify.app)
- ⚙️ **Sanity Studio Admin:** [https://sarav-portfolio.netlify.app/studio](https://sarav-portfolio.netlify.app/studio)
- 🩺 **System Health Monitor:** [https://sarav-portfolio.netlify.app/admin/system](https://sarav-portfolio.netlify.app/admin/system)

---

## 📚 Documentation Suite

All system documentation is co-located in the [`docs/`](docs/) directory:

- 📖 [**`docs/USER_GUIDE.md`**](docs/USER_GUIDE.md) — **Sanity CMS User Guide & Content Management Manual** (How to edit, add, update content & resume PDF).
- 🏗️ [**`docs/ARCHITECTURE.md`**](docs/ARCHITECTURE.md) — System design, domain models, and `ContentService` abstraction.
- 🧪 [**`docs/REGRESSION_TESTING.md`**](docs/REGRESSION_TESTING.md) — 40-Point Test Matrix & Release Checklist.
- 📜 [**`docs/PRODUCTION_SIGNOFF.md`**](docs/PRODUCTION_SIGNOFF.md) — Production Release `v1.0.0` Sign-off & audit trail.
- 📝 [**`docs/RELEASE_NOTES.md`**](docs/RELEASE_NOTES.md) — Release notes for `v1.0.0`.
- 🗺️ [**`docs/ROADMAP.md`**](docs/ROADMAP.md) — Feature Roadmap (`v1.1.0`, `v1.2.0`, `v2.0.0`).
- 🚀 [**`docs/DEPLOYMENT.md`**](docs/DEPLOYMENT.md) — Netlify deployment, Sanity CORS, and webhook setup.
- 🛡️ [**`docs/SECURITY.md`**](docs/SECURITY.md) — Security protocols, token management, and secret protection.
- 🤝 [**`docs/CONTRIBUTING.md`**](docs/CONTRIBUTING.md) — Contribution guidelines, local setup, and PR checklist.
- 📜 [**`docs/CHANGELOG.md`**](docs/CHANGELOG.md) — Versioned changelog.
- 🛠️ [**`docs/TROUBLESHOOTING.md`**](docs/TROUBLESHOOTING.md) — Frequently asked questions & quick fixes.

---

## 🚀 Quick Start for Developers

1. **Clone repository:**
   ```bash
   git clone https://github.com/parthasarathys03/client-portfolio-demo.git
   cd sarav-ai-v2
   npm install
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```

3. **Run local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) for local website or [http://localhost:3000/studio](http://localhost:3000/studio) for local Sanity Studio.
