'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';
import { useInView } from '@/hooks/useInView';
import { Quote, ChevronLeft, ChevronRight, MessageSquareCode } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Working with Abhay and the Avora team was a game-changer. They streamlined our entire operation and set us up for scalable growth. The strategic insight is unparalleled.",
    author: "Michael Roberts",
    role: "VP of Operations, TechFlow (USA)",
    avatar: "MR",
    verification: "OPERATIONAL_SCALING"
  },
  {
    quote: "The deep understanding of both manufacturing constraints and modern data science allowed them to deliver an incredibly effective optimization model for our supply chain.",
    author: "Kenji Sato",
    role: "Director of Engineering, Industrial Solutions (Japan)",
    avatar: "KS",
    verification: "SUPPLY_CHAIN_OPT"
  },
  {
    quote: "Avora fundamentally transformed how we approach AI. Their ability to bridge complex technical challenges with business realities is exactly what we needed in the APAC market.",
    author: "Priya Sharma",
    role: "CTO, FinEdge Innovations (India)",
    avatar: "PS",
    verification: "APAC_AI_STRATEGY"
  },
  {
    quote: "Their specialized talent sourcing helped us build a high-performing remote engineering team in record time. We couldn't have scaled our platform without them.",
    author: "David Jenkins",
    role: "Founder, ScaleTech (USA)",
    avatar: "DJ",
    verification: "TALENT_PLACEMENT"
  },
  {
    quote: "The custom AI predictive analytics dashboard designed by Avora gave our team absolute clarity on resource allocation. Their work is highly professional and delivered on budget.",
    author: "Rohan Mehta",
    role: "VP of Product, ZetaLogistics (India)",
    avatar: "RM",
    verification: "ANALYTICS_DASHBOARD"
  },
  {
    quote: "Avora's specialized skill hiring platform matched us with top-tier ML engineers within days. Their screening process is incredibly thorough and saved us weeks of interview cycles.",
    author: "Aditi Rao",
    role: "Co-Founder, HealthMatrix (India)",
    avatar: "AR",
    verification: "ML_TALENT_VETTING"
  },
  {
    quote: "Their consulting experience shone through in how they structured our transition to modern cloud workflows. A team of exceptional caliber.",
    author: "Lukas Weber",
    role: "Head of Infrastructure, NexaAuto (Germany)",
    avatar: "LW",
    verification: "CLOUD_TRANSITION"
  },
  {
    quote: "Outstanding execution from start to finish. They built a custom data annotation engine that reduced our training latency by over 40%.",
    author: "Sarah Hamilton",
    role: "Chief Data Officer, Quantum Finance (UK)",
    avatar: "SH",
    verification: "DATA_ANNOTATION_ENG"
  },
  {
    quote: "Avora acted as an extension of our core team. Their commitment to building clean, maintainable architecture was exactly what we needed to secure our Series A.",
    author: "Oliver Campbell",
    role: "VP of Engineering, CloudVentures (Australia)",
    avatar: "OC",
    verification: "ARCHITECTURE_COMPLIANCE"
  }
];

export default function Testimonials() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance slideshow every 8 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden border-t border-slate-800 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div 
          ref={ref}
          className={cn(
            'text-center mb-12 transition-all duration-500',
            isInView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <span className="section-eyebrow">Client Success</span>
          <h2 className="section-heading">Operational Verification</h2>
          <p className="section-subtext max-w-xl mx-auto mt-2">
            Verified case outcomes compiled directly from partner platform engineering logs.
          </p>
        </div>

        {/* Slideshow Container Card */}
        <div className="relative border border-slate-800 bg-[#121218]/90 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-md overflow-hidden min-h-[360px] md:min-h-[320px] flex flex-col justify-between">
          <Quote className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 text-[#B08D57]/5 rotate-180" />

          {/* Testimonial Content Panel */}
          <div className="relative flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                className="space-y-6"
              >
                {/* Log Tag header */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 border-b border-slate-850 pb-3">
                  <span className="flex items-center gap-1.5">
                    <MessageSquareCode className="w-3.5 h-3.5 text-[#B08D57]" />
                    VERIFICATION_LOG
                  </span>
                  <span className="text-[#B08D57] font-bold uppercase tracking-wider">
                    {testimonials[currentIndex].verification}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-sans font-medium max-w-3xl pt-2">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-[#B08D57]/10 flex items-center justify-center font-mono font-bold text-xs text-[#B08D57] border border-[#B08D57]/20 flex-shrink-0">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm leading-none">{testimonials[currentIndex].author}</p>
                    <p className="font-mono text-[9px] text-slate-500 mt-1.5 uppercase tracking-wider">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Footer */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-800/80">
            {/* Slide Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-1.5 transition-all duration-300 rounded-full",
                    index === currentIndex ? "bg-[#B08D57] w-8" : "bg-slate-800 hover:bg-slate-700 w-2"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 bg-white/[0.02] hover:bg-white/[0.05] border border-slate-800 rounded-lg flex items-center justify-center transition-all duration-150 text-slate-400 hover:text-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 bg-white/[0.02] hover:bg-white/[0.05] border border-slate-800 rounded-lg flex items-center justify-center transition-all duration-150 text-slate-400 hover:text-white"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
