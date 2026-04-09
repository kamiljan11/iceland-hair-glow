import { Heart, MessageCircle, Instagram } from "lucide-react";
import { useI18n } from "@/i18n/translations";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const posts = [
  { src: gallery6, likes: 247, comments: 18 },
  { src: gallery1, likes: 312, comments: 24 },
  { src: gallery5, likes: 189, comments: 11 },
  { src: gallery3, likes: 456, comments: 32 },
  { src: gallery2, likes: 278, comments: 15 },
  { src: gallery4, likes: 201, comments: 9 },
];

const InstagramSection = () => {
  const { t } = useI18n();

  return (
    <section id="instagram" className="py-14 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-12">
          <Instagram className="w-6 h-6 md:w-8 md:h-8 text-gold mx-auto mb-2.5 md:mb-4" />
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("insta.label")}</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">{t("insta.title")}</h2>
          <p className="font-body text-muted-foreground text-sm md:text-lg max-w-lg mx-auto">{t("insta.subtitle")}</p>
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-3 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-3 md:overflow-visible md:pb-0 md:snap-none scrollbar-none max-w-4xl md:mx-auto">
          {posts.map((post, i) => (
            <div key={i} className="flex-shrink-0 w-[40vw] md:w-auto snap-center relative group aspect-square overflow-hidden cursor-pointer active:scale-[0.98] transition-transform">
              <img src={post.src} alt="Instagram post" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-volcanic/60 opacity-0 group-hover:opacity-100 md:transition-opacity md:duration-300 flex items-center justify-center gap-3 md:gap-6">
                <span className="flex items-center gap-1 text-volcanic-foreground font-body text-[10px] md:text-sm">
                  <Heart size={12} fill="currentColor" /> {post.likes}
                </span>
                <span className="flex items-center gap-1 text-volcanic-foreground font-body text-[10px] md:text-sm">
                  <MessageCircle size={12} /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-10">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-5 md:px-8 py-3 text-[11px] md:text-sm tracking-[0.15em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300 touch-target">
            <Instagram size={14} />
            {t("insta.follow")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
