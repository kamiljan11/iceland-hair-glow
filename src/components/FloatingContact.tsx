import { useState } from "react";
import { Phone, X, MessageCircle, Calendar } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 safe-bottom">
      {open && (
        <div className="bg-volcanic border border-volcanic-foreground/10 shadow-2xl p-4 mb-2 animate-fade-up min-w-[200px]">
          <p className="font-display text-sm font-semibold text-volcanic-foreground mb-3">Hafa samband</p>
          <div className="space-y-2">
            <a
              href="tel:+3545551234"
              className="flex items-center gap-3 font-body text-sm text-volcanic-foreground/70 hover:text-gold transition-colors py-2"
            >
              <Phone size={16} className="text-gold" />
              +354 555 1234
            </a>
            <a
              href="https://wa.me/3545551234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-volcanic-foreground/70 hover:text-gold transition-colors py-2"
            >
              <MessageCircle size={16} className="text-gold" />
              WhatsApp
            </a>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 font-body text-sm text-volcanic-foreground/70 hover:text-gold transition-colors py-2"
            >
              <Calendar size={16} className="text-gold" />
              Bóka tíma
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-gold text-gold-foreground rounded-full shadow-lg shadow-gold/20 flex items-center justify-center hover:bg-gold/90 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={open ? "Close contact menu" : "Contact us"}
      >
        {open ? <X size={22} /> : <Phone size={22} />}
      </button>
    </div>
  );
};

export default FloatingContact;
