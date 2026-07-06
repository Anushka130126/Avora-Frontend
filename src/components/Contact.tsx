'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useInView } from '@/hooks/useInView';

// Engineered by Vaibhav Sharma · github.com/Nutricalboii
export default function Contact() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ponytail: single reusable input class builder replaces 6 duplicated cn() blocks
  const inputCls = (field: string) =>
    cn(
      'w-full px-4 py-3 text-base rounded-lg border transition-all duration-300 outline-none',
      focusedField === field
        ? 'border-indigo-500 dark:border-indigo-400 ring-2 ring-indigo-500/10 bg-white dark:bg-slate-900 shadow-sm'
        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100'
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
    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
    backgroundPosition: 'right 0.5rem center',
    backgroundSize: '1.5em 1.5em',
    paddingRight: '2.5rem',
  };

  return (
    <section id="contact" className="py-16 md:py-28 bg-white dark:bg-[#0f1115] border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-2 block">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Start a Conversation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to scale your operations with specialized talent? Let&apos;s discuss your requirements.
          </p>
        </div>

        <div
          className={cn(
            'max-w-3xl mx-auto bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-700 delay-100 rounded-3xl',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
        >
          {success ? (
            <div className="text-center py-12 animate-scale-in">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/50 rounded-full flex items-center justify-center animate-bounce-subtle">
                  <CheckCircle className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Inquiry Sent!</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm mx-auto">
                Thank you. Our team will reach out within 24 hours to discuss your needs.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="btn btn-secondary px-6 py-2.5 rounded-full text-sm font-medium"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot — hidden from humans, bots fill it */}
              <input
                type="text"
                name="_honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
                readOnly
              />

              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-lg flex gap-3 animate-slide-in-down">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                    required placeholder="Jane Doe"
                    className={inputCls('name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                    required placeholder="jane@example.com"
                    className={inputCls('email')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Company <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text" id="company" name="company"
                  value={formData.company} onChange={handleChange}
                  onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)}
                  placeholder="Acme Corp"
                  className={inputCls('company')}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Service Type <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="serviceType" name="serviceType"
                    value={formData.serviceType} onChange={handleChange}
                    onFocus={() => setFocusedField('serviceType')} onBlur={() => setFocusedField(null)}
                    className={cn(inputCls('serviceType'), 'appearance-none bg-no-repeat')}
                    style={selectStyle}
                  >
                    <option value="">Select a service</option>
                    <option value="outsourcing">Specialized Outsourcing</option>
                    <option value="skill-hiring">Specialized Skill Hiring</option>
                    <option value="ai-solutions">AI Solutions &amp; Automation</option>
                    <option value="data-annotations">Data Annotation &amp; Labeling</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Budget Range <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="budgetRange" name="budgetRange"
                    value={formData.budgetRange} onChange={handleChange}
                    onFocus={() => setFocusedField('budgetRange')} onBlur={() => setFocusedField(null)}
                    className={cn(inputCls('budgetRange'), 'appearance-none bg-no-repeat')}
                    style={selectStyle}
                  >
                    <option value="">Select a range</option>
                    <option value="under-5k">&lt;$5k</option>
                    <option value="5k-25k">$5k–$25k</option>
                    <option value="25k-100k">$25k–$100k</option>
                    <option value="over-100k">&gt;$100k</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                  required rows={5}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className={cn(inputCls('message'), 'resize-none')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'w-full btn btn-primary btn-lg rounded-xl overflow-hidden group',
                  isSubmitting && 'opacity-70 cursor-not-allowed'
                )}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending…
                    </>
                  ) : 'Send Inquiry'}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
