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
        <p className="text-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-base font-body mb-3 md:mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Reykjavík's Premier Hair Experience
        </p>
        <h1 className="font-display text-[2.5rem] leading-[1.1] md:text-7xl lg:text-8xl font-bold text-volcanic-foreground mb-4 md:mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Where Nordic Beauty
          <br />
          <span className="italic font-normal text-gold">Meets Artistry</span>
        </h1>
        <p className="font-body text-volcanic-foreground/70 text-base md:text-xl max-w-xl mb-8 md:mb-10 opacity-0 animate-fade-up px-2" style={{ animationDelay: "0.8s" }}>
          Inspired by Iceland's raw elegance — volcanic strength, glacial purity, and golden light.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto opacity-0 animate-fade-up px-4 sm:px-0" style={{ animationDelay: "1.1s" }}>
          <a
            href="#booking"
            className="bg-gold text-gold-foreground px-8 sm:px-10 py-4 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 text-center touch-target"
          >
            Book Your Visit
          </a>
          <a
            href="#services"
            className="border border-volcanic-foreground/30 text-volcanic-foreground px-8 sm:px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300 text-center touch-target"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up hidden sm:flex" style={{ animationDelay: "1.5s" }}>
        <span className="text-volcanic-foreground/40 text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
