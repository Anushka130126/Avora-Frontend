'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useInView } from '@/hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How fast can you deploy a custom AI solution?",
    answer: "Our standard engagement runs 2 to 6 weeks from scoping to first validated output, depending on complexity. We start with the business problem — not a preferred algorithm — run a discovery phase to map constraints and data readiness, then execute in tight iteration cycles with transparent metrics at every step. The first deployment is treated as a validated hypothesis, not a finished product. Scaling follows once value is demonstrated.",
  },
  {
    question: "Is synthetic data reliable enough to train production models?",
    answer: "When engineered correctly, yes. Poorly designed synthetic data can memorise and reproduce rare real-world combinations — that is a genuine risk. Well-designed synthetic data, validated against downstream task performance, can outperform scarce or noisy real data. One of our medical imaging engagements scaled a rare disease training corpus from 87 confirmed cases to 50,000 synthetic volumes, improving diagnostic AUC from 0.72 to 0.91. The critical controls are domain expert oversight, physics-informed generation, and explicit differential privacy budgets — not just labelling output as synthetic.",
  },
  {
    question: "What does your data annotation process look like?",
    answer: "Annotation begins with a requirement and ontology phase — defining exactly what the model must learn before any labelling starts. We write exhaustive annotation guidelines with visual examples and edge-case handling. Execution uses modality-specific tooling: CVAT for computer vision tasks, Prodigy for NLP labelling, with model-assisted pre-labelling reducing manual effort by up to 60%. A senior expert reviews a stratified sample of every batch, and a third expert adjudicates all disagreements. Inter-annotator Kappa must reach 0.91 or above before any dataset is signed off.",
  },
  {
    question: "What is the difference between annotation and labeling in your pipeline?",
    answer: "Annotation is the structured process of adding meaning to raw data using ontologies, schemas, and classification rules — it defines what the model must learn. Labeling is the operational execution at scale, applying those annotated rules consistently across large workloads with consensus verification protocols. Both steps are sequential in our pipeline and governed by distinct quality gates.",
  },
  {
    question: "How do you ensure quality across large labeling workloads?",
    answer: "Inconsistent labels do not just add noise — they create dangerous overconfidence in model outputs. Our QA framework measures accuracy, completeness, consistency, timeliness, and inter-annotator agreement across every batch. We run multi-stage validation: statistical tests on label distributions, downstream task performance checks, expert benchmarking against gold-standard samples, and formal sign-off against defined Kappa thresholds. Datasets are versioned like software releases and flagged for regeneration when source distributions drift post-deployment.",
  },
  {
    question: "What industries do you work in?",
    answer: "Delivered engagements span medical AI and rare disease diagnostics, pharmaceutical clinical trial document processing, precision agriculture and drone telemetry, multi-SKU retail demand forecasting, and enterprise data infrastructure. We apply the same rigorous pipeline framework across verticals, with particular depth in regulated industries where data quality, model explainability, and compliance are non-negotiable.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer: "Yes — all engagements are documented anonymously on the Delivered Work page. You will find the sector type, what was built, how it was done technically, and the verified outcome. No client names are used; results are compiled from delivery logs. If you want to discuss a specific use case in more detail before engaging, reach out through the contact form.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  return (
    <section id="faq" className="py-24 relative overflow-hidden contact-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
