/**
 * Hand-crafted Nordic-themed SVG ornaments for decorative accents.
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
