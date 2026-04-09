import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/translations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.reviews"), href: "#reviews" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.team"), href: "#team" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 bg-volcanic border-b border-volcanic-foreground/10 transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}`}>
        <div className="container mx-auto px-4 md:px-6 py-1.5 flex items-center justify-between text-volcanic-foreground/50 font-body text-[11px] md:text-xs tracking-wide">
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+3545551234" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={11} /> +354 555 1234
            </a>
            <a href="mailto:hello@nordiksalon.is" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail size={11} /> hello@nordiksalon.is
            </a>
          </div>
          <div className="flex items-center gap-1.5 mx-auto md:mx-0">
            <MapPin size={11} className="text-gold" />
            <span>Laugavegur 42, 101 Reykjavík</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="text-volcanic-foreground/30">{t("topbar.hours")}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 safe-top ${
          scrolled
            ? "top-0 bg-volcanic/95 backdrop-blur-md shadow-lg py-2 md:py-3"
            : "top-[32px] md:top-[28px] bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6 safe-x">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-wider text-volcanic-foreground">
            NORDIK <span className="text-gold">SALON</span>
          </a>

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
              {t("nav.book")}
            </a>
            {scrolled && <LanguageSwitcher />}
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              className="text-volcanic-foreground touch-target flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

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
                {t("nav.book")}
              </a>
              <div className="mt-6 flex flex-col items-center gap-3 text-volcanic-foreground/40 font-body text-sm">
                <a href="tel:+3545551234" className="flex items-center gap-2 hover:text-gold">
                  <Phone size={14} /> +354 555 1234
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-gold" /> Laugavegur 42, Reykjavík
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
