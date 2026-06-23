'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 tracking-tight mb-6">
          Intelligent Outsourcing. <br className="hidden md:block" />
          <span className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Powered by AI.</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
          Scale your operations with top-tier engineering talent and bespoke AI automation.
        </p>
        <div className="flex justify-center">
          <button
            onClick={scrollToContact}
            className="group bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 font-medium transition-transform hover:scale-105 shadow-[0_8px_20px_rgb(37,99,235,0.2)] flex items-center justify-center gap-2"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
