import { Star } from "lucide-react";

const reviews = [
  {
    name: "Guðrún Helgadóttir",
    rating: 5,
    text: "Besta hárgreiðslan á Íslandi! Elísabet skilur nákvæmlega hvað ég vil og kemur alltaf vel út. Mæli eindregið með.",
    date: "2 vikum síðan",
    service: "Balayage & Cut",
  },
  {
    name: "Katrín Þorsteinsdóttir",
    rating: 5,
    text: "Amazing experience from start to finish. The salon is beautiful and the team made me feel so welcome. My hair has never looked better!",
    date: "1 mánuði síðan",
    service: "Color Correction",
  },
  {
    name: "Ólafur Magnússon",
    rating: 5,
    text: "Bjarki is hands down the best men's barber in Reykjavík. Clean cuts, great conversation, and the hot towel treatment is next level.",
    date: "3 vikum síðan",
    service: "Men's Cut & Style",
  },
  {
    name: "Anna Björk Sigurðardóttir",
    rating: 5,
    text: "Fékk brúðarsnyrtingu hjá Sólrúnu og hún var algjörlega stórkostleg. Allir spurðu mig hvar ég fékk hárið gert!",
    date: "2 mánuðum síðan",
    service: "Bridal Updo",
  },
  {
    name: "Emily Richardson",
    rating: 5,
    text: "Visited while traveling in Iceland and this was the highlight of my trip! World-class salon tucked away on Laugavegur. Worth every króna.",
    date: "1 mánuði síðan",
    service: "Deep Conditioning",
  },
  {
    name: "Jóhanna Einarsdóttir",
    rating: 4,
    text: "Alltaf ánægð þegar ég kem hingað. Frábært andrúmsloft og fagmennska. Olaplex meðferðin bjargaði hári mínu!",
    date: "3 mánuðum síðan",
    service: "Olaplex Treatment",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-14 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">
            Umsagnir
          </p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            What Our Clients Say
          </h2>
          <div className="w-12 md:w-16 h-px bg-gold mx-auto mb-4 md:mb-6" />
          {/* Google trust badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border px-3 md:px-4 py-1.5 md:py-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-gold fill-gold md:w-[14px] md:h-[14px]" />
              ))}
            </div>
            <span className="font-body text-xs md:text-sm text-foreground font-semibold">4.9</span>
            <span className="font-body text-[10px] md:text-xs text-muted-foreground">· 127 umsagnir</span>
          </div>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:snap-none scrollbar-none max-w-6xl md:mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-center bg-card border border-border p-5 md:p-8 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-2.5 md:mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={11}
                    className={j < review.rating ? "text-gold fill-gold" : "text-muted-foreground/30"}
                  />
                ))}
              </div>
              <p className="font-body text-foreground/80 text-[13px] md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-4 md:line-clamp-none">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-2.5 md:pt-3 flex justify-between items-end">
                <div>
                  <p className="font-display text-xs md:text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="font-body text-[10px] md:text-xs text-gold">{review.service}</p>
                </div>
                <p className="font-body text-[10px] md:text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
