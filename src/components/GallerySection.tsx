import { useState } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/i18n/translations";
import { DiamondDots } from "@/components/SvgOrnaments";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const GallerySection = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const categories = [
    { id: "all", label: t("gallery.all") },
    { id: "color", label: t("gallery.color") },
    { id: "cut", label: t("gallery.cut") },
    { id: "bridal", label: t("gallery.bridal") },
  ];

  const images = [
    { src: gallery1, alt: "Platinum blonde waves", category: "color" },
    { src: gallery2, alt: "Caramel balayage", category: "color" },
    { src: gallery3, alt: "Bridal updo with flowers", category: "bridal" },
    { src: gallery4, alt: "Modern texture cut", category: "cut" },
    { src: gallery5, alt: "Vivid copper color", category: "color" },
    { src: gallery6, alt: "Defined curls", category: "cut" },
  ];

  const filtered = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-14 md:py-32 bg-volcanic">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("gallery.label")}</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-volcanic-foreground mb-3 md:mb-4">{t("gallery.title")}</h2>
          <DiamondDots className="w-24 md:w-32 h-3 mx-auto text-gold mb-4 md:mb-8" />
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 justify-start md:justify-center scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex-shrink-0 px-3.5 md:px-5 py-2 md:py-2.5 text-[10px] md:text-sm tracking-[0.15em] uppercase font-body transition-all duration-300 touch-target ${
                  filter === cat.id
                    ? "bg-gold text-gold-foreground"
                    : "border border-volcanic-foreground/20 text-volcanic-foreground/60 hover:border-gold hover:text-gold"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-4">
          {filtered.map((img, i) => (
            <button key={i} onClick={() => setLightbox(img.src)} className="relative overflow-hidden group aspect-[4/5] cursor-pointer active:scale-[0.98] transition-transform">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-volcanic/0 group-hover:bg-volcanic/40 transition-all duration-500 flex items-end">
                <span className="text-volcanic-foreground font-body text-[10px] md:text-sm tracking-wider p-2.5 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {img.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-volcanic/95 flex items-center justify-center p-4 md:p-6 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-volcanic-foreground/60 hover:text-gold transition-colors touch-target flex items-center justify-center safe-top z-10" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={24} />
          </button>
          <img src={lightbox} alt="Gallery preview" className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
