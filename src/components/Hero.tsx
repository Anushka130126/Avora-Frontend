'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      gsap.to(gridRef.current, { x, y, duration: 1.6, ease: 'power2.out' });
    };

    // Entrance animations — staggered editorial feel
    gsap.fromTo('.hero-label',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    );
    gsap.fromTo('.hero-headline',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.25 }
    );
    gsap.fromTo('.hero-descriptor',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.65 }
    );
    gsap.fromTo('.hero-index',
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.9 }
    );

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: 'rgba(255,255,255,0.68)', backdropFilter: 'blur(16px)' }}
    >
      {/* Parallax texture layer */}
      <div ref={gridRef} className="absolute inset-[-40px] z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40" />
      </div>

      {/* Top meta row */}
      <div className="hero-label relative z-10 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-28 md:pt-32"
        style={{ willChange: 'transform, opacity' }}>
        <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-slate-400">
          AI Infrastructure
        </span>
        <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-slate-400">
          Est. 2024
        </span>
      </div>

      {/* Main headline — left-anchored, large but controlled */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-12 pb-8">
        <h1
          className="hero-headline font-heading leading-[0.88] tracking-wide uppercase text-slate-900"
          style={{
            fontSize: 'clamp(3.2rem, 8vw, 7rem)',
            willChange: 'transform, opacity',
          }}
        >
          Scale Your{' '}
          <span className="text-[#B8860B]">AI Vision</span>
          <br />
          With Precision
          <br />
          And Fidelity.
        </h1>
      </div>

      {/* Bottom divider row — service index left, descriptor right */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="border-t border-slate-200/70 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">

          {/* Left: service label index */}
          <div className="hero-index flex flex-wrap gap-x-6 gap-y-2" style={{ willChange: 'opacity' }}>
            {['Data Generation', 'Data Annotation', 'Data Auditing', 'AI Implementation'].map((s, i) => (
              <span key={i} className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400">
                <span className="text-[#B8860B]">0{i + 1}</span>
                {s}
              </span>
            ))}
          </div>

          {/* Right: descriptor text */}
          <div className="hero-descriptor" style={{ willChange: 'transform, opacity' }}>
            <p className="font-sans text-slate-600 text-[15px] md:text-base leading-[1.8] md:text-right">
              Production-grade AI solutions for high-stakes environments —
              bridging data quality to systems that perform when outcomes matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
