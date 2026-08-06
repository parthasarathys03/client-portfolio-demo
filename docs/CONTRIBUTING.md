# Contributing Guidelines

Thank you for contributing to **`sarav-ai-v2`**! Please follow these guidelines to ensure code quality and release stability.

---

## 🛠️ Developer Workflow

1. **Clone & Install:**
   ```bash
   git clone https://github.com/parthasarathys03/client-portfolio-demo.git
   cd sarav-ai-v2
   npm install
   ```

2. **Environment Setup:**
   Copy `.env.local.example` to `.env.local` and add your local or project credentials:
   ```bash
   cp .env.local.example .env.local
   ```

3. **Branch Naming Conventions:**
   - Feature branches: `feature/v1.1.0-<feature-name>`
   - Bug fixes: `fix/<issue-description>`
   - Documentation: `docs/<topic>`

4. **Pull Request Checklist:**
   - [ ] All TypeScript checks pass (`npx tsc --noEmit`)
   - [ ] Local build passes cleanly (`npm run build`)
   - [ ] No hardcoded content added to React UI
   - [ ] Section additions co-located in `src/sections/<name>/` via `registerSection()`
   - [ ] Verified via 40-Point Regression Suite in `docs/REGRESSION_TESTING.md`
