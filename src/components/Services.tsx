'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const INTRO_BG = 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&q=85&fit=crop&auto=format';

const services = [
  {
    label: 'Data Generation',
    title: 'Synthetic Data Engineering',
    desc: 'We engineer robust, physics-informed synthetic datasets under expert domain oversight — ensuring AI models have a high-fidelity foundation even when real-world data is scarce or inaccessible.',
    detail: 'Every synthetic dataset passes through multi-layer fidelity checks before approval. Edge-case richness and statistical diversity are built in by design, not retrofitted.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&fit=crop&auto=format',
    imageRight: true,
  },
  {
    label: 'Data Annotation',
    title: 'Precision Labeling Workflows',
    desc: 'We deploy precise ontologies and high-volume labeling using modality-specific tooling and model-assisted automation — accelerating data readiness without compromising accuracy.',
    detail: 'Model-assisted pre-labeling reduces manual overhead while structured human review cycles ensure every ontology is correctly applied at scale.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&fit=crop&auto=format',
    imageRight: false,
  },
  {
    label: 'Data Auditing',
    title: 'Quality Assurance & Validation',
    desc: 'Our multi-stage QA framework enforces strict inter-annotator agreement metrics. Datasets are version-controlled and treated like software releases — never shipped until they pass.',
    detail: 'Automated agreement scoring, expert spot-checks, and adversarial edge-case stress tests run in sequence. Datasets that fall short are re-annotated, not delivered.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&fit=crop&auto=format',
    imageRight: true,
  },
  {
    label: 'AI Implementation',
    title: 'Custom Model Deployment',
    desc: 'We build and launch custom AI MVPs rapidly — treating initial infrastructure as a measurable hypothesis and scaling computational resources only when commercial value is proven.',
    detail: 'Post-validation, we architect secure, interpretable AI systems with SHAP-based explainability and drift monitoring from day one. Deployments are lean, measurable, and built to scale.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&fit=crop&auto=format',
    imageRight: false,
  },
];

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

      {/* ── Services intro: full-bleed image + vertical white gradient ── */}
      <div className="services-intro relative min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${INTRO_BG}')` }}
        />
        {/* White rises from bottom, image shows through at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.90) 28%, rgba(255,255,255,0.50) 52%, rgba(255,255,255,0.10) 72%, transparent 100%)',
          }}
        />

        <div className="services-intro-content relative z-10 max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-20 pb-16 md:pb-20 w-full">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B8860B] mb-5 block">
            Our Services
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-heading uppercase tracking-wide text-slate-900 leading-[0.92]"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
            >
              The Full Data &amp;<br />AI Lifecycle
            </h2>
            <p className="font-sans text-slate-600 text-[15px] md:text-base leading-[1.8] max-w-sm md:text-right md:pb-1">
              We engineer AI foundations from the ground up — synthetic data, precision
              annotation, rigorous auditing, and production deployment.
            </p>
          </div>
        </div>
      </div>

      {/* ── Individual service slides ── */}
      {services.map((service, i) => (
        <div
          key={i}
          className={`service-slide ${i % 2 === 0 ? 'bg-white/75' : 'bg-slate-50/75'}`}
          style={{ backdropFilter: 'blur(12px)' }}
        >
          {/* Horizontal gap: generous padding on the outer container */}
          <div className="max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-20">
            <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[500px] gap-12 lg:gap-20 ${!service.imageRight ? '' : ''}`}>

              {/* Text Panel */}
              <div className={`slide-text flex flex-col justify-center py-16 md:py-24 ${
                !service.imageRight ? 'lg:order-2' : ''
              }`}>
                {/* Category label only — no number */}
                <span className="font-mono text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B8860B] mb-6 block">
                  {service.label}
                </span>

                <h3
                  className="font-heading uppercase tracking-wide text-slate-900 leading-[0.95] mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)' }}
                >
                  {service.title}
                </h3>

                <p className="font-sans text-slate-700 text-[15px] md:text-base leading-[1.85] mb-4">
                  {service.desc}
                </p>
                <p className="font-sans text-slate-500 text-[14px] md:text-[15px] leading-[1.85]">
                  {service.detail}
                </p>
              </div>

              {/* Image Panel */}
              <div className={`slide-image relative overflow-hidden rounded-sm min-h-[320px] lg:min-h-0 ${
                !service.imageRight ? 'lg:order-1' : ''
              }`}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                {/* Soft edge fade toward text panel */}
                <div className={`absolute inset-0 ${
                  service.imageRight
                    ? 'bg-gradient-to-r from-white/15 via-transparent to-transparent'
                    : 'bg-gradient-to-l from-white/15 via-transparent to-transparent'
                }`} />
              </div>

            </div>
          </div>

          {/* Full-width divider between slides */}
          {i < services.length - 1 && (
            <div className="border-b border-slate-200/50 mx-8 sm:mx-12 lg:mx-20" />
          )}
        </div>
      ))}
    </section>
  );
}
