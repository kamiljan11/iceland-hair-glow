const brands = [
  "OLAPLEX",
  "KÉRASTASE",
  "REDKEN",
  "MOROCCANOIL",
  "DAVINES",
];

const ProductsBar = () => {
  return (
    <section className="py-8 md:py-16 bg-volcanic border-y border-volcanic-foreground/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="font-body text-volcanic-foreground/40 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 md:mb-8">
          Við notum aðeins bestu vörurnar
        </p>
        {/* Scrolling marquee on mobile, static on desktop */}
        <div className="relative md:hidden overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="font-display text-xs tracking-[0.2em] text-volcanic-foreground/25"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-wrap justify-center items-center gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-base tracking-[0.2em] text-volcanic-foreground/25 hover:text-volcanic-foreground/50 transition-colors duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsBar;
