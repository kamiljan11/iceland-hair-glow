import { useState } from "react";
import { Calendar, Clock, User, Check, ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n/translations";

const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

const BookingSection = () => {
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [stylist, setStylist] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const serviceOptions = [
    { id: "cut", name: t("services.cut.title"), price: `${t("booking.from")} 5.900 kr.` },
    { id: "color", name: t("services.color.title"), price: `${t("booking.from")} 9.900 kr.` },
    { id: "treatment", name: t("services.treatments.title"), price: `${t("booking.from")} 6.900 kr.` },
    { id: "bridal", name: t("services.bridal.title"), price: `${t("booking.from")} 12.900 kr.` },
  ];

  const stylistOptions = [
    { id: "elisabet", name: "Elísabet Jónsdóttir" },
    { id: "bjarki", name: "Bjarki Sigurðsson" },
    { id: "solrun", name: "Sólrún Magnúsdóttir" },
    { id: "any", name: t("booking.noPref") },
  ];

  const steps = [t("booking.step1"), t("booking.step2"), t("booking.step3"), t("booking.step4")];

  const canProceed = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!stylist;
    if (step === 2) return !!date && !!time;
    return true;
  };

  return (
    <section id="booking" className="py-14 md:py-32 bg-volcanic">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="text-center mb-6 md:mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("booking.label")}</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-volcanic-foreground mb-3 md:mb-4">{t("booking.title")}</h2>
          <div className="w-12 md:w-16 h-px bg-gold mx-auto mb-3 md:mb-4" />
          <p className="font-body text-volcanic-foreground/40 text-[10px] md:text-xs">
            {t("booking.noona")}{" "}
            <a href="https://noona.is" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline inline-flex items-center gap-1">
              Noona.is <ExternalLink size={9} />
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center gap-1 md:gap-2 mb-6 md:mb-12">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-1 md:gap-2">
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[9px] md:text-xs font-body transition-all ${i <= step ? "bg-gold text-gold-foreground" : "border border-volcanic-foreground/20 text-volcanic-foreground/40"}`}>
                {i < step ? <Check size={10} /> : i + 1}
              </div>
              {i < steps.length - 1 && <div className={`w-4 md:w-8 h-px ${i < step ? "bg-gold" : "bg-volcanic-foreground/20"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-volcanic-foreground/5 border border-volcanic-foreground/10 p-4 md:p-10">
          {step === 0 && (
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-display text-base md:text-xl text-volcanic-foreground mb-3 md:mb-6">{t("booking.selectService")}</h3>
              {serviceOptions.map((s) => (
                <button key={s.id} onClick={() => setService(s.id)} className={`w-full flex justify-between items-center p-3 md:p-4 border transition-all duration-300 text-left touch-target ${service === s.id ? "border-gold bg-gold/10 text-volcanic-foreground" : "border-volcanic-foreground/10 text-volcanic-foreground/70 hover:border-volcanic-foreground/30"}`}>
                  <span className="font-body text-xs md:text-base">{s.name}</span>
                  <span className="font-body text-gold text-[10px] md:text-sm">{s.price}</span>
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-display text-base md:text-xl text-volcanic-foreground mb-3 md:mb-6">{t("booking.selectStylist")}</h3>
              {stylistOptions.map((s) => (
                <button key={s.id} onClick={() => setStylist(s.id)} className={`w-full flex items-center gap-2.5 md:gap-3 p-3 md:p-4 border transition-all duration-300 text-left touch-target ${stylist === s.id ? "border-gold bg-gold/10 text-volcanic-foreground" : "border-volcanic-foreground/10 text-volcanic-foreground/70 hover:border-volcanic-foreground/30"}`}>
                  <User size={14} className="text-gold shrink-0" />
                  <span className="font-body text-xs md:text-base">{s.name}</span>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-display text-base md:text-xl text-volcanic-foreground mb-3 md:mb-6">{t("booking.selectDate")}</h3>
              <div className="mb-4 md:mb-6">
                <label className="font-body text-volcanic-foreground/60 text-[10px] md:text-sm mb-1.5 md:mb-2 flex items-center gap-1.5">
                  <Calendar size={12} /> {t("booking.date")}
                </label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent border border-volcanic-foreground/20 text-volcanic-foreground p-3 font-body focus:border-gold outline-none transition-colors touch-target text-sm md:text-base" />
              </div>
              <div>
                <label className="font-body text-volcanic-foreground/60 text-[10px] md:text-sm mb-1.5 md:mb-2 flex items-center gap-1.5">
                  <Clock size={12} /> {t("booking.time")}
                </label>
                <div className="grid grid-cols-4 gap-1.5 md:gap-2">
                  {timeSlots.map((slot) => (
                    <button key={slot} onClick={() => setTime(slot)} className={`p-2.5 md:p-3 border text-[11px] md:text-sm font-body transition-all touch-target ${time === slot ? "border-gold bg-gold/10 text-volcanic-foreground" : "border-volcanic-foreground/10 text-volcanic-foreground/60 hover:border-volcanic-foreground/30"}`}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6">
                <Check className="text-gold" size={20} />
              </div>
              <h3 className="font-display text-lg md:text-2xl text-volcanic-foreground mb-1.5 md:mb-2">{t("booking.summary")}</h3>
              <p className="font-body text-volcanic-foreground/60 mb-4 md:mb-8 text-xs md:text-sm">{t("booking.review")}</p>
              <div className="text-left space-y-2.5 md:space-y-4 bg-volcanic-foreground/5 p-3.5 md:p-6 border border-volcanic-foreground/10 mb-4 md:mb-8">
                <div className="flex justify-between font-body text-xs md:text-base">
                  <span className="text-volcanic-foreground/60">{t("booking.service")}</span>
                  <span className="text-volcanic-foreground">{serviceOptions.find((s) => s.id === service)?.name}</span>
                </div>
                <div className="flex justify-between font-body text-xs md:text-base">
                  <span className="text-volcanic-foreground/60">{t("booking.stylist")}</span>
                  <span className="text-volcanic-foreground">{stylistOptions.find((s) => s.id === stylist)?.name}</span>
                </div>
                <div className="flex justify-between font-body text-xs md:text-base">
                  <span className="text-volcanic-foreground/60">{t("booking.date")}</span>
                  <span className="text-volcanic-foreground">{date}</span>
                </div>
                <div className="flex justify-between font-body text-xs md:text-base">
                  <span className="text-volcanic-foreground/60">{t("booking.time")}</span>
                  <span className="text-volcanic-foreground">{time}</span>
                </div>
              </div>
              <button className="w-full bg-gold text-gold-foreground py-3.5 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-colors touch-target" onClick={() => { setStep(0); setService(""); setStylist(""); setDate(""); setTime(""); }}>
                {t("booking.confirm")}
              </button>
              <p className="font-body text-volcanic-foreground/40 text-[9px] md:text-xs mt-2.5 md:mt-4">{t("booking.demo")}</p>
            </div>
          )}

          {step < 3 && (
            <div className="flex justify-between mt-5 md:mt-8">
              <button onClick={() => setStep(Math.max(0, step - 1))} className={`flex items-center gap-1 font-body text-xs md:text-sm text-volcanic-foreground/60 hover:text-gold transition-colors touch-target ${step === 0 ? "invisible" : ""}`}>
                <ChevronLeft size={14} /> {t("booking.back")}
              </button>
              <button onClick={() => canProceed() && setStep(step + 1)} className={`flex items-center gap-1 font-body text-xs md:text-sm transition-colors touch-target ${canProceed() ? "text-gold hover:text-gold/80" : "text-volcanic-foreground/20 cursor-not-allowed"}`}>
                {t("booking.next")} <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
