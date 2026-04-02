import { useState } from "react";
import { Calendar, Clock, User, Check, ChevronRight, ChevronLeft } from "lucide-react";

const serviceOptions = [
  { id: "cut", name: "Cut & Style", price: "From 5.900 ISK" },
  { id: "color", name: "Color", price: "From 9.900 ISK" },
  { id: "treatment", name: "Treatment", price: "From 6.900 ISK" },
  { id: "bridal", name: "Bridal", price: "From 12.900 ISK" },
];

const stylistOptions = [
  { id: "elisabet", name: "Elísabet Jónsdóttir" },
  { id: "bjarki", name: "Bjarki Sigurðsson" },
  { id: "solrun", name: "Sólrún Magnúsdóttir" },
  { id: "any", name: "No Preference" },
];

const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

const BookingSection = () => {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [stylist, setStylist] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const steps = ["Service", "Stylist", "Date & Time", "Confirm"];

  const canProceed = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!stylist;
    if (step === 2) return !!date && !!time;
    return true;
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-volcanic">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-body mb-3">Reserve Your Spot</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-volcanic-foreground mb-4">Book an Appointment</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body transition-all ${
                  i <= step
                    ? "bg-gold text-gold-foreground"
                    : "border border-volcanic-foreground/20 text-volcanic-foreground/40"
                }`}
              >
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 h-px ${i < step ? "bg-gold" : "bg-volcanic-foreground/20"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-volcanic-foreground/5 border border-volcanic-foreground/10 p-8 md:p-10">
          {/* Step 0: Service */}
          {step === 0 && (
            <div className="space-y-3">
              <h3 className="font-display text-xl text-volcanic-foreground mb-6">Select a Service</h3>
              {serviceOptions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setService(s.id)}
                  className={`w-full flex justify-between items-center p-4 border transition-all duration-300 text-left ${
                    service === s.id
                      ? "border-gold bg-gold/10 text-volcanic-foreground"
                      : "border-volcanic-foreground/10 text-volcanic-foreground/70 hover:border-volcanic-foreground/30"
                  }`}
                >
                  <span className="font-body text-base">{s.name}</span>
                  <span className="font-body text-gold text-sm">{s.price}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 1: Stylist */}
          {step === 1 && (
            <div className="space-y-3">
              <h3 className="font-display text-xl text-volcanic-foreground mb-6">Choose Your Stylist</h3>
              {stylistOptions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStylist(s.id)}
                  className={`w-full flex items-center gap-3 p-4 border transition-all duration-300 text-left ${
                    stylist === s.id
                      ? "border-gold bg-gold/10 text-volcanic-foreground"
                      : "border-volcanic-foreground/10 text-volcanic-foreground/70 hover:border-volcanic-foreground/30"
                  }`}
                >
                  <User size={18} className="text-gold" />
                  <span className="font-body text-base">{s.name}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div>
              <h3 className="font-display text-xl text-volcanic-foreground mb-6">Pick Date & Time</h3>
              <div className="mb-6">
                <label className="font-body text-volcanic-foreground/60 text-sm mb-2 flex items-center gap-2">
                  <Calendar size={14} /> Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent border border-volcanic-foreground/20 text-volcanic-foreground p-3 font-body focus:border-gold outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-volcanic-foreground/60 text-sm mb-2 flex items-center gap-2">
                  <Clock size={14} /> Select Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`p-3 border text-sm font-body transition-all ${
                        time === t
                          ? "border-gold bg-gold/10 text-volcanic-foreground"
                          : "border-volcanic-foreground/10 text-volcanic-foreground/60 hover:border-volcanic-foreground/30"
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
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-gold" size={28} />
              </div>
              <h3 className="font-display text-2xl text-volcanic-foreground mb-2">Booking Summary</h3>
              <p className="font-body text-volcanic-foreground/60 mb-8">Review your appointment details</p>
              <div className="text-left space-y-4 bg-volcanic-foreground/5 p-6 border border-volcanic-foreground/10 mb-8">
                <div className="flex justify-between font-body">
                  <span className="text-volcanic-foreground/60">Service</span>
                  <span className="text-volcanic-foreground">{serviceOptions.find((s) => s.id === service)?.name}</span>
                </div>
                <div className="flex justify-between font-body">
                  <span className="text-volcanic-foreground/60">Stylist</span>
                  <span className="text-volcanic-foreground">{stylistOptions.find((s) => s.id === stylist)?.name}</span>
                </div>
                <div className="flex justify-between font-body">
                  <span className="text-volcanic-foreground/60">Date</span>
                  <span className="text-volcanic-foreground">{date}</span>
                </div>
                <div className="flex justify-between font-body">
                  <span className="text-volcanic-foreground/60">Time</span>
                  <span className="text-volcanic-foreground">{time}</span>
                </div>
              </div>
              <button
                className="w-full bg-gold text-gold-foreground py-4 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-colors"
                onClick={() => {
                  setStep(0);
                  setService("");
                  setStylist("");
                  setDate("");
                  setTime("");
                }}
              >
                Confirm Booking (Demo)
              </button>
              <p className="font-body text-volcanic-foreground/40 text-xs mt-4">
                This is a demo. No actual booking will be made.
              </p>
            </div>
          )}

          {/* Navigation */}
          {step < 3 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                className={`flex items-center gap-1 font-body text-sm text-volcanic-foreground/60 hover:text-gold transition-colors ${step === 0 ? "invisible" : ""}`}
              >
                <ChevronLeft size={16} /> Back
              </button>
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                className={`flex items-center gap-1 font-body text-sm transition-colors ${
                  canProceed()
                    ? "text-gold hover:text-gold/80"
                    : "text-volcanic-foreground/20 cursor-not-allowed"
                }`}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
