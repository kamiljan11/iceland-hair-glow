import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-volcanic border-t border-volcanic-foreground/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-volcanic-foreground mb-4">
              NORDIK <span className="text-gold">SALON</span>
            </h3>
            <p className="font-body text-volcanic-foreground/60 text-base leading-relaxed">
              Where Nordic beauty meets artistry. Premium hair care in the heart of Reykjavík.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 border border-volcanic-foreground/20 flex items-center justify-center text-volcanic-foreground/60 hover:border-gold hover:text-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-volcanic-foreground/20 flex items-center justify-center text-volcanic-foreground/60 hover:border-gold hover:text-gold transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-volcanic-foreground mb-4 flex items-center gap-2">
              <Clock size={16} className="text-gold" /> Opening Hours
            </h4>
            <div className="space-y-2 font-body text-volcanic-foreground/60 text-base">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span>09:00 – 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 – 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-volcanic-foreground mb-4">Contact</h4>
            <div className="space-y-3 font-body text-volcanic-foreground/60 text-base">
              <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors">
                <MapPin size={16} className="text-gold shrink-0" />
                Laugavegur 42, 101 Reykjavík
              </a>
              <a href="tel:+3545551234" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={16} className="text-gold shrink-0" />
                +354 555 1234
              </a>
              <a href="mailto:hello@nordiksalon.is" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={16} className="text-gold shrink-0" />
                hello@nordiksalon.is
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <h4 className="font-display text-lg font-semibold text-volcanic-foreground mb-4">Find Us</h4>
            <div className="aspect-square bg-volcanic-foreground/5 border border-volcanic-foreground/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-gold mx-auto mb-2" size={24} />
                <p className="font-body text-volcanic-foreground/40 text-xs">Map placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-volcanic-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-volcanic-foreground/40 text-sm">
            © 2026 Nordik Salon. All rights reserved.
          </p>
          <p className="font-body text-volcanic-foreground/30 text-xs tracking-wider">
            Websites like this from only{" "}
            <span className="text-gold font-semibold">19,990 ISK/month</span>{" "}
            — personalised for your salon.{" "}
            <a href="#" className="underline hover:text-gold transition-colors">Learn more</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
