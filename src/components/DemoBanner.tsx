import { Sparkles } from "lucide-react";

const DemoBanner = () => {
  return (
    <>
      {/* Fixed top banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 text-volcanic py-1.5 text-center">
        <p className="font-body text-xs md:text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
          <Sparkles size={14} />
          <span>This is a <strong>DEMO</strong> — Get a website like this for your salon from only <strong>19,990 ISK/mo</strong></span>
          <a
            href="https://spirit-way-bloom.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-volcanic text-volcanic-foreground px-3 py-0.5 text-[11px] md:text-xs uppercase tracking-wider font-semibold hover:bg-volcanic/80 transition-colors hidden sm:inline-block"
          >
            Learn More →
          </a>
        </p>
      </div>
      {/* Spacer so content isn't hidden behind fixed banner */}
      <div className="h-8 md:h-9 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500" />
    </>
  );
};

export default DemoBanner;
