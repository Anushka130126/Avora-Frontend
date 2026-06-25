'use client';

import { ArrowRight, ChevronRight } from 'lucide-react';
import { PatternGrid } from './BackgroundPatterns';
import { cn } from '@/lib/cn';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';

export default function Hero() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#0f1115]">
      <PatternGrid />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div 
          ref={ref}
          className="text-center max-w-4xl mx-auto"
        >
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 mb-8 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
            Elevating Global Operations
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
          
          <h1 className={cn(
            "text-5xl md:text-7xl font-heading font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Scale your vision with <br className="hidden md:block" />
            <span className="text-gradient">precision engineering.</span>
          </h1>
          
          <p className={cn(
            "text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            We combine elite engineering talent, specialized AI solutions, and rigorous data operations to build the products that define your future.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <Link href="#contact" className="btn btn-primary btn-lg w-full sm:w-auto group">
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#services" className="btn btn-secondary btn-lg w-full sm:w-auto">
              Explore Our Services
            </Link>
          </div>

          {/* Stats/Social Proof */}
          <div className={cn(
            "mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {[
              { label: 'Stanford Alumni', value: 'Founded' },
              { label: 'AI & Data Ops', value: 'Specialized' },
              { label: 'Global Talent', value: 'Sourced' },
              { label: 'Product Lifecycle', value: 'End-to-End' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center hover-glow p-4 rounded-xl dark:hover:bg-slate-900/50">
                <div className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
