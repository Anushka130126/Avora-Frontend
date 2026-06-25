'use client';

import { Users, Briefcase, BrainCircuit, Layers } from 'lucide-react';
import { services } from '@/config/services';
import { cn } from '@/lib/cn';
import { useInView } from '@/hooks/useInView';
import { PatternGrid } from './BackgroundPatterns';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Briefcase,
  BrainCircuit,
  Layers,
};

export default function Services() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  return (
    <section id="services" className="relative py-24 md:py-32 bg-slate-50 dark:bg-[#0a0a0f] border-t border-slate-100 dark:border-slate-900 overflow-hidden">
      <PatternGrid />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          ref={ref}
          className={cn(
            'mb-16 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-heading mt-2 mb-4">Our Capabilities</h2>
          <p className="section-subtext max-w-xl">
            Four specializations. One integrated team. Built to scale your operations without the overhead.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 dark:bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={cn(
                  'group bg-white dark:bg-[#0a0a0f] p-8 md:p-10 flex flex-col gap-5 transition-all duration-500',
                  'hover:bg-slate-50 dark:hover:bg-white/[0.02]',
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isInView ? `${index * 80}ms` : '0ms' }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-indigo-200 dark:group-hover:border-indigo-900 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 transition-all duration-300">
                  {Icon && <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer metric */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    {service.metrics}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
