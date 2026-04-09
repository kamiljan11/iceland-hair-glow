const brands = [
  "OLAPLEX",
  "KÉRASTASE",
  "REDKEN",
  "MOROCCANOIL",
  "DAVINES",
];

const ProductsBar = () => {
  return (
    <section className="py-10 md:py-16 bg-volcanic border-y border-volcanic-foreground/5">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="font-body text-volcanic-foreground/40 text-xs tracking-[0.3em] uppercase mb-6 md:mb-8">
          Við notum aðeins bestu vörurnar — We use only the finest products
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-sm md:text-base tracking-[0.2em] text-volcanic-foreground/25 hover:text-volcanic-foreground/50 transition-colors duration-300 cursor-default"
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
