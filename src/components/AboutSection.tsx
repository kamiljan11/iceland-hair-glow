import aboutImg from "@/assets/about-salon.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Premium salon products on marble shelf"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30 hidden lg:block" />
          </div>

          <div>
            <p className="text-gold tracking-[0.3em] uppercase text-sm font-body mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Born from Ice
              <br />
              <span className="italic font-normal text-gold">&amp; Fire</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed">
              <p>
                Nestled in the heart of Reykjavík, Nordik Salon draws its philosophy from
                Iceland's extraordinary landscape — the raw power of volcanic rock, the
                crystalline purity of glacial waters, and the ethereal glow of the midnight sun.
              </p>
              <p>
                Our team of internationally trained stylists combines Nordic minimalism with
                cutting-edge techniques, creating looks that are both timeless and unmistakably modern.
              </p>
              <p>
                Every visit is an experience — from the moment you step through our doors to the
                final reveal of your transformation.
              </p>
            </div>
            <div className="mt-8 flex gap-12">
              <div>
                <span className="font-display text-3xl font-bold text-gold">15+</span>
                <p className="font-body text-muted-foreground text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-gold">3k+</span>
                <p className="font-body text-muted-foreground text-sm mt-1">Happy Clients</p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-gold">12</span>
                <p className="font-body text-muted-foreground text-sm mt-1">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
