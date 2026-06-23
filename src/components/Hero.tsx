export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 text-slate-900 pt-16">
      {/* Abstract geometric background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-slate-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Intelligent Outsourcing.<br className="hidden md:block" />
          <span className="text-accent-blue">Powered by AI.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Scale your operations with top-tier engineering talent and cutting-edge artificial intelligence solutions. We build, manage, and optimize for your growth.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-900 text-white rounded-md font-medium text-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-lg"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
