'use client';

import React from 'react';

interface TechnicalGridProps {
  className?: string;
  showDots?: boolean;
}

export function TechnicalGrid({ className, showDots = true }: TechnicalGridProps) {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none bg-[#090d16]">
      {/* Structural horizontal and vertical lines */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />

      {/* Grid intersection markers (crosshairs) */}
      {showDots && (
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1.5px)`,
            backgroundSize: '4rem 4rem',
          }}
        />
      )}

      {/* Radial vignette to fade out toward edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#090d16_90%)]" />
    </div>
  );
}
