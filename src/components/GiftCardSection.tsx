import { Gift } from "lucide-react";

const tiers = [
  { amount: "5.000 ISK", description: "Fringe trim or treatment add-on" },
  { amount: "10.000 ISK", description: "Cut & style or deep conditioning" },
  { amount: "20.000 ISK", description: "Color service or bridal trial" },
  { amount: "Sérsniðið", description: "Custom amount — you choose", label: "Custom" },
];

const GiftCardSection = () => {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <Gift className="w-7 h-7 md:w-8 md:h-8 text-gold mx-auto mb-3" />
          <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-2 md:mb-3">
            Gjafabréf
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Give the Gift of
            <br />
            <span className="italic font-normal text-gold">Beauty</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-4" />
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            The perfect gift for someone special. Available in-salon or delivered beautifully wrapped to your door.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.amount}
              className="group relative border border-border bg-card p-5 md:p-8 text-center hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                {tier.amount}
              </p>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 touch-target"
          >
            <Gift size={16} />
            Purchase Gift Card
          </a>
          <p className="font-body text-muted-foreground text-xs mt-3">
            Hægt að kaupa í verslun eða á netinu — Available in-store or online
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;
