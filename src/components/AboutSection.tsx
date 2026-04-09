import aboutImg from "@/assets/about-salon.jpg";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Premium salon products on marble shelf"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 md:w-32 h-24 md:h-32 border border-gold/30 hidden lg:block" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">Sagan okkar</p>
              <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-6">
                Born from Ice
                <br />
                <span className="italic font-normal text-gold">&amp; Fire</span>
              </h2>
              <div className="space-y-3 md:space-y-4 font-body text-muted-foreground text-sm md:text-lg leading-relaxed">
                <p>
                  Nestled in the heart of Reykjavík on historic Laugavegur, Nordik Salon draws its philosophy from
                  Iceland's extraordinary landscape — the raw power of Eyjafjallajökull, the
                  crystalline purity of Jökulsárlón, and the ethereal glow of the midnight sun.
                </p>
                <p>
                  Our team of internationally trained stylists combines Nordic minimalism with
                  cutting-edge techniques, creating looks that are both timeless and unmistakably modern.
                </p>
                <p className="hidden md:block">
                  Sérhver heimsókn er upplifun — Every visit is an experience, from the moment you step 
                  through our doors to the final reveal of your transformation.
                </p>
              </div>
              <div className="mt-5 md:mt-8 flex gap-6 md:gap-12">
                <div>
                  <span className="font-display text-xl md:text-3xl font-bold text-gold">15+</span>
                  <p className="font-body text-muted-foreground text-[10px] md:text-sm mt-0.5 md:mt-1">Ára reynsla</p>
                </div>
                <div>
                  <span className="font-display text-xl md:text-3xl font-bold text-gold">3.000+</span>
                  <p className="font-body text-muted-foreground text-[10px] md:text-sm mt-0.5 md:mt-1">Ánægðir viðskiptavinir</p>
                </div>
                <div>
                  <span className="font-display text-xl md:text-3xl font-bold text-gold">12</span>
                  <p className="font-body text-muted-foreground text-[10px] md:text-sm mt-0.5 md:mt-1">Verðlaun</p>
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
