import Link from 'next/link';
import type { Metadata } from 'next';

// Engineered by Vaibhav Sharma · github.com/Nutricalboii

export const metadata: Metadata = {
  title: 'Privacy Policy | Avora Ventures',
  description: 'How Avora Ventures collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-10 group">
          <svg className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">1. Information We Collect</h2>
            <p>When you submit the contact form on our website, we collect your name, email address, company name (optional), selected service type, budget range, and your message. This information is used solely to respond to your inquiry.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">2. How We Use Your Information</h2>
            <p>We use your contact form submissions only to respond to your inquiry and discuss potential engagements. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">3. Data Storage</h2>
            <p>Form submissions are stored securely in Google Sheets, accessible only to the Avora Ventures team. We retain this data for up to 24 months or until you request deletion.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">4. Cookies</h2>
            <p>We use essential cookies only — specifically those required by Next.js for theme preferences and session management. We do not use tracking or advertising cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">5. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at <a href="mailto:contact@avora.ventures" className="text-indigo-600 dark:text-indigo-400 hover:underline">contact@avora.ventures</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">6. Analytics</h2>
            <p>We use Vercel Analytics to collect anonymous, aggregate usage statistics. No personally identifiable information is collected through analytics.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-3">7. Contact</h2>
            <p>For privacy inquiries, email <a href="mailto:contact@avora.ventures" className="text-indigo-600 dark:text-indigo-400 hover:underline">contact@avora.ventures</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
