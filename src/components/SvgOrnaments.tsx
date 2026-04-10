/**
 * Hand-crafted Nordic-themed SVG ornaments for decorative accents and backgrounds.
 * All use currentColor so they inherit text color from parent.
 */

/** Scissors icon rotated at an angle — used as a section divider accent */
export const ScissorsDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 24" fill="none" className={className} aria-hidden="true">
    <line x1="0" y1="12" x2="42" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <g transform="translate(48, 2) scale(0.8)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none">
      <circle cx="6" cy="6" r="4" />
      <circle cx="6" cy="18" r="4" />
      <line x1="10" y1="7" x2="22" y2="17" />
      <line x1="10" y1="17" x2="22" y2="7" />
    </g>
    <line x1="78" y1="12" x2="120" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

/** Minimal Nordic knot / infinity-like ornament */
export const NordicKnot = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 20" fill="none" className={className} aria-hidden="true">
    <path
      d="M10 10 C10 4, 20 4, 25 10 C30 16, 40 16, 40 10 C40 4, 50 4, 55 10 C60 16, 70 16, 70 10"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
      fill="none"
    />
  </svg>
);

/** Delicate leaf/sprig — works well next to section labels */
export const LeafSprig = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M16 28 C16 20, 8 16, 4 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M16 22 C18 18, 24 16, 28 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M16 26 C14 22, 10 20, 6 16" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none" opacity="0.3" />
    <circle cx="4" cy="8" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="28" cy="10" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="6" cy="16" r="1" fill="currentColor" opacity="0.2" />
  </svg>
);

/** Decorative diamond dots row — thin horizontal accent */
export const DiamondDots = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 8" fill="none" className={className} aria-hidden="true">
    {[10, 30, 50, 70, 90].map((x) => (
      <rect key={x} x={x - 2} y={2} width="4" height="4" transform={`rotate(45 ${x} 4)`} fill="currentColor" opacity="0.25" />
    ))}
  </svg>
);

/** Wavy hair strand line — organic flowing accent */
export const HairStrand = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 16" fill="none" className={className} aria-hidden="true">
    <path
      d="M0 8 C15 2, 30 14, 50 8 C70 2, 85 14, 100 8 C115 2, 130 14, 150 8 C165 2, 185 14, 200 8"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.2"
      fill="none"
    />
    <path
      d="M0 10 C15 4, 35 16, 55 10 C75 4, 90 16, 110 10 C130 4, 150 16, 170 10 C185 4, 195 12, 200 10"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.12"
      fill="none"
    />
  </svg>
);

/** Corner ornament — an L-shaped decorative corner */
export const CornerOrnament = ({ className = "", position = "top-left" }: { className?: string; position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const transforms: Record<string, string> = {
    "top-left": "",
    "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)",
    "bottom-right": "scale(-1)",
  };
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true" style={{ transform: transforms[position] }}>
      <path d="M2 38 L2 12 C2 6, 6 2, 12 2 L38 2" stroke="currentColor" strokeWidth="0.75" opacity="0.2" fill="none" />
      <path d="M2 30 L2 16 C2 8, 8 2, 16 2 L30 2" stroke="currentColor" strokeWidth="0.5" opacity="0.12" fill="none" />
      <circle cx="2" cy="38" r="1.5" fill="currentColor" opacity="0.2" />
      <circle cx="38" cy="2" r="1.5" fill="currentColor" opacity="0.2" />
    </svg>
  );
};

/* ─── Background Patterns ─── */

/** Subtle herringbone / chevron pattern — Nordic textile feel */
export const HerringboneBg = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
    <svg className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <pattern id="herringbone" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 L20 0 L40 20" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.06" />
          <path d="M0 40 L20 20 L40 40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.06" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#herringbone)" />
    </svg>
  </div>
);

/** Organic scattered dots — like snowfall or dust motes */
export const ScatteredDotsBg = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
    <svg className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <pattern id="scattered-dots" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.07" />
          <circle cx="55" cy="22" r="0.7" fill="currentColor" opacity="0.05" />
          <circle cx="30" cy="45" r="1.2" fill="currentColor" opacity="0.06" />
          <circle cx="68" cy="60" r="0.8" fill="currentColor" opacity="0.04" />
          <circle cx="8" cy="70" r="0.6" fill="currentColor" opacity="0.05" />
          <circle cx="45" cy="72" r="1" fill="currentColor" opacity="0.07" />
          <circle cx="72" cy="38" r="0.9" fill="currentColor" opacity="0.05" />
          <circle cx="20" cy="25" r="0.5" fill="currentColor" opacity="0.04" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#scattered-dots)" />
    </svg>
  </div>
);

/** Radial sunburst / starburst — elegant behind headings */
export const RadialBurstBg = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
    <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="400" y1="400"
          x2={400 + 500 * Math.cos((i * 15 * Math.PI) / 180)}
          y2={400 + 500 * Math.sin((i * 15 * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.04"
        />
      ))}
      <circle cx="400" cy="400" r="120" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.04" />
      <circle cx="400" cy="400" r="250" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.03" />
    </svg>
  </div>
);

/** Flowing wave lines — organic, hair-inspired background */
export const WaveLinesBg = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
      {[0.03, 0.025, 0.02].map((opacity, i) => (
        <path
          key={i}
          d={`M-100 ${180 + i * 60} C100 ${120 + i * 40}, 300 ${240 + i * 30}, 500 ${180 + i * 50} C700 ${120 + i * 60}, 900 ${260 + i * 20}, 1100 ${180 + i * 40} L1300 ${180 + i * 50}`}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity={opacity}
        />
      ))}
    </svg>
  </div>
);

/** Diamond grid / argyle — luxe geometric pattern */
export const DiamondGridBg = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
    <svg className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <pattern id="diamond-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 0 L60 30 L30 60 L0 30 Z" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.05" />
          <circle cx="30" cy="0" r="1" fill="currentColor" opacity="0.04" />
          <circle cx="60" cy="30" r="1" fill="currentColor" opacity="0.04" />
          <circle cx="30" cy="60" r="1" fill="currentColor" opacity="0.04" />
          <circle cx="0" cy="30" r="1" fill="currentColor" opacity="0.04" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diamond-grid)" />
    </svg>
  </div>
);
