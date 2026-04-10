import { useState, useRef, useCallback } from "react";
import { useI18n } from "@/i18n/translations";
import baBefore1 from "@/assets/ba-before-1.jpg";
import baAfter1 from "@/assets/ba-after-1.jpg";
import baBefore2 from "@/assets/ba-before-2.jpg";
import baAfter2 from "@/assets/ba-after-2.jpg";

const transformations = [
  { before: baBefore1, after: baAfter1, title: "Platinum Transformation", stylist: "Elísabet Jónsdóttir" },
  { before: baBefore2, after: baAfter2, title: "Copper Vivid Color", stylist: "Sólrún Magnúsdóttir" },
];

const Slider = ({ before, after, title, stylist, beforeLabel, afterLabel }: { before: string; after: string; title: string; stylist: string; beforeLabel: string; afterLabel: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => { isDragging.current = true; (e.target as HTMLElement).setPointerCapture(e.pointerId); updatePosition(e.clientX); };
  const handlePointerMove = (e: React.PointerEvent) => { if (!isDragging.current) return; updatePosition(e.clientX); };
  const handlePointerUp = () => { isDragging.current = false; };

  return (
    <div className="space-y-2.5 md:space-y-3">
      <div ref={containerRef} className="relative aspect-[3/4] overflow-hidden cursor-col-resize select-none touch-none" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp}>
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${containerRef.current?.offsetWidth || 400}px` }} />
        </div>
        <div className="absolute top-0 bottom-0 z-10" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
          <div className="w-0.5 h-full bg-gold" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 md:w-10 md:h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-gold-foreground"><path d="M4 8L1 5M4 8L1 11M4 8H0M12 8L15 5M12 8L15 11M12 8H16" stroke="currentColor" strokeWidth="1.5" /></svg>
          </div>
        </div>
        <span className="absolute top-2.5 left-2.5 md:top-3 md:left-3 bg-volcanic/70 text-volcanic-foreground text-[9px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 font-body tracking-wider uppercase">{beforeLabel}</span>
        <span className="absolute top-2.5 right-2.5 md:top-3 md:right-3 bg-gold/90 text-gold-foreground text-[9px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 font-body tracking-wider uppercase">{afterLabel}</span>
      </div>
      <div>
        <p className="font-display text-sm md:text-lg font-semibold text-volcanic-foreground">{title}</p>
        <p className="font-body text-[10px] md:text-sm text-gold">{stylist}</p>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-14 md:py-32 bg-volcanic">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("ba.label")}</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-volcanic-foreground mb-3 md:mb-4">{t("ba.title")}</h2>
          <div className="w-12 md:w-16 h-px bg-gold mx-auto mb-3 md:mb-4" />
          <p className="font-body text-volcanic-foreground/60 text-sm md:text-lg max-w-lg mx-auto">{t("ba.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
          {transformations.map((tr, i) => (
            <div key={i}>
              <Slider {...tr} beforeLabel={t("ba.before")} afterLabel={t("ba.after")} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
