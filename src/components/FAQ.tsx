'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useInView } from '@/hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What's included in outsourcing?",
    answer: "We provide fully vetted, senior-level engineering talent tailored to your tech stack. This includes technical vetting, onboarding, continuous performance management, and replacement guarantees. You get dedicated resources without the overhead of traditional hiring.",
  },
  {
    question: "How fast can you deploy AI?",
    answer: "Depending on the complexity, our standard MVP deployment ranges from 2 to 6 weeks. We prioritize rapid, measurable ROI by launching foundational workflows first, then iterating and scaling the capabilities once value is proven.",
  },
  {
    question: "Can I hire for short-term projects?",
    answer: "Yes. Our Specialized Skill Hiring allows you to bring on fractional experts (like ML engineers or security specialists) for engagements as short as 5 to 50 days. You pay only for the specialized expertise you need, when you need it.",
  },
  {
    question: "How does equity work in the venture studio?",
    answer: "For select high-growth founders, we operate as a technical co-founder. We significantly discount our engineering and product development rates in exchange for a mutually agreed equity stake in the company we are building together.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Absolutely. We work with companies at every stage — from zero-to-one MVPs to scaling established products. Our engagement model is flexible enough to match your budget, timeline, and risk tolerance.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "Our core expertise spans fintech, energy & sustainability, healthcare, enterprise SaaS, and AI-native products. Backed by McKinsey consulting experience and deep technical execution, we apply proven frameworks across verticals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#080b12]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-heading">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-0 border border-slate-700/40 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={cn(
                  'group border-b border-slate-700/30 last:border-b-0 transition-colors duration-300',
                  isOpen
                    ? 'bg-white/[0.04]'
                    : 'hover:bg-white/[0.02]'
                )}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    'font-sans font-semibold text-base transition-colors',
                    isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  )}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                  >
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 flex-shrink-0 transition-colors duration-300',
                        isOpen ? 'text-teal-400' : 'text-slate-500 group-hover:text-slate-300'
                      )}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                    >
                      <div className="px-6 pb-6 pt-0 font-sans">
                        <div className="h-px bg-slate-700/30 mb-4" />
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
