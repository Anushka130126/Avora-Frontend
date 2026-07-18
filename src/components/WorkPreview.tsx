'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const cases = [
  {
    title: 'AI-Native Digital Tools (Medical Diagnostics)',
    execution: 'Scaled a rare disease training corpus from 87 confirmed cases to 50,000 synthetic volumes.',
    outcome: 'Improved diagnostic AUC from 0.72 to 0.91, creating a highly scalable medical AI product.',
    position: 'top-10 left-10 md:top-20 md:left-20',
  },
  {
    title: 'Operational & Sourcing Models (Enterprise Infrastructure)',
    execution: 'Automated high-volume clinical and document extraction processing via custom NLP labeling schemas.',
    outcome: 'Reached a verified 0.95+ Kappa threshold, completely eliminating administrative processing bottlenecks.',
    position: 'top-1/4 right-5 md:top-1/3 md:right-16',
  },
  {
    title: 'Consumer & Emerging Verticals (Predictive Demand Logistics)',
    execution: 'Deployed localized multi-SKU demand forecasting models integrated into operational supply chains.',
    outcome: 'Reduced over-allocation risks and optimized inventory tracking with transparent performance metrics.',
    position: 'bottom-10 left-1/4 md:bottom-20 md:left-1/3',
  }
];

export default function WorkPreview() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const nodes = gsap.utils.toArray('.floating-node');
    
    nodes.forEach((node: any) => {
      // Randomize float animation for each node
      const randomX = gsap.utils.random(-20, 20);
      const randomY = gsap.utils.random(-30, 30);
      const randomDuration = gsap.utils.random(3, 5);
      const randomDelay = gsap.utils.random(0, 2);

      gsap.to(node, {
        x: randomX,
        y: randomY,
        duration: randomDuration,
        delay: randomDelay,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    });
  }, { scope: container });

  return (
    <section id="portfolio" ref={container} className="relative min-h-screen py-32 overflow-hidden bg-slate-50 flex items-center justify-center">
      {/* Central Typography */}
      <div className="relative z-20 max-w-2xl mx-auto px-6 text-center pointer-events-none">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-[11px] font-mono font-semibold tracking-[0.18em] uppercase text-[#B8860B] mb-8 shadow-sm">
          Delivered Work
        </div>
        <h2 className="text-5xl md:text-7xl font-heading font-bold text-slate-900 mb-6 tracking-tight leading-tight">
          Proven Demand. <br />
          <span className="text-slate-500">Sustainable Growth.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          Our delivery logs reflect practical, high-performance deployments across our core operational verticals. To maintain strict corporate discipline, client data is compiled anonymously.
        </p>
      </div>

      {/* Floating Constellation Nodes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {cases.map((c, i) => (
          <div 
            key={i} 
            className={`floating-node absolute ${c.position} w-80 md:w-96 p-6 rounded-2xl glass-panel pointer-events-auto hover:border-[#B8860B]/40 transition-colors shadow-xl`}
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-[#B8860B] border border-slate-200">
              <span className="font-mono font-bold text-xs">CS-0{i + 1}</span>
            </div>
            <h3 className="text-sm font-heading font-bold text-slate-900 mb-3">{c.title}</h3>
            
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#B8860B] uppercase tracking-wider block mb-1">Execution</span>
                <p className="text-xs text-slate-600 leading-relaxed">{c.execution}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#B8860B] uppercase tracking-wider block mb-1">Outcome</span>
                <p className="text-xs font-semibold text-slate-800 leading-relaxed">{c.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
