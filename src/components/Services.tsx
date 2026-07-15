'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';
import { Database, Tag, Tags, ShieldCheck, BrainCircuit, Cpu, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useSearchParams } from 'next/navigation';
import { services } from '@/config/services';

const iconMap: Record<string, React.ComponentType<any>> = {
  Database,
  Tag,
  Tags,
  ShieldCheck,
  BrainCircuit,
};

const aimSteps = [
  {
    phase: "01",
    title: "Discovery",
    deliverable: "Architectural Bottleneck Audit",
    artifact: "Technical Integration Specification"
  },
  {
    phase: "02",
    title: "Implementation",
    deliverable: "Custom Pipeline Core",
    artifact: "Consensus Verification Logs"
  },
  {
    phase: "03",
    title: "Scaling",
    deliverable: "Active Cloud Endpoint",
    artifact: "Latency Telemetry Dashboard"
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('data-generation');
  const searchParams = useSearchParams();
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && services.some((s) => s.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section id="services" className="py-24 relative overflow-hidden services-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div ref={ref} className="text-left mb-16 max-w-3xl">
          <span className="section-eyebrow">Services &amp; Capabilities</span>
          <h2 className="section-heading mb-4">
            Five disciplines, one continuous pipeline.
          </h2>
          <p className="section-subtext max-w-xl">
            Avora operates a structured data-to-deployment sequence designed for deep safety, precision engineering, and zero operational abstractions.
          </p>
        </div>

        {/* Tabular Specification Console */}
        <div className="glass-panel rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-300 dark:border-slate-800">
          
          {/* Left Panel: Service Selection (Tab navigation) */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-300 dark:border-slate-800 flex lg:flex-col overflow-x-auto scrollbar-hide bg-black/[0.01] dark:bg-slate-950/30">
            {services.map((service, index) => {
              const isActive = service.id === activeTab;
              const Icon = iconMap[service.icon] || Database;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={cn(
                    "flex-shrink-0 lg:w-full text-left p-5 lg:p-6 transition-all duration-150 flex flex-col gap-1.5 hover:bg-black/[0.02] dark:hover:bg-white/[0.01] border-b-2 lg:border-b-0 lg:border-l-2",
                    isActive 
                      ? "bg-black/[0.02] dark:bg-white/[0.02] border-[#D4AF37]" 
                      : "border-transparent"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#D4AF37]">0{index + 1}</span>
                    <span className={cn(
                      "font-heading font-bold text-sm lg:text-base whitespace-nowrap",
                      isActive ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"
                    )}>
                      {service.title}
                    </span>
                  </div>
                  <span className="hidden lg:inline text-xs text-slate-500 dark:text-slate-500 font-sans line-clamp-1">{service.subtitle}</span>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Spec Sheet & Custom Graphic per service category */}
          <div className="lg:col-span-8 p-8 flex flex-col md:flex-row gap-8 justify-between">
            
            {/* Spec details */}
            <div className="flex-1 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold text-[#D4AF37] uppercase tracking-widest block mb-1">
                  Capability Parameters
                </span>
                <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-sm font-sans text-slate-500 dark:text-slate-400 mt-1">{currentService.subtitle}</p>
              </div>

              <div className="h-px bg-slate-200 dark:bg-slate-800" />

              <div className="space-y-4 font-sans text-sm">
                <p className="leading-relaxed text-slate-650 dark:text-slate-300">
                  {currentService.description}
                </p>
                
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-wider block">Key Operational Protocols:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {currentService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-500 uppercase block mb-1">Target SLA Objective:</span>
                <span className="text-sm font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                  {currentService.metrics}
                </span>
              </div>
            </div>

            {/* Right block: Contextual Diagrams */}
            <div className="w-full md:w-72 flex-shrink-0 flex flex-col justify-center border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0a0a0f] rounded-xl p-6">
              
              {activeTab === 'data-generation' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Generation Engine</span>
                    <span className="text-[9px] font-mono text-[#D4AF37] uppercase font-bold">Active</span>
                  </div>
                  <div className="space-y-2 text-[10px] font-mono text-slate-600 dark:text-slate-400">
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-black/[0.01] dark:bg-white/[0.01]">
                      <span className="text-slate-550 block">Modality:</span>
                      <span className="text-slate-900 dark:text-white block mt-0.5 font-bold">Tabular / Vision / Text</span>
                    </div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-black/[0.01] dark:bg-white/[0.01]">
                      <span className="text-slate-550 block">Verification:</span>
                      <span className="text-slate-900 dark:text-white block mt-0.5 font-bold">Downstream Task Validation</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'data-annotation' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Ontology Framework</span>
                    <span className="text-[9px] font-mono text-teal-650 dark:text-teal-400 uppercase font-bold">Configured</span>
                  </div>
                  <div className="space-y-2 text-[10px] font-mono text-slate-650 dark:text-slate-400">
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-black/[0.01] dark:bg-white/[0.01]">
                      <span className="text-slate-550 block">Consensus Metric:</span>
                      <span className="text-slate-900 dark:text-white block mt-0.5 font-bold">Inter-Annotator Kappa</span>
                    </div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-black/[0.01] dark:bg-white/[0.01]">
                      <span className="text-slate-550 block">Guidelines:</span>
                      <span className="text-slate-900 dark:text-white block mt-0.5 font-bold">Multi-Pass Edge Case Rules</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'labeling' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Consensus Overlap</span>
                    <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase font-bold">Verified</span>
                  </div>
                  <div className="flex flex-col items-center justify-center py-2 space-y-4">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <div className="absolute top-0 left-2 w-14 h-14 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/5 flex items-center justify-center text-[8px] text-slate-500 dark:text-slate-400 font-mono">Annotator_A</div>
                      <div className="absolute bottom-0 right-2 w-14 h-14 rounded-full border border-teal-500/50 bg-teal-500/5 flex items-center justify-center text-[8px] text-slate-500 dark:text-slate-400 font-mono">Annotator_B</div>
                    </div>
                    <p className="text-[9px] font-mono text-slate-500 dark:text-slate-500 text-center">Double-Blind Overlap consensus (99.98% Confidence Threshold)</p>
                  </div>
                </div>
              )}

              {activeTab === 'auditing' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Quality Scoring</span>
                    <span className="text-[9px] font-mono text-[#D4AF37] uppercase font-bold">System Gate</span>
                  </div>
                  <div className="space-y-3 text-[10px] font-mono text-slate-600 dark:text-slate-400">
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-black/[0.01] dark:bg-white/[0.01]">
                      <span className="text-slate-550 block">Accuracy Dimension:</span>
                      <span className="text-slate-900 dark:text-white block mt-0.5 font-bold">Statistical Drift check</span>
                    </div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-black/[0.01] dark:bg-white/[0.01]">
                      <span className="text-slate-550 block">Compliance Check:</span>
                      <span className="text-slate-900 dark:text-white block mt-0.5 font-bold">Cohen&apos;s Kappa Adjudicated</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai-implementation' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">A.I.M. Framework</span>
                    <span className="text-[9px] font-mono text-[#D4AF37] uppercase font-bold">Deployment</span>
                  </div>
                  
                  {/* Embedded AIM steps */}
                  <div className="space-y-2 font-mono text-[9px]">
                    {aimSteps.map((step) => (
                      <div key={step.phase} className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-black/[0.01] dark:bg-white/[0.01]">
                        <span className="text-[#D4AF37] block font-bold">PHASE {step.phase} / {step.title.toUpperCase()}</span>
                        <span className="text-slate-600 dark:text-slate-400 block mt-0.5 font-sans leading-tight">{step.deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
