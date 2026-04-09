import stylist1 from "@/assets/stylist-1.jpg";
import stylist2 from "@/assets/stylist-2.jpg";
import stylist3 from "@/assets/stylist-3.jpg";
import { useI18n } from "@/i18n/translations";

const TeamSection = () => {
  const { t } = useI18n();

  const team = [
    { name: "Elísabet Jónsdóttir", role: t("team.elisabet.role"), specialty: t("team.elisabet.specialty"), bio: t("team.elisabet.bio"), image: stylist1 },
    { name: "Bjarki Sigurðsson", role: t("team.bjarki.role"), specialty: t("team.bjarki.specialty"), bio: t("team.bjarki.bio"), image: stylist2 },
    { name: "Sólrún Magnúsdóttir", role: t("team.solrun.role"), specialty: t("team.solrun.specialty"), bio: t("team.solrun.bio"), image: stylist3 },
  ];

  return (
    <section id="team" className="py-14 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-2 md:mb-3">{t("team.label")}</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("team.title")}</h2>
          <div className="w-12 md:w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none md:max-w-5xl md:mx-auto scrollbar-none">
          {team.map((member) => (
            <div key={member.name} className="group flex-shrink-0 w-[72vw] sm:w-[50vw] md:w-auto snap-center">
              <div className="relative overflow-hidden mb-3 md:mb-6 aspect-[3/4]">
                <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-volcanic/90 via-volcanic/60 to-transparent p-3 md:p-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-body text-volcanic-foreground/90 text-xs md:text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
              <h3 className="font-display text-base md:text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="font-body text-gold text-[10px] md:text-sm tracking-wider uppercase mt-0.5 md:mt-1">{member.role}</p>
              <p className="font-body text-muted-foreground text-[10px] md:text-sm mt-0.5 md:mt-1">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
