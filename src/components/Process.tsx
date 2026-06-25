'use client';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We map your requirements, architecture, and constraints. No assumptions — every engagement starts with a deep requirements session.',
  },
  {
    number: '02',
    title: 'Implementation',
    description: 'Our engineers build robust software and custom AI pipelines. We iterate fast, ship clean code, and maintain full transparency.',
  },
  {
    number: '03',
    title: 'Scaling',
    description: 'We deploy, monitor, and provide ongoing support. Your growth is our benchmark — we\'re structured to scale alongside you.',
  },
];

export default function Process() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  return (
    <section id="process" className="py-24 md:py-32 bg-white dark:bg-[#0d0d12] border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={cn(
            'mb-16 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-eyebrow">Our Methodology</span>
          <h2 className="section-heading mt-2 mb-4">The Avora A.I.M. Framework</h2>
          <p className="section-subtext max-w-xl">
            Three phases. No bloat. Built to deliver results at each checkpoint.
          </p>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent dark:from-slate-800 dark:via-slate-800" />

          <div className="flex flex-col gap-0 md:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  'group relative flex flex-col md:flex-row gap-6 md:gap-10 py-10 border-b border-slate-100 dark:border-slate-800/50 last:border-0 transition-all duration-700',
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                )}
                style={{ transitionDelay: isInView ? `${index * 120}ms` : '0ms' }}
              >
                {/* Step number bubble */}
                <div className="flex-shrink-0 flex md:block">
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-indigo-200 dark:group-hover:border-indigo-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/30 transition-all duration-300">
                    <span className="text-2xl font-heading font-bold text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 transition-colors duration-300 tabular-nums">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-0 md:pt-3">
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Hover accent bar */}
                <div className="absolute left-0 md:left-auto md:right-0 md:top-0 bottom-0 md:bottom-auto w-0.5 md:w-full md:h-0.5 bg-indigo-500/0 group-hover:bg-indigo-500/20 transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
