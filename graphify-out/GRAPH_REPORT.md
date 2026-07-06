# Graph Report - Avora  (2026-07-06)

## Corpus Check
- 59 files · ~46,247 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 226 nodes · 329 edges · 24 communities (10 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a08079f3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_cn|cn]]
- [[_COMMUNITY_project.actions.ts|project.actions.ts]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_venture.actions.ts|venture.actions.ts]]
- [[_COMMUNITY_main.py|main.py]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_AI Processor Microservice|AI Processor Microservice]]
- [[_COMMUNITY_AnimatedCounter.tsx|AnimatedCounter.tsx]]
- [[_COMMUNITY_eslint.config.mjs|eslint.config.mjs]]
- [[_COMMUNITY_next.config.ts|next.config.ts]]
- [[_COMMUNITY_compilerOptions|compilerOptions]]
- [[_COMMUNITY_postcss.config.mjs|postcss.config.mjs]]
- [[_COMMUNITY_proxy.ts|proxy.ts]]
- [[_COMMUNITY_tailwind.config.ts|tailwind.config.ts]]
- [[_COMMUNITY_devDependencies|devDependencies]]
- [[_COMMUNITY_Avora Launch MVP|Avora Launch MVP]]
- [[_COMMUNITY_Workflow graphify|Workflow: graphify]]
- [[_COMMUNITY_graphify|graphify.md]]
- [[_COMMUNITY_Avora MVP|Avora MVP]]
- [[_COMMUNITY_Enterprise Dashboard|Enterprise Dashboard]]
- [[_COMMUNITY_Google Sheets Lead Capture|Google Sheets Lead Capture]]
- [[_COMMUNITY_Prisma Schema Configuration|Prisma Schema Configuration]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 23 edges
2. `useInView()` - 17 edges
3. `compilerOptions` - 16 edges
4. `authOptions` - 8 edges
5. `Avora Launch MVP` - 6 edges
6. `scripts` - 5 edges
7. `getClients()` - 5 edges
8. `getProjects()` - 5 edges
9. `Logo()` - 5 edges
10. `Testimonials` - 4 edges

## Surprising Connections (you probably didn't know these)
- `ThemeToggle()` --references--> `react`  [EXTRACTED]
  src/components/ThemeToggle.tsx → package.json
- `Navbar()` --calls--> `cn()`  [EXTRACTED]
  src/components/Navbar.tsx → src/lib/cn.ts
- `ClientsPage()` --calls--> `getClients()`  [EXTRACTED]
  src/app/dashboard/clients/page.tsx → src/actions/client.actions.ts
- `Logo()` --calls--> `cn()`  [EXTRACTED]
  src/components/Logo.tsx → src/lib/cn.ts
- `Ventures()` --calls--> `cn()`  [EXTRACTED]
  src/components/Ventures.tsx → src/lib/cn.ts

## Import Cycles
- None detected.

## Communities (24 total, 14 thin omitted)

### Community 0 - "cn"
Cohesion: 0.13
Nodes (20): FounderPage(), HeroGlow(), PatternDot(), PatternGrid(), Contact(), FAQ(), faqs, Hero() (+12 more)

### Community 1 - "project.actions.ts"
Cohesion: 0.09
Nodes (22): prisma, getAiModels(), registerAiModel(), createClient(), getClients(), createProject(), getProjects(), handler (+14 more)

### Community 2 - "layout.tsx"
Cohesion: 0.11
Nodes (17): react, inter, metadata, RootLayout(), spaceGrotesk, viewport, generateSchema(), footerLinks (+9 more)

### Community 3 - "venture.actions.ts"
Cohesion: 0.18
Nodes (8): createVenture(), getVentureById(), getVentures(), VentureDetailsPage(), VenturesPage(), VentureFormValues, VentureModal(), ventureSchema

### Community 4 - "main.py"
Cohesion: 0.18
Nodes (13): agent_train(), IngestPayload, rag_ingest(), Placeholder endpoint to accept a solution ID and a mock document payload.     Fu, # TODO: Implement Langchain document loaders and embedding generation, Placeholder endpoint to accept a solution ID and intent examples for fine-tuning, # TODO: Implement agent training or prompt registration, Placeholder endpoint to accept a solution ID and test input payload.     Future (+5 more)

### Community 5 - "dependencies"
Cohesion: 0.09
Nodes (22): dependencies, clsx, @hookform/resolvers, lucide-react, next, next-auth, next-themes, @prisma/client (+14 more)

### Community 11 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 16 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 17 - "Avora Launch MVP"
Cohesion: 0.29
Nodes (6): Avora Launch MVP, 🌐 Deployment, 🔗 Google Sheets Lead Capture, 📁 Project Structure, 🚀 Quick Start, 🛠 Tech Stack

## Knowledge Gaps
- **86 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+81 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `layout.tsx`?**
  _High betweenness centrality (0.263) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `project.actions.ts`, `dependencies`?**
  _High betweenness centrality (0.242) - this node is a cross-community bridge._
- **Why does `react` connect `layout.tsx` to `dependencies`?**
  _High betweenness centrality (0.223) - this node is a cross-community bridge._
- **What connects `Placeholder endpoint to accept a solution ID and a mock document payload.     Fu`, `Placeholder endpoint to accept a solution ID and intent examples for fine-tuning`, `Placeholder endpoint to accept a solution ID and test input payload.     Future` to the rest of the system?**
  _92 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.12944523470839261 - nodes in this community are weakly interconnected._
- **Should `project.actions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08974358974358974 - nodes in this community are weakly interconnected._
- **Should `layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._