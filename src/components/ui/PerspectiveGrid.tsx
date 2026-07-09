'use client';

import React from 'react';

export function PerspectiveGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-20 overflow-hidden">
      {/* Deep tinted base — NOT pure black */}
      <div className="absolute inset-0 bg-[#080b12]" />
      
      {/* Grid Pattern — slate lines, NOT indigo */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          transform: 'perspective(1000px) rotateX(60deg) scale(2) translateY(-20%)',
          transformOrigin: 'top center',
        }}
      />
      
      {/* Subtle teal ambient glow at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/[0.03] rounded-full blur-[120px]" />
      
      {/* Radial vignette — uses surface color, not pure black */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080b12_70%)]" />
    </div>
  );
}
