export default function Testimonials() {
  const testimonials = [
    {
      quote: "Avora fundamentally transformed how we handle data operations. Their embedded engineers act like a core part of our own team.",
      author: "David Chen",
      role: "CTO, FinTech Solutions",
    },
    {
      quote: "We needed a custom LLM pipeline built fast. The Avora team delivered an MVP in 4 weeks that immediately reduced our manual overhead by 40%.",
      author: "Sarah Jenkins",
      role: "Head of Operations, HealthScale",
    },
    {
      quote: "The quality of their data annotation is unmatched. When training our proprietary models, the precision Avora provided was the difference-maker.",
      author: "Michael Roberts",
      role: "VP of AI, LogicSystems",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-2 block">Client Success</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">Trusted by Leaders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-50 border-l-4 border-l-primary-500 rounded-r-2xl p-8 shadow-sm flex flex-col h-full"
            >
              <svg className="w-8 h-8 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-slate-700 leading-relaxed text-base italic mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-heading font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
