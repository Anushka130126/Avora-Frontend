'use client';

import Link from 'next/link';

// Sector + service + primary metric only — no company names, no fake IDs
const previews = [
  { sector: 'Rare Disease Diagnostics', service: 'Data Generation', metric: 'AUC 0.72 → 0.91' },
  { sector: 'Precision Agriculture', service: 'Data Annotation', metric: 'Scouting: 3h → 25min' },
  { sector: 'Clinical Document Processing', service: 'Labeling', metric: 'F1: 0.94 · Kappa: 0.90' },
  { sector: 'Retail Demand Forecasting', service: 'AI Implementation', metric: '680% ROI at 36 months' },
];

export default function WorkPreview() {
  return (
    <section className="py-24 relative overflow-hidden services-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <span className="section-eyebrow">Delivered Outcomes</span>
            <h2 className="section-heading mt-2">Work from the field.</h2>
            <p className="section-subtext mt-3 max-w-lg">
              Anonymized engagement results. Sector, methodology, and verified outcome only.
            </p>
          </div>
          <Link
            href="/work"
            className="flex-shrink-0 text-xs font-mono font-bold text-[#D4AF37] hover:text-[#c09f32] uppercase tracking-widest transition-colors"
          >
            Read More →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {previews.map((p) => (
            <Link
              key={p.sector}
              href="/work"
              className="group glass-panel rounded-xl p-6 flex flex-col gap-4 hover:border-[#D4AF37]/40 transition-all duration-200"
            >
              <div>
                <span className="text-[9px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                  {p.service}
                </span>
                <span className="text-sm font-sans font-semibold text-slate-800 dark:text-slate-100">
                  {p.sector}
                </span>
              </div>
              <div className="h-px bg-slate-200 dark:bg-slate-800" />
              <span className="text-base font-mono font-extrabold text-slate-900 dark:text-white group-hover:text-[#D4AF37] transition-colors">
                {p.metric}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
