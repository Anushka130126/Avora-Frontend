'use client';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';
import { TechnicalGrid } from './ui/TechnicalGrid';

export default function CTA() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-slate-800 bg-[#090d16]">
      <TechnicalGrid showDots={false} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          ref={ref}
          className={cn(
            'transition-all duration-500',
            isInView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-teal-400 uppercase block mb-4">
            Initiate Engagement
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
            Ready to integrate?
          </h2>
          <p className="text-base text-slate-400 mb-10 max-w-xl mx-auto font-sans leading-relaxed">
            Discuss your pipeline specifications, accuracy SLAs, and team requirements directly with our technical leads.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center bg-white text-slate-900 font-semibold text-sm px-8 py-3.5 rounded border border-slate-700 hover:bg-slate-100 transition-colors duration-150"
          >
            Request Technical Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
