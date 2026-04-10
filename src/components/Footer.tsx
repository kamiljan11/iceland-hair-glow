import { Instagram, Facebook, MapPin, Phone, Mail, Clock, Leaf, ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n/translations";
import { useDemoModal } from "@/components/DemoModal";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer id="contact" className="bg-volcanic border-t border-volcanic-foreground/10">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-display text-lg md:text-2xl font-bold text-volcanic-foreground mb-2.5 md:mb-4">
              NORDIK <span className="text-gold">SALON</span>
            </h3>
            <p className="font-body text-volcanic-foreground/60 text-xs md:text-base leading-relaxed">{t("footer.brand")}</p>
            <div className="flex gap-2.5 md:gap-3 mt-3 md:mt-6">
              <a href="#" className="w-10 h-10 border border-volcanic-foreground/20 flex items-center justify-center text-volcanic-foreground/60 hover:border-gold hover:text-gold transition-all touch-target" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" className="w-10 h-10 border border-volcanic-foreground/20 flex items-center justify-center text-volcanic-foreground/60 hover:border-gold hover:text-gold transition-all touch-target" aria-label="Facebook"><Facebook size={16} /></a>
            </div>
            <div className="mt-3 flex items-center gap-2 text-volcanic-foreground/40 font-body text-[10px] md:text-xs">
              <Leaf size={12} className="text-gold" />
              <span>{t("footer.eco")}</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm md:text-lg font-semibold text-volcanic-foreground mb-2.5 md:mb-4 flex items-center gap-1.5">
              <Clock size={14} className="text-gold" /> {t("footer.hours")}
            </h4>
            <div className="space-y-1.5 md:space-y-2 font-body text-volcanic-foreground/60 text-[11px] md:text-base">
              <div className="flex justify-between gap-2"><span>{t("footer.monThu")}</span><span>09–18</span></div>
              <div className="flex justify-between gap-2"><span>{t("footer.fri")}</span><span>09–16</span></div>
              <div className="flex justify-between gap-2"><span>{t("footer.sat")}</span><span>10–16</span></div>
              <div className="flex justify-between gap-2"><span>{t("footer.sun")}</span><span className="text-volcanic-foreground/30">{t("footer.closed")}</span></div>
            </div>
            <a href="https://noona.is" target="_blank" rel="noopener noreferrer" className="mt-3 md:mt-4 inline-flex items-center gap-1.5 font-body text-[10px] md:text-xs text-gold hover:text-gold/80 transition-colors">
              {t("footer.bookNoona")} <ExternalLink size={9} />
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm md:text-lg font-semibold text-volcanic-foreground mb-2.5 md:mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 md:space-y-3 font-body text-volcanic-foreground/60 text-[11px] md:text-base">
              <a href="#" className="flex items-start gap-1.5 hover:text-gold transition-colors py-0.5">
                <MapPin size={13} className="text-gold shrink-0 mt-0.5" /><span>Laugavegur 42, 101 Reykjavík</span>
              </a>
              <a href="tel:+3545551234" className="flex items-center gap-1.5 hover:text-gold transition-colors py-0.5">
                <Phone size={13} className="text-gold shrink-0" />+354 555 1234
              </a>
              <a href="mailto:hello@nordiksalon.is" className="flex items-center gap-1.5 hover:text-gold transition-colors py-0.5">
                <Mail size={13} className="text-gold shrink-0" />hello@nordiksalon.is
              </a>
            </div>
            <a href="https://ja.is" target="_blank" rel="noopener noreferrer" className="mt-3 md:mt-4 inline-flex items-center gap-1.5 font-body text-[10px] md:text-xs text-volcanic-foreground/30 hover:text-volcanic-foreground/50 transition-colors">
              {t("footer.seeJa")} <ExternalLink size={9} />
            </a>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-display text-sm md:text-lg font-semibold text-volcanic-foreground mb-2.5 md:mb-4">{t("footer.findUs")}</h4>
            <div className="aspect-video lg:aspect-square border border-volcanic-foreground/10 overflow-hidden relative">
              <iframe title="Nordik Salon location" src="https://www.openstreetmap.org/export/embed.html?bbox=-21.9350%2C64.1440%2C-21.9200%2C64.1490&layer=mapnik&marker=64.1466%2C-21.9275" className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" loading="lazy" referrerPolicy="no-referrer" />
              <a href="https://www.openstreetmap.org/?mlat=64.1466&mlon=-21.9275#map=17/64.1466/-21.9275" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-volcanic/80 backdrop-blur-sm text-volcanic-foreground text-[10px] md:text-xs px-2.5 py-1 font-body hover:bg-gold hover:text-gold-foreground transition-colors">
                {t("footer.openMap")}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-volcanic-foreground/10 mt-8 md:mt-12 pt-5 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 safe-bottom">
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
              <p className="font-body text-volcanic-foreground/40 text-[10px] md:text-sm">© 2026 Nordik Salon ehf.</p>
              <span className="font-body text-volcanic-foreground/20 text-[9px] md:text-xs">Kt. 580211-0290</span>
            </div>
            <p className="font-body text-volcanic-foreground/30 text-[9px] md:text-xs tracking-wider text-center">
              {t("footer.promo")} <span className="text-gold font-semibold">19.990 kr./mán.</span> {t("footer.promoBy")}{" "}
              <a href="https://spirit-way-bloom.lovable.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold transition-colors font-semibold">Business Autopilot</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
