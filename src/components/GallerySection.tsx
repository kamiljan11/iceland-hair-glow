import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Platínu blóndur bylgjur", category: "Litun" },
  { src: gallery2, alt: "Karamella balayage", category: "Litun" },
  { src: gallery3, alt: "Brúðargreiðsla með blómum", category: "Brúður" },
  { src: gallery4, alt: "Nútíma textúra klipping", category: "Klipping" },
  { src: gallery5, alt: "Lifandi kopar litur", category: "Litun" },
  { src: gallery6, alt: "Skilgreindir krullar", category: "Klipping" },
];

const categories = ["Allt", "Litun", "Klipping", "Brúður"];

const GallerySection = () => {
  const [filter, setFilter] = useState("Allt");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "Allt" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-14 md:py-32 bg-volcanic">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">Verkin okkar</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-volcanic-foreground mb-3 md:mb-4">Gallerí</h2>
          <div className="w-12 md:w-16 h-px bg-gold mx-auto mb-4 md:mb-8" />
          {/* Scrollable filter chips on mobile */}
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 justify-start md:justify-center scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-shrink-0 px-3.5 md:px-5 py-2 md:py-2.5 text-[10px] md:text-sm tracking-[0.15em] uppercase font-body transition-all duration-300 touch-target ${
                  filter === cat
                    ? "bg-gold text-gold-foreground"
                    : "border border-volcanic-foreground/20 text-volcanic-foreground/60 hover:border-gold hover:text-gold active:border-gold active:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-4">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className="relative overflow-hidden group aspect-[4/5] cursor-pointer active:scale-[0.98] transition-transform"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
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
        <div
          className="fixed inset-0 z-50 bg-volcanic/95 flex items-center justify-center p-4 md:p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-volcanic-foreground/60 hover:text-gold transition-colors touch-target flex items-center justify-center safe-top z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
