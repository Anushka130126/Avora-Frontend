'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stages = [
  {
    title: 'Stage 1: Data Generation',
    subtitle: 'Overcoming Data Scarcity',
    desc: 'We engineer robust, physics-informed synthetic datasets under expert domain oversight. This ensures our AI-native models have a high-fidelity foundation even when real-world market data is sparse.',
    color: 'bg-white',
  },
  {
    title: 'Stage 2: Data Annotation & Labeling',
    subtitle: 'Structuring Knowledge',
    desc: 'We divide execution into precise ontologies (annotation) and high-volume deployment (labeling). By using modality-specific tooling and model-assisted automation, we accelerate data readiness by up to 60%.',
    color: 'bg-slate-50',
  },
  {
    title: 'Stage 3: Data Auditing & Quality Assurance',
    subtitle: 'Ensuring Rigor & Compliance',
    desc: 'To prevent downstream model errors, our multi-stage QA framework enforces strict inter-annotator agreement metrics (Kappa ≥ 0.91). Datasets are treated like versioned software releases.',
    color: 'bg-white',
  },
  {
    title: 'Stage 4: AI Implementation',
    subtitle: 'Validated Deployment',
    desc: 'We build and launch custom MVPs within 2 to 6 weeks. We treat initial infrastructure as a measurable hypothesis, scaling computational resources only when commercial value and product-market fit are proven.',
    color: 'bg-slate-50',
  }
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.panel') as HTMLElement[];
    
    if (panels.length === 0) return;

    // Create a timeline that pins the container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: `+=${100 * panels.length}%`, // Scroll duration based on number of panels
        pin: true,
        scrub: 1, // Smooth scrubbing
      }
    });

    // Animate each panel (except the first one, which is already in place)
    panels.forEach((panel, i) => {
      if (i === 0) {
        // First panel stays in place
        // Optionally animate elements inside the first panel on initial scroll
        return;
      }

      // Slide up from bottom and stack
      tl.fromTo(panel, 
        { yPercent: 100 }, 
        { yPercent: 0, ease: 'none' }
      );
    });

  }, { scope: container });

  return (
    <section id="services" ref={container} className="relative w-full h-screen overflow-hidden bg-slate-50">
      {/* Intro Panel (Not part of the stack, or the first in the stack) */}
      <div className="panel absolute inset-0 w-full h-full flex flex-col justify-center items-center px-6 z-0 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-mono font-semibold tracking-[0.18em] uppercase text-[#B8860B] mb-6">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
            How We Incubate: <br/>De-risking via Lean MVPs.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We do not build on assumptions. Every venture in our portfolio passes through a strict validation framework before scaling. For our technology and AI-native models, we deploy an end-to-end operational data pipeline that guarantees reliability from day one.
          </p>
          <div className="mt-12 text-slate-400 animate-bounce">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em]">Scroll to explore pipeline</span>
            <div className="w-px h-12 bg-slate-200 mx-auto mt-2"></div>
          </div>
        </div>
      </div>

      {/* The 4 Stages */}
      {stages.map((stage, i) => (
        <div 
          key={i} 
          className={`panel absolute inset-0 w-full h-full flex flex-col justify-center items-center px-6 z-${(i + 1) * 10} ${stage.color}`}
          style={{ transform: 'translateY(100%)' }}
        >
          <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual/Number Side */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <span className="text-[12rem] lg:text-[16rem] font-heading font-bold text-slate-100 leading-none select-none">
                  0{i + 1}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-[#B8860B]/20 bg-white/50 backdrop-blur flex items-center justify-center shadow-lg">
                    <span className="text-[#B8860B] font-mono font-bold tracking-widest uppercase text-sm text-center px-4">
                      {stage.subtitle.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Side */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-[11px] font-mono font-semibold tracking-[0.18em] uppercase text-[#B8860B] mb-6 shadow-sm">
                Pipeline Stage {i + 1}
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
                {stage.subtitle}
              </h3>
              <h4 className="text-xl text-[#B8860B] font-medium mb-6">
                {stage.title}
              </h4>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                {stage.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
