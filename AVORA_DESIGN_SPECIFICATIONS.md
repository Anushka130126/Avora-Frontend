# AVORA WEBSITE DESIGN SPECIFICATIONS

**Detailed visual specifications for exact implementation | Use with implementation reference code**

---

## TYPOGRAPHY SPECIFICATIONS

### Font Stack
```
Headings: "Space Grotesk", system-ui, sans-serif (600, 700 weights)
Body: "Inter", system-ui, sans-serif (400, 500, 600 weights)
Monospace: "Menlo", "Monaco", monospace (future: code blocks)
```

### Font Sizes & Line Heights

| Usage | Size | Line Height | Weight | Letter Spacing |
|-------|------|-------------|--------|----------------|
| h1 (Hero) | 56px | 1.1 | 700 | -0.02em |
| h2 (Section) | 36px | 1.1 | 700 | -0.02em |
| h3 (Card Title) | 24px | 1.1 | 600 | -0.01em |
| h4 (Subsection) | 20px | 1.2 | 600 | 0 |
| p (Body) | 16px | 1.6 | 400 | 0 |
| p (Large) | 18px | 1.6 | 400 | 0 |
| p (Small) | 14px | 1.5 | 400 | 0 |
| label (Form) | 14px | 1.5 | 500 | 0 |
| button | 16px | 1.5 | 500 | 0 |
| badge | 12px | 1.25 | 600 | 0.05em |
| nav | 14px | 1.5 | 500 | 0 |

### Font Weight Map
```
Regular: 400 (body text, descriptions)
Medium: 500 (nav, labels, emphasis)
Semibold: 600 (headings, buttons, strong emphasis)
Bold: 700 (headings, accents)
```

---

## SPACING & SIZING SYSTEM

### Base Unit
**4px** (All measurements derived from multiples of 4px)

### Spacing Scale
```
1 = 4px    | gap, padding, margin for tight spacing
2 = 8px    | small internal spacing (button padding)
3 = 12px   | standard internal spacing
4 = 16px   | section padding, medium gaps
5 = 20px   | content spacing
6 = 24px   | card padding, section margins
8 = 32px   | large gaps between elements
10 = 40px  | section vertical spacing
12 = 48px  | large gaps
16 = 64px  | hero section spacing
20 = 80px  | major section spacing
24 = 96px  | full-page spacing
```

### Common Implementations
```
Page padding: px-4 (16px) mobile, px-6 (24px) tablet, px-8 (32px) desktop
Section vertical: py-16 (64px) mobile, py-20 (80px) tablet, py-28 (112px) desktop
Card padding: p-6 (24px) standard, p-8 (32px) large
Button padding: px-4 py-2 (small), px-6 py-3 (medium), px-8 py-4 (large)
Gap between cards: gap-4 (16px), gap-6 (24px), gap-8 (32px)
```

---

## RESPONSIVE BREAKPOINTS

### Tailwind Breakpoints (Mobile-First)
```
default  = <640px   (mobile)
sm       = ≥640px   (landscape phone)
md       = ≥768px   (tablet)
lg       = ≥1024px  (desktop)
xl       = ≥1280px  (large desktop)
2xl      = ≥1536px  (extra large)
```

### Design Breakpoints
```
Mobile:      320–767px   (all phones, small tablets)
Tablet:      768–1023px  (iPad, large phones landscape)
Desktop:     1024px+     (laptops, desktops)
Wide:        1280px+     (large monitors)
Max:         1400px+     (limit content width)
```

### Common Responsive Patterns
```
Display hidden:     `hidden md:flex` (show on tablet+)
Grid change:        `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
Text size change:   `text-lg md:text-xl lg:text-2xl`
Padding change:     `px-4 md:px-6 lg:px-8`
Width containers:   `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
```

---

## COLOR PALETTE WITH USAGE

### Primary Colors (Indigo)
```
primary-50:   #eef2ff  → Light backgrounds, disabled states
primary-100:  #e0e7ff  → Hover backgrounds
primary-200:  #c7d2fe  → Borders on hover
primary-300:  #a5b4fc  → Subtle accents
primary-400:  #818cf8  → Secondary hover
primary-500:  #6366f1  → Alternate primary
primary-600:  #4f46e5  → PRIMARY USE (buttons, links, accents)
primary-700:  #4338ca  → Hover state for primary-600
primary-800:  #3730a3  → Active state, dark variant
primary-900:  #312e81  → Darkest variant (rare)
```

### Secondary Colors (Sky/Cyan)
```
secondary-400: #38bdf8  → Light accent, hover states
secondary-500: #0ea5e9  → Secondary accent
secondary-600: #0284c7  → SECONDARY USE (small accents)
secondary-700: #0369a1  → Darker secondary
```

### Neutral Colors (Slate)
```
slate-50:   #f8fafc  → Page background, section backgrounds
slate-100:  #f1f5f9  → Card backgrounds, hover states
slate-200:  #e2e8f0  → Borders, dividers
slate-300:  #cbd5e1  → Disabled borders
slate-400:  #94a3b8  → Placeholder text
slate-500:  #64748b  → Secondary text
slate-600:  #475569  → Body text (main)
slate-700:  #334155  → Strong text, headings
slate-800:  #1e293b  → Dark text
slate-900:  #0f172a  → DARKEST TEXT (headings, primary text)
```

### Semantic Status Colors
```
green-600:  #16a34a  → Success messages, check marks
red-600:    #dc2626  → Errors, warnings, destructive actions
amber-600:  #d97706  → Warnings, caution
blue-600:   #2563eb  → Info badges
```

### Usage Guidelines
| Component | Color | Notes |
|-----------|-------|-------|
| Primary CTA Button | primary-600 | Hover: primary-700 |
| Secondary Button | slate-100 | Hover: slate-200 |
| Links | primary-600 | Hover: primary-700, underline on hover |
| H1/H2 Headings | slate-900 | h1 can include gradient |
| Body Text | slate-600 | Use 600 for main, 500 for emphasis |
| Small Text/Caption | slate-500 | Labels, hints, secondary info |
| Section Background | slate-50 | Alternates with white |
| Card Background | white or slate-100 | white for main, slate-100 for subtle |
| Border | slate-200 | Use for subtle dividers |
| Border (hover) | primary-200 | When card is interactive |
| Icon | primary-600 | Match primary color |
| Icon Background | primary-50 | Light background for icon container |
| Badge Background | primary-50 | Metrics, tags |
| Badge Text | primary-700 | Dark on light background |

---

## BORDER RADIUS SYSTEM

### Usage
```
xs  = 4px    → Small, minimal rounding (rare)
sm  = 8px    → Slight rounding
md  = 12px   → Standard form inputs, small buttons
lg  = 16px   → Cards, modals, containers
xl  = 24px   → Large cards, feature sections
2xl = 32px   → Extra large containers (rare)
full = 9999px → Circles, pills, round buttons
```

### Component Defaults
```
Buttons:        rounded-lg (16px) for standard, rounded-full for pill
Forms:          rounded-lg (16px)
Cards:          rounded-xl (24px) standard, rounded-2xl (32px) feature
Icons:          rounded-xl (24px) in containers
Badges:         rounded-full (9999px)
Containers:     rounded-2xl (32px) for hero sections
Modals:         rounded-2xl (32px)
```

---

## SHADOW SYSTEM

### Shadow Depths
```
xs  = 0 1px 2px 0 rgba(0,0,0,0.05)          [barely visible]
sm  = 0 1px 3px 0 rgba(0,0,0,0.1)           [subtle]
md  = 0 4px 6px -1px rgba(0,0,0,0.1)        [standard]
lg  = 0 10px 15px -3px rgba(0,0,0,0.1)      [elevated]
xl  = 0 20px 25px -5px rgba(0,0,0,0.1)      [floating]
2xl = 0 25px 50px -12px rgba(0,0,0,0.25)    [modal/overlay]
```

### Component Shadow Application
```
Default state:     shadow-sm (cards at rest)
Hover state:       shadow-lg (cards on hover)
Interactive:       shadow-md (buttons)
Modal/Overlay:     shadow-2xl (floating elements)
None:              shadow-none (flat design elements)
```

---

## BORDER & OUTLINE SPECIFICATIONS

### Border Width
```
Default: 1px (all borders unless specified)
Thick:   2px (rare, emphasis)
```

### Border Colors
```
Default:    border-slate-200 (#e2e8f0)
Light:      border-slate-100 (#f1f5f9)
Hover:      border-primary-200 (#c7d2fe)
Error:      border-red-300 (#fca5a5)
Focus:      border-primary-600 (#4f46e5)
```

### Focus Ring Specifications
```
Ring width:      2px
Ring color:      primary-500 / 0.1 (10% opacity)
Focus appearance: ring-2 ring-primary-500/10 border-primary-600
Form focus:      focus:ring-2 focus:ring-primary-500/10 focus:border-primary-600
```

---

## COMPONENT SPECIFICATIONS

### Buttons

#### Small Button
```
Padding:  px-3 py-1
Font:     text-sm (14px) medium
Height:   ~32px
Width:    min-width auto
Radius:   rounded-lg
Shadow:   shadow-sm
```

#### Medium Button (Standard)
```
Padding:  px-6 py-3
Font:     text-base (16px) medium
Height:   ~44px (min touch target)
Width:    auto (inline), full (block)
Radius:   rounded-lg
Shadow:   shadow-md
```

#### Large Button
```
Padding:  px-8 py-4
Font:     text-lg (18px) medium
Height:   ~48–56px
Width:    auto or full
Radius:   rounded-lg
Shadow:   shadow-lg
```

#### Pill/Round Button
```
Same as above + rounded-full
Used for: primary CTAs, secondary actions
```

#### States
```
Default:  bg-primary-600 text-white shadow-md
Hover:    bg-primary-700 shadow-lg (scale 1.02 optional)
Active:   bg-primary-800
Disabled: opacity-50 cursor-not-allowed
Focus:    ring-2 ring-primary-500/10
```

### Form Inputs

#### Text Input / Textarea
```
Padding:    px-4 py-3 (internal)
Font:       text-base (16px) regular
Height:     44px (input), variable (textarea)
Border:     1px border-slate-200
Radius:     rounded-lg
Background: bg-white or bg-slate-50
Focus:      border-primary-600 ring-2 ring-primary-500/10
Placeholder: text-slate-400
Label:      above input, block, text-sm medium, mb-2
```

#### Select Dropdown
```
Same as text input
Add caret icon (chevron down) on right
Padding right: slightly more to account for icon
```

#### Checkbox / Radio
```
Size:       24x24px (44x44 touch target with label)
Color:      primary-600
Border:     border-slate-300 (unchecked)
Focus:      ring-2 ring-primary-500/10
```

### Cards

#### Standard Card
```
Padding:    p-6 (24px internal)
Border:     1px border-slate-200
Radius:     rounded-xl (24px)
Background: bg-white
Shadow:     shadow-sm
Hover:      shadow-lg border-primary-200 (if interactive)
```

#### Feature Card (Larger)
```
Padding:    p-8 (32px internal)
Border:     1px border-slate-200
Radius:     rounded-2xl (32px)
Background: bg-white
Shadow:     shadow-md
```

#### Glass Card (Optional)
```
Background: bg-white/10
Border:     1px border-white/20
Backdrop:   backdrop-blur-xl
Radius:     rounded-2xl
Shadow:     shadow-lg
```

### Hero Section
```
Padding top:     pt-32 mobile, pt-40 desktop
Padding bottom:  pb-24 mobile, pb-32 desktop
Max width:       100vw (full bleed)
Container:       max-w-7xl mx-auto
Headline:        h1 (56px), gradient accent on span
Subheadline:     p-lg (18px), slate-600
CTA button:      btn-primary btn-lg btn-round
Stats row:       3-col grid (mobile: 1-col)
```

### Section
```
Padding vertical: py-16 mobile, py-20 tablet, py-28 desktop
Padding horizontal: px-4 mobile, px-6 tablet, px-8 desktop
Max content width: max-w-7xl mx-auto
Background:       white or slate-50 (alternating)
```

### Navigation Bar
```
Height:          64px (h-16)
Position:        fixed top-0 z-50
Background:      bg-white/70 backdrop-blur-xl
Border:          border-b border-slate-200/50
Logo:            text-2xl font-bold font-heading
Logo area:       flex-shrink-0
Nav links:       hidden md:flex gap-8
Link styling:    text-sm font-medium slate-600, hover: slate-900
CTA button:      btn btn-primary btn-sm
Mobile menu:     full-width below navbar, bg-white shadow-lg
```

### Modal / Overlay
```
Position:        fixed inset-0
Backdrop:        bg-black/50
Content:         bg-white max-w-2xl mx-auto rounded-2xl shadow-2xl
Padding:         p-8 (32px)
Close button:    top-right, size 24x24
Animation:       fade-in 0.3s ease-out
```

---

## SPACING PATTERNS

### Page Layout
```
Hero:           Full bleed (no side padding at mobile)
Section:        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Content max:    max-w-3xl for narrow, max-w-5xl for medium
Gutter:         16px mobile, 24px tablet, 32px desktop
```

### Interior Component Spacing
```
Section top/bottom:     py-16 (64px) base, py-28 (112px) desktop
Component top/bottom:   my-8 (32px), my-12 (48px), my-16 (64px)
Between sections:       32–64px vertical
Headline to subhead:    mb-6 (24px)
Subhead to content:     mb-8 (32px)
Element to element:     gap-4 (16px), gap-6 (24px), gap-8 (32px)
```

### Card Interior
```
Icon to title:          mb-6 (24px)
Title to description:   mb-3 (12px) tight, mb-4 (16px) loose
Description to CTA:     mt-6 (24px)
List items gap:         gap-2 (8px) tight, gap-3 (12px) standard
Divider to content:     pt-4 (16px), pt-6 (24px)
```

### Form Spacing
```
Field to field:         gap-6 (24px)
Label to input:         mb-2 (8px)
Form section:           mb-6 (24px)
Input internal:         px-4 py-3 (16px/12px)
Button full-width:      py-4 (16px padding, 44px+ height)
Error message:          mt-2 (8px) below field
```

---

## ANIMATION & TRANSITION SPECIFICATIONS

### Duration
```
Fast:       150ms (for hover, focus)
Standard:   300ms (for interactive elements)
Slow:       500ms (for page transitions, modals)
```

### Easing Functions
```
ease-out:       cubic-bezier(0.16, 1, 0.3, 1)      [natural, snappy]
ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1)      [smooth, controlled]
ease-linear:    linear                              [consistent speed]
```

### Common Transitions
```
Button:         hover:bg-primary-700 transition-colors duration-200
Hover lift:     hover:-translate-y-1 transition-transform duration-300
Hover shadow:   hover:shadow-lg transition-shadow duration-300
Focus ring:     focus:ring-2 focus:ring-primary-500/10 transition-all duration-200
Scale up:       hover:scale-105 transition-transform duration-300
```

### Keyframe Animations
```
Fade in:        opacity 0→1 over 300ms
Slide down:     translateY -10px→0 + opacity 0→1 over 300ms
Fade out:       opacity 1→0 over 300ms
Spin (loader):  rotate 0→360° over 1s infinite
```

---

## ICON SPECIFICATIONS

### Icon Sizing
```
Navbar/Nav:     w-5 h-5 (20px) or w-6 h-6 (24px)
Button icon:    w-5 h-5 (20px) inside button
Card icon:      w-8 h-8 (32px) large, w-6 h-6 (24px) medium
List icon:      w-5 h-5 (20px) next to text
Avatar:         w-8 h-8 (32px) to w-12 h-12 (48px)
```

### Icon Colors
```
Primary:        text-primary-600
Secondary:      text-slate-600
Accent:         text-secondary-600
Neutral:        text-slate-400
Success:        text-green-600
Error:          text-red-600
On light bg:    text-slate-900
On dark bg:     text-white
```

### Icon Containers
```
Padding:        w-10 h-10, w-12 h-12, w-14 h-14 (40px, 48px, 56px)
Border:         1px border-primary-200, border-slate-200
Radius:         rounded-lg (16px), rounded-xl (24px)
Background:     bg-primary-50, bg-slate-100
Icon inside:    centered with flexbox
```

---

## MOBILE-SPECIFIC ADJUSTMENTS

### Touch Targets
```
Minimum:    44x44px (WCAG AAA standard)
Comfortable: 48–56px
Spacing:    Min 8px between touch targets
```

### Text Readability
```
Minimum font: 16px for body (prevents auto-zoom)
Line height: 1.5–1.6 for mobile
Column width: max 70 characters ideally
```

### Layout Changes
```
Mobile sections:  1-column grid
Tablet sections:  2-column grid
Desktop sections: 3-column grid
Navigation:       Hamburger menu < 768px
Modals:          Full-screen < 640px
Sidebars:        Collapsed/drawer < 768px
```

### Spacing Adjustments
```
Mobile padding:   px-4 (16px) standard
Tablet padding:   px-6 (24px)
Desktop padding:  px-8 (32px)
Section gap:      gap-4 (16px) mobile, gap-6 (24px) desktop
```

---

## RESPONSIVE IMAGE GUIDELINES

### Hero Image
```
Mobile:  100% width, height auto
Desktop: max-width 800px, center
Format:  WebP with JPEG fallback
Size:    Optimize to <200KB
```

### Card Images
```
Aspect:  Maintain consistent (16:9, 4:3, 1:1)
Max:     100% of container width
Lazy:    Load on scroll (Next.js Image)
Alt:     Always include descriptive alt text
```

### Background Images / Gradients
```
Background size: cover, contain, or auto
Background position: center, top, bottom
Fallback color: Provide solid color backup
```

---

## ACCESSIBILITY SPECIFICATIONS

### Color Contrast (WCAG AA Minimum)
```
Large text (18px+):     3:1 ratio
Normal text (14–18px):  4.5:1 ratio
UI components:          3:1 ratio
```

### Current Contrast Values
```
slate-900 on white:         21:1 ✓ (excellent)
slate-600 on white:         6.5:1 ✓ (excellent)
primary-600 on white:       7.5:1 ✓ (excellent)
slate-400 on white:         3.9:1 ✓ (AA passing, but avoid)
slate-500 on slate-50:      7.2:1 ✓ (excellent)
```

### Focus Indicators
```
Keyboard focus:  ring-2 ring-primary-500/10 + border-primary-600
Visibility:      Always visible, minimum 2px
Color:           Primary color (high contrast)
```

### Keyboard Navigation
```
Tab order:       Logical reading order
Skip link:       Option to skip to main content
All interactive: Button, link, input, select must be keyboard accessible
```

---

## PERFORMANCE SPECIFICATIONS

### Image Optimization
```
JPEG: Quality 75–85% (standard photos)
PNG:  Use for graphics with transparency
WebP: Primary format with fallback
Size: <200KB for hero image, <50KB for cards
```

### Font Loading
```
Strategy:     Subset fonts (Latin only), preload via Link headers
Fallback:     System font stack ready
FOUT:         Acceptable (Flash of Unstyled Text OK)
```

### CSS/JS Bundle
```
CSS:  <50KB (Tailwind purged)
JS:   <200KB total (Next.js optimized)
```

### Core Web Vitals Targets
```
LCP (Largest Contentful Paint):  <2.5s
FID (First Input Delay):         <100ms
CLS (Cumulative Layout Shift):   <0.1
```

---

## DARK MODE SPECIFICATION (IF IMPLEMENTED)

### Color Mappings
```
White backgrounds → slate-900 (dark background)
slate-50 bg → slate-800
slate-100 bg → slate-700
Text: slate-900 → white
Text: slate-600 → slate-300
Primary buttons: Same (primary-600 works on dark too)
```

### Toggle Behavior
```
Toggle location:    Top-right navbar (optional)
Storage:           localStorage preference
Default:           Follow system preference OR light mode
Transition:        Instant (no animation delay)
```

---

## SUMMARY TABLE: QUICK REFERENCE

| Component | Size | Padding | Radius | Shadow | Notes |
|-----------|------|---------|--------|--------|-------|
| Button (small) | h-8 px-3 py-1 | - | rounded-lg | shadow-sm | text-sm |
| Button (medium) | h-11 px-6 py-3 | - | rounded-lg | shadow-md | text-base |
| Button (large) | h-12 px-8 py-4 | - | rounded-lg | shadow-lg | text-lg |
| Input | h-11 px-4 py-3 | - | rounded-lg | none | text-base |
| Card | - | p-6 | rounded-xl | shadow-sm | hover: shadow-lg |
| Feature card | - | p-8 | rounded-2xl | shadow-md | larger |
| Section | py-16 md:py-28 | px-4 md:px-6 lg:px-8 | - | - | alternating bg |
| Navbar | h-16 | px-4 md:px-6 lg:px-8 | - | none | border-b |
| Icon | w-5 h-5 | - | - | - | in button/nav |
| Icon container | w-12 h-12 | - | rounded-xl | none | p-2 flex center |
| Badge | px-3 py-1 | - | rounded-full | none | text-xs |
| Modal | - | p-8 | rounded-2xl | shadow-2xl | max-w-2xl |

---

**This specification should be referenced while implementing. All measurements are exact. Test on actual devices before finalizing. Accessibility guidelines are non-negotiable.**
