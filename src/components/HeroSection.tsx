import heroImg from "@/assets/hero-salon.jpg";
import logoIcon from "@/assets/logo-icon.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen-safe w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury Nordic hair salon interior with glacier blue lighting and gold accents"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-volcanic/70 via-volcanic/40 to-volcanic/80" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 md:px-6">
        <img src={logoIcon} alt="Nordik Salon logo" className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 invert opacity-80 animate-fade-up" style={{ animationDelay: "0.1s" }} />
        <p className="text-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-base font-body mb-3 md:mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Reykjavík · Laugavegur 42
        </p>
        <h1 className="font-display text-[2.5rem] leading-[1.1] md:text-7xl lg:text-8xl font-bold text-volcanic-foreground mb-4 md:mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Velkomin til
          <br />
          <span className="italic font-normal text-gold">Nordik Salon</span>
        </h1>
        <p className="font-body text-volcanic-foreground/70 text-base md:text-xl max-w-xl mb-8 md:mb-10 opacity-0 animate-fade-up px-2" style={{ animationDelay: "0.8s" }}>
          Where Nordic beauty meets artistry — inspired by Iceland's raw elegance, volcanic strength, and golden light.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto opacity-0 animate-fade-up px-4 sm:px-0" style={{ animationDelay: "1.1s" }}>
          <a
            href="#booking"
            className="bg-gold text-gold-foreground px-8 sm:px-10 py-4 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 text-center touch-target"
          >
            Bóka tíma
          </a>
          <a
            href="#services"
            className="border border-volcanic-foreground/30 text-volcanic-foreground px-8 sm:px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300 text-center touch-target"
          >
            Þjónusta
          </a>
        </div>

        {/* First visit offer */}
        <div className="mt-6 md:mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "1.4s" }}>
          <p className="font-body text-volcanic-foreground/50 text-xs md:text-sm tracking-wider">
            ✨ Fyrsta heimsóknin? <span className="text-gold font-semibold">20% afsláttur</span> — First visit? 20% off
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up hidden sm:flex" style={{ animationDelay: "1.7s" }}>
        <span className="text-volcanic-foreground/40 text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
