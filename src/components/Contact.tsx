'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Quote, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useInView } from '@/hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Working with Abhay and the Avora team was a game-changer. They streamlined our entire operation and set us up for scalable growth. The strategic insight is unparalleled.",
    author: "Michael Roberts",
    role: "VP of Operations, TechFlow (USA)",
    avatar: "MR",
    verification: "OPERATIONAL_SCALING"
  },
  {
    quote: "The deep understanding of both manufacturing constraints and modern data science allowed them to deliver an incredibly effective optimization model for our supply chain.",
    author: "Kenji Sato",
    role: "Director of Engineering, Industrial Solutions (Japan)",
    avatar: "KS",
    verification: "SUPPLY_CHAIN_OPT"
  },
  {
    quote: "Avora fundamentally transformed how we approach AI. Their ability to bridge complex technical challenges with business realities is exactly what we needed in the APAC market.",
    author: "Priya Sharma",
    role: "CTO, FinEdge Innovations (India)",
    avatar: "PS",
    verification: "APAC_AI_STRATEGY"
  },
  {
    quote: "Their specialized talent sourcing helped us build a high-performing remote engineering team in record time. We couldn't have scaled our platform without them.",
    author: "David Jenkins",
    role: "Founder, ScaleTech (USA)",
    avatar: "DJ",
    verification: "TALENT_PLACEMENT"
  }
];

const faqs = [
  {
    question: "What's included in outsourcing?",
    answer: "We provide fully vetted, senior-level engineering talent tailored to your tech stack. This includes technical vetting, onboarding, continuous performance management, and replacement guarantees.",
  },
  {
    question: "How fast can you deploy AI?",
    answer: "Depending on complexity, standard deployments range from 2 to 6 weeks. We prioritize rapid, measurable ROI by launching foundational workflows first.",
  },
  {
    question: "Can I hire for short-term projects?",
    answer: "Yes. Our Specialized Skill Hiring allows you to bring on fractional experts (like ML engineers or security specialists) for engagements as short as 5 to 50 days.",
  },
  {
    question: "How does equity work in the venture studio?",
    answer: "For select partnerships, we structure technical co-development engagements with a reduced-rate model. Connect with us to discuss specifics.",
  }
];

export default function Contact() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });
  
  // Testimonials state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    budgetRange: '',
    message: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputCls = (field: string) =>
    cn(
      'w-full px-4 py-3 text-sm font-sans rounded border transition-all duration-150 outline-none bg-white/[0.02]',
      focusedField === field
        ? 'border-teal-500/50 ring-1 ring-teal-500/30 bg-white/[0.04] text-white'
        : 'border-slate-800 hover:border-slate-700 text-slate-200 placeholder:text-slate-500'
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim()) { setError('Please enter your name.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setError('Please enter a valid email address.'); return; }
    if (!formData.message.trim()) { setError('Please tell us about your project.'); return; }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _honeypot: '' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', serviceType: '', budgetRange: '', message: '' });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectStyle = {
    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
    backgroundPosition: 'right 0.5rem center',
    backgroundSize: '1.5em 1.5em',
    paddingRight: '2.5rem',
  };

  const t = testimonials[currentTestimonialIndex];

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(8, 11, 18, 0.45) 0%, rgba(8, 11, 18, 0.95) 100%), url('/Structural_Precision.jpg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <span className="section-eyebrow">Engagement &amp; Verification</span>
          <h2 className="section-heading mb-4">Start a Conversation</h2>
          <p className="section-subtext max-w-2xl mx-auto">
            Discuss your pipeline requirements, verification SLAs, and annotation workloads directly with our leads.
          </p>
        </div>

        {/* Master Side-by-Side Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Verification Logs & FAQs (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Case Studies / Testimonials Card */}
            <div className="border border-slate-850 bg-slate-950/80 p-6 rounded-2xl backdrop-blur-md shadow-2xl relative overflow-hidden">
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest block mb-4">
                Verification Log // {t.verification}
              </span>
              
              <div className="min-h-[140px] flex flex-col justify-between">
                <p className="text-sm font-sans text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-heading font-bold text-white">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={prevTestimonial} className="p-1 rounded bg-white/[0.02] border border-slate-800 text-slate-400 hover:text-white transition-colors">
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={nextTestimonial} className="p-1 rounded bg-white/[0.02] border border-slate-800 text-slate-400 hover:text-white transition-colors">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion Card */}
            <div className="border border-slate-850 bg-slate-950/80 p-6 rounded-2xl backdrop-blur-md shadow-2xl space-y-4">
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest block">
                Frequently Asked Questions
              </span>
              <div className="space-y-1 divide-y divide-slate-850/60">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className="pt-3 first:pt-0">
                      <button
                        className="w-full py-2 text-left flex justify-between items-center gap-4 focus:outline-none"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span className={cn(
                          'font-sans text-xs font-semibold transition-colors',
                          isOpen ? 'text-white' : 'text-slate-350 hover:text-white'
                        )}>
                          {faq.question}
                        </span>
                        <ChevronDown className={cn('w-3.5 h-3.5 text-slate-500 transition-transform duration-300', isOpen && 'rotate-180 text-teal-400')} />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="text-[11px] font-sans text-slate-400 pb-3 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Intake Console (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-850 p-6 md:p-8 shadow-2xl rounded-2xl backdrop-blur-md">
            {success ? (
              <div className="text-center py-12">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center border border-teal-500/20">
                    <CheckCircle className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Inquiry Sent</h3>
                <p className="text-slate-450 mb-8 max-w-sm mx-auto font-sans text-sm">
                  Thank you. Our team will reach out within 24 hours to discuss your specifications.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-5 py-2.5 border border-slate-800 bg-transparent text-white font-sans text-xs font-semibold rounded hover:bg-white/[0.04] transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded flex gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-sans text-red-300">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-sans font-semibold text-slate-400 mb-1.5">
                      Name <span className="text-red-500 text-[10px] align-super ml-0.5">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                      required placeholder="Enter your name"
                      className={inputCls('name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-sans font-semibold text-slate-400 mb-1.5">
                      Email <span className="text-red-500 text-[10px] align-super ml-0.5">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                      required placeholder="Enter your email"
                      className={inputCls('email')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-sans font-semibold text-slate-400 mb-1.5">
                    Company <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text" id="company" name="company"
                    value={formData.company} onChange={handleChange}
                    onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)}
                    placeholder="Enter your company name"
                    className={inputCls('company')}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-sans font-semibold text-slate-400 mb-1.5">
                      Service Type <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <select
                      id="serviceType" name="serviceType"
                      value={formData.serviceType} onChange={handleChange}
                      onFocus={() => setFocusedField('serviceType')} onBlur={() => setFocusedField(null)}
                      className={cn(inputCls('serviceType'), 'appearance-none bg-no-repeat')}
                      style={selectStyle}
                    >
                      <option value="" className="bg-[#0a0a0f] text-slate-300">Select a service</option>
                      <option value="outsourcing" className="bg-[#0a0a0f] text-slate-300">Specialized Outsourcing</option>
                      <option value="skill-hiring" className="bg-[#0a0a0f] text-slate-300">Specialized Skill Hiring</option>
                      <option value="ai-solutions" className="bg-[#0a0a0f] text-slate-300">AI Solutions &amp; Automation</option>
                      <option value="data-annotations" className="bg-[#0a0a0f] text-slate-300">Data Annotation &amp; Labeling</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budgetRange" className="block text-xs font-sans font-semibold text-slate-400 mb-1.5">
                      Budget Range <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <select
                      id="budgetRange" name="budgetRange"
                      value={formData.budgetRange} onChange={handleChange}
                      onFocus={() => setFocusedField('budgetRange')} onBlur={() => setFocusedField(null)}
                      className={cn(inputCls('budgetRange'), 'appearance-none bg-no-repeat')}
                      style={selectStyle}
                    >
                      <option value="" className="bg-[#0a0a0f] text-slate-300">Select a range</option>
                      <option value="under-5k" className="bg-[#0a0a0f] text-slate-300">&lt;$5k</option>
                      <option value="5k-25k" className="bg-[#0a0a0f] text-slate-300">$5k–$25k</option>
                      <option value="25k-100k" className="bg-[#0a0a0f] text-slate-300">$25k–$100k</option>
                      <option value="over-100k" className="bg-[#0a0a0f] text-slate-300">&gt;$100k</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-sans font-semibold text-slate-400 mb-1.5">
                    Project Details <span className="text-red-500 text-[10px] align-super ml-0.5">*</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                    required rows={4}
                    placeholder="Describe your project, timelines, and goals..."
                    className={cn(inputCls('message'), 'resize-none')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded bg-[#B08D57] hover:bg-[#937343] text-white text-xs font-semibold tracking-wider uppercase transition-colors duration-150 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
