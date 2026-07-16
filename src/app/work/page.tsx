import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delivered Work | Avora Ventures',
  description: 'Anonymized engagement outcomes from Avora Ventures — sector, methodology, and verified results across data generation, annotation, labeling, and AI implementation.',
};

// No company names. Sector type + what we did + how + result only.
const cases = [
  {
    id: 'med-gen',
    sector: 'Rare Disease Diagnostics — Healthcare',
    service: 'Data Generation',
    what: 'Engineered a physics-informed synthetic MRI volume library to address severe scarcity in confirmed training cases for a rare oncological condition.',
    how: 'Applied parametric copula modeling to capture inter-slice spatial correlations. Differential privacy budget (ε = 1.2) enforced throughout generation. Wasserstein distance between synthetic and real distributions validated below 0.04 before sign-off. Domain expert radiologists reviewed 500 stratified samples.',
    result: 'Diagnostic AUC improved from 0.72 → 0.91. Training corpus scaled from 87 confirmed cases to 50,000 synthetic volumes, enabling the first statistically valid model training run.',
    metric: 'AUC 0.72 → 0.91',
  },
  {
    id: 'agri-ann',
    sector: 'Precision Agriculture — Drone Telemetry',
    service: 'Data Annotation',
    what: 'Annotated high-density multispectral drone imagery across 14 distinct crop stress classes for a precision agriculture platform operating across multiple growing regions.',
    how: 'Built a domain ontology covering stress type, severity stage, and spectral band signature. Model-assisted pre-labeling using a fine-tuned segmentation model reduced manual load by 58%. Double-blind adjudication enforced on all disagreement cases. Fleiss\' Kappa target ≥ 0.91 required before batch sign-off.',
    result: 'Field scouting time reduced from 3 hours to 25 minutes per plot. 800,000 multispectral frames delivered at a final inter-annotator Kappa of 0.93.',
    metric: 'Scouting: 3h → 25min',
  },
  {
    id: 'clinical-label',
    sector: 'Clinical Document Processing — Pharmaceutical',
    service: 'Data Labeling',
    what: 'Operationalized OCR-based layout-analysis extraction and structured labeling across multi-format clinical trial data collection sheets for a pharmaceutical data operations team.',
    how: 'Deployed a consensus verification protocol with triple-review on ambiguous table regions and handwritten fields. Prodigy used for span-level entity labeling; CVAT for table structure and form-field annotation. Statistical QA gate: minimum F1 ≥ 0.93 and Cohen\'s Kappa ≥ 0.90 required per data point category before delivery.',
    result: '2.1 million pages processed across 47 distinct data point categories. Final F1: 0.94, Kappa: 0.90. Zero pages required re-extraction post-delivery.',
    metric: 'F1: 0.94 · Kappa: 0.90',
  },
  {
    id: 'retail-ai',
    sector: 'Multi-SKU Retail — Demand Forecasting',
    service: 'AI Implementation',
    what: 'Designed and integrated a custom predictive ensemble model into the client\'s on-premise cloud infrastructure for multi-horizon demand forecasting across a large-scale product catalogue.',
    how: 'Three-week discovery phase mapped existing data pipelines, identified distribution shift patterns, and defined forecast horizons. PyTorch model compiled to ONNX Runtime for edge deployment. SHAP explainability layer added to satisfy internal procurement audit requirements. Kolmogorov-Smirnov drift monitoring deployed post-launch to flag covariate shift.',
    result: '40% reduction in manual planning overhead in the first quarter. 680% ROI demonstrated at the 36-month projection horizon.',
    metric: '680% ROI · 36 months',
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest hover:text-[#c09f32] transition-colors mb-8 block"
          >
            ← Back
          </Link>
          <span className="section-eyebrow">Delivered Outcomes</span>
          <h1 className="section-heading mt-2 mb-4">Work from the field.</h1>
          <p className="section-subtext max-w-xl">
            Anonymised engagement outcomes. No client names — sector, methodology, and verified result only. All engagements are NDA-protected.
          </p>
        </div>

        {/* Case list */}
        <div className="space-y-0 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
          {cases.map((c, i) => (
            <div
              key={c.id}
              className="p-8 md:p-10 border-b border-slate-200 dark:border-slate-800 last:border-b-0 bg-white dark:bg-slate-900/40"
            >
              <div className="flex flex-col lg:flex-row gap-10 justify-between">

                {/* Left: detail */}
                <div className="space-y-6 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[9px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-2.5 py-1 rounded-full">
                      {c.service}
                    </span>
                    <span className="text-sm font-sans font-semibold text-slate-800 dark:text-slate-100">
                      {c.sector}
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">What we did</p>
                    <p className="text-sm font-sans text-slate-600 dark:text-slate-300 leading-relaxed">{c.what}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">How</p>
                    <p className="text-sm font-sans text-slate-600 dark:text-slate-300 leading-relaxed">{c.how}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">Result</p>
                    <p className="text-sm font-sans text-slate-600 dark:text-slate-300 leading-relaxed">{c.result}</p>
                  </div>
                </div>

                {/* Right: metric */}
                <div className="flex-shrink-0 flex lg:items-start">
                  <div className="border border-[#D4AF37]/30 rounded-xl p-6 min-w-[176px] text-center bg-white dark:bg-slate-900 shadow-sm">
                    <span className="block text-[9px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest mb-3">
                      Primary Outcome
                    </span>
                    <span className="text-sm font-mono font-extrabold text-slate-900 dark:text-white leading-snug">
                      {c.metric}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs font-mono text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-6">
          Metrics verified through partner delivery logs. Client names withheld by default under NDA.
        </p>

      </div>
    </main>
  );
}
