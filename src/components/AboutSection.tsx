import aboutImg from "@/assets/about-salon.jpg";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useI18n } from "@/i18n/translations";
import { CornerOrnament, DiamondGridBg } from "@/components/SvgOrnaments";

const AboutSection = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-14 md:py-32 bg-background overflow-hidden relative">
      <DiamondGridBg className="text-foreground" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="relative">
              <img src={aboutImg} alt="Premium salon products" loading="lazy" width={1280} height={720} className="w-full h-auto object-cover" />
              <CornerOrnament position="top-left" className="absolute -top-3 -left-3 w-10 h-10 md:w-14 md:h-14 text-gold hidden lg:block" />
              <CornerOrnament position="bottom-right" className="absolute -bottom-3 -right-3 w-10 h-10 md:w-14 md:h-14 text-gold hidden lg:block" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("about.label")}</p>
              <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-6">
                {t("about.title1")}
                <br />
                <span className="italic font-normal text-gold">{t("about.title2")}</span>
              </h2>
              <div className="space-y-3 md:space-y-4 font-body text-muted-foreground text-sm md:text-lg leading-relaxed">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p className="hidden md:block">{t("about.p3")}</p>
              </div>
              <div className="mt-5 md:mt-8 flex gap-6 md:gap-12">
                <div>
                  <span className="font-display text-xl md:text-3xl font-bold text-gold">15+</span>
                  <p className="font-body text-muted-foreground text-[10px] md:text-sm mt-0.5 md:mt-1">{t("about.experience")}</p>
                </div>
                <div>
                  <span className="font-display text-xl md:text-3xl font-bold text-gold">3.000+</span>
                  <p className="font-body text-muted-foreground text-[10px] md:text-sm mt-0.5 md:mt-1">{t("about.clients")}</p>
                </div>
                <div>
                  <span className="font-display text-xl md:text-3xl font-bold text-gold">12</span>
                  <p className="font-body text-muted-foreground text-[10px] md:text-sm mt-0.5 md:mt-1">{t("about.awards")}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
