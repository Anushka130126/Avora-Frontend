'use client';

import { Users, Briefcase, BrainCircuit, Layers } from 'lucide-react';
import { services } from '@/config/services';
import { cn } from '@/lib/cn';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Briefcase,
  BrainCircuit,
  Layers,
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-2 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">
            Our Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 border border-primary-100">
                    {Icon && <Icon className="w-6 h-6 text-primary-600" />}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-primary-50 text-primary-700">
                      {service.metrics}
                    </span>
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 font-medium">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-primary-400" />
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
