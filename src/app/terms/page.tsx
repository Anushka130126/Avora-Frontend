import Link from 'next/link';
import type { Metadata } from 'next';

// Engineered by Vaibhav Sharma · github.com/Nutricalboii

export const metadata: Metadata = {
  title: 'Terms of Service | Avora Ventures',
  description: 'Terms and conditions for using Avora Ventures services and website.',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-10 group">
          <svg className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Terms of Service</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">1. Services</h2>
            <p>Avora Ventures provides specialized outsourcing, skill hiring, AI solutions, and data annotation services. Specific terms, deliverables, and pricing are defined in individual service agreements with each client.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">2. Website Use</h2>
            <p>This website is for informational purposes only. By using this site, you agree not to reproduce, distribute, or create derivative works from its content without written permission from Avora Ventures.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">3. Contact Form</h2>
            <p>Submitting the contact form does not constitute a binding agreement. All engagements are subject to a separate signed agreement between Avora Ventures and the client.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">4. Intellectual Property</h2>
            <p>All website content, design, and branding are the intellectual property of Avora Ventures. Work product delivered to clients under service agreements is governed by those agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">5. Limitation of Liability</h2>
            <p>Avora Ventures is not liable for indirect, incidental, or consequential damages arising from use of this website or its services beyond what is specified in a signed client agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">6. Governing Law</h2>
            <p>These terms are governed by applicable law. Specific jurisdiction is defined in individual client service agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">7. Contact</h2>
            <p>For questions about these terms, contact <a href="mailto:contact@avora.ventures" className="text-indigo-600 dark:text-indigo-400 hover:underline">contact@avora.ventures</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
