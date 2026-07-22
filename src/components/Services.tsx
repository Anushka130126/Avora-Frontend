'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    // Swapped label and title as requested
    label: 'Synthetic Data Engineering',
    title: 'Data Generation',
    desc: 'We engineer robust, physics-informed synthetic datasets under expert domain oversight — ensuring AI models have a high-fidelity foundation even when real-world data is scarce or inaccessible.',
    detail: 'Every synthetic dataset passes through multi-layer fidelity checks before approval. Edge-case richness and statistical diversity are built in by design, not retrofitted.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&fit=crop&auto=format',
    imageRight: true,
  },
  {
    label: 'Precision Labeling Workflows',
    title: 'Data Annotation',
    desc: 'We deploy precise ontologies and high-volume labeling using modality-specific tooling and model-assisted automation — accelerating data readiness without compromising accuracy.',
    detail: 'Model-assisted pre-labeling reduces manual overhead while structured human review cycles ensure every ontology is correctly applied at scale.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&fit=crop&auto=format',
    imageRight: false,
  },
  {
    label: 'Quality Assurance & Validation',
    title: 'Data Auditing',
    desc: 'Our multi-stage QA framework enforces strict inter-annotator agreement metrics. Datasets are version-controlled and treated like software releases — never shipped until they pass.',
    detail: 'Automated agreement scoring, expert spot-checks, and adversarial edge-case stress tests run in sequence. Datasets that fall short are re-annotated, not delivered.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&fit=crop&auto=format',
    imageRight: true,
  },
  {
    label: 'Custom Model Deployment',
    title: 'AI Implementation',
    desc: 'We build and launch custom AI MVPs rapidly — treating initial infrastructure as a measurable hypothesis and scaling computational resources only when commercial value is proven.',
    detail: 'Post-validation, we architect secure, interpretable AI systems with SHAP-based explainability and drift monitoring from day one. Deployments are lean, measurable, and built to scale.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&fit=crop&auto=format',
    imageRight: false,
  },
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.services-heading',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-heading', start: 'top 85%' },
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
    <section id="services" ref={container} className="border-t border-slate-200/60 pt-16 md:pt-28 pb-10 bg-white">

      <div className="services-heading max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-20 text-center mb-16 md:mb-24">
        <h2 
          className="font-heading uppercase tracking-wide text-slate-900 leading-tight mb-6" 
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Our Services
        </h2>
        <p className="font-sans text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-[1.7]">
          We engineer AI foundations from the ground up — synthetic data, precision annotation, rigorous auditing, and production deployment.
        </p>
      </div>

      {services.map((service, i) => (
        <div
          key={i}
          className={`service-slide ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-20">
            <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[500px] gap-12 lg:gap-20 ${!service.imageRight ? '' : ''}`}>

              <div className={`slide-text flex flex-col justify-center py-16 md:py-24 ${
                !service.imageRight ? 'lg:order-2' : ''
              }`}>
                {/* Category label (now the longer descriptive text) */}
                <span className="font-mono text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B8860B] mb-6 block">
                  {service.label}
                </span>

                {/* Main Headline (now Data Generation, Data Annotation, etc.) */}
                <h3
                  className="font-heading uppercase tracking-wide text-slate-900 leading-[0.95] mb-6"
                  style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
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

              <div className={`slide-image relative overflow-hidden rounded-sm min-h-[320px] lg:min-h-0 ${
                !service.imageRight ? 'lg:order-1' : ''
              }`}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className={`absolute inset-0 ${
                  service.imageRight
                    ? 'bg-gradient-to-r from-white/15 via-transparent to-transparent'
                    : 'bg-gradient-to-l from-white/15 via-transparent to-transparent'
                }`} />
              </div>

            </div>
          </div>

          {i < services.length - 1 && (
            <div className="border-b border-slate-200/50 mx-8 sm:mx-12 lg:mx-20" />
          )}
        </div>
      ))}
    </section>
  );
}
