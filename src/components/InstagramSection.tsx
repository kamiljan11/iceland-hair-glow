import { Heart, MessageCircle, Instagram } from "lucide-react";
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
  return (
    <section id="instagram" className="py-16 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <Instagram className="w-7 h-7 md:w-8 md:h-8 text-gold mx-auto mb-3 md:mb-4" />
          <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-2 md:mb-3">@nordiksalon</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">Fylgdu okkur</h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
            Sjáðu nýjustu umbreytingar viðskiptavina okkar og bak við tjöldin
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-3 max-w-4xl mx-auto">
          {posts.map((post, i) => (
            <div key={i} className="relative group aspect-square overflow-hidden cursor-pointer active:scale-[0.98] transition-transform">
              <img
                src={post.src}
                alt="Instagram færsla"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-volcanic/60 opacity-0 group-hover:opacity-100 md:transition-opacity md:duration-300 flex items-center justify-center gap-3 md:gap-6">
                <span className="flex items-center gap-1 md:gap-1.5 text-volcanic-foreground font-body text-xs md:text-sm">
                  <Heart size={14} fill="currentColor" className="md:w-[18px] md:h-[18px]" /> {post.likes}
                </span>
                <span className="flex items-center gap-1 md:gap-1.5 text-volcanic-foreground font-body text-xs md:text-sm">
                  <MessageCircle size={14} className="md:w-[18px] md:h-[18px]" /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 md:px-8 py-3.5 md:py-3 text-xs md:text-sm tracking-[0.15em] uppercase font-body hover:border-gold hover:text-gold active:border-gold active:text-gold transition-all duration-300 touch-target"
          >
            <Instagram size={16} />
            Fylgdu okkur á Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
