import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "is" | "pl";

const translations = {
  // Navbar
  "nav.services": { en: "Services", is: "Þjónusta", pl: "Usługi" },
  "nav.reviews": { en: "Reviews", is: "Umsagnir", pl: "Opinie" },
  "nav.gallery": { en: "Gallery", is: "Gallerí", pl: "Galeria" },
  "nav.team": { en: "Team", is: "Teymið", pl: "Zespół" },
  "nav.about": { en: "About Us", is: "Um okkur", pl: "O nas" },
  "nav.contact": { en: "Contact", is: "Hafa samband", pl: "Kontakt" },
  "nav.book": { en: "Book Now", is: "Bóka tíma", pl: "Zarezerwuj" },

  // Top bar
  "topbar.hours": { en: "Mon–Fri 09–18 · Sat 10–16", is: "Mán–Fös 09–18 · Lau 10–16", pl: "Pon–Pt 09–18 · Sob 10–16" },

  // Hero
  "hero.location": { en: "Reykjavík · Laugavegur 42", is: "Reykjavík · Laugavegur 42", pl: "Reykjavík · Laugavegur 42" },
  "hero.welcome": { en: "Welcome to", is: "Velkomin til", pl: "Witamy w" },
  "hero.subtitle": {
    en: "Where Nordic beauty meets artistry — inspired by Iceland's raw elegance, volcanic strength, and golden light.",
    is: "Þar sem norræn fegurð mætir listræni — innblásin af hrárri glæsileik Íslands, eldfjallakrafti og gullnu ljósi.",
    pl: "Gdzie nordyckie piękno spotyka artyzm — inspirowane surową elegancją Islandii, siłą wulkanów i złotym światłem.",
  },
  "hero.services": { en: "Services", is: "Þjónusta", pl: "Usługi" },
  "hero.firstVisit": {
    en: "✨ First visit? 20% off",
    is: "✨ Fyrsta heimsóknin? 20% afsláttur",
    pl: "✨ Pierwsza wizyta? 20% zniżki",
  },
  "hero.scroll": { en: "Scroll", is: "Skrolla", pl: "Przewiń" },

  // Services
  "services.label": { en: "Services", is: "Þjónusta", pl: "Usługi" },
  "services.title": { en: "Our Services", is: "Þjónustan okkar", pl: "Nasze usługi" },
  "services.cut.title": { en: "Cut & Style", is: "Klipping & Stíll", pl: "Strzyżenie i stylizacja" },
  "services.cut.subtitle": { en: "Cut & Style", is: "Klipping & Stíll", pl: "Strzyżenie i stylizacja" },
  "services.color.title": { en: "Color", is: "Litun", pl: "Koloryzacja" },
  "services.color.subtitle": { en: "Color", is: "Litun", pl: "Koloryzacja" },
  "services.treatments.title": { en: "Treatments", is: "Meðferðir", pl: "Zabiegi" },
  "services.treatments.subtitle": { en: "Treatments", is: "Meðferðir", pl: "Zabiegi" },
  "services.bridal.title": { en: "Bridal", is: "Brúðarsnyrtingar", pl: "Ślubne" },
  "services.bridal.subtitle": { en: "Bridal", is: "Brúðarsnyrtingar", pl: "Ślubne" },
  "services.womens_cut": { en: "Women's Cut & Blow Dry", is: "Klipping og fön", pl: "Strzyżenie damskie i suszenie" },
  "services.mens_cut": { en: "Men's Cut & Style", is: "Klipping karla", pl: "Strzyżenie męskie" },
  "services.childrens_cut": { en: "Children's Cut", is: "Barnaklipping", pl: "Strzyżenie dzieci" },
  "services.fringe_trim": { en: "Fringe Trim", is: "Klipping á lugg", pl: "Przycinanie grzywki" },
  "services.full_color": { en: "Full Color", is: "Heillitun", pl: "Pełna koloryzacja" },
  "services.balayage": { en: "Balayage / Highlights", is: "Balayage / Ljósir", pl: "Balayage / Refleksy" },
  "services.root_touchup": { en: "Root Touch-Up", is: "Rótarlitun", pl: "Odrost" },
  "services.color_correction": { en: "Color Correction", is: "Litaleiðrétting", pl: "Korekcja koloru" },
  "services.keratin": { en: "Keratin Treatment", is: "Keratín meðferð", pl: "Zabieg keratynowy" },
  "services.deep_conditioning": { en: "Deep Conditioning", is: "Djúpmeðferð", pl: "Głęboka regeneracja" },
  "services.scalp": { en: "Scalp Treatment", is: "Hársverðsmeðferð", pl: "Zabieg na skórę głowy" },
  "services.olaplex": { en: "Olaplex Repair", is: "Olaplex viðgerð", pl: "Naprawa Olaplex" },
  "services.bridal_updo": { en: "Bridal Updo", is: "Brúðargreiðsla", pl: "Upięcie ślubne" },
  "services.bridal_trial": { en: "Bridal Trial", is: "Brúðarprufa", pl: "Próba ślubna" },
  "services.bridesmaid": { en: "Bridesmaid Style", is: "Greiðsla brúðarmeyja", pl: "Stylizacja druhen" },
  "services.bridal_package": { en: "Full Bridal Package", is: "Brúðarpakki", pl: "Pełny pakiet ślubny" },
  "services.from": { en: "From", is: "Frá", pl: "Od" },

  // Reviews
  "reviews.label": { en: "Reviews", is: "Umsagnir", pl: "Opinie" },
  "reviews.title": { en: "What Our Clients Say", is: "Hvað viðskiptavinir segja", pl: "Co mówią nasi klienci" },
  "reviews.count": { en: "127 Google Reviews", is: "127 Google umsagnir", pl: "127 opinii Google" },

  // Gallery
  "gallery.label": { en: "Our Work", is: "Verkin okkar", pl: "Nasze prace" },
  "gallery.title": { en: "Gallery", is: "Gallerí", pl: "Galeria" },
  "gallery.all": { en: "All", is: "Allt", pl: "Wszystko" },
  "gallery.color": { en: "Color", is: "Litun", pl: "Kolor" },
  "gallery.cut": { en: "Cut", is: "Klipping", pl: "Strzyżenie" },
  "gallery.bridal": { en: "Bridal", is: "Brúður", pl: "Ślubne" },

  // Before/After
  "ba.label": { en: "Transformations", is: "Umbreytingar", pl: "Metamorfozy" },
  "ba.title": { en: "Before & After", is: "Fyrir & eftir", pl: "Przed i po" },
  "ba.subtitle": { en: "Drag to see the transformation", is: "Dragðu til að sjá umbreytinguna", pl: "Przeciągnij, aby zobaczyć metamorfozę" },
  "ba.before": { en: "Before", is: "Fyrir", pl: "Przed" },
  "ba.after": { en: "After", is: "Eftir", pl: "Po" },

  // Team
  "team.label": { en: "The Artists", is: "Listafolkið", pl: "Artyści" },
  "team.title": { en: "Meet the Team", is: "Kynntu þér teymið", pl: "Poznaj zespół" },
  "team.elisabet.role": { en: "Head Stylist & Founder", is: "Aðalhárgreiðari & stofnandi", pl: "Główna stylistka i założycielka" },
  "team.elisabet.specialty": { en: "Balayage & Color Specialist", is: "Balayage & litunarsérfræðingur", pl: "Specjalistka balayage i koloryzacji" },
  "team.elisabet.bio": {
    en: "15 years of experience. Trained in London and Paris. Specialist in natural, vivid colors.",
    is: "15 ára reynsla. Menntun í London og París. Sérfræðingur í náttúrulegum, lifandi litum.",
    pl: "15 lat doświadczenia. Szkolona w Londynie i Paryżu. Specjalistka od naturalnych, żywych kolorów.",
  },
  "team.bjarki.role": { en: "Creative Director", is: "Skapandi stjórnandi", pl: "Dyrektor kreatywny" },
  "team.bjarki.specialty": { en: "Precision Cuts & Men's Grooming", is: "Nákvæmnisklipping & karlasnyrtingar", pl: "Precyzyjne cięcia i pielęgnacja męska" },
  "team.bjarki.bio": {
    en: "Award-winning stylist known for architectural cuts and modern men's styles.",
    is: "Verðlaunahafur þekktur fyrir arkitektúr-klippingar og nútímalega karlastíla.",
    pl: "Wielokrotnie nagradzany stylista znany z architektonicznych cięć i nowoczesnych stylów męskich.",
  },
  "team.solrun.role": { en: "Color Artist", is: "Litalistamaður", pl: "Artystka koloru" },
  "team.solrun.specialty": { en: "Vivid & Fantasy Colors", is: "Áberandi & fantasíulitir", pl: "Kolory fantazyjne i żywe" },
  "team.solrun.bio": {
    en: "The visionary behind our boldest transformations. If you can dream it, she can create it.",
    is: "Sýnin á bak við okkar djarfustu umbreytingar. Ef þú getur dreymt það, getur hún skapað það.",
    pl: "Wizjonerka naszych najodważniejszych metamorfoz. Jeśli potrafisz to wymarzyć, ona to stworzy.",
  },

  // Gift Cards
  "gift.label": { en: "Gift Cards", is: "Gjafabréf", pl: "Karty podarunkowe" },
  "gift.title1": { en: "Give the Gift of", is: "Gefðu gjöf", pl: "Podaruj prezent" },
  "gift.title2": { en: "Beauty", is: "Fegurðar", pl: "Piękna" },
  "gift.subtitle": {
    en: "The perfect gift for someone special. Available in-salon or delivered beautifully wrapped.",
    is: "Fullkomin gjöf fyrir sérstakan einstakling. Fáanlegt í stofu eða sent fallega pakkað.",
    pl: "Idealny prezent dla kogoś wyjątkowego. Dostępne w salonie lub pięknie zapakowane z dostawą.",
  },
  "gift.purchase": { en: "Purchase Gift Card", is: "Kaupa gjafabréf", pl: "Kup kartę podarunkową" },
  "gift.available": {
    en: "Available in-store or online",
    is: "Hægt að kaupa í verslun eða á netinu",
    pl: "Dostępne w salonie lub online",
  },
  "gift.fringe": { en: "Fringe trim or treatment add-on", is: "Luggsnyrtring eða meðferðarviðbót", pl: "Przycinanie grzywki lub dodatkowy zabieg" },
  "gift.cut_style": { en: "Cut & style or deep conditioning", is: "Klipping og djúpmeðferð", pl: "Strzyżenie i stylizacja lub głęboka regeneracja" },
  "gift.color_service": { en: "Color service or bridal trial", is: "Litunarþjónusta eða brúðarprufa", pl: "Koloryzacja lub próba ślubna" },
  "gift.custom": { en: "Custom amount — you choose", is: "Sérsniðin upphæð — þú velur", pl: "Dowolna kwota — Ty wybierasz" },

  // Booking
  "booking.label": { en: "Book an appointment", is: "Pantaðu tíma", pl: "Umów się na wizytę" },
  "booking.title": { en: "Book Now", is: "Bóka tíma", pl: "Zarezerwuj" },
  "booking.noona": { en: "Or book directly at", is: "Eða bókaðu beint á", pl: "Lub zarezerwuj bezpośrednio na" },
  "booking.step1": { en: "Service", is: "Þjónusta", pl: "Usługa" },
  "booking.step2": { en: "Stylist", is: "Hárgreiðari", pl: "Stylista" },
  "booking.step3": { en: "Date & Time", is: "Dagur & tími", pl: "Data i godzina" },
  "booking.step4": { en: "Confirm", is: "Staðfesta", pl: "Potwierdź" },
  "booking.selectService": { en: "Select a service", is: "Veldu þjónustu", pl: "Wybierz usługę" },
  "booking.selectStylist": { en: "Select a stylist", is: "Veldu hárgreiðara", pl: "Wybierz stylistę" },
  "booking.selectDate": { en: "Select date and time", is: "Veldu dag og tíma", pl: "Wybierz datę i godzinę" },
  "booking.date": { en: "Date", is: "Dagsetning", pl: "Data" },
  "booking.time": { en: "Time", is: "Tími", pl: "Godzina" },
  "booking.summary": { en: "Booking Summary", is: "Bókunaryfirlit", pl: "Podsumowanie rezerwacji" },
  "booking.review": { en: "Review your appointment", is: "Yfirfarðu tímapöntunina þína", pl: "Sprawdź swoją rezerwację" },
  "booking.confirm": { en: "Confirm Booking (demo)", is: "Staðfesta bókun (sýnidæmi)", pl: "Potwierdź rezerwację (demo)" },
  "booking.demo": {
    en: "This is a demo. No real booking will be made.",
    is: "Þetta er sýnidæmi. Engin raunveruleg bókun verður gerð.",
    pl: "To jest demo. Żadna prawdziwa rezerwacja nie zostanie dokonana.",
  },
  "booking.back": { en: "Back", is: "Til baka", pl: "Wstecz" },
  "booking.next": { en: "Next", is: "Áfram", pl: "Dalej" },
  "booking.noPref": { en: "No Preference", is: "Sama", pl: "Bez preferencji" },
  "booking.from": { en: "From", is: "Frá", pl: "Od" },
  "booking.service": { en: "Service", is: "Þjónusta", pl: "Usługa" },
  "booking.stylist": { en: "Stylist", is: "Hárgreiðari", pl: "Stylista" },

  // Products
  "products.label": {
    en: "We use only the finest products",
    is: "Við notum aðeins bestu vörurnar",
    pl: "Używamy tylko najlepszych produktów",
  },

  // About
  "about.label": { en: "Our Story", is: "Sagan okkar", pl: "Nasza historia" },
  "about.title1": { en: "Born from Ice", is: "Fædd úr ís", pl: "Zrodzone z lodu" },
  "about.title2": { en: "& Fire", is: "& eldi", pl: "i ognia" },
  "about.p1": {
    en: "Nestled in the heart of Reykjavík on historic Laugavegur, Nordik Salon draws its philosophy from Iceland's extraordinary landscape — the raw power of Eyjafjallajökull, the crystalline purity of Jökulsárlón, and the ethereal glow of the midnight sun.",
    is: "Nordik Salon, staðsett við hið sögulega Laugaveg í hjarta Reykjavíkur, sækir hugmyndafræði sína í ótrúlegt landslag Íslands — hráan kraft Eyjafjallajökuls, kristaltæra hreinleika Jökulsárlóns og drauma ljóma miðnætursólar.",
    pl: "Nordik Salon, usytuowany w sercu Reykjavíku przy historycznym Laugavegur, czerpie swoją filozofię z niezwykłego krajobrazu Islandii — surowej mocy Eyjafjallajökull, krystalicznej czystości Jökulsárlón i eterycznego blasku słońca o północy.",
  },
  "about.p2": {
    en: "Our team of internationally trained stylists combines Nordic minimalism with cutting-edge techniques, creating looks that are both timeless and unmistakably modern.",
    is: "Teymi okkar af alþjóðlega þjálfuðum hárgreiðurum sameinar norrænan mínimalisma og nýjustu tækni og skapar útlit sem er bæði tímalaust og ómisskilanlega nútímalegt.",
    pl: "Nasz zespół wyszkolonych na arenie międzynarodowej stylistów łączy nordycki minimalizm z nowoczesnymi technikami, tworząc fryzury ponadczasowe i bezkompromisowo nowoczesne.",
  },
  "about.p3": {
    en: "Every visit is an experience — from the moment you step through our doors to the final reveal of your transformation.",
    is: "Sérhver heimsókn er upplifun — frá því augnabliki sem þú stigur inn um dyrnar okkar til lokauppljóstrunar á umbreytingu þinni.",
    pl: "Każda wizyta to doświadczenie — od momentu przekroczenia naszych drzwi do ostatecznego odsłonięcia Twojej metamorfozy.",
  },
  "about.experience": { en: "Years experience", is: "Ára reynsla", pl: "Lat doświadczenia" },
  "about.clients": { en: "Happy clients", is: "Ánægðir viðskiptavinir", pl: "Zadowolonych klientów" },
  "about.awards": { en: "Awards", is: "Verðlaun", pl: "Nagrody" },

  // Instagram
  "insta.label": { en: "@nordiksalon", is: "@nordiksalon", pl: "@nordiksalon" },
  "insta.title": { en: "Follow Us", is: "Fylgdu okkur", pl: "Obserwuj nas" },
  "insta.subtitle": {
    en: "See our latest client transformations and behind the scenes",
    is: "Sjáðu nýjustu umbreytingar okkar",
    pl: "Zobacz nasze najnowsze metamorfozy i kulisy pracy",
  },
  "insta.follow": { en: "Follow us on Instagram", is: "Fylgdu okkur á Instagram", pl: "Obserwuj nas na Instagramie" },

  // CTA
  "cta.label": { en: "Business Autopilot", is: "Business Autopilot", pl: "Business Autopilot" },
  "cta.title1": { en: "Want a Website Like This", is: "Viltu vefsíðu eins og þessa", pl: "Chcesz taką stronę" },
  "cta.title2": { en: "For Your Salon?", is: "Fyrir þína stofu?", pl: "Dla Twojego salonu?" },
  "cta.subtitle": {
    en: "We build stunning, personalised websites for salons, barbershops, and beauty businesses. Everything done for you — website, photos, ads, social media.",
    is: "Við byggjum glæsilegar, sérsniðnar vefsíður fyrir stofur, rakarastofur og snyrtifyrirtæki. Allt gert fyrir þig — vefsíða, ljósmyndir, auglýsingar, samfélagsmiðlar.",
    pl: "Tworzymy oszałamiające, spersonalizowane strony dla salonów fryzjerskich, barberów i firm beauty. Wszystko zrobimy za Ciebie — stronę, zdjęcia, reklamy, social media.",
  },
  "cta.start": { en: "Get Started", is: "Byrjaðu", pl: "Rozpocznij" },
  "cta.from": { en: "From only", is: "Frá aðeins", pl: "Już od" },
  "cta.tagline": {
    en: "⚡ Live in 7 days · Fully personalised · No long-term contracts",
    is: "⚡ Tilbúið á 7 dögum · Fullkomlega sérsniðið · Engir langtímasamningar",
    pl: "⚡ Gotowe w 7 dni · W pełni spersonalizowane · Bez długoterminowych umów",
  },

  // Footer
  "footer.brand": {
    en: "Hair and beauty salon in the heart of Reykjavík. Premium hair services since 2011.",
    is: "Hárgreiðslu- og snyrtistofa í hjarta Reykjavíkur. Premium hárþjónusta síðan 2011.",
    pl: "Salon fryzjerski i kosmetyczny w sercu Reykjavíku. Usługi premium od 2011 roku.",
  },
  "footer.eco": { en: "Grøn Salon certified", is: "Grøn Salon vottuð", pl: "Certyfikat Grøn Salon" },
  "footer.hours": { en: "Opening Hours", is: "Opnunartímar", pl: "Godziny otwarcia" },
  "footer.monThu": { en: "Mon–Thu", is: "Mán–Fim", pl: "Pon–Czw" },
  "footer.fri": { en: "Friday", is: "Föstudagur", pl: "Piątek" },
  "footer.sat": { en: "Saturday", is: "Laugardagur", pl: "Sobota" },
  "footer.sun": { en: "Sunday", is: "Sunnudagur", pl: "Niedziela" },
  "footer.closed": { en: "Closed", is: "Lokað", pl: "Zamknięte" },
  "footer.contact": { en: "Contact", is: "Hafa samband", pl: "Kontakt" },
  "footer.findUs": { en: "Find Us", is: "Finndu okkur", pl: "Znajdź nas" },
  "footer.openMap": { en: "Open map ↗", is: "Opna kort ↗", pl: "Otwórz mapę ↗" },
  "footer.bookNoona": { en: "Book at Noona.is", is: "Bóka á Noona.is", pl: "Rezerwuj na Noona.is" },
  "footer.seeJa": { en: "See on Já.is", is: "Sjá á Já.is", pl: "Zobacz na Já.is" },
  "footer.promo": {
    en: "Websites like this from only",
    is: "Vefsíður eins og þessi frá aðeins",
    pl: "Strony takie jak ta już od",
  },
  "footer.promoBy": { en: "— customized by", is: "— sérsniðin af", pl: "— stworzone przez" },

  // Floating contact
  "float.contact": { en: "Contact Us", is: "Hafa samband", pl: "Skontaktuj się" },
  "float.book": { en: "Book Now", is: "Bóka tíma", pl: "Zarezerwuj" },

  // Reviews content
  "review.1.text": {
    en: "The best hair salon in Iceland! Elísabet knows exactly what I want and it always turns out great. Highly recommended.",
    is: "Besta hárgreiðslan á Íslandi! Elísabet skilur nákvæmlega hvað ég vil og kemur alltaf vel út. Mæli eindregið með.",
    pl: "Najlepszy salon fryzjerski na Islandii! Elísabet dokładnie wie, czego chcę i zawsze wychodzi świetnie. Gorąco polecam.",
  },
  "review.2.text": {
    en: "Amazing experience from start to finish. The salon is beautiful and the team made me feel so welcome. My hair has never looked better!",
    is: "Ótrúleg upplifun frá upphafi til enda. Stofan er falleg og teymið lét mér líða svo vel. Hárið mitt hefur aldrei litið betur út!",
    pl: "Niesamowite doświadczenie od początku do końca. Salon jest piękny, a zespół sprawił, że czułam się bardzo mile widziana. Moje włosy nigdy nie wyglądały lepiej!",
  },
  "review.3.text": {
    en: "Bjarki is hands down the best men's barber in Reykjavík. Clean cuts, great conversation, and the hot towel treatment is next level.",
    is: "Bjarki er besti karlasnyrtir í Reykjavík, enginn vafi. Hreinar klippingar, frábært samtal og heita handklæðameðferðin er á öðru plani.",
    pl: "Bjarki to zdecydowanie najlepszy barber w Reykjavíku. Czyste cięcia, świetna rozmowa, a zabieg gorącym ręcznikiem to inny poziom.",
  },
  "review.4.text": {
    en: "I got my bridal hair done by Sólrún and she was absolutely amazing. Everyone asked me where I got my hair done!",
    is: "Fékk brúðarsnyrtingu hjá Sólrúnu og hún var algjörlega stórkostleg. Allir spurðu mig hvar ég fékk hárið gert!",
    pl: "Sólrún zrobiła mi fryzurę ślubną i była absolutnie niesamowita. Wszyscy pytali mnie, gdzie zrobiłam włosy!",
  },
  "review.5.text": {
    en: "Visited while traveling in Iceland and this was the highlight of my trip! World-class salon tucked away on Laugavegur. Worth every króna.",
    is: "Heimsótti á meðan ég ferðaðist um Ísland og þetta var hámark ferðarinnar! Heimsklassa stofa falin á Laugavegi. Virði hverrar krónu.",
    pl: "Odwiedziłam salon podczas podróży po Islandii i to był punkt kulminacyjny mojej wyprawy! Salon światowej klasy na Laugavegur. Wart każdej króny.",
  },
  "review.6.text": {
    en: "Always happy when I come here. Great atmosphere and professionalism. The Olaplex treatment saved my hair!",
    is: "Alltaf ánægð þegar ég kem hingað. Frábært andrúmsloft og fagmennska. Olaplex meðferðin bjargaði hári mínu!",
    pl: "Zawsze jestem zadowolona, kiedy tu przychodzę. Świetna atmosfera i profesjonalizm. Zabieg Olaplex uratował moje włosy!",
  },
  "review.weeksAgo": { en: "weeks ago", is: "vikum síðan", pl: "tygodni temu" },
  "review.monthAgo": { en: "month ago", is: "mánuði síðan", pl: "miesiąc temu" },
  "review.monthsAgo": { en: "months ago", is: "mánuðum síðan", pl: "miesięcy temu" },

  // Demo modal
  "demo.title": { en: "This Is a Demo", is: "Þetta er sýnishorn", pl: "To jest demo" },
  "demo.description": {
    en: "This is a showcase website — the buttons simulate real functionality. Want a stunning website like this for your salon or business? We build custom sites that convert visitors into clients.",
    is: "Þetta er sýnisvefsíða — hnapparnir herma eftir raunverulegri virkni. Viltu falleg vefsíðu eins og þessa fyrir þitt fyrirtæki? Við smíðum sérsniðnar síður sem breyta gestum í viðskiptavini.",
    pl: "To strona demonstracyjna — przyciski symulują prawdziwą funkcjonalność. Chcesz oszałamiającą stronę jak ta dla swojego salonu lub firmy? Tworzymy strony, które zamieniają odwiedzających w klientów.",
  },
  "demo.cta": { en: "Get Your Own Website", is: "Fáðu þína eigin vefsíðu", pl: "Zamów swoją stronę" },
  "demo.close": { en: "Continue Browsing", is: "Halda áfram", pl: "Kontynuuj przeglądanie" },
} as const;

type TranslationKey = keyof typeof translations;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: TranslationKey): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry.en;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
