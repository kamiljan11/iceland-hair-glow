import { ArrowRight, Globe, Camera, BarChart3, Zap } from "lucide-react";

const features = [
  { icon: Globe, label: "Custom Website" },
  { icon: Camera, label: "Professional Photos" },
  { icon: BarChart3, label: "Social Media Ads" },
  { icon: Zap, label: "All-In-One Plan" },
];

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-volcanic relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-[200px]" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-2 md:mb-3">
            Business Autopilot
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Want a Website Like This
            <br />
            <span className="italic font-normal text-cyan-400">For Your Salon?</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto">
            We build stunning, personalised websites for salons, barbershops, and beauty businesses.
            Everything done for you — website, photos, ads, social media. One plan. Zero stress.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 font-body text-sm text-foreground/70">
                <Icon size={16} className="text-cyan-400" />
                {label}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://spirit-way-bloom.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-volcanic px-8 sm:px-10 py-4 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 flex items-center gap-2 touch-target"
            >
              Get Started <ArrowRight size={16} />
            </a>
            <p className="font-body text-muted-foreground text-sm">
              From only <span className="text-cyan-400 font-semibold">19,990 ISK/month</span>
            </p>
          </div>

          <p className="font-body text-muted-foreground/50 text-xs mt-6">
            ⚡ Live in 7 days · Fully personalised · No long-term contracts
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
