'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import { CheckCircle2, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      serviceType: formData.get('serviceType'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdt6LMsh3XZ6eBUAmns_WBtqd8ORR-uDizVZhaUDqWG9bAqYa5LtbpSpZX-iVrnRlI/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error('Submission error:', err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-600 transition-all duration-200";
  const labelClass = "block text-sm font-medium text-slate-700 mb-2";

  return (
    <section id="contact" className="py-16 md:py-28 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-2 block">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">Let's Build Together</h2>
          <p className="mt-4 text-lg text-slate-600">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/40 rounded-2xl p-6 md:p-10">
          {success ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">Thank you!</h3>
              <p className="text-slate-600 text-lg">We'll reach out within 24 hours.</p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-8 text-primary-600 font-medium hover:text-primary-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/10 rounded px-2"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm font-medium flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Something went wrong. Please try again later or email us directly.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={inputClass}
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className={labelClass}>Company (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className={inputClass}
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>Budget Range (Optional)</label>
                  <div className="relative">
                    <select
                      name="budget"
                      id="budget"
                      className={cn(inputClass, "appearance-none cursor-pointer")}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a range</option>
                      <option value="<$5k">&lt;$5k</option>
                      <option value="$5–25k">$5–25k</option>
                      <option value="$25–100k">$25–100k</option>
                      <option value=">$100k">&gt;$100k</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className={labelClass}>Service Type</label>
                <div className="relative">
                  <select
                    name="serviceType"
                    id="serviceType"
                    required
                    className={cn(inputClass, "appearance-none cursor-pointer")}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Outsourcing">Outsourcing</option>
                    <option value="Skill Hiring">Skill Hiring</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Data Annotations">Data Annotations</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Project Details</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className={cn(inputClass, "resize-none")}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-600"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Inquiry'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
