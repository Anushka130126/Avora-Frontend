'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/cn';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    industry: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputCls = (field: string) =>
    cn(
      'w-full px-4 py-3 text-sm font-sans rounded border transition-all duration-150 outline-none bg-black/[0.01] dark:bg-white/[0.02]',
      focusedField === field
        ? 'border-[#D4AF37]/50 ring-1 ring-[#D4AF37]/30 bg-black/[0.02] dark:bg-white/[0.04] text-slate-900 dark:text-white'
        : 'border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-750 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500'
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
      setFormData({ name: '', email: '', company: '', serviceType: '', industry: '', message: '' });
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

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#080b11] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="section-eyebrow">Contact &amp; Scoping</span>
          <h2 className="section-heading mb-4">
            Initiate scoping.
          </h2>
          <p className="section-subtext text-sm">
            Avora operates a structured intake process. Submit your telemetry requirements or pipeline constraints to begin.
          </p>
        </div>

        {/* Console Box */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-300 dark:border-slate-800">
          {success ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-350">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">Submission Successful</h3>
              <p className="text-sm font-sans text-slate-550 dark:text-slate-400 max-w-md mx-auto">
                Your parameters have been logged. A systems architect will follow up within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {error && (
                <div className="p-4 rounded border border-red-500/20 bg-red-500/5 text-red-500 text-xs font-sans">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-sans font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
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
                  <label htmlFor="email" className="block text-xs font-sans font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
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
                <label htmlFor="company" className="block text-xs font-sans font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
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
                  <label htmlFor="serviceType" className="block text-xs font-sans font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                    Service Type <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="serviceType" name="serviceType"
                    value={formData.serviceType} onChange={handleChange}
                    onFocus={() => setFocusedField('serviceType')} onBlur={() => setFocusedField(null)}
                    className={cn(inputCls('serviceType'), 'appearance-none bg-no-repeat dark:text-white')}
                    style={selectStyle}
                  >
                    <option value="" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Select a service</option>
                    <option value="data-generation" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Data Generation</option>
                    <option value="data-annotation" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Data Annotation</option>
                    <option value="labeling" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Data Labeling</option>
                    <option value="auditing" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Quality Auditing</option>
                    <option value="ai-implementation" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">AI Implementation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-xs font-sans font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                    Industry <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="industry" name="industry"
                    value={formData.industry} onChange={handleChange}
                    onFocus={() => setFocusedField('industry')} onBlur={() => setFocusedField(null)}
                    className={cn(inputCls('industry'), 'appearance-none bg-no-repeat dark:text-white')}
                    style={selectStyle}
                  >
                    <option value="" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Select an industry</option>
                    <option value="healthcare" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Healthcare</option>
                    <option value="finance" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Finance</option>
                    <option value="retail" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Retail &amp; E-commerce</option>
                    <option value="logistics" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Logistics &amp; Supply Chain</option>
                    <option value="energy" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Energy &amp; Utilities</option>
                    <option value="other" className="bg-[#F8F5EE] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-300">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-sans font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
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
                className="w-full py-3.5 rounded bg-[#D4AF37] hover:bg-[#B8962D] text-white text-xs font-semibold tracking-wider uppercase transition-colors duration-150 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
