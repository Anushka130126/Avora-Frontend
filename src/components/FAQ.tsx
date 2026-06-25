'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
  ];

  return (
    <section id="faq" className="py-16 md:py-28 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-2 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-slate-50 border transition-all duration-300 rounded-2xl overflow-hidden",
                openIndex === index ? "border-primary-200 shadow-md" : "border-slate-200 hover:border-slate-300"
              )}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/10"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-slate-900 pr-4 text-base md:text-lg">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0",
                    openIndex === index ? "rotate-180 text-primary-600" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 pt-0 text-slate-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
