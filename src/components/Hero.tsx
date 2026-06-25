'use client';

import { ArrowRight, CheckCircle2, Clock, Users } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          Scale your operations. <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary-600 to-sky-500 bg-clip-text text-transparent">Powered by specialized talent and AI.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 px-4 md:px-0 leading-relaxed">
          Avora Ventures combines outsourcing, skill hiring, AI solutions, and data annotations into one unified platform.
        </p>
        
        <div className="flex justify-center mb-20">
          <button
            onClick={scrollToContact}
            className="group bg-primary-600 hover:bg-primary-700 text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-600"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3-Stat Mini Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
            <Users className="w-8 h-8 text-primary-600 mb-3" />
            <span className="text-xl font-heading font-bold text-slate-900">500+</span>
            <span className="text-sm text-slate-500 font-medium">Verified Engineers</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-primary-600 mb-3" />
            <span className="text-xl font-heading font-bold text-slate-900">95%</span>
            <span className="text-sm text-slate-500 font-medium">Client Retention</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
            <Clock className="w-8 h-8 text-primary-600 mb-3" />
            <span className="text-xl font-heading font-bold text-slate-900">2–6 Weeks</span>
            <span className="text-sm text-slate-500 font-medium">AI Implementation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
