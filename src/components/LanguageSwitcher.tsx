import { useI18n, Lang } from "@/i18n/translations";

const flags: Record<Lang, string> = {
  en: "🇬🇧",
  is: "🇮🇸",
  pl: "🇵🇱",
};

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();

  const langs: Lang[] = ["en", "is", "pl"];

  return (
    <div className="flex items-center gap-0.5">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-1.5 py-1 text-[11px] md:text-xs font-body uppercase tracking-wider transition-all touch-target flex items-center justify-center ${
            lang === l
              ? "text-gold"
              : "text-volcanic-foreground/40 hover:text-volcanic-foreground/70"
          }`}
          aria-label={`Switch to ${l}`}
        >
          <span className="mr-0.5">{flags[l]}</span>
          <span className="hidden md:inline">{l.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
