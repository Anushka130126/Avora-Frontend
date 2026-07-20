'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    label: 'Data Generation',
    title: 'Synthetic Data Engineering',
    desc: 'We engineer robust, physics-informed synthetic datasets under expert domain oversight. This ensures AI-native models have a high-fidelity foundation even when real-world market data is sparse.',
    detail: 'Our data generation infrastructure combines simulation with domain expert validation. Every synthetic dataset passes through multi-layer fidelity checks before being approved for model training. Edge-case richness and statistical diversity are built in by design.',
    image: '/Gold_Flow_Light.jpg.jpeg',
    stat: '60%',
    statLabel: 'faster data readiness',
  },
  {
    label: 'Data Annotation',
    title: 'Precision Labeling Workflows',
    desc: 'We divide execution into precise ontologies and high-volume deployment. Using modality-specific tooling and model-assisted automation, we accelerate data readiness significantly.',
    detail: 'Our annotation workflows use custom modality-specific tooling built for speed without sacrificing precision. Model-assisted pre-labeling reduces manual overhead while human review cycles ensure every ontology is correctly applied at volume.',
    image: '/Institutional_Network_Light.jpg.jpeg',
    stat: '0.91+',
    statLabel: 'Kappa agreement',
  },
  {
    label: 'Data Auditing',
    title: 'Quality Assurance & Validation',
    desc: 'Our multi-stage QA framework enforces strict inter-annotator agreement metrics (Kappa ≥ 0.91). Datasets are treated like versioned software releases.',
    detail: 'Every dataset is version-controlled and passed through automated agreement scoring, expert spot-checks, and adversarial edge-case stress tests. Datasets failing our Kappa threshold are routed back to reannotation — never shipped.',
    image: '/Silicone_Gold_Light.jpg.jpeg',
    stat: '100%',
    statLabel: 'versioned releases',
  },
  {
    label: 'AI Implementation',
    title: 'Custom Model Deployment',
    desc: 'We build and launch custom MVPs rapidly. We treat initial infrastructure as a measurable hypothesis, scaling computational resources only when commercial value is proven.',
    detail: 'Post-validation, we architect secure, interpretable AI systems with SHAP-based explainability and drift monitoring built in from day one. Deployments are scoped as live hypotheses: lean, measurable, and ready to scale.',
    image: '/Structural_Precision_Light.jpg.jpeg',
    stat: '2–6wk',
    statLabel: 'MVP to deployment',
  },
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number>(0);

  useGSAP(() => {
    gsap.fromTo('.services-header',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.0, ease: 'power4.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
      }
    );

    const cards = gsap.utils.toArray('.service-card') as HTMLElement[];
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power4.out',
          delay: i * 0.12,
          scrollTrigger: { trigger: container.current, start: 'top 68%' },
        }
      );
    });
  }, { scope: container });

  return (
    <section
      id="services"
      ref={container}
      style={{ backgroundColor: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)' }}
      className="border-t border-slate-200/70"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="services-header py-16 md:py-24 border-b border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="font-heading text-7xl md:text-8xl lg:text-9xl leading-none text-slate-900 tracking-wide uppercase">
                Our Services
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-slate-900 max-w-lg leading-relaxed md:pb-4 font-sans font-medium">
              We engineer state-of-the-art AI foundations. Our core operations span the entire data lifecycle to ensure high-fidelity model performance.
            </p>
          </div>
        </div>

        {/* Collapsible Service Cards */}
        <div className="py-12 md:py-20">
          <div className="flex flex-col gap-0 border border-slate-200/80 overflow-hidden rounded-sm bg-white shadow-sm">
            {services.map((service, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="service-card group relative border-b border-slate-200/80 last:border-b-0"
                >
                  
                  {/* Card trigger row */}
                  <button
                    className="relative w-full text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <div className={`flex flex-wrap md:grid md:grid-cols-12 items-center gap-4 px-6 md:px-10 transition-all duration-500 ${isOpen ? 'py-8 md:py-10' : 'py-6 md:py-8'}`}>
                      
                      {/* Label */}
                      <div className="flex-1 md:col-span-8">
                        <div className="flex items-center gap-4">
                          <span className={`font-heading text-3xl md:text-4xl lg:text-5xl tracking-[0.08em] uppercase leading-none transition-colors duration-300 ${isOpen ? 'text-[#B8860B]' : 'text-slate-800 group-hover:text-slate-900'}`}>
                            {service.label}
                          </span>
                        </div>
                      </div>

                      {/* Stat — visible when open */}
                      <div className="hidden md:flex col-span-2 flex-col items-end">
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              transition={{ duration: 0.3 }}
                              className="text-right"
                            >
                              <div className="font-heading text-3xl text-[#B8860B] leading-none">{service.stat}</div>
                              <div className="font-mono font-semibold text-[11px] tracking-[0.15em] uppercase text-slate-700 mt-1">{service.statLabel}</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Chevron */}
                      <div className="flex-none md:col-span-2 flex justify-end">
                        <div className={`w-9 h-9 flex items-center justify-center border transition-all duration-300 ${isOpen ? 'border-[#B8860B] bg-[#B8860B] text-white' : 'border-slate-200 text-slate-700 group-hover:border-slate-300'}`}>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="relative px-6 md:px-10 pb-10 md:pb-12">
                          <div className="border-t border-slate-200/60 pt-8">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                              {/* Left: Content */}
                              <div className="lg:col-span-6 flex flex-col justify-center">
                                <h3 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-slate-900 mb-6">{service.title}</h3>
                                <div className="space-y-6">
                                  <p className="text-slate-900 text-lg md:text-xl leading-relaxed font-sans font-medium">
                                    {service.desc}
                                  </p>
                                  <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-sans font-medium">
                                    {service.detail}
                                  </p>
                                </div>
                                {/* Stat row on mobile */}
                                <div className="mt-8 md:hidden flex items-center gap-3">
                                  <div className="font-heading text-4xl text-[#B8860B]">{service.stat}</div>
                                  <div className="font-mono font-semibold text-[11px] tracking-[0.15em] uppercase text-slate-700">{service.statLabel}</div>
                                </div>
                              </div>
                              {/* Right: Image */}
                              <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full min-h-[300px] relative overflow-hidden rounded-sm border border-slate-200/80 bg-slate-100">
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                  style={{ backgroundImage: `url(${service.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent mix-blend-overlay"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
