export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Map workflows & identify AI leverage points",
    },
    {
      number: "02",
      title: "Implementation",
      description: "Build robust software & custom LLM pipelines",
    },
    {
      number: "03",
      title: "Scaling",
      description: "Deploy & provide ongoing support",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-2 block">Our Methodology</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-4">The A.I.M. Framework</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto px-4 md:px-0">
            A repeatable, enterprise-grade system for moving from ambition to live deployment.
          </p>
        </div>

        <div className="flex flex-col md:flex-row relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[28px] left-[40px] right-[40px] h-px bg-slate-200 z-0"></div>
          
          {/* Mobile connecting line */}
          <div className="md:hidden absolute left-[28px] top-[40px] bottom-[40px] w-px bg-slate-200 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-row md:flex-col items-start md:items-center relative z-10 mb-12 md:mb-0 px-4"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-primary-600 font-bold text-lg mb-0 md:mb-6 mr-6 md:mr-0">
                {step.number}
              </div>
              <div className="text-left md:text-center mt-1 md:mt-0">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
