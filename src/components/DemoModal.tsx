import { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles, ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n/translations";

interface DemoModalContextType {
  openDemo: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | null>(null);

export const useDemoModal = () => {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
};

export const DemoModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <DemoModalContext.Provider value={{ openDemo: () => setOpen(true) }}>
      {children}
      <DemoModalDialog open={open} onOpenChange={setOpen} />
    </DemoModalContext.Provider>
  );
};

const DemoModalDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const { t } = useI18n();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-volcanic border-volcanic-foreground/10 max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="text-gold" size={24} />
          </div>
          <DialogTitle className="font-display text-xl md:text-2xl text-volcanic-foreground">
            {t("demo.title")}
          </DialogTitle>
          <DialogDescription className="font-body text-volcanic-foreground/60 text-sm leading-relaxed mt-2">
            {t("demo.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-3">
          <a
            href="https://spirit-way-bloom.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gold text-gold-foreground py-3.5 text-xs tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold/90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {t("demo.cta")} <ExternalLink size={13} />
          </a>
          <button
            onClick={() => onOpenChange(false)}
            className="w-full border border-volcanic-foreground/20 text-volcanic-foreground/60 py-3 text-xs tracking-[0.15em] uppercase font-body hover:border-volcanic-foreground/40 transition-colors"
          >
            {t("demo.close")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
