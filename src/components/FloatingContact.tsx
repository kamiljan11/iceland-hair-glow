import { useState } from "react";
import { Phone, X, MessageCircle, Calendar } from "lucide-react";
import { useI18n } from "@/i18n/translations";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end gap-2 safe-bottom">
      {open && (
        <div className="bg-volcanic border border-volcanic-foreground/10 shadow-2xl p-3.5 md:p-4 mb-1 md:mb-2 animate-fade-in min-w-[180px] md:min-w-[200px]">
          <p className="font-display text-xs md:text-sm font-semibold text-volcanic-foreground mb-2.5 md:mb-3">{t("float.contact")}</p>
          <div className="space-y-1">
            <a href="tel:+3545551234" className="flex items-center gap-2.5 font-body text-xs md:text-sm text-volcanic-foreground/70 hover:text-gold transition-colors py-2">
              <Phone size={14} className="text-gold" /> +354 555 1234
            </a>
            <a href="https://wa.me/3545551234" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-body text-xs md:text-sm text-volcanic-foreground/70 hover:text-gold transition-colors py-2">
              <MessageCircle size={14} className="text-gold" /> WhatsApp
            </a>
            <a href="#booking" onClick={() => setOpen(false)} className="flex items-center gap-2.5 font-body text-xs md:text-sm text-volcanic-foreground/70 hover:text-gold transition-colors py-2">
              <Calendar size={14} className="text-gold" /> {t("float.book")}
            </a>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="w-12 h-12 md:w-14 md:h-14 bg-gold text-gold-foreground rounded-full shadow-lg shadow-gold/20 flex items-center justify-center hover:bg-gold/90 transition-all duration-300 hover:scale-105 active:scale-95" aria-label={open ? "Close" : "Contact"}>
        {open ? <X size={20} /> : <Phone size={20} />}
      </button>
    </div>
  );
};

export default FloatingContact;
