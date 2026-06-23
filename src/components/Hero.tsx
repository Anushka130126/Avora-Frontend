'use client';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Intelligent Outsourcing. <br className="hidden md:block" />
          <span className="text-accent-blue">Powered by AI.</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
          Scale your operations with top-tier engineering talent and bespoke AI automation.
        </p>
        <div className="flex justify-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-accent-blue text-white rounded-md font-semibold text-lg hover:bg-accent-blue-hover transition-colors shadow-sm"
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}
