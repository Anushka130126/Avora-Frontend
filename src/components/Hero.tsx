'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Using a clean, abstract, light gradient image
const HERO_BG = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=90&fit=crop&auto=format';

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.hero-headline',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.3, ease: 'power4.out', delay: 0.2 }
    );
    gsap.fromTo('.hero-sub',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power4.out', delay: 0.7 }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />

      {/* Vertical white gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.60) 60%, rgba(255,255,255,0.15) 80%, transparent 100%)',
        }}
      />

      {/* Content — Centered */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-20 w-full pb-20 md:pb-28 text-center flex flex-col items-center">
        <h1
          className="hero-headline font-heading uppercase tracking-wide text-slate-900 leading-[0.9] mb-10"
          style={{
            fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
            willChange: 'transform, opacity',
          }}
        >
          Scale Your{' '}
          {/* A vibrant, slightly lighter golden-amber that contrasts better */}
          <span className="text-[#eab308]">AI Vision</span>
          <br />
          With Precision
          <br />
          And Fidelity.
        </h1>

        {/* Removed border-t to remove the light line before the caption */}
        <div className="hero-sub pt-4" style={{ willChange: 'transform, opacity' }}>
          <p className="font-sans text-slate-600 text-base md:text-[17px] leading-[1.8] max-w-xl mx-auto">
            We specialize in production-grade AI solutions for high-stakes environments —
            bridging data quality to deliver systems that perform when outcomes matter.
          </p>
        </div>
      </div>
    </section>
  );
}
