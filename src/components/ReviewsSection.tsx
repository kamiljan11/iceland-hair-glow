import { Star } from "lucide-react";
import { useI18n } from "@/i18n/translations";

const ReviewsSection = () => {
  const { t } = useI18n();

  const reviews = [
    { name: "Guðrún Helgadóttir", rating: 5, text: t("review.1.text"), date: `2 ${t("review.weeksAgo")}`, service: "Balayage & Cut" },
    { name: "Katrín Þorsteinsdóttir", rating: 5, text: t("review.2.text"), date: `1 ${t("review.monthAgo")}`, service: "Color Correction" },
    { name: "Ólafur Magnússon", rating: 5, text: t("review.3.text"), date: `3 ${t("review.weeksAgo")}`, service: "Men's Cut & Style" },
    { name: "Anna Björk Sigurðardóttir", rating: 5, text: t("review.4.text"), date: `2 ${t("review.monthsAgo")}`, service: "Bridal Updo" },
    { name: "Emily Richardson", rating: 5, text: t("review.5.text"), date: `1 ${t("review.monthAgo")}`, service: "Deep Conditioning" },
    { name: "Jóhanna Einarsdóttir", rating: 4, text: t("review.6.text"), date: `3 ${t("review.monthsAgo")}`, service: "Olaplex Treatment" },
  ];

  return (
    <section id="reviews" className="py-14 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("reviews.label")}</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("reviews.title")}</h2>
          <div className="w-12 md:w-16 h-px bg-gold mx-auto mb-4 md:mb-6" />
          <div className="inline-flex items-center gap-2 bg-card border border-border px-3 md:px-4 py-1.5 md:py-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-gold fill-gold md:w-[14px] md:h-[14px]" />
              ))}
            </div>
            <span className="font-body text-xs md:text-sm text-foreground font-semibold">4.9</span>
            <span className="font-body text-[10px] md:text-xs text-muted-foreground">· {t("reviews.count")}</span>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:snap-none scrollbar-none max-w-6xl md:mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-center bg-card border border-border p-5 md:p-8 hover:border-gold/30 transition-all duration-300">
              <div className="flex gap-0.5 mb-2.5 md:mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={11} className={j < review.rating ? "text-gold fill-gold" : "text-muted-foreground/30"} />
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
