import { Scissors, Palette, Sparkles, Heart } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cut & Style",
    items: [
      { name: "Women's Cut & Blow Dry", price: "8.900 ISK" },
      { name: "Men's Cut & Style", price: "5.900 ISK" },
      { name: "Children's Cut", price: "4.500 ISK" },
      { name: "Fringe Trim", price: "2.500 ISK" },
    ],
  },
  {
    icon: Palette,
    title: "Color",
    items: [
      { name: "Full Color", price: "14.900 ISK" },
      { name: "Balayage / Highlights", price: "22.900 ISK" },
      { name: "Root Touch-Up", price: "9.900 ISK" },
      { name: "Color Correction", price: "From 29.900 ISK" },
    ],
  },
  {
    icon: Sparkles,
    title: "Treatments",
    items: [
      { name: "Keratin Treatment", price: "19.900 ISK" },
      { name: "Deep Conditioning", price: "6.900 ISK" },
      { name: "Scalp Treatment", price: "8.900 ISK" },
      { name: "Olaplex Repair", price: "7.900 ISK" },
    ],
  },
  {
    icon: Heart,
    title: "Bridal",
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
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-body mb-3">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((category) => (
            <div
              key={category.title}
              className="group bg-card border border-border p-8 hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
            >
              <category.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-baseline gap-2">
                    <span className="font-body text-muted-foreground text-base">{item.name}</span>
                    <span className="font-body text-gold font-semibold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
