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
    <section id="instagram" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Instagram className="w-8 h-8 text-gold mx-auto mb-4" />
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-body mb-3">@nordiksalon</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Follow Our Journey</h2>
          <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">
            See our latest client transformations and behind-the-scenes moments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {posts.map((post, i) => (
            <div key={i} className="relative group aspect-square overflow-hidden cursor-pointer">
              <img
                src={post.src}
                alt="Instagram post"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-volcanic/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <span className="flex items-center gap-1.5 text-volcanic-foreground font-body text-sm">
                  <Heart size={18} fill="currentColor" /> {post.likes}
                </span>
                <span className="flex items-center gap-1.5 text-volcanic-foreground font-body text-sm">
                  <MessageCircle size={18} /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3 text-sm tracking-[0.15em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300"
          >
            <Instagram size={16} />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
