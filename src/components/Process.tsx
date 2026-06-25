'use client';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Map requirements, architecture & constraints",
  },
  {
    number: "02",
    title: "Implementation",
    description: "Build robust software & custom LLM pipelines",
  },
  {
    number: "03",
    title: "Scaling",
    description: "Deploy & provide ongoing support",
  },
];

export default function Process() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.2 });

  return (
    <section id="process" className="py-16 md:py-28 bg-white border-t border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={cn(
            'text-center mb-16 md:mb-24 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-2 block animate-fade-in">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">
            The Avora A.I.M. Framework
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  'relative transition-all duration-700 opacity-0 translate-y-8',
                  isInView && 'opacity-100 translate-y-0'
                )}
                style={{ transitionDelay: isInView ? `${index * 150}ms` : '0ms' }}
              >
                <div className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all duration-500 text-center flex flex-col items-center h-full relative overflow-hidden">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 border border-primary-100 group-hover:bg-primary-100 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl font-heading font-bold text-primary-600">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Hover indicator line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
