import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export default function Ventures() {
  const ventures = [
    {
      name: "NexusAI",
      description: "Automated customer success platform using generative AI.",
      metric: "+82% AI Referral Traffic",
      status: "Scaling",
      statusColor: "text-green-700 bg-green-50 border-green-200",
    },
    {
      name: "HealthSync",
      description: "HIPAA-compliant data warehousing for digital clinics.",
      metric: "Reduced Costs 10x",
      status: "Growing",
      statusColor: "text-primary-700 bg-primary-50 border-primary-200",
    },
    {
      name: "NexusBuild",
      description: "Next-generation CI/CD pipeline automation for web3 native applications.",
      metric: "10k+ Deployments",
      status: "Alpha",
      statusColor: "text-amber-700 bg-amber-50 border-amber-200",
    },
  ];

  return (
    <section id="ventures" className="py-16 md:py-28 bg-slate-50 dark:bg-[#0f1115] relative border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-2 block">Co-Founder Approach</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white tracking-tight mb-4">Avora Ventures Studio</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4 md:px-0">
            We don't just build for clients. We co-create and scale high-growth tech companies. Equity-based partnerships for the right founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className={cn(
                "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-lg hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full",
                index === 2 && "md:col-span-2 md:max-w-xl md:mx-auto w-full"
              )}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">{venture.name}</h3>
                    <span className={cn("inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border dark:opacity-80", venture.statusColor)}>
                      {venture.status}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 dark:group-hover:bg-slate-100 group-hover:text-white dark:group-hover:text-slate-900 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base mb-8">{venture.description}</p>
              </div>
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <span className="font-heading font-bold text-base md:text-lg text-slate-900 dark:text-white">{venture.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
