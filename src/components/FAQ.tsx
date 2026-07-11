'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useInView } from '@/hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is included in your outsourcing service?",
    answer: "We provide fully vetted, senior-level engineering talent matched to your tech stack. Included: structured technical vetting panels, onboarding into your codebase, continuous performance management, daily sprint telemetry, and a replacement guarantee. You scale engineering velocity without the overhead of traditional hiring — fixed costs convert to variable operating expense, engagement to engagement.",
  },
  {
    question: "How fast can you deploy a custom AI solution?",
    answer: "Our standard MVP deployment ranges from 2 to 6 weeks depending on scope. We start with the business problem — not a preferred algorithm — run a rapid discovery phase to scope constraints, then execute in tight iteration cycles with transparent metrics. The first deployment is treated as a validated hypothesis, not a final product. Scaling follows once value is proven.",
  },
  {
    question: "Can I engage specialists for short-term projects?",
    answer: "Yes. Our Specialized Skill Hiring connects you with fractional experts — ML engineers, security auditors, data architects — for engagements as short as 5 to 50 days. You pay only for the depth of expertise you need, when you need it. Partners carry the domain risk, so your internal team stays focused on core strategy.",
  },
  {
    question: "Is synthetic data reliable enough to train production models?",
    answer: "When engineered correctly, yes. Poorly designed synthetic data can memorize and reproduce rare real combinations — that is a genuine risk. But well-designed synthetic data, validated on downstream task performance, can outperform scarce or noisy real data. One of our medical imaging engagements scaled a rare disease training library from 87 real cases to 50,000 synthetic volumes, improving diagnostic AUC from 0.72 to 0.91. The key is combining domain expert oversight, physics-informed generation, and explicit privacy-budget controls — not just labeling output as synthetic.",
  },
  {
    question: "What does your data annotation process look like?",
    answer: "Annotation begins with a requirement and ontology phase — defining exactly what the model must learn and building a consistent classification system before any labeling starts. We then write exhaustive guidelines with visual examples and edge-case handling. Execution uses modality-specific tooling (CVAT for vision, Prodigy for NLP) with model-assisted pre-labeling to cut manual effort by up to 60%. A senior expert reviews a sample of all annotations, and a third expert adjudicates disagreements. Inter-annotator Kappa targets 0.91 or above before any dataset is signed off.",
  },
  {
    question: "How do you ensure data quality across large labeling workloads?",
    answer: "Garbage in, gospel out is as dangerous as garbage in, garbage out — inconsistent labels do not just add noise, they create dangerous overconfidence. Our QA framework measures accuracy, completeness, consistency, timeliness, and inter-annotator agreement across every batch. We run multi-stage validation: statistical tests, downstream task performance checks, expert benchmarking, and formal sign-off against defined quality thresholds. Datasets are versioned like software releases and regenerated when source distributions drift.",
  },
  {
    question: "How does equity work in the venture studio?",
    answer: "For select high-growth founders, we operate as a technical co-founder. We significantly discount our engineering and product development rates in exchange for a mutually agreed equity stake in the company we are building together. This is reserved for engagements where Avora's technical contribution is foundational to the product architecture — not a bolt-on service relationship.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "Our delivered work spans medical AI, pharmaceutical clinical trial automation, agricultural technology, retail demand forecasting, and enterprise infrastructure. Backed by McKinsey consulting experience and deep technical execution, we apply proven frameworks across verticals — with particular depth in regulated industries where data quality, explainability, and compliance are non-negotiable.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  return (
    <section id="faq" className="py-24 relative overflow-hidden contact-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div
          ref={ref}
          className="mb-16 text-center"
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-heading">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  'glass-panel rounded-xl overflow-hidden transition-all duration-300',
                  isOpen ? 'border-[#D4AF37]/40 shadow-lg' : 'hover:border-[#D4AF37]/20'
                )}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    'font-sans font-semibold text-sm md:text-base transition-colors',
                    isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 hover:text-[#D4AF37] dark:hover:text-white'
                  )}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 flex-shrink-0 transition-transform duration-300 text-slate-500',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-0 font-sans text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <div className="h-px bg-slate-200 dark:bg-slate-800/40 mb-4" />
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
