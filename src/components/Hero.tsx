'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.hero-headline',
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1.3, ease: 'power4.out', delay: 0.2 }
    );
    gsap.fromTo('.hero-sub',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power4.out', delay: 0.7 }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-[100dvh] flex flex-col justify-center lg:justify-end overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-0"
    >
      {/* Background image container rotated 90deg to landscape */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
         <div 
           className="absolute inset-0 bg-cover bg-center opacity-75 sm:opacity-80 scale-105"
           style={{ backgroundImage: "url('/abstract.jpg')" }}
         />
         {/* Gradients to ensure text readability against the background */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 sm:via-black/40 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      {/* Content — Responsive padding & clamp typography for Mobile/Tablet/iPad/Laptop */}
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-4 md:pb-12 lg:pb-24 max-w-screen-2xl mx-auto flex flex-col justify-center lg:justify-end h-full mt-14 sm:mt-16 md:mt-20 lg:mt-0">
        <h1
          className="hero-headline font-heading uppercase tracking-wide text-white leading-[0.95] mb-6 sm:mb-8"
          style={{
            fontSize: 'clamp(2.75rem, 6.5vw, 6.25rem)',
            willChange: 'transform, opacity',
          }}
        >
          Deploying<br />
          <span className="text-[#f59e0b]">intelligent</span><br />
          infrastructure<br />
          at scale.
        </h1>

        {/* Sleek caption on the bottom */}
        <div className="hero-sub max-w-3xl lg:max-w-4xl" style={{ willChange: 'transform, opacity' }}>
          <p className="font-sans text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed border-l-2 border-[#f59e0b]/60 pl-4 sm:pl-5">
            We specialize in production-grade AI solutions for high-stakes environments — bridging data quality to deliver systems that perform when outcomes matter.
          </p>
        </div>
      </div>
    </section>
  );
}
