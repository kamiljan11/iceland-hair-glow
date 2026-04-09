import { Instagram, Facebook, MapPin, Phone, Mail, Clock, Leaf, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-volcanic border-t border-volcanic-foreground/10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-volcanic-foreground mb-3 md:mb-4">
              NORDIK <span className="text-gold">SALON</span>
            </h3>
            <p className="font-body text-volcanic-foreground/60 text-sm md:text-base leading-relaxed">
              Hárgreiðslu- og snyrtistofa í hjarta Reykjavíkur. Premium hárþjónusta síðan 2011.
            </p>
            <div className="flex gap-3 mt-4 md:mt-6">
              <a href="#" className="w-11 h-11 md:w-10 md:h-10 border border-volcanic-foreground/20 flex items-center justify-center text-volcanic-foreground/60 hover:border-gold hover:text-gold active:border-gold active:text-gold transition-all touch-target" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-11 h-11 md:w-10 md:h-10 border border-volcanic-foreground/20 flex items-center justify-center text-volcanic-foreground/60 hover:border-gold hover:text-gold active:border-gold active:text-gold transition-all touch-target" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
            {/* Eco badge — trending in Iceland (Græna stofan, etc.) */}
            <div className="mt-4 flex items-center gap-2 text-volcanic-foreground/40 font-body text-xs">
              <Leaf size={14} className="text-gold" />
              <span>Grøn Salon vottuð</span>
            </div>
          </div>

          {/* Opnunartímar — Icelandic format (Mon-Fri 09-18, Fri to 16, Sat/Sun Lokað) */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold text-volcanic-foreground mb-3 md:mb-4 flex items-center gap-2">
              <Clock size={16} className="text-gold" /> Opnunartímar
            </h4>
            <div className="space-y-2 font-body text-volcanic-foreground/60 text-sm md:text-base">
              <div className="flex justify-between">
                <span>Mánudagur – Fimmtudagur</span>
                <span>09:00 – 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Föstudagur</span>
                <span>09:00 – 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Laugardagur</span>
                <span>10:00 – 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunnudagur</span>
                <span className="text-volcanic-foreground/30">Lokað</span>
              </div>
            </div>
            {/* Noona booking — the dominant platform in Iceland */}
            <a
              href="https://noona.is"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-body text-xs text-gold hover:text-gold/80 transition-colors"
            >
              Bóka á Noona.is <ExternalLink size={10} />
            </a>
          </div>

          {/* Hafa samband */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold text-volcanic-foreground mb-3 md:mb-4">Hafa samband</h4>
            <div className="space-y-3 font-body text-volcanic-foreground/60 text-sm md:text-base">
              <a href="#" className="flex items-center gap-2 hover:text-gold active:text-gold transition-colors py-1">
                <MapPin size={16} className="text-gold shrink-0" />
                Laugavegur 42, 101 Reykjavík
              </a>
              <a href="tel:+3545551234" className="flex items-center gap-2 hover:text-gold active:text-gold transition-colors py-1">
                <Phone size={16} className="text-gold shrink-0" />
                +354 555 1234
              </a>
              <a href="mailto:hello@nordiksalon.is" className="flex items-center gap-2 hover:text-gold active:text-gold transition-colors py-1">
                <Mail size={16} className="text-gold shrink-0" />
                hello@nordiksalon.is
              </a>
            </div>
            {/* Já.is — Iceland's business directory, every salon is listed */}
            <a
              href="https://ja.is"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-body text-xs text-volcanic-foreground/30 hover:text-volcanic-foreground/50 transition-colors"
            >
              Sjá á Já.is <ExternalLink size={10} />
            </a>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold text-volcanic-foreground mb-3 md:mb-4">Finndu okkur</h4>
            <div className="aspect-video sm:aspect-square border border-volcanic-foreground/10 overflow-hidden relative">
              <iframe
                title="Nordik Salon staðsetning"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-21.9350%2C64.1440%2C-21.9200%2C64.1490&layer=mapnik&marker=64.1466%2C-21.9275"
                className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <a
                href="https://www.openstreetmap.org/?mlat=64.1466&mlon=-21.9275#map=17/64.1466/-21.9275"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-volcanic/80 backdrop-blur-sm text-volcanic-foreground text-xs px-3 py-1.5 font-body hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                Opna kort ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-volcanic-foreground/10 mt-10 md:mt-12 pt-6 md:pt-8">
          {/* Kennitala — every Icelandic business displays this */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 safe-bottom">
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
              <p className="font-body text-volcanic-foreground/40 text-xs md:text-sm">
                © 2026 Nordik Salon ehf.
              </p>
              <span className="font-body text-volcanic-foreground/20 text-[10px] md:text-xs">
                Kt. 580211-0290
              </span>
            </div>
            <p className="font-body text-volcanic-foreground/30 text-[11px] md:text-xs tracking-wider text-center">
              Vefsíður eins og þessi frá aðeins{" "}
              <span className="text-gold font-semibold">19.990 kr./mán.</span>{" "}
              — sérsniðin fyrir þína stofu af{" "}
              <a href="https://spirit-way-bloom.lovable.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold active:text-gold transition-colors font-semibold">Business Autopilot</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
