'use client';

import { ArrowRight, CheckCircle2, Clock, Users } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';
import { PatternGrid } from '@/components/BackgroundPatterns';

export default function Hero() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      <PatternGrid />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={cn(
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
            Scale your operations. <br className="hidden md:block" />
            <span className="text-gradient">Powered by specialized talent and AI.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 px-4 md:px-0 leading-relaxed">
            Avora Ventures combines outsourcing, skill hiring, AI solutions, and data annotations into one unified platform.
          </p>
        </div>
        
        <div 
          className={cn(
            'flex justify-center mb-20 transition-all duration-700 delay-200',
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        >
          <button
            onClick={scrollToContact}
            className="group btn btn-primary btn-lg btn-round shadow-lg"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3-Stat Mini Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Users, stat: "500+", label: "Verified Engineers" },
            { icon: CheckCircle2, stat: "95%", label: "Client Retention" },
            { icon: Clock, stat: "2–6 Weeks", label: "AI Implementation" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={cn(
                  'bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center transition-all duration-700',
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isInView ? `${(index + 1) * 150}ms` : '0ms' }}
              >
                <Icon className="w-8 h-8 text-primary-600 mb-3" />
                <span className="text-xl font-heading font-bold text-slate-900">{item.stat}</span>
                <span className="text-sm text-slate-500 font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
