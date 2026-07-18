'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What exactly does a "family-office-style incubator" mean?',
    answer: 'It means we operate with high commercial discipline, agility, and a long-term capital preservation mindset. Instead of chasing speculative metrics, we invest operational resources directly into identifying structural market gaps, building lean MVPs, and scaling only when real revenue and demand are proven.',
  },
  {
    question: 'How fast do you launch an initial MVP or product?',
    answer: 'Our standard technical engagements run 2 to 6 weeks from scoping to the first validated deployment. We run a tight discovery phase to map data readiness and technical constraints, treating the initial launch as a live test to prove product viability.',
  },
  {
    question: 'What industries does the Avora Ventures portfolio cover?',
    answer: 'Our portfolio spans four distinct emerging spaces: AI-native digital tools, consumer and lifestyle products, sourcing and export-driven models, and operational ventures.',
  },
  {
    question: 'How do you guarantee the quality of your technical assets?',
    answer: 'Every digital tool we incubate runs through our multi-stage QA framework. We measure label distribution, run expert benchmarking against gold-standard samples, and require high statistical validation before any software or dataset is deployed to production.',
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 md:py-36 relative overflow-hidden bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-[11px] font-mono font-semibold tracking-[0.18em] uppercase text-[#B8860B] mb-6 shadow-sm">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  'glass-panel rounded-2xl overflow-hidden transition-all duration-300',
                  isOpen ? 'border-[#B8860B]/40 shadow-md' : 'hover:border-[#B8860B]/20 shadow-sm'
                )}
              >
                <button
                  className="w-full px-7 py-6 text-left flex justify-between items-center gap-4 focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      'font-heading font-semibold text-lg transition-colors',
                      isOpen
                        ? 'text-slate-900'
                        : 'text-slate-700 group-hover:text-[#B8860B]'
                    )}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                      isOpen
                        ? 'bg-[#B8860B] text-white rotate-180'
                        : 'bg-slate-100 text-[#B8860B] group-hover:bg-[#B8860B]/10'
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                     <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                    >
                      <div className="px-7 pb-7 text-base text-slate-600 leading-relaxed">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent mb-5" />
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
