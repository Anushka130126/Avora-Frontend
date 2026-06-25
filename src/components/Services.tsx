'use client';

import { Users, Briefcase, BrainCircuit, Layers } from 'lucide-react';
import { services } from '@/config/services';
import { cn } from '@/lib/cn';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Briefcase,
  BrainCircuit,
  Layers,
};

export default function Services() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  return (
    <section id="services" className="py-16 md:py-28 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={cn(
            'text-center mb-12 md:mb-16 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-2 block animate-fade-in">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Our Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={cn(
                  'group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-500 flex flex-col h-full',
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center mb-6 border border-slate-200 dark:border-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-800 transition-all duration-300">
                    {Icon && <Icon className="w-7 h-7 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-300" />}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/50">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all duration-300">
                      {service.metrics}
                    </span>
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-slate-400 dark:text-slate-500 font-bold mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
