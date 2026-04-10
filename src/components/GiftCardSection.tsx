import { Gift } from "lucide-react";
import { useI18n } from "@/i18n/translations";
import { useDemoModal } from "@/components/DemoModal";
import { RadialBurstBg } from "@/components/SvgOrnaments";

const GiftCardSection = () => {
  const { openDemo } = useDemoModal();
  const { t } = useI18n();

  const tiers = [
    { amount: "5.000 ISK", description: t("gift.fringe") },
    { amount: "10.000 ISK", description: t("gift.cut_style") },
    { amount: "20.000 ISK", description: t("gift.color_service") },
    { amount: "Custom", description: t("gift.custom") },
  ];

  return (
    <section className="py-14 md:py-32 bg-background relative overflow-hidden">
      <RadialBurstBg className="text-gold" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <Gift className="w-6 h-6 md:w-8 md:h-8 text-gold mx-auto mb-2.5 md:mb-3" />
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("gift.label")}</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            {t("gift.title1")}
            <br />
            <span className="italic font-normal text-gold">{t("gift.title2")}</span>
          </h2>
          <div className="w-12 md:w-16 h-px bg-gold mx-auto mb-3 md:mb-4" />
          <p className="font-body text-muted-foreground text-sm md:text-lg max-w-md mx-auto">{t("gift.subtitle")}</p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:overflow-visible md:pb-0 md:snap-none scrollbar-none max-w-4xl md:mx-auto">
          {tiers.map((tier) => (
            <div key={tier.amount} className="flex-shrink-0 w-[55vw] sm:w-[40vw] md:w-auto snap-center group relative border border-border bg-card p-5 md:p-8 text-center hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="font-display text-lg md:text-2xl font-bold text-foreground mb-1.5 md:mb-2">{tier.amount}</p>
              <p className="font-body text-[11px] md:text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-10">
          <button onClick={openDemo} className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 md:px-8 py-3.5 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 touch-target">
            <Gift size={14} />
            {t("gift.purchase")}
          </button>
          <p className="font-body text-muted-foreground text-[10px] md:text-xs mt-2.5 md:mt-3">{t("gift.available")}</p>
        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;
