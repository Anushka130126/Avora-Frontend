'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast can you deploy a custom AI solution?",
      answer: "Depending on the complexity, our standard initial deployment ranges from 2 to 6 weeks. We prioritize rapid MVP delivery so you can start seeing ROI immediately, followed by iterative scaling.",
    },
    {
      question: "Do you provide dedicated engineering teams?",
      answer: "Yes. We can augment your existing staff with embedded senior engineers or provide a fully managed, autonomous product squad to build and scale your application from scratch.",
    },
    {
      question: "How does the venture building equity model work?",
      answer: "For select high-growth partners, we operate as a technical co-founder. We significantly discount our engineering rates in exchange for a mutually agreed equity stake in the product we build.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">FAQS</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-blue-600' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0 text-slate-500">
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
