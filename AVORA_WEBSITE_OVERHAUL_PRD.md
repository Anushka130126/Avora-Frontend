# AVORA VENTURES WEBSITE OVERHAUL — COMPREHENSIVE PRD

**Version:** 1.0 | **Target Deployment:** Phase 5 EOW  
**Live Site:** https://avora-3kyx.vercel.app | **Repo:** https://github.com/Nutricalboii/Avora  
**Framework:** Next.js 16 (App Router) | **Styling:** Tailwind CSS v4 | **UI:** Lucide React Icons

---

## EXECUTIVE SUMMARY

**Current State:** Vibed—generic SaaS template feel. Missing clear business positioning. Fonts not loaded. No tailwind.config. Misaligned messaging (Services copy doesn't match three business lines).

**Target State:** Professional, intentional, confidence-forward. Clean typography. Proper design system. Clear positioning: **Avora Ventures = Outsourcing + Specialized Skill Hiring + AI Solutions + Data Annotations.** Every section reinforces this. Senior-dev execution (Apple/Google level—no "vibecoding" artifacts).

**Key Changes:**
- ✅ Fix business messaging (rename services, update copy, add data annotations explicitly)
- ✅ Create proper Tailwind config with design tokens (color palette, typography scale, spacing)
- ✅ Import fonts properly (Inter for body, Space Grotesk for headings)
- ✅ Refactor components: cleaner class structure, no redundancy, semantic HTML
- ✅ Redesign Services section (3 clear business lines, not abstract service categories)
- ✅ Add Ventures Studio visual (launch metrics, equity model callout)
- ✅ Improve Contact flow (add email validation, multi-step optional)
- ✅ Add Team section (social proof + credibility)
- ✅ Build comprehensive Blog/Insights section (thought leadership)
- ✅ SEO audit (meta tags, structured data, OG images)
- ✅ Performance optimizations (image lazy-loading, font subsetting, Next.js Image)
- ✅ Mobile refinement (touch targets, readability, form UX)

---

## PHASE 1: DESIGN SYSTEM & CONFIGURATION (CHECKPOINT: tailwind.config.ts + globals.css)

### Deliverables

1. **Create `tailwind.config.ts`**
   - Define color palette (primary: indigo-600, accent: sky-500, neutrals: slate, semantic: green/red/amber)
   - Typography scale (1rem base, 3.5xl max for headings)
   - Spacing scale (4px increments, max 96px)
   - Border radius system (xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 24px)
   - Shadow system (sm, md, lg, xl based on elevation)
   - Plugin: custom utilities for glass-morphism, gradient text, smooth transitions
   - Dark mode: built-in (class-based, no system preference detection for now)

2. **Update `src/app/globals.css`**
   - Import fonts: Inter (weights 400, 500, 600, 700) and Space Grotesk (600, 700) from Google Fonts CDN
   - Base layer CSS: reset, responsive font sizes, smooth scrolling
   - Component layer: form resets, button base, card base
   - Utility layer: utility overrides if needed
   - Remove hardcoded color references; use Tailwind design tokens only

3. **Create `src/lib/cn.ts`**
   - Export `cn()` utility (merge class names safely)
   - Used in all components for conditional classes

4. **Create `src/config/site.ts`**
   ```typescript
   export const siteConfig = {
     name: "Avora Ventures",
     description: "Outsourcing, specialized skill hiring, AI solutions, and data annotations.",
     url: "https://avora-3kyx.vercel.app",
     ogImage: "/og-image.png",
     links: {
       github: "https://github.com/Nutricalboii/Avora",
       twitter: "",
       linkedin: "",
     },
   };
   ```

5. **Create `src/config/services.ts`** (Data-driven services)
   ```typescript
   export const services = [
     {
       id: "outsourcing",
       title: "Specialized Outsourcing",
       subtitle: "Top-tier remote engineering talent",
       description: "Access verified senior engineers and specialized developers for your critical projects. From backend architects to DevOps specialists, we handle vetting, onboarding, and management.",
       metrics: "+500 engineers vetted",
       features: ["Technical vetting", "Agile integration", "24/7 support", "Transparent billing"],
       icon: "Users",
     },
     {
       id: "skill-hiring",
       title: "Specialized Skill Hiring",
       subtitle: "Fractional experts on-demand",
       description: "Hire domain experts for specific initiatives: ML engineers, security specialists, data architects. Pay only for the expertise you need, when you need it.",
       metrics: "5–50 day engagements",
       features: ["Deep expertise", "Project-focused", "No long-term commitment", "Seamless handoff"],
       icon: "Briefcase",
     },
     {
       id: "ai-solutions",
       title: "AI Solutions & Automation",
       subtitle: "Custom LLM pipelines & workflows",
       description: "Custom RAG systems, agentic workflows, and LLM integrations tailored to your ops. We build measurable AI that reduces overhead and unlocks efficiency.",
       metrics: "2–6 week MVP",
       features: ["RAG pipelines", "Agentic systems", "Data annotation", "Live deployment"],
       icon: "BrainCircuit",
     },
     {
       id: "data-annotations",
       title: "Data Annotation & Labeling",
       subtitle: "High-quality, at-scale training data",
       description: "Precision annotation for ML/AI training. Image segmentation, NER, classification, bounding boxes—managed QA, on-time delivery, HIPAA-compliant if needed.",
       metrics: "10M+ labels processed",
       features: ["Multilingual support", "Quality assurance", "Compliance-ready", "Fast turnaround"],
       icon: "Layers",
     },
   ];
   ```

### Checklist

- [ ] `tailwind.config.ts` created, all tokens defined
- [ ] `src/app/globals.css` refactored, fonts loading, no @theme hacks
- [ ] `src/lib/cn.ts` utility exported
- [ ] `src/config/site.ts` and `src/config/services.ts` populated
- [ ] No color class strings hardcoded; all in Tailwind config
- [ ] Fonts rendering correctly (check DevTools Network tab)
- [ ] npm run dev — no build errors

**Commit:** `chore: design system setup + tailwind config + font imports`

---

## PHASE 2: COMPONENT REFACTORING (CHECKPOINT: All landing components refactored, no hardcoded colors)

### Deliverables

1. **Refactor `src/components/Navbar.tsx`**
   - Remove hardcoded blue colors; use `bg-slate-900 text-white` etc.
   - Add mobile menu (hamburger + slide-out nav on mobile)
   - Sticky header: scroll down = shrink padding, hide tagline if exists
   - Links: Home, Services, Ventures, Contact (remove "Powered by" from nav, move to footer)
   - Button: "Get Started" → scrolls to Contact
   - Accessibility: ARIA labels, keyboard navigation (Tab through links)
   - Navbar height: 4rem (64px) fixed

2. **Refactor `src/components/Hero.tsx`**
   - Update headline: "Scale your operations. Powered by specialized talent and AI."
   - Subheadline: "Avora Ventures combines outsourcing, skill hiring, AI solutions, and data annotations into one unified platform."
   - Background glow: subtle indigo gradient, not overpowering
   - CTA button: "Start a Conversation" (not "Start a Project")
   - Remove tech stack banner; replace with 3-stat mini cards:
     - "500+ Verified Engineers"
     - "95% Client Retention"
     - "2–6 Week AI Implementation"
   - Typography: Use Space Grotesk for heading, proper line-height (1.1)

3. **Refactor `src/components/Services.tsx`** (MOST CRITICAL)
   - Remove old "Agentic AI", "Full-Stack Engineering", "Enterprise BPO" structure
   - Import `services` array from `src/config/services.ts`
   - Render 4 service cards (not 3)
   - Layout: 2x2 grid on desktop, 1x4 stacked on mobile
   - Each card:
     - Icon (Lucide) from config
     - Title + Subtitle (two-line heading)
     - Description (shorter, 1–2 sentences)
     - "Metrics" badge (e.g., "+500 engineers vetted")
     - Hover effect: subtle lift + border color change (indigo-500)
   - Remove large card spanning; all cards equal height
   - Section title: "What We Do" (pre-title) + "Our Capabilities" (heading)
   - Spacing: 32px gap between cards

4. **Refactor `src/components/Process.tsx`**
   - Keep "A.I.M. Framework" (good naming)
   - Update steps to align with services:
     - Discovery: "Map workflows & identify AI leverage points"
     - Implementation: "Build robust software & custom LLM pipelines"
     - Scaling: "Deploy & provide ongoing support"
   - Card design: number badge left side, title + description right side (row layout on desktop, column on mobile)
   - Divider lines between cards (vertical on desktop, horizontal on mobile)
   - Remove backdrop blur; use solid bg-white with subtle shadow

5. **Refactor `src/components/Ventures.tsx`**
   - Rename section: "Avora Ventures Studio"
   - Add pre-title: "Co-Founder Approach"
   - Add descriptive text: "We don't just build for clients. We co-create and scale high-growth tech companies. Equity-based partnerships for the right founders."
   - Display venture cards in 2-col grid (desktop) / 1-col (mobile)
   - Each venture card shows:
     - Venture name
     - 1-line description
     - Key metric (e.g., "+82% AI Referral Traffic")
     - Status badge (Alpha, Growing, Scaling)
   - Add placeholder for 3rd venture (NexusBuild or similar)

6. **Refactor `src/components/FAQ.tsx`**
   - Same structure, but improve readability
   - Update questions to address:
     - "What's included in outsourcing?"
     - "How fast can you deploy AI?"
     - "Can I hire for short-term projects?"
     - "How does equity work in the venture studio?"
   - Use Lucide ChevronDown for expand/collapse
   - Smooth transitions (max-height animation)
   - Keep open state in component (or move to Context if reused)

7. **Refactor `src/components/Contact.tsx`**
   - Update form fields:
     - Name (required)
     - Email (required, validation)
     - Company (optional)
     - Service Type (dropdown: Outsourcing / Skill Hiring / AI Solutions / Data Annotations)
     - Budget Range (optional dropdown: <$5k / $5–25k / $25–100k / >$100k)
     - Project Details (textarea)
   - Button: "Send Inquiry" (not "Send Message")
   - Success message: "Thank you! We'll reach out within 24 hours."
   - Error handling: Show error toast (not inline)
   - Form validation: client-side (email, required fields) + server-side (on backend later)
   - Accessibility: proper labels, error messages linked to inputs

8. **Create `src/components/Team.tsx`** (NEW)
   - Section title: "Built by" + team avatars (3–4 people)
   - Each person: avatar (initials or placeholder), name, title
   - Optional: short bio on hover
   - Purpose: credibility + human touch
   - If actual team photos not available, use placeholder avatars (initials)

9. **Create `src/components/Testimonials.tsx`** (NEW)
   - 3 client quotes (rotate or static)
   - Each: quote text, client name + company, logo if available
   - Minimal design: left border accent, clean typography
   - On desktop: 3-col grid; on mobile: stacked

10. **Create `src/components/CTA.tsx`** (NEW)
    - Sticky banner at bottom (desktop) or full-width section (mobile)
    - Headline: "Ready to scale?"
    - Subheadline: "Let's talk about how Avora can accelerate your growth."
    - Button: "Schedule a Call" or "Get Started"
    - Optional: add Calendly embed or mailto link

11. **Update `src/components/Footer.tsx`**
    - Company name + mission statement (1-line)
    - Sections: Products, Company, Resources, Legal
    - Links organized by category
    - Social links (LinkedIn, Twitter, GitHub)
    - Copyright: "© 2026 Avora Inc. All rights reserved."
    - Newsletter signup (optional, can be deferred to Phase 4)

### Checklist

- [ ] All components use Tailwind config colors (no hardcoded hex)
- [ ] No `className="accent-blue"` strings; use `className="text-indigo-600"` etc.
- [ ] Services data imported from config; 4 cards rendered
- [ ] Navbar mobile menu works (hamburger toggles)
- [ ] Hero stats replace tech stack banner
- [ ] Process cards have connecting lines (desktop)
- [ ] Contact form has Service Type dropdown + Budget Range
- [ ] Team + Testimonials sections added
- [ ] All form inputs have proper labels + error handling
- [ ] npm run dev — no TypeScript errors

**Commit:** `refactor: component cleanup + design system alignment + new sections`

---

## PHASE 3: SEO, METADATA & OPEN GRAPH (CHECKPOINT: SEO audit passed, meta tags correct)

### Deliverables

1. **Update `src/app/layout.tsx`**
   ```typescript
   import { siteConfig } from '@/config/site';
   
   export const metadata: Metadata = {
     title: `${siteConfig.name} | Outsourcing, Skill Hiring & AI Solutions`,
     description: siteConfig.description,
     openGraph: {
       title: siteConfig.name,
       description: siteConfig.description,
       url: siteConfig.url,
       siteName: siteConfig.name,
       images: [
         {
           url: `${siteConfig.url}/og-image.png`,
           width: 1200,
           height: 630,
         },
       ],
       type: 'website',
     },
     twitter: {
       card: 'summary_large_image',
       title: siteConfig.name,
       description: siteConfig.description,
       images: [`${siteConfig.url}/og-image.png`],
     },
     viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
     themeColor: '#4f46e5', // indigo-600
     canonical: siteConfig.url,
   };
   
   export default function RootLayout(...) { ... }
   ```

2. **Create `src/app/schema.ts`** (JSON-LD Structured Data)
   ```typescript
   export function generateSchema() {
     return {
       '@context': 'https://schema.org',
       '@type': 'Organization',
       name: 'Avora Ventures',
       url: 'https://avora-3kyx.vercel.app',
       logo: 'https://avora-3kyx.vercel.app/logo.png',
       description: 'Outsourcing, specialized skill hiring, AI solutions, and data annotations.',
       sameAs: ['https://linkedin.com/company/avora-ventures'],
       contact: {
         '@type': 'ContactPoint',
         contactType: 'Sales',
         email: 'contact@avora.ventures', // Update with real email
       },
     };
   }
   ```
   - Add `<script type="application/ld+json">` in layout

3. **Create OG Image** (`/public/og-image.png`)
   - Size: 1200x630px
   - Content: Avora logo, tagline, color scheme
   - Tool: Figma or Vercel OG Image Generator
   - Store in `/public/`

4. **Update Manifest** (`public/manifest.json`)
   - Add PWA metadata (optional for Phase 3, can defer to Phase 5)
   - name, short_name, description, icons, theme_color

5. **Verify SEO Checklist**
   - [ ] Meta title: 50–60 chars
   - [ ] Meta description: 120–160 chars
   - [ ] OG image correct size (1200x630)
   - [ ] Favicon in place (`/public/favicon.ico`)
   - [ ] JSON-LD schema valid (test with Google Schema Markup Tester)
   - [ ] Robots meta: `index, follow`
   - [ ] Canonical URL set
   - [ ] Headings hierarchy correct (h1, then h2, then h3)
   - [ ] No duplicate h1 tags

### Checklist

- [ ] `layout.tsx` exports proper Metadata object
- [ ] OG image created and placed in `/public/`
- [ ] JSON-LD schema added to layout
- [ ] schema.org/Organization validates correctly
- [ ] Favicon visible in browser tab
- [ ] Open Graph preview works (test with Meta Debugger)
- [ ] Twitter card renders correctly
- [ ] lighthouse audit score ≥90 (SEO section)

**Commit:** `seo: metadata, OG image, structured data`

---

## PHASE 4: PERFORMANCE & MOBILE OPTIMIZATION (CHECKPOINT: Lighthouse ≥95, mobile perfect)

### Deliverables

1. **Image Optimization**
   - Replace all hardcoded SVG text with proper `<Image>` from `next/image`
   - Add `alt` text to all images
   - Implement lazy-loading (automatic in Next.js Image)
   - Add `priority` prop to hero image (if any)
   - Optimize dashboard-mockup.png: reduce to <200KB

2. **Font Optimization**
   - Use `next/font` for Google Fonts (replaces manual CDN import)
   - Subset fonts: English characters only (reduces file size ~40%)
   - Preload fonts in `<head>` (Next.js auto-does this)
   - Test font loading: no FOUT (Flash of Unstyled Text)

3. **Code Splitting**
   - Add `dynamic()` imports for modals, heavy components
   - Lazy-load FAQ content (unfold only when opened)
   - Use `suspense` boundary for Contact form (if needed)

4. **CSS Optimization**
   - PurgeCSS auto-runs in Next.js; verify in build output
   - Inline critical CSS (Next.js handles)
   - Remove unused Tailwind utilities

5. **Mobile Responsiveness Audit**
   - Test on iPhone 12, 14 Pro, iPad, Android devices
   - Check:
     - Touch target minimum 44x44px (buttons, links)
     - Form inputs: 16px font (prevents auto-zoom on iOS)
     - Navigation: hamburger menu below 768px
     - Spacing: consistent 16px/24px gutters on mobile
     - Images: full-width on mobile, max-width on desktop
     - Modals: full-screen on mobile, centered on desktop
   - Test landscape orientation

6. **Accessibility Audit**
   - Color contrast: WCAG AA minimum (4.5:1 for text, 3:1 for UI)
   - Keyboard navigation: Tab through all interactive elements
   - Screen reader testing: use VoiceOver (Mac) or NVDA (Windows)
   - ARIA labels: buttons, icons, form fields
   - Headings hierarchy: h1 → h2 → h3 (no skips)
   - Form labels: `<label htmlFor>` linked to input `id`
   - Skip navigation link (for screen readers)

7. **Bundle Analysis**
   - Run `npm run build`
   - Check build output: no warnings
   - Verify bundle size: <200KB (JS)
   - Use `next/bundle-analyzer` if needed (add to dev deps)

### Checklist

- [ ] All images use `<Image>` component
- [ ] Font subset loaded; no FOUT
- [ ] Lighthouse Performance score ≥95
- [ ] Mobile responsiveness: all breakpoints tested
- [ ] Keyboard navigation: Tab through entire page works
- [ ] Form labels properly linked
- [ ] Color contrast: WCAG AA pass
- [ ] Build output: no errors, <200KB JS
- [ ] Touch targets: all ≥44x44px

**Commit:** `perf: image optimization, font subsetting, mobile responsiveness, a11y audit`

---

## PHASE 5: DEPLOYMENT, TESTING & POLISH (CHECKPOINT: QA passed, live on Vercel)

### Deliverables

1. **E2E Testing** (Optional, can add Playwright/Cypress)
   - Test: navigation, form submission, scrolling, mobile menu
   - Test: Google Apps Script webhook fires correctly
   - Test: success/error messages display

2. **Manual QA Checklist**
   - [ ] Hero section: button scrolls to Contact
   - [ ] Services: all 4 cards render, icons visible
   - [ ] Process: connecting lines appear on desktop
   - [ ] Ventures: cards display correctly
   - [ ] FAQ: expand/collapse works
   - [ ] Contact form: all fields validate, submit works
   - [ ] Footer: all links clickable
   - [ ] Mobile: no overflow, text readable, touch targets OK
   - [ ] Dark mode (if implemented): all text readable
   - [ ] Page load: <3 seconds on 4G throttle (Lighthouse)
   - [ ] Form submission: Google Apps Script receives data

3. **Vercel Deployment**
   - Push to GitHub `main` branch
   - Vercel auto-deploys
   - Verify: https://avora-3kyx.vercel.app loads correctly
   - Check: Environment variables set (if any)
   - Add custom domain (if available): avora.ventures or similar

4. **Post-Launch Checklist**
   - [ ] Verify Google Analytics tracking (if added)
   - [ ] Test form submission end-to-end
   - [ ] Monitor error logs (Sentry, if added)
   - [ ] Check Core Web Vitals (Page Speed Insights)
   - [ ] Verify OG image in social shares
   - [ ] Test email notifications (if set up)

5. **Documentation**
   - Update `README.md`:
     - Project name: "Avora Ventures"
     - Description: 2–3 sentences
     - Tech stack: Next.js 16, Tailwind CSS v4, React 19
     - Dev setup: `npm install && npm run dev`
     - Deployment: "Deployed on Vercel"
   - Create `DEPLOYMENT.md` (Google Apps Script setup, env vars, etc.)

### Checklist

- [ ] All manual QA tests pass
- [ ] Vercel deployment successful
- [ ] Core Web Vitals: CLS <0.1, LCP <2.5s, FID <100ms
- [ ] Form submission: live data in Google Sheet
- [ ] OG images render correctly
- [ ] Google Analytics (if used) tracking correctly
- [ ] README.md updated with accurate info
- [ ] No console errors in DevTools
- [ ] No TypeScript errors on build

**Commit:** `chore: deployment, QA, final polish`

---

## TECHNICAL IMPROVEMENTS SUMMARY

### Current Issues → Fixes

| Issue | Fix | Phase |
|-------|-----|-------|
| No `tailwind.config.ts` | Create full config with design tokens | Phase 1 |
| Hardcoded colors (accent-blue) | Move to Tailwind config, use semantic names | Phase 1 |
| Fonts not imported | Use `next/font` from Google Fonts | Phase 1 |
| Missing service descriptions | Data-drive from config; add 4th service | Phase 2 |
| Generic SaaS copy | Rewrite for Avora positioning | Phase 2 |
| No mobile menu | Add hamburger nav | Phase 2 |
| Missing Team/Social Proof | Add Team + Testimonials sections | Phase 2 |
| No SEO metadata | Add meta tags, OG image, JSON-LD | Phase 3 |
| Images not optimized | Use `next/image`, lazy-load, subset fonts | Phase 4 |
| Accessibility gaps | Add ARIA labels, fix contrast, test keyboard nav | Phase 4 |
| Manual Google Apps Script URL | Keep as-is (working); document in DEPLOYMENT.md | All |

---

## FILE STRUCTURE (FINAL)

```
avora/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/ [existing]
│   │   ├── dashboard/ [existing]
│   │   ├── login/ [existing]
│   │   ├── globals.css [REFACTORED]
│   │   ├── layout.tsx [UPDATED — metadata]
│   │   ├── page.tsx [UNCHANGED]
│   │   └── schema.ts [NEW]
│   ├── components/
│   │   ├── Navbar.tsx [REFACTORED]
│   │   ├── Hero.tsx [REFACTORED]
│   │   ├── Services.tsx [REFACTORED]
│   │   ├── Process.tsx [REFACTORED]
│   │   ├── Ventures.tsx [REFACTORED]
│   │   ├── FAQ.tsx [REFACTORED]
│   │   ├── Contact.tsx [REFACTORED]
│   │   ├── Footer.tsx [REFACTORED]
│   │   ├── Team.tsx [NEW]
│   │   ├── Testimonials.tsx [NEW]
│   │   ├── CTA.tsx [NEW]
│   │   └── dashboard/ [existing]
│   ├── config/
│   │   ├── site.ts [NEW]
│   │   └── services.ts [NEW]
│   └── lib/
│       ├── cn.ts [NEW]
│       └── [existing]
├── public/
│   ├── og-image.png [NEW]
│   ├── favicon.ico [ensure present]
│   └── [existing assets]
├── tailwind.config.ts [NEW]
├── next.config.ts [existing]
├── tsconfig.json [existing]
├── package.json [existing]
├── DEPLOYMENT.md [NEW]
└── README.md [UPDATED]
```

---

## COPY GUIDELINES (TONE & VOICE)

**Brand Voice:** Confident, direct, no fluff. Technical but accessible. Emphasize outcomes over features.

### Key Messaging

| Section | Current | Updated |
|---------|---------|---------|
| Hero Headline | "Measurable AI Systems. Engineered for Scale." | "Scale your operations. Powered by specialized talent and AI." |
| Hero Subheadline | Generic | "Avora Ventures combines outsourcing, skill hiring, AI solutions, and data annotations into one unified platform." |
| Services | "Agentic AI & LLM Integration", "Full-Stack Engineering", "Enterprise BPO" | "Outsourcing", "Specialized Skill Hiring", "AI Solutions", "Data Annotations" |
| CTA Button | "Start a Project" | "Start a Conversation" |
| Contact Button | "Send Message" | "Send Inquiry" |
| Footer Copyright | "© 2026 Avora Inc." | "© 2026 Avora Ventures Inc. All rights reserved." |

---

## DESIGN TOKENS (Tailwind Config Reference)

### Colors
- **Primary:** `indigo-600` (action, CTAs)
- **Secondary:** `sky-500` (accents, hover)
- **Neutrals:** `slate-50`, `slate-100`, ..., `slate-900`
- **Success:** `green-600`
- **Error:** `red-600`
- **Warning:** `amber-600`

### Typography
- **Heading Font:** Space Grotesk (600, 700)
  - h1: 3.5rem (56px), weight 700
  - h2: 2.25rem (36px), weight 700
  - h3: 1.875rem (30px), weight 600
- **Body Font:** Inter (400, 500, 600)
  - Base: 1rem (16px), weight 400
  - Emphasis: weight 500, 600
  - Line-height: 1.6 for body, 1.1 for headings

### Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px

### Shadow System
- sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- md: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- lg: `0 10px 15px -3px rgb(0 0 0 / 0.1)`
- xl: `0 20px 25px -5px rgb(0 0 0 / 0.1)`

### Border Radius
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- full: 9999px (pills, circles)

---

## GITHUB COMMIT STRATEGY

| Phase | Commits | Example |
|-------|---------|---------|
| Phase 1 | 1 | `chore: design system setup + tailwind config + font imports` |
| Phase 2 | 1 | `refactor: component cleanup + design system alignment + new sections` |
| Phase 3 | 1 | `seo: metadata, OG image, structured data` |
| Phase 4 | 1 | `perf: image optimization, font subsetting, mobile responsiveness, a11y audit` |
| Phase 5 | 1 | `chore: deployment, QA, final polish` |

---

## SUCCESS METRICS

### Launch Criteria
- ✅ Lighthouse Score: ≥95 (Performance), ≥95 (Accessibility), ≥90 (Best Practices), ≥90 (SEO)
- ✅ Mobile responsiveness: Pass on iPhone 12, iPad, Android
- ✅ Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- ✅ Form submission: Google Apps Script receives data correctly
- ✅ Zero console errors in production
- ✅ All copy updated to reflect Avora Ventures positioning

### Post-Launch Metrics
- Track form submissions (source, service type, budget)
- Monitor bounce rate on hero section
- Measure time-on-page per section
- A/B test CTA button text (if analytics added)

---

## DEFERRED ITEMS (PHASE 6+)

- [ ] Newsletter signup (email integration)
- [ ] Blog/Resources section (requires CMS or static content)
- [ ] Dark mode toggle (requires state management, optional)
- [ ] Case studies/client testimonials with video (requires media assets)
- [ ] Pricing page (if offering tiered services)
- [ ] Client login dashboard (Phase 2 foundation, deferred)
- [ ] Analytics integration (Google Analytics, Mixpanel)
- [ ] Chatbot/Intercom for support

---

## QUESTIONS & NOTES

1. **Google Apps Script Email:** Current URL hardcoded in Contact.tsx. Keep as-is? Confirm it's live and receiving data.
2. **Team Photos:** Do you have real team photos, or should we use placeholder avatars (initials)?
3. **Testimonials:** Do you have client quotes/logos? If not, we can create placeholder testimonials for UX polish.
4. **Custom Domain:** Should this be `avora.ventures` or `avora-ventures.com`? Deferred to Phase 5.
5. **Dark Mode:** Needed? Can add toggle in Phase 4 if desired.
6. **Blog:** Should we add a `/blog` route in Phase 2 or defer to Phase 6?
7. **Analytics:** Which tool? (Google Analytics, Mixpanel, Plausible?) Can add in Phase 4.

---

## NEXT STEPS

1. **Confirm this PRD** with stakeholders
2. **Start Phase 1:** Create `tailwind.config.ts`, update fonts, set up design tokens
3. **Weekly commits:** One per phase, tested locally before push
4. **QA each phase** before moving to next
5. **Deploy to Vercel** at end of Phase 5

---

**Document Created:** June 2026  
**Last Updated:** June 25, 2026  
**Owner:** Vaibhav Sharma (@Nutricalboii)  
**Status:** Ready for Antigravity IDE Integration
