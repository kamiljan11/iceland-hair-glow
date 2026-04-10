import { Scissors, Palette, Sparkles, Heart } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useI18n } from "@/i18n/translations";
import { ScissorsDivider, HerringboneBg } from "@/components/SvgOrnaments";

const ServicesSection = () => {
  const { t } = useI18n();

  const services = [
    {
      icon: Scissors,
      title: t("services.cut.title"),
      subtitle: t("services.cut.subtitle"),
      items: [
        { name: t("services.womens_cut"), price: "8.900 ISK" },
        { name: t("services.mens_cut"), price: "5.900 ISK" },
        { name: t("services.childrens_cut"), price: "4.500 ISK" },
        { name: t("services.fringe_trim"), price: "2.500 ISK" },
      ],
    },
    {
      icon: Palette,
      title: t("services.color.title"),
      subtitle: t("services.color.subtitle"),
      items: [
        { name: t("services.full_color"), price: "14.900 ISK" },
        { name: t("services.balayage"), price: "22.900 ISK" },
        { name: t("services.root_touchup"), price: "9.900 ISK" },
        { name: t("services.color_correction"), price: `${t("services.from")} 29.900 ISK` },
      ],
    },
    {
      icon: Sparkles,
      title: t("services.treatments.title"),
      subtitle: t("services.treatments.subtitle"),
      items: [
        { name: t("services.keratin"), price: "19.900 ISK" },
        { name: t("services.deep_conditioning"), price: "6.900 ISK" },
        { name: t("services.scalp"), price: "8.900 ISK" },
        { name: t("services.olaplex"), price: "7.900 ISK" },
      ],
    },
    {
      icon: Heart,
      title: t("services.bridal.title"),
      subtitle: t("services.bridal.subtitle"),
      items: [
        { name: t("services.bridal_updo"), price: "24.900 ISK" },
        { name: t("services.bridal_trial"), price: "14.900 ISK" },
        { name: t("services.bridesmaid"), price: "12.900 ISK" },
        { name: t("services.bridal_package"), price: "49.900 ISK" },
      ],
    },
  ];

  return (
    <section id="services" className="py-14 md:py-32 bg-background relative">
      <HerringboneBg className="text-foreground" />
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-8 md:mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("services.label")}</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("services.title")}</h2>
          <ScissorsDivider className="w-28 md:w-36 h-6 mx-auto text-gold mt-2" />
        </ScrollReveal>

        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:snap-none scrollbar-none">
          {services.map((category, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="h-full">
              <div className="flex-shrink-0 w-[75vw] sm:w-[55vw] md:w-auto snap-center group bg-card border border-border p-5 md:p-8 hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 h-full">
                <category.icon className="w-6 h-6 md:w-8 md:h-8 text-gold mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-lg md:text-2xl font-semibold text-card-foreground">{category.title}</h3>
                <p className="font-body text-[10px] md:text-xs text-muted-foreground mb-3 md:mb-6">{category.subtitle}</p>
                <div className="space-y-2.5 md:space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-baseline gap-2">
                      <span className="font-body text-muted-foreground text-xs md:text-base">{item.name}</span>
                      <span className="font-body text-gold font-semibold text-[10px] md:text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-14">
          <a
            href="#booking"
            className="inline-block bg-gold text-gold-foreground px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-colors duration-300"
          >
            {t("nav.book")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
