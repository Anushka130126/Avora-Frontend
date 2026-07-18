'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle mouse move parallax effect on the SVG grid
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40; // 40px movement range
      const y = (e.clientY / innerHeight - 0.5) * 40;
      
      gsap.to(gridRef.current, {
        x,
        y,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-slate-50">
      {/* Primary Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-50/85 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 opacity-40 bg-[url('/Gold_Flow_Light.jpg.jpeg')] bg-cover bg-center" />
      </div>

      {/* SVG Grid Overlay - Parallax Layer */}
      <div 
        ref={gridRef}
        className="absolute inset-[-50px] z-10 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full text-center mt-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold tracking-tight leading-[1.05] text-slate-900 mb-8">
          From Idea to Impact — <br />
          <span className="text-slate-600">Fast, Lean, and Profitable.</span>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-slate-600 mb-12">
          Avora Ventures operates as a family-office-style incubator. We identify gaps in high-potential markets, validate them through lean MVPs, and build sustainable ventures around proven demand.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link href="#contact" className="btn-primary group !px-8 !py-4 text-base">
            Discuss Your Venture
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="#portfolio" className="btn-secondary !px-8 !py-4 text-base">
            Explore Our Portfolio
          </Link>
        </div>
      </div>

      {/* Vision & Core Model Section appended to Hero for fluid scrolling */}
      <div className="relative z-20 mt-32 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm text-[11px] font-mono font-semibold tracking-[0.18em] uppercase text-[#B8860B] mb-6 shadow-sm">
          Our Vision & Core Model
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
          Building the Next Generation of High-Performance Businesses.
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
          Our mission is to create a new generation of lean, high-performance businesses that seamlessly blend technology, creativity, and commercial discipline. As a family-office-style incubator, we provide both the operational infrastructure and the technical execution required to turn validated concepts into scalable enterprise assets. We protect capital by engineering products around absolute, proven demand.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { title: 'AI-Native Digital Tools', desc: 'Building proprietary intelligent software powered by our rigorous data and implementation pipeline.' },
            { title: 'Consumer & Lifestyle Products', desc: 'Designing and launching agile consumer brands scaled through digital-first infrastructure.' },
            { title: 'Sourcing & Export-Driven Models', desc: 'Developing high-efficiency operational channels to capture global trade opportunities.' },
            { title: 'Operational Ventures', desc: 'Deploying hands-on management and infrastructure within high-growth emerging industries.' }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-[#B8860B]/40 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-[#B8860B] border border-slate-200 group-hover:bg-[#B8860B]/10 transition-colors">
                <span className="font-mono font-bold text-sm">0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
