import heroImg from "@/assets/hero-salon.jpg";
import heroImgMobile from "@/assets/hero-salon-mobile.jpg";
import logoIcon from "@/assets/logo-icon.png";
import { useI18n } from "@/i18n/translations";
import { useDemoModal } from "@/components/DemoModal";

const HeroSection = () => {
  const { t } = useI18n();
  const { openDemo } = useDemoModal();

  return (
    <section className="relative h-screen-safe w-full overflow-hidden">
      <img
        src={heroImgMobile}
        alt="Luxury Nordic hair salon interior"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        width={768}
        height={1344}
        fetchPriority="high"
      />
      <img
        src={heroImg}
        alt="Luxury Nordic hair salon interior"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-volcanic/70 via-volcanic/40 to-volcanic/80" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 md:px-6">
        <img src={logoIcon} alt="Nordik Salon logo" className="w-14 h-14 md:w-20 md:h-20 mb-3 md:mb-6 invert opacity-80 animate-fade-up" style={{ animationDelay: "0.1s" }} />
        <p className="text-gold tracking-[0.25em] md:tracking-[0.4em] uppercase text-[10px] md:text-base font-body mb-2.5 md:mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {t("hero.location")}
        </p>
        <h1 className="font-display text-[2.2rem] leading-[1.08] md:text-7xl lg:text-8xl font-bold text-volcanic-foreground mb-3 md:mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {t("hero.welcome")}
          <br />
          <span className="italic font-normal text-gold">Nordik Salon</span>
        </h1>
        <p className="font-body text-volcanic-foreground/70 text-sm md:text-xl max-w-xl mb-6 md:mb-10 opacity-0 animate-fade-up px-2" style={{ animationDelay: "0.8s" }}>
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 w-full sm:w-auto opacity-0 animate-fade-up px-2 sm:px-0" style={{ animationDelay: "1.1s" }}>
          <button onClick={openDemo} className="bg-gold text-gold-foreground px-6 sm:px-10 py-3.5 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 text-center touch-target">
            {t("nav.book")}
          </button>
          <a href="#services" className="border border-volcanic-foreground/30 text-volcanic-foreground px-6 sm:px-10 py-3.5 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300 text-center touch-target">
            {t("hero.services")}
          </a>
        </div>

        <div className="mt-5 md:mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "1.4s" }}>
          <p className="font-body text-volcanic-foreground/50 text-[10px] md:text-sm tracking-wider">
            {t("hero.firstVisit")}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up hidden sm:flex" style={{ animationDelay: "1.7s" }}>
        <span className="text-volcanic-foreground/40 text-xs tracking-[0.3em] uppercase font-body">{t("hero.scroll")}</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
