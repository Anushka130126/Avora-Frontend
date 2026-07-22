'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// All Unsplash images — free to use, no attribution required under Unsplash License
const services = [
  {
    index: '01',
    label: 'Data Generation',
    title: 'Synthetic Data Engineering',
    desc: 'We engineer robust, physics-informed synthetic datasets under expert domain oversight — ensuring AI models have a high-fidelity foundation even when real-world data is scarce or inaccessible.',
    detail: 'Every synthetic dataset passes through multi-layer fidelity checks before approval. Edge-case richness and statistical diversity are built in by design, not retrofitted.',
    // Abstract data network / particles — Unsplash photo by Alina Grubnyak
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&fit=crop&auto=format',
    stat: '60%',
    statLabel: 'Faster Data Readiness',
    imageRight: true,
  },
  {
    index: '02',
    label: 'Data Annotation',
    title: 'Precision Labeling Workflows',
    desc: 'We deploy precise ontologies and high-volume labeling using modality-specific tooling and model-assisted automation — accelerating data readiness without compromising accuracy.',
    detail: 'Model-assisted pre-labeling reduces manual overhead while structured human review cycles ensure every ontology is correctly applied at scale.',
    // Precision / analysis work — Unsplash photo by Luke Chesser
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&fit=crop&auto=format',
    stat: '0.91+',
    statLabel: 'Kappa Agreement Score',
    imageRight: false,
  },
  {
    index: '03',
    label: 'Data Auditing',
    title: 'Quality Assurance & Validation',
    desc: 'Our multi-stage QA framework enforces strict inter-annotator agreement metrics. Datasets are version-controlled and treated like software releases — never shipped until they pass.',
    detail: 'Automated agreement scoring, expert spot-checks, and adversarial edge-case stress tests run in sequence. Datasets below our Kappa threshold are re-annotated, not shipped.',
    // Data quality / charts — Unsplash photo by Carlos Muza
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&fit=crop&auto=format',
    stat: '100%',
    statLabel: 'Versioned Releases',
    imageRight: true,
  },
  {
    index: '04',
    label: 'AI Implementation',
    title: 'Custom Model Deployment',
    desc: 'We build and launch custom AI MVPs rapidly — treating initial infrastructure as a measurable hypothesis and scaling computational resources only when commercial value is proven.',
    detail: 'Post-validation, we architect secure, interpretable AI systems with SHAP-based explainability and drift monitoring from day one. Deployments are lean, measurable, and built to scale.',
    // Server infrastructure — Unsplash photo by Thomas Kvistholt
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&fit=crop&auto=format',
    stat: '2–6wk',
    statLabel: 'MVP to Deployment',
    imageRight: false,
  },
];

// Unsplash: Abstract dark neural network by Alina Grubnyak
const INTRO_BG = 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&q=85&fit=crop&auto=format';

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.services-intro-content > *',
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 1.0, stagger: 0.15, ease: 'power4.out',
        scrollTrigger: { trigger: '.services-intro', start: 'top 80%' },
      }
    );

    const slides = gsap.utils.toArray('.service-slide') as HTMLElement[];
    slides.forEach((slide) => {
      const textEl = slide.querySelector('.slide-text');
      const imageEl = slide.querySelector('.slide-image');
      if (textEl) {
        gsap.fromTo(textEl, { opacity: 0, x: -30 }, {
          opacity: 1, x: 0, duration: 1.0, ease: 'power4.out',
          scrollTrigger: { trigger: slide, start: 'top 78%' },
        });
      }
      if (imageEl) {
        gsap.fromTo(imageEl, { opacity: 0, scale: 0.97 }, {
          opacity: 1, scale: 1, duration: 1.1, ease: 'power4.out',
          scrollTrigger: { trigger: slide, start: 'top 78%' },
        });
      }
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="border-t border-slate-200/60">

      {/* ── Intro slide: full-bleed image + vertical white gradient from bottom ── */}
      <div className="services-intro relative min-h-[80vh] flex flex-col justify-end overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${INTRO_BG}')` }}
        />

        {/*
          Vertical gradient — inspired by reference image:
          White/near-white rises from the bottom (where text lives)
          fading to transparent at the top (letting the image breathe).
          This mirrors the horizontal white-panel effect in the reference, applied vertically.
        */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.90) 28%, rgba(255,255,255,0.50) 52%, rgba(255,255,255,0.10) 72%, transparent 100%)',
          }}
        />

        {/* Text content — anchored to bottom */}
        <div className="services-intro-content relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 md:pb-20 w-full">

          {/* Eyebrow */}
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B8860B] mb-5 block">
            Our Services
          </span>

          {/* Title + desc side by side */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-heading uppercase tracking-wide text-slate-900 leading-[0.92]"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
            >
              The Full Data &amp;<br />AI Lifecycle
            </h2>
            <p className="font-sans text-slate-600 text-[15px] md:text-base leading-[1.8] max-w-sm md:text-right md:pb-1">
              We engineer AI foundations from the ground up — synthetic data, precision annotation,
              rigorous auditing, and production deployment as one continuous pipeline.
            </p>
          </div>

          {/* Service index divider */}
          <div className="mt-10 pt-7 border-t border-slate-300/60 flex flex-wrap gap-x-8 gap-y-3">
            {services.map((s) => (
              <span key={s.index} className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-slate-500">
                <span className="text-[#B8860B] font-semibold">{s.index}</span>
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Individual service slides ── */}
      {services.map((service, i) => (
        <div
          key={i}
          className={`service-slide border-b border-slate-200/60 last:border-b-0 ${i % 2 === 0 ? 'bg-white/75' : 'bg-slate-50/75'}`}
          style={{ backdropFilter: 'blur(12px)' }}
        >
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[480px]">

              {/* Text Panel */}
              <div className={`slide-text flex flex-col justify-center py-14 md:py-20 ${
                service.imageRight ? 'lg:pr-14 xl:pr-20' : 'lg:pl-14 xl:pl-20 lg:order-2'
              }`}>
                {/* Index + label */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-400">{service.index}</span>
                  <div className="h-px w-7 bg-slate-200" />
                  <span className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#B8860B]">{service.label}</span>
                </div>

                {/* Title — Bebas Neue, controlled size */}
                <h3
                  className="font-heading uppercase tracking-wide text-slate-900 leading-[0.95] mb-5"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)' }}
                >
                  {service.title}
                </h3>

                {/* Body text — DM Sans, comfortable reading size */}
                <p className="font-sans text-slate-700 text-[15px] md:text-base leading-[1.8] mb-3">
                  {service.desc}
                </p>
                <p className="font-sans text-slate-500 text-[14px] md:text-[15px] leading-[1.8]">
                  {service.detail}
                </p>

                {/* Stat */}
                <div className="mt-9 pt-7 border-t border-slate-200 flex items-baseline gap-3">
                  <span className="font-heading text-4xl text-[#B8860B] leading-none">{service.stat}</span>
                  <span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-400">{service.statLabel}</span>
                </div>
              </div>

              {/* Image Panel — Unsplash photo */}
              <div className={`slide-image relative overflow-hidden ${service.imageRight ? 'lg:order-2' : 'lg:order-1'} min-h-[300px] lg:min-h-0`}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                {/*
                  Horizontal gradient matching the reference image style:
                  white fades in from the text-panel side to blend the image into the layout
                */}
                <div className={`absolute inset-0 ${
                  service.imageRight
                    ? 'bg-gradient-to-r from-white/30 via-transparent to-transparent'
                    : 'bg-gradient-to-l from-white/30 via-transparent to-transparent'
                }`} />
                {/* Watermark */}
                <div className="absolute bottom-5 right-6 font-heading text-[80px] text-white/10 leading-none select-none">
                  {service.index}
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
