import { Scissors, Palette, Sparkles, Heart } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Scissors,
    title: "Klipping & Stíll",
    subtitle: "Cut & Style",
    items: [
      { name: "Women's Cut & Blow Dry", price: "8.900 ISK" },
      { name: "Men's Cut & Style", price: "5.900 ISK" },
      { name: "Children's Cut", price: "4.500 ISK" },
      { name: "Fringe Trim", price: "2.500 ISK" },
    ],
  },
  {
    icon: Palette,
    title: "Litun",
    subtitle: "Color",
    items: [
      { name: "Full Color", price: "14.900 ISK" },
      { name: "Balayage / Highlights", price: "22.900 ISK" },
      { name: "Root Touch-Up", price: "9.900 ISK" },
      { name: "Color Correction", price: "From 29.900 ISK" },
    ],
  },
  {
    icon: Sparkles,
    title: "Meðferðir",
    subtitle: "Treatments",
    items: [
      { name: "Keratin Treatment", price: "19.900 ISK" },
      { name: "Deep Conditioning", price: "6.900 ISK" },
      { name: "Scalp Treatment", price: "8.900 ISK" },
      { name: "Olaplex Repair", price: "7.900 ISK" },
    ],
  },
  {
    icon: Heart,
    title: "Brúðarsnyrtingar",
    subtitle: "Bridal",
    items: [
      { name: "Bridal Updo", price: "24.900 ISK" },
      { name: "Bridal Trial", price: "14.900 ISK" },
      { name: "Bridesmaid Style", price: "12.900 ISK" },
      { name: "Full Bridal Package", price: "49.900 ISK" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-2 md:mb-3">Þjónusta</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </ScrollReveal>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:snap-none scrollbar-none">
          {services.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.1}>
              <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto snap-center group bg-card border border-border p-6 md:p-8 hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5">
                <category.icon className="w-7 h-7 md:w-8 md:h-8 text-gold mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl md:text-2xl font-semibold text-card-foreground">{category.title}</h3>
                <p className="font-body text-xs text-muted-foreground mb-4 md:mb-6">{category.subtitle}</p>
                <div className="space-y-3 md:space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-baseline gap-2">
                      <span className="font-body text-muted-foreground text-sm md:text-base">{item.name}</span>
                      <span className="font-body text-gold font-semibold text-xs md:text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
