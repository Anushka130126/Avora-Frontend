// Dot grid pattern — inspired by the dot-matrix backgrounds used on premium SaaS sites.
// Creates depth without color noise. The radial fade masks edges for a natural look.
export function PatternDot() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.07] pointer-events-none" width="100" height="100">
      <defs>
        <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
        <radialGradient id="dotFade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="dotMask">
          <rect width="100%" height="100%" fill="url(#dotFade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" mask="url(#dotMask)" />
    </svg>
  );
}

// Fine grid lines for section backgrounds
export function PatternGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.04] pointer-events-none" width="100" height="100">
      <defs>
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <radialGradient id="gridFade" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="gridMask">
          <rect width="100%" height="100%" fill="url(#gridFade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
    </svg>
  );
}

// Hero-specific glow orb — replaces neon gradients with a single, soft depth accent
export function HeroGlow() {
  return (
    <>
      {/* Primary center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none">
        <div className="absolute inset-0 bg-indigo-500/[0.04] dark:bg-indigo-500/[0.08] rounded-full blur-[120px]" />
      </div>
      {/* Subtle top-right accent */}
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-slate-200/40 dark:bg-slate-800/20 rounded-full blur-[100px] pointer-events-none" />
    </>
  );
}
