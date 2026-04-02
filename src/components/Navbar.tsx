import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Instagram", href: "#instagram" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-top ${
        scrolled
          ? "bg-volcanic/95 backdrop-blur-md shadow-lg py-2 md:py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 safe-x">
        <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-wider text-volcanic-foreground">
          NORDIK <span className="text-gold">SALON</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-volcanic-foreground/80 hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-body font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-gold text-gold-foreground px-6 py-2.5 text-sm tracking-[0.15em] uppercase font-body font-semibold hover:bg-gold/90 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle - 44px touch target */}
        <button
          className="lg:hidden text-volcanic-foreground touch-target flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu - fullscreen overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-volcanic/98 backdrop-blur-md animate-fade-in z-40 flex flex-col items-center justify-center safe-x">
          <button
            className="absolute top-4 right-4 text-volcanic-foreground touch-target flex items-center justify-center safe-top"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-volcanic-foreground/80 hover:text-gold active:text-gold transition-colors text-lg tracking-[0.25em] uppercase font-body touch-target flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-gold-foreground px-10 py-4 text-base tracking-[0.15em] uppercase font-body font-semibold mt-4 touch-target"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
