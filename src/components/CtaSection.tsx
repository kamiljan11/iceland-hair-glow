import { ArrowRight, Globe, Camera, BarChart3, Zap } from "lucide-react";
import { useI18n } from "@/i18n/translations";
import { useDemoModal } from "@/components/DemoModal";

const features = [
  { icon: Globe, label: "Custom Website" },
  { icon: Camera, label: "Professional Photos" },
  { icon: BarChart3, label: "Social Media Ads" },
  { icon: Zap, label: "All-In-One Plan" },
];

const CtaSection = () => {
  const { openDemo } = useDemoModal();
  const { t } = useI18n();

  return (
    <section className="py-14 md:py-24 bg-volcanic relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-[200px]" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("cta.label")}</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-volcanic-foreground mb-3 md:mb-6">
            {t("cta.title1")}
            <br />
            <span className="italic font-normal text-gold">{t("cta.title2")}</span>
          </h2>
          <p className="font-body text-volcanic-foreground/60 text-sm md:text-lg leading-relaxed mb-5 md:mb-8 max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>

          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-3 md:pb-0 justify-start md:justify-center scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 mb-6 md:mb-10">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex-shrink-0 flex items-center gap-1.5 md:gap-2 font-body text-xs md:text-sm text-volcanic-foreground/70">
                <Icon size={14} className="text-gold" />
                {label}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button onClick={openDemo} className="w-full sm:w-auto bg-gold text-gold-foreground px-6 sm:px-10 py-3.5 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2 touch-target">
              {t("cta.start")} <ArrowRight size={14} />
            </button>
            <p className="font-body text-volcanic-foreground/60 text-xs md:text-sm">
              {t("cta.from")} <span className="text-gold font-semibold">19,990 ISK/month</span>
            </p>
          </div>

          <p className="font-body text-volcanic-foreground/30 text-[10px] md:text-xs mt-4 md:mt-6">{t("cta.tagline")}</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
