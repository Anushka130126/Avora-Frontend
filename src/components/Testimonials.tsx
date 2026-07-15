'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const testimonials = [
  {
    quote: "Working with Avora was a game-changer. They streamlined our entire operation and set us up for scalable growth. The strategic insight is unparalleled.",
    author: "Michael",
    role: "VP of Operations, Technology & Logistics",
    avatar: "M",
    verification: "OPERATIONAL_SCALING"
  },
  {
    quote: "The deep understanding of both manufacturing constraints and modern data science allowed them to deliver an incredibly effective optimization model for our supply chain.",
    author: "Kenji",
    role: "Director of Engineering, Heavy Manufacturing",
    avatar: "K",
    verification: "SUPPLY_CHAIN_OPT"
  },
  {
    quote: "Avora fundamentally transformed how we approach AI. Their ability to bridge complex technical challenges with business realities is exactly what we needed in the APAC market.",
    author: "Priya",
    role: "CTO, Financial Technologies & Services",
    avatar: "P",
    verification: "APAC_AI_STRATEGY"
  },
  {
    quote: "Their consensus-verified data annotation pipeline delivered incredibly clean datasets for our production models, cutting our manual review time in half.",
    author: "David",
    role: "Founder, Enterprise SaaS Platforms",
    avatar: "D",
    verification: "DATA_OPERATIONS"
  }
];

export default function Testimonials() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[currentTestimonialIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden services-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <span className="section-eyebrow">Client Success</span>
          <h2 className="section-heading mb-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.35)' }}>Operational Verification</h2>
          <p className="section-subtext max-w-2xl mx-auto">
            Verified case outcomes compiled directly from partner platform engineering logs.
          </p>
        </div>

        {/* Verification Logs Carousel */}
        <div className="glass-panel p-8 md:p-12 rounded-2xl flex flex-col">
          <div>
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest block mb-6">
              Verification Log // {t.verification}
            </span>
            <p className="text-base md:text-lg font-sans text-slate-700 dark:text-slate-300 leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
          
          <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800/60">
            <div>
              <div className="text-sm font-heading font-bold text-slate-900 dark:text-white">{t.author}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={prevTestimonial} className="p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#D4AF37] dark:hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={nextTestimonial} className="p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#D4AF37] dark:hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
