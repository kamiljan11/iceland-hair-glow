import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Platinum blonde waves", category: "Color" },
  { src: gallery2, alt: "Caramel balayage", category: "Color" },
  { src: gallery3, alt: "Bridal updo with flowers", category: "Bridal" },
  { src: gallery4, alt: "Modern textured crop", category: "Cuts" },
  { src: gallery5, alt: "Vivid copper hair", category: "Color" },
  { src: gallery6, alt: "Defined curls", category: "Cuts" },
];

const categories = ["All", "Color", "Cuts", "Bridal"];

const GallerySection = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-volcanic">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-body mb-3">Our Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-volcanic-foreground mb-4">Gallery</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm tracking-[0.15em] uppercase font-body transition-all duration-300 ${
                  filter === cat
                    ? "bg-gold text-gold-foreground"
                    : "border border-volcanic-foreground/20 text-volcanic-foreground/60 hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className="relative overflow-hidden group aspect-[4/5] cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-volcanic/0 group-hover:bg-volcanic/40 transition-all duration-500 flex items-end">
                <span className="text-volcanic-foreground font-body text-sm tracking-wider p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {img.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-volcanic/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-volcanic-foreground/60 hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
