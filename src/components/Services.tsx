'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    index: '01',
    label: 'Data Generation',
    title: 'Synthetic Data Engineering',
    desc: 'We engineer robust, physics-informed synthetic datasets under expert domain oversight — ensuring AI models have a high-fidelity foundation even when real-world data is sparse or inaccessible.',
    detail: 'Our data generation infrastructure combines simulation with domain expert validation. Every synthetic dataset passes through multi-layer fidelity checks before being approved for model training. Edge-case richness and statistical diversity are built in by design.',
    image: '/Gold_Flow_Light.jpg.jpeg',
    stat: '60%',
    statLabel: 'Faster Data Readiness',
    imageRight: true,
  },
  {
    index: '02',
    label: 'Data Annotation',
    title: 'Precision Labeling Workflows',
    desc: 'We deploy precise ontologies and high-volume labeling using modality-specific tooling and model-assisted automation — accelerating data readiness without compromising quality.',
    detail: 'Our annotation workflows use custom tooling built for speed without sacrificing precision. Model-assisted pre-labeling reduces manual overhead while human review cycles ensure every ontology is correctly applied at volume.',
    image: '/Institutional_Network_Light.jpg.jpeg',
    stat: '0.91+',
    statLabel: 'Kappa Agreement Score',
    imageRight: false,
  },
  {
    index: '03',
    label: 'Data Auditing',
    title: 'Quality Assurance & Validation',
    desc: 'Our multi-stage QA framework enforces strict inter-annotator agreement metrics. Every dataset is version-controlled and treated like a software release — never shipped until it passes.',
    detail: 'Every dataset passes through automated agreement scoring, expert spot-checks, and adversarial edge-case stress tests. Datasets failing our Kappa threshold are routed back to re-annotation — never shipped.',
    image: '/Silicone_Gold_Light.jpg.jpeg',
    stat: '100%',
    statLabel: 'Versioned Releases',
    imageRight: true,
  },
  {
    index: '04',
    label: 'AI Implementation',
    title: 'Custom Model Deployment',
    desc: 'We build and launch custom AI MVPs rapidly — treating initial infrastructure as a measurable hypothesis, scaling computational resources only when commercial value is proven.',
    detail: 'Post-validation, we architect secure, interpretable AI systems with SHAP-based explainability and drift monitoring built in from day one. Deployments are lean, measurable, and ready to scale.',
    image: '/Structural_Precision_Light.jpg.jpeg',
    stat: '2–6wk',
    statLabel: 'MVP to Deployment',
    imageRight: false,
  },
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.services-header > *',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.0, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: '.services-header', start: 'top 82%' },
      }
    );

    const slides = gsap.utils.toArray('.service-slide') as HTMLElement[];
    slides.forEach((slide) => {
      const textEl = slide.querySelector('.slide-text');
      const imageEl = slide.querySelector('.slide-image');
      const statEl = slide.querySelector('.slide-stat');

      if (textEl) {
        gsap.fromTo(textEl,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 1.0, ease: 'power4.out',
            scrollTrigger: { trigger: slide, start: 'top 75%' },
          }
        );
      }
      if (imageEl) {
        gsap.fromTo(imageEl,
          { opacity: 0, x: 40, scale: 0.97 },
          {
            opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'power4.out',
            scrollTrigger: { trigger: slide, start: 'top 75%' },
          }
        );
      }
      if (statEl) {
        gsap.fromTo(statEl,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power4.out', delay: 0.3,
            scrollTrigger: { trigger: slide, start: 'top 75%' },
          }
        );
      }
    });
  }, { scope: container });

  return (
    <section
      id="services"
      ref={container}
      style={{ backgroundColor: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(16px)' }}
      className="border-t border-slate-200/70"
    >
      {/* Section Header */}
      <div className="services-header max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-28 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B8860B] mb-3 block">
              Our Services
            </span>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-none text-slate-900 tracking-wide uppercase">
              What We Do
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-md leading-relaxed md:pb-2 font-sans">
            We engineer state-of-the-art AI foundations across the entire data lifecycle — from generation through annotation, auditing, and production deployment.
          </p>
        </div>
      </div>

      {/* Service Slides */}
      {services.map((service, i) => (
        <div
          key={i}
          className={`service-slide border-b border-slate-200/70 last:border-b-0 ${
            i % 2 === 0 ? 'bg-white/60' : 'bg-slate-50/60'
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[520px] ${
              service.imageRight ? '' : 'lg:grid-flow-col-dense'
            }`}>

              {/* Text Panel */}
              <div className={`slide-text flex flex-col justify-center py-16 md:py-20 ${
                service.imageRight ? 'lg:pr-16 xl:pr-24' : 'lg:pl-16 xl:pl-24 lg:order-2'
              }`}>
                {/* Index + label */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.25em] uppercase text-slate-400">
                    {service.index}
                  </span>
                  <div className="h-px flex-1 bg-slate-200 max-w-[40px]" />
                  <span className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#B8860B]">
                    {service.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-900 leading-tight mb-6">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-sans mb-4">
                  {service.desc}
                </p>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-sans">
                  {service.detail}
                </p>

                {/* Stat callout */}
                <div className="slide-stat mt-10 pt-8 border-t border-slate-200">
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-4xl md:text-5xl text-[#B8860B] leading-none">
                      {service.stat}
                    </span>
                    <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-500">
                      {service.statLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Panel */}
              <div className={`slide-image relative overflow-hidden ${
                service.imageRight ? 'lg:order-2' : 'lg:order-1'
              } min-h-[320px] lg:min-h-0`}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 ${
                  service.imageRight
                    ? 'bg-gradient-to-r from-white/30 via-transparent to-transparent'
                    : 'bg-gradient-to-l from-white/30 via-transparent to-transparent'
                }`} />
                {/* Corner index watermark */}
                <div className="absolute bottom-6 right-6 font-heading text-6xl md:text-8xl text-white/20 leading-none select-none">
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
