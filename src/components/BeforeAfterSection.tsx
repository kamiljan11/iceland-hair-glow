import { useState, useRef, useCallback } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const transformations = [
  {
    before: gallery3,
    after: gallery1,
    title: "Platinum Transformation",
    stylist: "Elísabet Jónsdóttir",
  },
  {
    before: gallery2,
    after: gallery5,
    title: "Copper Vivid Color",
    stylist: "Sólrún Magnúsdóttir",
  },
];

const Slider = ({ before, after, title, stylist }: { before: string; after: string; title: string; stylist: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden cursor-col-resize select-none touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After (full) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${containerRef.current?.offsetWidth || 400}px` }} />
        </div>
        {/* Divider */}
        <div className="absolute top-0 bottom-0 z-10" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
          <div className="w-0.5 h-full bg-gold" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold-foreground">
              <path d="M4 8L1 5M4 8L1 11M4 8H0M12 8L15 5M12 8L15 11M12 8H16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-3 left-3 bg-volcanic/70 text-volcanic-foreground text-[10px] md:text-xs px-2 py-1 font-body tracking-wider uppercase">Fyrir</span>
        <span className="absolute top-3 right-3 bg-gold/90 text-gold-foreground text-[10px] md:text-xs px-2 py-1 font-body tracking-wider uppercase">Eftir</span>
      </div>
      <div>
        <p className="font-display text-base md:text-lg font-semibold text-volcanic-foreground">{title}</p>
        <p className="font-body text-xs md:text-sm text-gold">{stylist}</p>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  return (
    <section className="py-16 md:py-32 bg-volcanic">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-2 md:mb-3">
            Umbreytingar
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-volcanic-foreground mb-4">
            Before & After
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-4" />
          <p className="font-body text-volcanic-foreground/60 text-base md:text-lg max-w-lg mx-auto">
            Dragðu til að sjá umbreytinguna — Drag to see the transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {transformations.map((t, i) => (
            <Slider key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
