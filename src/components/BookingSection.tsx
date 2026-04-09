import { useState } from "react";
import { Calendar, Clock, User, Check, ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";

const serviceOptions = [
  { id: "cut", name: "Klipping & Stíll", price: "Frá 5.900 kr." },
  { id: "color", name: "Litun", price: "Frá 9.900 kr." },
  { id: "treatment", name: "Meðferð", price: "Frá 6.900 kr." },
  { id: "bridal", name: "Brúðarsnyrtingar", price: "Frá 12.900 kr." },
];

const stylistOptions = [
  { id: "elisabet", name: "Elísabet Jónsdóttir" },
  { id: "bjarki", name: "Bjarki Sigurðsson" },
  { id: "solrun", name: "Sólrún Magnúsdóttir" },
  { id: "any", name: "Sama — No Preference" },
];

const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

const BookingSection = () => {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [stylist, setStylist] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const steps = ["Þjónusta", "Hárgreiðari", "Dagur & tími", "Staðfesta"];

  const canProceed = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!stylist;
    if (step === 2) return !!date && !!time;
    return true;
  };

  return (
    <section id="booking" className="py-16 md:py-32 bg-volcanic">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-2 md:mb-3">Pantaðu tíma</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-volcanic-foreground mb-4">Bóka tíma</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-4" />
          {/* Noona.is reference — the actual booking platform used in Iceland */}
          <p className="font-body text-volcanic-foreground/40 text-xs">
            Eða bókaðu beint á{" "}
            <a href="https://noona.is" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline inline-flex items-center gap-1">
              Noona.is <ExternalLink size={10} />
            </a>
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-8 md:mb-12">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-1.5 md:gap-2">
              <div
                className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-body transition-all ${
                  i <= step
                    ? "bg-gold text-gold-foreground"
                    : "border border-volcanic-foreground/20 text-volcanic-foreground/40"
                }`}
              >
                {i < step ? <Check size={12} /> : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-5 md:w-8 h-px ${i < step ? "bg-gold" : "bg-volcanic-foreground/20"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-volcanic-foreground/5 border border-volcanic-foreground/10 p-5 md:p-10">
          {/* Step 0: Service */}
          {step === 0 && (
            <div className="space-y-2.5 md:space-y-3">
              <h3 className="font-display text-lg md:text-xl text-volcanic-foreground mb-4 md:mb-6">Veldu þjónustu</h3>
              {serviceOptions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setService(s.id)}
                  className={`w-full flex justify-between items-center p-3.5 md:p-4 border transition-all duration-300 text-left touch-target ${
                    service === s.id
                      ? "border-gold bg-gold/10 text-volcanic-foreground"
                      : "border-volcanic-foreground/10 text-volcanic-foreground/70 hover:border-volcanic-foreground/30 active:border-gold/50"
                  }`}
                >
                  <span className="font-body text-sm md:text-base">{s.name}</span>
                  <span className="font-body text-gold text-xs md:text-sm">{s.price}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 1: Stylist */}
          {step === 1 && (
            <div className="space-y-2.5 md:space-y-3">
              <h3 className="font-display text-lg md:text-xl text-volcanic-foreground mb-4 md:mb-6">Veldu hárgreiðara</h3>
              {stylistOptions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStylist(s.id)}
                  className={`w-full flex items-center gap-3 p-3.5 md:p-4 border transition-all duration-300 text-left touch-target ${
                    stylist === s.id
                      ? "border-gold bg-gold/10 text-volcanic-foreground"
                      : "border-volcanic-foreground/10 text-volcanic-foreground/70 hover:border-volcanic-foreground/30 active:border-gold/50"
                  }`}
                >
                  <User size={16} className="text-gold shrink-0" />
                  <span className="font-body text-sm md:text-base">{s.name}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div>
              <h3 className="font-display text-lg md:text-xl text-volcanic-foreground mb-4 md:mb-6">Veldu dag og tíma</h3>
              <div className="mb-5 md:mb-6">
                <label className="font-body text-volcanic-foreground/60 text-xs md:text-sm mb-2 flex items-center gap-2">
                  <Calendar size={14} /> Dagsetning
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent border border-volcanic-foreground/20 text-volcanic-foreground p-3 md:p-3 font-body focus:border-gold outline-none transition-colors touch-target text-base"
                />
              </div>
              <div>
                <label className="font-body text-volcanic-foreground/60 text-xs md:text-sm mb-2 flex items-center gap-2">
                  <Clock size={14} /> Tími
                </label>
                <div className="grid grid-cols-4 gap-1.5 md:gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`p-2.5 md:p-3 border text-xs md:text-sm font-body transition-all touch-target ${
                        time === t
                          ? "border-gold bg-gold/10 text-volcanic-foreground"
                          : "border-volcanic-foreground/10 text-volcanic-foreground/60 hover:border-volcanic-foreground/30 active:border-gold/50"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {step === 3 && (
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Check className="text-gold" size={24} />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-volcanic-foreground mb-2">Bókunaryfirlit</h3>
              <p className="font-body text-volcanic-foreground/60 mb-6 md:mb-8 text-sm">Yfirfarðu tímapöntunina þína</p>
              <div className="text-left space-y-3 md:space-y-4 bg-volcanic-foreground/5 p-4 md:p-6 border border-volcanic-foreground/10 mb-6 md:mb-8">
                <div className="flex justify-between font-body text-sm md:text-base">
                  <span className="text-volcanic-foreground/60">Þjónusta</span>
                  <span className="text-volcanic-foreground">{serviceOptions.find((s) => s.id === service)?.name}</span>
                </div>
                <div className="flex justify-between font-body text-sm md:text-base">
                  <span className="text-volcanic-foreground/60">Hárgreiðari</span>
                  <span className="text-volcanic-foreground">{stylistOptions.find((s) => s.id === stylist)?.name}</span>
                </div>
                <div className="flex justify-between font-body text-sm md:text-base">
                  <span className="text-volcanic-foreground/60">Dagsetning</span>
                  <span className="text-volcanic-foreground">{date}</span>
                </div>
                <div className="flex justify-between font-body text-sm md:text-base">
                  <span className="text-volcanic-foreground/60">Tími</span>
                  <span className="text-volcanic-foreground">{time}</span>
                </div>
              </div>
              <button
                className="w-full bg-gold text-gold-foreground py-4 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-colors touch-target"
                onClick={() => {
                  setStep(0);
                  setService("");
                  setStylist("");
                  setDate("");
                  setTime("");
                }}
              >
                Staðfesta bókun (sýnidæmi)
              </button>
              <p className="font-body text-volcanic-foreground/40 text-xs mt-3 md:mt-4">
                Þetta er sýnidæmi. Engin raunveruleg bókun verður gerð.
              </p>
            </div>
          )}

          {/* Navigation */}
          {step < 3 && (
            <div className="flex justify-between mt-6 md:mt-8">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                className={`flex items-center gap-1 font-body text-sm text-volcanic-foreground/60 hover:text-gold active:text-gold transition-colors touch-target ${step === 0 ? "invisible" : ""}`}
              >
                <ChevronLeft size={16} /> Til baka
              </button>
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                className={`flex items-center gap-1 font-body text-sm transition-colors touch-target ${
                  canProceed()
                    ? "text-gold hover:text-gold/80 active:text-gold/70"
                    : "text-volcanic-foreground/20 cursor-not-allowed"
                }`}
              >
                Áfram <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
