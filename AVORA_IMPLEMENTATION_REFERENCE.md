# AVORA WEBSITE IMPLEMENTATION REFERENCE

**Quick Reference for Phase 1–5 Implementation | Use alongside AVORA_WEBSITE_OVERHAUL_PRD.md**

---

## PART 1: TAILWIND CONFIG & DESIGN TOKENS

### `tailwind.config.ts` (Complete)

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'primary': {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5', // Use this
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        // Secondary
        'secondary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7', // Use this
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
        // Semantic (copy from slate)
        'slate': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Status
        'success': '#16a34a', // green-600
        'error': '#dc2626', // red-600
        'warning': '#d97706', // amber-600
        'info': '#0284c7', // sky-700
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Base: 16px (1rem)
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        // 4px base unit
        0: '0',
        1: '0.25rem', // 4px
        2: '0.5rem', // 8px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        5: '1.25rem', // 20px
        6: '1.5rem', // 24px
        8: '2rem', // 32px
        10: '2.5rem', // 40px
        12: '3rem', // 48px
        16: '4rem', // 64px
        20: '5rem', // 80px
        24: '6rem', // 96px
      },
      borderRadius: {
        'xs': '0.25rem', // 4px
        'sm': '0.5rem', // 8px
        'md': '0.75rem', // 12px
        'lg': '1rem', // 16px
        'xl': '1.5rem', // 24px
        '2xl': '2rem', // 32px
        'full': '9999px',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        // Custom
        'glow': '0 0 30px rgb(79 70 229 / 0.3)',
        'glow-sm': '0 0 15px rgb(79 70 229 / 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
        'slide-in': 'slide-in 0.3s ease-in-out',
      },
    },
  },
  plugins: [
    // Custom utilities if needed
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          '@apply bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent':
            {},
        },
        '.glass': {
          '@apply bg-white/10 backdrop-blur-xl border border-white/20':
            {},
        },
        '.card': {
          '@apply rounded-lg border border-slate-200 bg-white shadow-sm':
            {},
        },
      });
    },
  ],
} satisfies Config;
```

### `src/app/globals.css` (Complete Refactor)

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap');

@layer base {
  :root {
    --font-inter: 'Inter', sans-serif;
    --font-space-grotesk: 'Space Grotesk', sans-serif;
    --background: #f8fafc;
    --foreground: #0f172a;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #0f172a;
      --foreground: #f8fafc;
    }
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-inter);
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-space-grotesk);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  h1 {
    @apply text-6xl font-bold;
  }

  h2 {
    @apply text-4xl font-bold;
  }

  h3 {
    @apply text-2xl font-bold;
  }

  h4 {
    @apply text-xl font-semibold;
  }

  /* Form Reset */
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: 1rem;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="number"],
  textarea,
  select {
    @apply w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-500/10 transition-all outline-none;
  }

  input[type="checkbox"],
  input[type="radio"] {
    @apply cursor-pointer;
  }

  button {
    @apply font-medium transition-all duration-200 ease-out;
  }

  a {
    @apply text-primary-600 hover:text-primary-700 transition-colors;
  }
}

@layer components {
  /* Button Variants */
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ease-out;
  }

  .btn-primary {
    @apply bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed;
  }

  .btn-secondary {
    @apply bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed;
  }

  .btn-ghost {
    @apply text-slate-600 hover:text-slate-900 hover:bg-slate-50 disabled:opacity-50;
  }

  .btn-round {
    @apply rounded-full;
  }

  .btn-lg {
    @apply px-8 py-3 text-lg;
  }

  .btn-sm {
    @apply px-3 py-1 text-sm;
  }

  /* Card Variants */
  .card {
    @apply rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow;
  }

  .card-glass {
    @apply rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow;
  }

  /* Typography */
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent;
  }

  /* Layout */
  .section {
    @apply py-20 md:py-28;
  }

  .container-max {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  /* Utilities */
  .blur-glow {
    @apply absolute rounded-full blur-[100px] pointer-events-none -z-10;
  }
}

/* Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
```

### `src/lib/cn.ts` (Utility Function)

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## PART 2: CONFIG FILES & CONSTANTS

### `src/config/site.ts`

```typescript
export const siteConfig = {
  name: 'Avora Ventures',
  shortName: 'Avora',
  description:
    'Scale your operations with specialized outsourcing, skill hiring, AI solutions, and data annotations.',
  url: 'https://avora-3kyx.vercel.app',
  email: 'contact@avora.ventures', // Update with real email
  phone: '', // Optional
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  links: {
    github: 'https://github.com/Nutricalboii/Avora',
    twitter: '', // Add if available
    linkedin: '', // Add if available
  },
  nav: [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Ventures', href: '#ventures' },
    { label: 'Contact', href: '#contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
```

### `src/config/services.ts` (Data-Driven Services)

```typescript
import { LucideIcon } from 'lucide-react';
import { Users, Briefcase, BrainCircuit, Layers } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  metrics: string;
  features: string[];
  iconName: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'outsourcing',
    title: 'Specialized Outsourcing',
    subtitle: 'Top-tier remote engineering talent',
    description:
      'Access verified senior engineers and specialized developers for your critical projects. From backend architects to DevOps specialists, we handle vetting, onboarding, and management.',
    longDescription:
      'Whether you need a full engineering team or specific specialists, Avora provides rigorously vetted talent. We manage the hiring, onboarding, and performance metrics so you can focus on building.',
    metrics: '+500 engineers vetted',
    features: [
      'Technical vetting & screening',
      'Agile integration & sprint management',
      '24/7 support & backup coverage',
      'Transparent billing (hourly/monthly)',
    ],
    iconName: 'Users',
    icon: Users,
  },
  {
    id: 'skill-hiring',
    title: 'Specialized Skill Hiring',
    subtitle: 'Fractional experts on-demand',
    description:
      'Hire domain experts for specific initiatives: ML engineers, security specialists, data architects. Pay only for the expertise you need, when you need it.',
    longDescription:
      'For critical projects requiring specialized expertise, we provide fractional experts without long-term commitment. Perfect for proof-of-concepts, security audits, or niche technical challenges.',
    metrics: '5–50 day engagements',
    features: [
      'Deep domain expertise',
      'Project-focused deliverables',
      'No long-term commitment',
      'Seamless knowledge handoff',
    ],
    iconName: 'Briefcase',
    icon: Briefcase,
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Automation',
    subtitle: 'Custom LLM pipelines & workflows',
    description:
      'Custom RAG systems, agentic workflows, and LLM integrations tailored to your operations. We build measurable AI that reduces overhead and unlocks efficiency.',
    longDescription:
      'From custom RAG pipelines to autonomous agents, we integrate AI into your core workflows. Every solution is measurable, production-hardened, and designed for immediate ROI.',
    metrics: '2–6 week MVP',
    features: [
      'Retrieval-Augmented Generation (RAG)',
      'Agentic AI workflows',
      'LLM integrations & fine-tuning',
      'Live production deployment',
    ],
    iconName: 'BrainCircuit',
    icon: BrainCircuit,
  },
  {
    id: 'data-annotations',
    title: 'Data Annotation & Labeling',
    subtitle: 'High-quality training data at scale',
    description:
      'Precision annotation for ML/AI training. Image segmentation, NER, classification, bounding boxes—managed QA, on-time delivery, HIPAA-compliant if needed.',
    longDescription:
      'Quality training data is the foundation of great AI models. We provide precisely annotated datasets with rigorous quality assurance and compliance options (HIPAA, SOC2).',
    metrics: '10M+ labels processed',
    features: [
      'Multilingual annotation support',
      'Quality assurance & auditing',
      'Compliance-ready (HIPAA, SOC2)',
      'Fast turnaround & scalability',
    ],
    iconName: 'Layers',
    icon: Layers,
  },
];

export const process = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We map your workflows, identify AI leverage points, and build a custom roadmap to maximize operational efficiency and ROI.',
  },
  {
    number: '02',
    title: 'Implementation & Integration',
    description:
      'Our team builds robust, scalable solutions and integrates custom LLM pipelines, agents, or outsourced talent seamlessly into your stack.',
  },
  {
    number: '03',
    title: 'Deployment & Scale',
    description:
      'We launch to production, provide ongoing support, and scale your solution as your business grows—no surprises, no ramp-up delays.',
  },
];
```

---

## PART 3: COMPONENT EXAMPLES

### `src/components/Navbar.tsx` (Refactored)

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold font-heading text-slate-900 hover:text-primary-600 transition-colors"
            >
              {siteConfig.shortName}
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href.replace('#', ''))}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:inline-flex btn btn-primary btn-sm"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="flex flex-col gap-1 p-4">
            {siteConfig.nav.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href.replace('#', ''))}
                className="text-left px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 w-full btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
```

### `src/components/Hero.tsx` (Refactored)

```typescript
'use client';

import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] bg-primary-600/20 -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] bg-secondary-500/15 -z-10" />

      <div className="container-max relative z-10">
        {/* Headline */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 tracking-tight mb-6">
            Scale your operations.{' '}
            <span className="text-gradient">Powered by specialized talent and AI.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Avora Ventures combines outsourcing, skill hiring, AI solutions, and data
            annotations into one unified platform.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16 md:mb-20">
          <button
            onClick={scrollToContact}
            className="group btn btn-primary btn-lg btn-round shadow-lg hover:shadow-xl"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto pt-12 border-t border-slate-200">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-slate-900">500+</p>
            <p className="text-sm text-slate-600 mt-1">Verified Engineers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-slate-900">95%</p>
            <p className="text-sm text-slate-600 mt-1">Client Retention</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-slate-900">2–6W</p>
            <p className="text-sm text-slate-600 mt-1">AI MVP Deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `src/components/Services.tsx` (Refactored with Config)

```typescript
import { services } from '@/config/services';
import { cn } from '@/lib/cn';

export default function Services() {
  return (
    <section id="services" className="section bg-slate-50 relative">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 block mb-3">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Our Capabilities
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Four integrated services to scale your business through talent, automation, and
            data.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group card bg-white p-8 hover:shadow-lg hover:border-primary-200 transition-all"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary-50 border border-primary-200 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-primary-600 mb-3">{service.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>

                {/* Metrics Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary-50 border border-primary-200">
                  <span className="text-xs font-medium text-primary-700">{service.metrics}</span>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-primary-600 font-bold mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

### `src/components/Contact.tsx` (Refactored)

```typescript
'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/cn';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    budgetRange: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please tell us about your project.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Hardcoded Google Apps Script URL
      const GOOGLE_SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbzdt6LMsh3XZ6eBUAmns_WBtqd8ORR-uDizVZhaUDqWG9bAqYa5LtbpSpZX-iVrnRlI/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setFormData({ name: '', email: '', company: '', serviceType: '', budgetRange: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white relative">
      <div className="container-max max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 block mb-3">
            Let's Work Together
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Start a Conversation
          </h2>
          <p className="text-lg text-slate-600">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="card bg-white border border-slate-200 p-8 md:p-12">
          {success ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Sent!</h3>
              <p className="text-slate-600 mb-6">
                Thank you. Our team will reach out within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="text-primary-600 font-medium hover:text-primary-700"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-500/10 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-500/10 outline-none transition-all"
                />
              </div>

              {/* Service Type & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Type (Optional)
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-500/10 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="outsourcing">Specialized Outsourcing</option>
                    <option value="skill-hiring">Specialized Skill Hiring</option>
                    <option value="ai-solutions">AI Solutions & Automation</option>
                    <option value="data-annotations">Data Annotation & Labeling</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-slate-700 mb-2">
                    Budget Range (Optional)
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-500/10 outline-none transition-all"
                  >
                    <option value="">Select a range</option>
                    <option value="under-5k">&lt;$5k</option>
                    <option value="5k-25k">$5k–$25k</option>
                    <option value="25k-100k">$25k–$100k</option>
                    <option value="over-100k">&gt;$100k</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-500/10 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'w-full btn btn-primary btn-lg btn-round',
                  isSubmitting && 'opacity-70 cursor-not-allowed'
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
```

---

## PART 4: LAYOUT & METADATA

### `src/app/layout.tsx` (Updated with Metadata)

```typescript
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Outsourcing, Skill Hiring & AI Solutions`,
  description: siteConfig.description,
  keywords: [
    'outsourcing',
    'skill hiring',
    'AI solutions',
    'data annotations',
    'remote engineering',
    'AI automation',
  ],
  authors: [{ name: 'Avora Ventures' }],
  creator: 'Avora Ventures',
  publisher: 'Avora Ventures',
  formatDetection: { email: false, telephone: false },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  verification: {
    google: '', // Add Google Search Console verification code if available
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### `src/app/page.tsx` (Unchanged)

```typescript
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Ventures from '@/components/Ventures';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Process />
      <Ventures />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
```

---

## PART 5: KEY STYLING PATTERNS

### Button Variants (Quick Reference)

```tsx
// Primary (Blue)
<button className="btn btn-primary">Action</button>

// Primary Large
<button className="btn btn-primary btn-lg">Big Action</button>

// Primary Round
<button className="btn btn-primary btn-round">Round Action</button>

// Secondary (Gray)
<button className="btn btn-secondary">Secondary</button>

// Ghost (Transparent)
<button className="btn btn-ghost">Link-like</button>

// Small
<button className="btn btn-primary btn-sm">Small</button>

// Disabled
<button className="btn btn-primary" disabled>Disabled</button>
```

### Card Variants

```tsx
// Standard Card
<div className="card bg-white p-6">Content</div>

// Card with Hover
<div className="card hover:shadow-lg hover:border-primary-200">Content</div>

// Glass Card (if using plugin)
<div className="card-glass">Glass Content</div>
```

### Text Gradient

```tsx
<h1 className="text-gradient">Gradient Text</h1>
```

### Section Layout

```tsx
<section id="section-name" className="section bg-white">
  <div className="container-max">
    {/* Content */}
  </div>
</section>
```

### Form Input Pattern

```tsx
<div>
  <label htmlFor="field" className="block text-sm font-medium text-slate-700 mb-2">
    Label
  </label>
  <input
    id="field"
    name="field"
    type="text"
    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-500/10 outline-none transition-all"
  />
</div>
```

---

## PART 6: COLOR QUICK REFERENCE

| Token | HEX | Use Case |
|-------|-----|----------|
| `primary-600` | `#4f46e5` | Main CTA, headings accent |
| `primary-500` | `#6366f1` | Hover state for primary |
| `primary-50` | `#eef2ff` | Light backgrounds |
| `secondary-600` | `#0284c7` | Secondary accent |
| `slate-900` | `#0f172a` | Primary text |
| `slate-600` | `#475569` | Secondary text |
| `slate-50` | `#f8fafc` | Section backgrounds |
| `slate-200` | `#e2e8f0` | Borders |
| `success` | `#16a34a` | Success states |
| `error` | `#dc2626` | Error states |

---

## CHECKLIST FOR EACH PHASE

### Phase 1: Design System
- [ ] `tailwind.config.ts` complete
- [ ] `globals.css` refactored
- [ ] Fonts loading correctly
- [ ] `cn()` utility working
- [ ] Config files populated
- [ ] No TypeScript errors
- [ ] Lighthouse report generated (baseline)

### Phase 2: Components
- [ ] All components refactored
- [ ] No hardcoded colors
- [ ] Services render from config
- [ ] Mobile menu working
- [ ] Form validation in place
- [ ] Icons displaying correctly
- [ ] Responsive on all breakpoints
- [ ] npm run build successful

### Phase 3: SEO
- [ ] Metadata object correct
- [ ] OG image created (1200x630)
- [ ] JSON-LD schema valid
- [ ] Meta tags in place
- [ ] Canonical URL set
- [ ] Robots.txt configured (optional)

### Phase 4: Performance
- [ ] All images use `<Image>`
- [ ] Fonts subset & preloaded
- [ ] Lighthouse ≥95 all sections
- [ ] Mobile responsiveness tested
- [ ] Accessibility audit passed
- [ ] Bundle size <200KB
- [ ] Form submission tested

### Phase 5: Deployment
- [ ] Manual QA checklist passed
- [ ] Vercel deployment live
- [ ] Core Web Vitals green
- [ ] Google Apps Script webhook verified
- [ ] README updated
- [ ] No console errors
- [ ] All links working

---

**Use this reference alongside AVORA_WEBSITE_OVERHAUL_PRD.md. All Tailwind utilities follow v4 syntax. Colors are semantic (primary-600, not blue-600). Test locally before committing.**
