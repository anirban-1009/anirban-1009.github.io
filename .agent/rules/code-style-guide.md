---
trigger: always_on
---

# Project Ruleset & Guidelines

This document establishes the verified rules, standards, and workflows updates for the **anirban.codes** project. All contributors (human and AI) must adhere to these guidelines to ensure consistency, security, and stability.

## 1. Technology Stack

*   **Framework**: [Astro](https://astro.build) (Static Site Generation/Hybrid).
*   **UI Components**: [React](https://react.dev) (v19+).
*   **Styling**: [Tailwind CSS](https://tailwindcss.com) (v3+).
*   **AI/RAG**:
    *   **SDK**: Vercel AI SDK (`ai`, `@ai-sdk/google`).
    *   **Provider**: Google Gemini (`gemini-2.5-flash` or newer).
    *   **Embeddings**: `text-embedding-004` via Google Generative AI.
    *   **Vector Store**: Local JSON-based vector store (`src/lib/vector-store.json`).
*   **Deployment**: Vercel (Serverless Functions for API).
*   **Language**: TypeScript (Strict typing preferred).

## 2. Coding Standards

### 2.1. File Structure
*   **Content**: Markdown/MDX files in `src/content/` (collections: `blog`, `work`).
*   **Components**: Reusable UI components in `src/components/`.
*   **Pages**: Route definitions in `src/pages/`.
*   **API Routes**: Serverless functions in `src/pages/api/`.
*   **Scripts**: Automation scripts in `scripts/` (ESM `.mjs` files).

### 2.2. Styling
*   **Tailwind First**: Use utility classes for almost all styling.
*   **Dark API**: Use `dark:` modifiers for dark mode support.
*   **Colors**: Use semantic colors (`bg-primary`, `text-secondary`) defined in `tailwind.config.mjs` where possible, but standard Tailwind colors (`gray-800`, `blue-600`) are acceptable for specific UI elements like the Chat Widget to ensure high contrast.

### 2.3. TypeScript
*   Use interfaces/types for all component props and API responses.
*   Avoid `any` where possible (though loose typing is currently permitted in some legacy vector logic).

## 3. Chatbot & RAG Guidelines

### 3.1. System Prompt Rules
*   **No Meta-Commentary**: The AI MUST NOT use phrases like "Based on the context" or "According to the provided text". Responses should be direct and natural.
*   **Contextual Links**: When recommending items, ALWAYS use markdown format `[Title](URL)` and ensure the URL is **lowercase**.
*   **Persona**: Friendly, professional, and concise. Acts as "Anirban" only when recommending "best" or "interesting" items from his own work.

### 3.2. Data Handling
*   **URL Normalization**: All URLs in the vector store and API responses MUST be lowercased to ensure matching and navigation works correctly.
*   **Rate Limiting**:
    *   Implement IP-based rate limiting (per minute and per hour).
    *   Use **randomized, friendly error messages** (e.g., "Whoa too fast! I need a few seconds to catch up.") instead of generic 429 errors.

### 3.3. Security
*   **Input Validation**: All user inputs must be validated (length, empty checks) and sanitized (HTML escaping) before processing.
*   **Prompt Injection**: Basic defenses against system prompt override attempts must be active.

## 4. Testing Protocols

Before committing changes to the Chat or API features, you **MUST** run the verification suites:

1.  **Security Tests**:
    ```bash
    node scripts/test-security.mjs
    ```
    *   Verifies: Rate limiting, Input validation, Prompt injection, Spam detection.

2.  **Feature Tests**:
    ```bash
    node scripts/test-chat-features.mjs
    ```
    *   Verifies: Lowercase URL generation, Friendly error messages, basic chat flow.

## 5. Workflow & Release Process

### 5.1. Versioning
*   Follow **Semantic Versioning** (MAJOR.MINOR.PATCH).
*   Use the release script for bumping versions:
    ```bash
    npm run release:patch  # For bug fixes
    npm run release:minor  # For new features
    npm run release:major  # For breaking changes
    ```

### 5.2. Changelog
*   The project maintains a `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
*   The release script (`scripts/release.sh`) calling `scripts/update-changelog.mjs` automatically updates this file based on git commits.
*   **Commit Message Convention**:
    *   `feat: ...` -> Added to **Features**.
    *   `fix: ...` -> Added to **Bug Fixes**.
    *   `docs: ...` -> Added to **Documentation**.
    *   `chore: ...` / `style: ...` -> Added to **Other Changes**.

### 5.3. Git
*   **Atomic Commits**: Group related changes into single commits.
*   **Descriptive Messages**: Use the `type(scope): description` format (e.g., `feat(chat): improve suggestion styling`).

## 6. Project-Specific Configs

*   **Embeddings**: Generated via `npm run generate-embeddings`. Note: `src/lib/vector-store.json` is gitignored and must be generated locally or in the build pipeline.
*   **Environment Variables**:
    *   `GOOGLE_GENERATIVE_AI_API_KEY`: Required for Chat/Embeddings.
