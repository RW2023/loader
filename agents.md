📁 Project Structure
/app: Application entry point using the Next.js App Router.

layout.tsx: Top-level layout structure.

page.tsx: Route-level page components.

[route]/page.tsx: Dynamic or nested routes.

loading.tsx, error.tsx: Built-in loading and error boundaries for routes.

/components: Reusable and preferably typed UI components.

/styles: Application-wide styles or configuration files.

/lib: Utility functions (e.g., API clients, formatters, helpers).

/hooks: Custom React or logic-based hooks.

/types: Shared TypeScript type definitions and interfaces.

/public: Static assets (images, fonts, icons, etc.).

/tests: Unit and integration tests (Jest + React Testing Library).

🛠️ Development Standards
Framework: Next.js 13+ using the App Router.

Language: TypeScript only.

Routing: Use App Router conventions. Favor server components unless interactivity is needed.

Data Fetching: Use fetch() within server components or external data utilities. Client-side fetching may use SWR or react-query.

State Management: Prefer local state or custom hooks. Use global state only if necessary (e.g., Zustand, React Context).

✅ Linting & Code Quality
ESLint with appropriate plugin presets for Next.js, React, and TypeScript.

Prettier for automatic code formatting.

TypeScript must be strict (strict: true in tsconfig.json).

Avoid using any unless unavoidable and clearly justified.

🧪 Testing
Framework: Jest with React Testing Library.

Unit and integration tests are expected for:

Components in /components

Hooks in /hooks

Utility logic in /lib

Mock Next.js utilities (next/navigation, etc.) and API calls as needed.

bash
Copy
Edit
npm run test
npm run test:coverage
🔄 Pull Request Guidelines
PRs should include a clear title and summary of changes.

Reference related issues (e.g., Closes #42).

All tests must pass before merging.

Run the following before pushing:

bash
Copy
Edit
npm run lint && npm run build
📌 Guidance for Codex / AI Agents
Do not use getServerSideProps or getStaticProps. Use App Router conventions only.

Use server components by default. Add "use client" only when interactive hooks or effects are required.

For navigation, use utilities from next/navigation.

Use semantic HTML and keep accessibility in mind.

Refer to /types for any shared data models or types.

Follow established patterns when adding new files or features.

