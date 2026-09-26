/* Karioka PL/EN toggle. Polish stays the source text in the HTML; English is applied at runtime.
   Language: ?lang=en|pl > localStorage > Polish. Load in <head> without defer/async. */
(function () {
  var KEY = 'karioka-lang', lang = 'pl';
  try {
    var q = /[?&]lang=(en|pl)\b/.exec(location.search);
    lang = q ? q[1] : (localStorage.getItem(KEY) || 'pl');
  } catch (e) {}
  if (lang !== 'en') lang = 'pl';
  window.KARIOKA_LANG = lang;
  document.documentElement.lang = lang;

  var D = {
    /* meta / titles */
    'Karioka - Bar i Agroturystyka': 'Karioka - Bar & Agrotourism',
    'Menu - Karioka': 'Menu - Karioka', 'O nas - Karioka': 'About us - Karioka',
    'Imprezy - Karioka': 'Events - Karioka', 'Rezerwacja - Karioka': 'Booking - Karioka',
    'Domowa kuchnia, pięć pokoi i ogród z altaną w Karpnikach, między zamkami a szlakami Rudaw.': 'Home cooking, five rooms and a garden with a gazebo in Karpniki, between the castles and the trails of the Rudawy Janowickie mountains.',
    'Menu baru Karioka w Karpnikach: zupy, pierogi, pstrąg, golonka i napoje.': 'Menu of the Karioka bar in Karpniki: soups, pierogi, trout, pork knuckle and drinks.',
    'Karioka w Karpnikach: bar z domową kuchnią, pokoje i ogród z lawendą u stóp Rudaw Janowickich. Poznaj gospodarzy i zarezerwuj pobyt.': 'Karioka in Karpniki: a bar with home cooking, rooms and a lavender garden at the foot of the Rudawy Janowickie mountains. Meet your hosts and book a stay.',
    'Bar z domową kuchnią, pokoje i ogród z lawendą. Rudawska 63, Karpniki.': 'A bar with home cooking, rooms and a lavender garden. Rudawska 63, Karpniki.',
    'Komunie, spotkania integracyjne i pikniki w ogrodzie Karioki w Karpnikach.': 'First communions, team events and picnics in the Karioka garden in Karpniki.',

    /* nav / shared */
    'Pokoje': 'Rooms', 'Imprezy': 'Events', 'O nas': 'About us', 'Rezerwacja': 'Booking',
    'Zarezerwuj': 'Book', 'Zadzwoń': 'Call', 'Przejdź do treści': 'Skip to content',
    'Główna nawigacja': 'Main navigation', 'Facebook': 'Facebook', 'E-mail': 'Email',
    'Bar i Agroturystyka': 'Bar & Agrotourism', 'Rudawy Janowickie': 'Rudawy Janowickie mountains',
    'ul. Rudawska 63, 58-533 Karpniki': 'Rudawska 63, 58-533 Karpniki, Poland',
    'Rozmawiamy po polsku i angielsku': 'We speak Polish and English',
    'Godziny otwarcia podajemy na Facebooku i przez telefon.': 'We give opening hours on Facebook and by phone.',

    /* home: hero */
    'Bar i Agroturystyka · Rudawy Janowickie': 'Bar & Agrotourism · Rudawy Janowickie mountains',
    'Zarezerwuj online': 'Book online', 'Zobacz pokoje': 'See the rooms', 'Talerz z pstrągiem, specjalnością baru': 'A plate of trout, the bar\'s specialty', 'Zobacz całe menu →': 'See the full menu →',
    'ocena gości na Nocowanie.pl': 'guest rating on Nocowanie.pl',
    'ocena gości na Noclegi.pl': 'guest rating on Noclegi.pl',
    'of Poland, kategoria Agroturystyka': 'of Poland, Agrotourism category',
    'Wieczorem w ogrodzie Karioki: stoliki w czerwoną kratę, lampiony i światełka pod parasolami': 'Evening in the Karioka garden: red-checked tables, lanterns and fairy lights under parasols',
    'Bar czynny': 'Bar open', 'codziennie': 'daily',
    'pierogi': 'pierogi', 'pstrąg': 'trout', 'golonka': 'pork knuckle', 'barszcz': 'borscht',
    'kotlet schabowy': 'pork cutlet', 'steki': 'steaks', 'zupy': 'soups', 'śniadania': 'breakfasts',
    'obiadokolacje': 'dinners', 'ogródek': 'garden seating',

    /* home: 01 */
        'Pstrąg, pierogi, kotlet.': 'Trout, pierogi, pork cutlet.',
    'Na dole mieści się bar z domową, polską kuchnią. Goście chwalą przede wszystkim smak i duże porcje, a pstrąg pojawia się niemal w każdej opinii. Można zjeść w środku albo w ogródku, a gościom noclegowym podajemy śniadania i obiadokolacje.': 'Downstairs is a bar serving home-style Polish cooking. Guests praise above all the flavour and the generous portions, and trout comes up in almost every review. You can eat inside or in the garden, and for overnight guests we serve breakfasts and dinners.',
    'Specjalność': 'Speciality', 'Danie, które goście polecają najczęściej.': 'The dish guests recommend most often.',
    'Domowe': 'Homemade', 'Klasyka polskiej kuchni, lepiona jak w domu.': 'A Polish classic, shaped by hand like at home.',
    'Klasyk': 'Classic', 'Z frytkami, ziemniaczkami lub kuskusem i surówką.': 'With fries, potatoes or couscous, and a side salad.',
    'Bar czynny codziennie 13:00-19:00': 'Bar open daily 1-7 pm',
    'Miejsca w ogródku': 'Garden seating', 'Płatność kartą w barze': 'Card payments at the bar',
    'Dostęp dla wózków': 'Wheelchair access', 'Piwo, drinki, napoje ciepłe i zimne': 'Beer, cocktails, hot and cold drinks',

    /* home: 02 */
    'Pięć pokoi nad barem.': 'Five rooms above the bar.',
    'Przez cały rok mamy 14 miejsc noclegowych w pięciu pokojach 2- i 3-osobowych, z możliwością dostawki. Każdy pokój ma telewizor, Wi-Fi i łazienkę z prysznicem. Goście mają do dyspozycji wspólny aneks kuchenny.': 'All year round we have 14 beds in five double and triple rooms, with an extra bed available. Every room has a TV, Wi-Fi and a bathroom with a shower. Guests can use a shared kitchenette.',
    'pokoi': 'rooms', 'miejsc': 'beds', 'zł za osobę / noc': 'PLN per person / night',
    'Pokój 2-osobowy': 'Double room', '· 3 pokoje': '· 3 rooms', 'od 160 zł': 'from PLN 160',
    'Pokój 3-osobowy z dostawką': 'Triple room with extra bed', '· 2 pokoje': '· 2 rooms', 'zapytaj': 'ask us',
    'Zapytaj o wolny termin': 'Ask about availability',
    'Pokój na poddaszu z dwoma łóżkami, stolikiem i lampkami': 'Attic room with two beds, a small table and lamps',
    'Jasny pokój 2-osobowy z dwoma łóżkami i oknem': 'Bright double room with two beds and a window',
    'Wspólny aneks kuchenny': 'Shared kitchenette',
    'W pokoju': 'In the room', 'Telewizor, Wi-Fi, szafa, łazienka z prysznicem, ręczniki, suszarka do włosów': 'TV, Wi-Fi, wardrobe, bathroom with shower, towels, hair dryer',
    'Aneks kuchenny': 'Kitchenette', 'Kuchenka, lodówka, mikrofala, czajnik, naczynia, przyprawy': 'Hob, fridge, microwave, kettle, tableware, spices',
    'Wyżywienie': 'Meals', 'Śniadania i obiadokolacje na zamówienie': 'Breakfasts and dinners on request',
    'Dla dzieci': 'For children', 'Łóżeczko, wanienka, gry planszowe': 'Cot, baby bath, board games',

    /* home: 03 */
        'Wieczór przy ognisku, dzieci na huśtawce.': 'Evenings by the fire, children on the swing.',
    'ogród z altaną': 'garden with a gazebo',
    'Zwierzęta mile widziane': 'Pets welcome', 'Dopłata 20 zł za dobę.': 'Surcharge PLN 20 per day.',
    'Przyjęcia i spotkania': 'Parties and gatherings',
    'Organizujemy komunie, spotkania integracyjne oraz pikniki i imprezy plenerowe z grillem i ogniskiem.': 'We host first communions, team events, picnics and outdoor parties with a barbecue and bonfire.',
    'Plac zabaw w ogrodzie Karioki: niebieska zjeżdżalnia, drewniana konstrukcja i wiszący fotel': 'Playground in the Karioka garden: blue slide, wooden climbing frame and a hanging chair',
    'Stolik w czerwoną kratę pod parasolem na patio przy wejściu do baru': 'Red-checked table under a parasol on the patio by the bar entrance',
    'Front Karioki z parasolami i rabatą lawendy': 'The front of Karioka with parasols and a lavender bed',
    'Altana i ogród': 'Gazebo and garden', 'Klimatyczny ogród z miejscami do relaksu.': 'An atmospheric garden with places to relax.',
    'Grill i ognisko': 'Barbecue and bonfire', 'Na letnie wieczory pod gołym niebem.': 'For summer evenings under the open sky.',
    'Plac zabaw': 'Playground', 'Huśtawka i piaskownica dla najmłodszych.': 'A swing and sandpit for the little ones.',
    'Oczko wodne': 'Garden pond', 'Część rekreacyjna z oczkiem wodnym w ogrodzie.': 'A recreation area with a pond in the garden.',
    'Parking': 'Parking', '5 bezpłatnych miejsc dla gości.': '5 free spaces for guests.',

    /* home: 04 reviews */
    'Zdecydowanie polecamy!': 'We highly recommend it!',
    'Poprzednia opinia': 'Previous review', 'Następna opinia': 'Next review',
    'Opinia z Nocowanie.pl': 'Review from Nocowanie.pl',
    'wyjazd w parze': 'trip as a couple', 'wyjazd rodzinny': 'family trip',
    'Jeżeli szukasz kameralnego i spokojnego miejsca, z dobrą kuchnią i wspaniałą obsługą to zdecydowanie polecam.': 'If you are looking for an intimate, peaceful place with good food and wonderful service, I definitely recommend it.',
    'Super miejsce, bardzo dobra kuchnia, klimatyczny ogród z miejscami do relaksu, Wspaniali właściciele. Zdecydowanie polecamy!!': 'A great place, very good food, an atmospheric garden with spots to relax, wonderful owners. We highly recommend it!!',
    'Lokalizacja super - blisko na szlaki. Jedzenie przepyszne, pokoje czyste. Jako miejsce wypadowe lub do odpoczynku w ogrodzie. Pełen relaks, cisza i przyroda.': 'Great location, close to the trails. The food is delicious, the rooms are clean. Perfect as a base for trips or for relaxing in the garden. Total relaxation, quiet and nature.',
    'Polecam z całego serca agroturystykę. Pokoje bardzo czyste, zadbane. Można zregenerować się po całym dniu. Miejsce przyjazne dla alergików. Dodatkowo na dole jest bar, w którym można zjeść pyszne jedzenie w przystępnej cenie.': 'I recommend this agrotourism guesthouse with all my heart. The rooms are very clean and well kept. You can recover after a full day. Allergy-friendly place. There is also a bar downstairs where you can eat delicious food at a reasonable price.',
    'na Nocowanie.pl · pokoje, łazienki, obsługa, wyżywienie, lokalizacja': 'on Nocowanie.pl · rooms, bathrooms, service, meals, location',
    'na Noclegi.pl · 14 opinii': 'on Noclegi.pl · 14 reviews',
    'Opinie i zdjęcia w Google Maps →': 'Reviews and photos on Google Maps →',

    /* home: 05 */
    'Blisko na szlaki.': 'Trails close by.',
    'Karpniki leżą w Rudawach Janowickich, w Kotlinie Jeleniogórskiej. Dobre miejsce wypadowe na piesze wędrówki i zwiedzanie zamków.': 'Karpniki lies in the Rudawy Janowickie mountains, in the Jelenia Góra Valley. A good base for hiking and visiting castles.',
    'zamek w Karpnikach': 'Karpniki castle', 'Zamek w Karpnikach': 'Karpniki castle',
    'Zamek w Karpnikach (Fischbach)': 'Karpniki Castle (Fischbach)', 'w Karpnikach': 'in Karpniki',
    'Zamek Bolczów': 'Bolczów Castle', 'Szlaki Rudaw Janowickich': 'Rudawy Janowickie trails', 'z miejsca': 'from the doorstep',
    'Jelenia Góra, centrum': 'Jelenia Góra, city centre', 'ok. 13,6 km': 'approx. 13.6 km',

    /* home: 06 */
    'Zanim przyjedziesz.': 'Before you arrive.',
    'Zameldowanie': 'Check-in', 'Wymeldowanie': 'Check-out',
    'Do 11:00. Jeśli pokój jest wolny, dobę można przedłużyć bez dopłaty.': 'By 11:00. If the room is free, you can extend by a day at no extra charge.',
    'Recepcja': 'Reception', 'Płatność za nocleg': 'Payment for accommodation',
    'Gotówka lub przelew, w złotówkach': 'Cash or bank transfer, in PLN',
    'Zadatek': 'Deposit', '30% kwoty za pobyt, wpłacany w ciągu 4 dni od rezerwacji': '30% of the stay, paid within 4 days of booking',
    'Rezygnacja': 'Cancellation', 'Bez opłaty za rezygnację z rezerwacji': 'No fee for cancelling a booking',
    'Zwierzęta': 'Pets', 'Mile widziane, 20 zł za dobę': 'Welcome, PLN 20 per day',
    'Palenie': 'Smoking', 'Zakaz palenia w budynku, wyznaczone miejsca na zewnątrz': 'No smoking in the building, designated areas outside',
    'Opłata klimatyczna': 'Tourist tax', 'Brak': 'None',

    /* home: 07 */
    'Do zobaczenia w Karpnikach.': 'See you in Karpniki.',
    'Telefon komórkowy': 'Mobile', 'Telefon stacjonarny': 'Landline', 'Adres': 'Address',
    'ul. Rudawska 63': 'Rudawska 63', 'Wyznacz trasę': 'Get directions',
    'Mapa - Karioka, Rudawska 63, Karpniki': 'Map - Karioka, Rudawska 63, Karpniki',

    /* menu */
    'Co jemy w Karioce.': 'What we eat at Karioka.',
    'Domowa, polska kuchnia. Ceny i alergeny podajemy przy daniach. Tablica się zmienia, więc jeśli szukasz konkretnego dania, zadzwoń przed wizytą. Bar czynny codziennie 13:00-19:00.': 'Home-style Polish cooking. Prices and allergens are shown next to each dish. The board changes, so if you are after a particular dish, call before you visit. Bar open daily 1-7 pm.',
    'Zarezerwuj stolik': 'Book a table', 'lub zadzwoń: 721 832 199': 'or call: +48 721 832 199',
    'Kotlet z frytkami i surówką, obok kufel piwa i pierogi na stole w czerwoną kratę': 'Pork cutlet with fries and side salad, next to a mug of beer and pierogi on a red-checked table',
    'Butelka piwa Karioka „Bez spiny” 0,3%, kraftowe bezalkoholowe, na stole w czerwoną kratę': 'Bottle of Karioka “Bez spiny” 0.3% non-alcoholic craft beer on a red-checked table',
    'Nasze piwo. Bez spiny.': 'Our beer. No worries.',
    'Kraftowe piwo z naszą etykietą, bezalkoholowe (0,3%). Inne piwa i drinki czekają w barze.': 'Craft beer with our own label, non-alcoholic (0.3%). Other beers and drinks are waiting at the bar.',
    'Zupy': 'Soups', 'Pierogi i naleśniki': 'Pierogi & crêpes', 'Sosy': 'Sauces', 'Zestawy': 'Set dishes',
    'Dodatki': 'Sides', 'Napoje gorące': 'Hot drinks', 'Alergeny': 'Allergens',
    'barszcz czysty': 'clear borscht', 'barszcz z uszkami': 'borscht with dumplings', 'flaki': 'tripe soup',
    'gulaszowa': 'goulash soup', 'zupa dnia': 'soup of the day',
    'pierogi ukraińskie': 'Ukrainian pierogi', 'pierogi z kapustą': 'cabbage pierogi', 'pierogi z mięsem': 'meat pierogi',
    'pierogi z owocami': 'fruit pierogi', 'naleśniki z serem': 'cheese crêpes',
    'ketchup / musztarda': 'ketchup / mustard', 'sos czosnkowy': 'garlic sauce',
    'kotlet z piersi kurczaka': 'chicken breast cutlet', 'za kilogram': 'per kilogram',
    'pstrąg smażony': 'fried trout', 'ser smażony': 'fried cheese', 'ser camembert': 'camembert cheese',
    'jajka sadzone': 'fried eggs', 'frytki / ziemniaczki / kuskus': 'fries / potatoes / couscous',
    'surówka': 'side salad', 'bukiet surówek': 'assorted salads', 'fasolka po bretońsku': 'Breton-style beans',
    'herbata': 'tea', 'herbata smakowa': 'flavoured tea', 'espresso / kawa czarna': 'espresso / black coffee',
    'kawa z mlekiem': 'coffee with milk', 'grzane wino': 'mulled wine', 'grzane piwo': 'mulled beer',
    'jaja': 'eggs', 'mleko': 'milk', 'seler': 'celery', 'siarczyny': 'sulphites',
    'Przy daniach oznaczamy: gluten (zboża zawierające gluten), jaja, mleko (w tym laktoza), seler i siarczyny. Oznaczenia mogą być niepełne (np. gorczyca, ryby), dlatego zawsze pytaj obsługę. Skład dań bywa zmienny, a w kuchni używamy tych samych sprzętów do wielu potraw, więc możliwe są śladowe ilości innych alergenów. Przy alergii lub nietolerancji zapytaj obsługę przed zamówieniem:': 'Next to each dish we mark: gluten (cereals containing gluten), eggs, milk (including lactose), celery and sulphites. The markings may be incomplete (e.g. mustard, fish), so always ask the staff. Recipes can vary, and we use the same equipment for many dishes, so traces of other allergens are possible. If you have an allergy or intolerance, ask the staff before ordering:',
    'Zupa krem z prażonymi pestkami i chrupiącymi paskami': 'Cream soup with toasted seeds and crispy strips',
    'Kotlet z pieczarkami, ziemniaczki i surówki': 'Cutlet with mushrooms, potatoes and side salads',
    'Pierogi z cebulką i szklanka kompotu': 'Pierogi with fried onion and a glass of compote',
    'Ceny przepisane z tablicy; zawsze obowiązuje ta w barze. Płatność kartą, miejsca w ogródku, piwo i drinki dostępne w barze.': 'Prices copied from the board; the one in the bar always applies. Card payments, garden seating, beer and cocktails available at the bar.',

    /* about */
    'Gospodarze z Karpnik.': 'Your hosts in Karpniki.',
    'Karioka to rodzinne miejsce u stóp Rudaw Janowickich: bar z domową kuchnią, pokoje dla gości i ogród, w którym zwykle zostaje się dłużej, niż się planowało.': 'Karioka is a family-run place at the foot of the Rudawy Janowickie mountains: a bar with home cooking, guest rooms and a garden where people usually stay longer than planned.',
    'Zarezerwuj pobyt': 'Book a stay',
    'Właściciele Karioki, kobieta i mężczyzna, w sali baru z błękitną boazerią i lampami': 'The owners of Karioka, a woman and a man, in the bar room with blue wainscoting and lamps',
    'Kącik wypoczynkowy pod parasolem w ogrodzie Karioki': 'Seating under a parasol in the Karioka garden',
    'Ogród Karioki wieczorem': 'The Karioka garden in the evening',
    'Bar, pokoje i ogród pod jednym dachem.': 'Bar, rooms and garden under one roof.',
    'Kuchnia': 'Kitchen', 'Pierogi, pstrąg, golonka, barszcz i naleśniki. Menu piszemy kredą przy barze.': 'Pierogi, trout, pork knuckle, borscht and crêpes. We write the menu in chalk by the bar.',
    'Nocleg w Karpnikach, na miejscu. Zdjęcia i zapytanie o termin znajdziesz na stronie rezerwacji.': 'Stay right here in Karpniki. Photos and date enquiries are on the booking page.',
    'Ogród': 'Garden', 'Lawenda, plac zabaw i stoły na zewnątrz, gdy pogoda pozwala.': 'Lavender, a playground and outdoor tables when the weather allows.',
    'Karpniki, u stóp Rudaw Janowickich.': 'Karpniki, at the foot of the Rudawy Janowickie mountains.',
    'Jesteśmy przy ul. Rudawskiej 63, w wiosce, którą znają wędrowcy i miłośnicy zamków. Zamek w Karpnikach stoi w tej samej wsi, a stąd łatwo ruszyć na spacer po okolicy. Po drodze warto wpaść na obiad.': 'We are at Rudawska 63, in a village known to hikers and castle lovers. Karpniki Castle stands in the same village, and from here it is easy to set off on a walk around the area. It is worth stopping by for lunch on the way.',
    'Pokaż na mapie': 'Show on map', 'Zamek w Karpnikach (zdjęcie)': 'Karpniki castle (photo)',
    'Stoły w ogrodzie na każdą okazję.': 'Garden tables for every occasion.',
    'Pod zadaszonym namiotem z girlandami świateł zjemy razem: spotkanie rodzinne, integracyjne czy piknik z grillem. Dzieci mają obok plac zabaw. Napisz lub zadzwoń w sprawie terminu i menu.': 'Under a covered tent with garlands of lights we eat together: a family gathering, a team event or a barbecue picnic. The children have a playground next door. Write or call about dates and the menu.',
    'Ogród Karioki z zadaszonym namiotem i girlandami świateł': 'The Karioka garden with a covered tent and garlands of lights',
    'Zapytaj o termin': 'Ask about a date', 'Więcej o imprezach': 'More about events',
    '98% osób poleca Kariokę na Facebooku.': '98% of people recommend Karioka on Facebook.',
    'To 55 opinii od naszych gości.': 'That is 55 reviews from our guests.',
    'Przeczytaj je na Facebooku': 'Read them on Facebook',
    'Lawenda w ogrodzie Karioki': 'Lavender in the Karioka garden',

    /* events */
    'Namiot w ogrodzie Karioki z nakrytymi stołami w czerwoną kratę, lampionami i girlandą świetlną': 'A tent in the Karioka garden with laid red-checked tables, lanterns and a string of lights',
    'Impreza w ogrodzie.': 'A party in the garden.',
    'Komunie, spotkania integracyjne, pikniki i imprezy plenerowe z grillem i ogniskiem, pod namiotem w naszym ogrodzie w Karpnikach.': 'First communions, team events, picnics and outdoor parties with a barbecue and bonfire, under a tent in our garden in Karpniki.',
    'Zapytaj o termin: 721 832 199': 'Ask about a date: +48 721 832 199',
    'Komunie i rodzinne uroczystości': 'Communions and family celebrations',
    'Nakryte stoły, domowa kuchnia z baru i dzieci, które od razu znikają na huśtawce.': 'Laid tables, home cooking from the bar, and children who vanish straight onto the swing.',
    'Spotkania integracyjne': 'Team events',
    'Firma, klub albo ekipa znajomych. Ogród na cały dzień, grill, a wieczorem ognisko.': 'A company, a club or a group of friends. The garden for the whole day, a barbecue, and a bonfire in the evening.',
    'Pikniki i imprezy plenerowe': 'Picnics and outdoor parties',
    'Grill i ognisko na świeżym powietrzu, z lampionami i światełkami, gdy zapada zmrok.': 'Barbecue and bonfire in the open air, with lanterns and fairy lights as dusk falls.',
    'Wieczorem w ogrodzie Karioki: stoliki w czerwoną kratę, lampiony i światełka': 'Evening in the Karioka garden: red-checked tables, lanterns and fairy lights',
    'Wszystko na miejscu.': 'Everything on site.',
    'Ogród z namiotem i altaną oraz plac zabaw z huśtawką dla dzieci.': 'A garden with a tent and gazebo, and a playground with a swing for children.',
    'Bar z domową kuchnią, piwem i drinkami:': 'A bar with home cooking, beer and cocktails:', 'zobacz menu': 'see the menu',
    'Pięć pokoi nad barem i 14 miejsc noclegowych, więc goście nie muszą wracać po zmroku.': 'Five rooms above the bar and 14 beds, so guests do not have to travel home after dark.',
    'Zwierzęta mile widziane, dopłata 20 zł za dobę.': 'Pets welcome, surcharge PLN 20 per day.',
    'Opowiedz, co planujesz.': 'Tell us what you are planning.',
    'Termin, liczbę gości i rodzaj imprezy ustalamy rozmową. Powiemy, co możemy przygotować.': 'We settle the date, number of guests and type of event in a conversation. We will tell you what we can prepare.',
    'lub napisz:': 'or write:',

    '9,2': '9.2', '9,2/10': '9.2/10', '3,1 km': '3.1 km',
    /* booking */
    'Zarezerwuj pokój lub stolik': 'Book a room or a table',
    'w Polsce, kategoria Agroturystyka': 'in Poland, Agrotourism category',
    'Rezerwacja stolika': 'Table booking',
    'Wybierz dzień i godzinę, a potwierdzimy telefonicznie. Bar czynny 13:00-19:00.': 'Pick a day and time and we will confirm by phone. Bar open 1-7 pm.',
    '🕐 2 godziny': '🕐 2 hours', 'osób': 'guests', 'ul. Rudawska 63, Karpniki': 'Rudawska 63, Karpniki',
    'Wolisz zadzwonić?': 'Prefer to call?', 'Poprzedni miesiąc': 'Previous month', 'Następny miesiąc': 'Next month',
    'Wybierz dzień.': 'Select a day.',
    'Styczeń': 'January', 'Luty': 'February', 'Marzec': 'March', 'Kwiecień': 'April', 'Maj': 'May', 'Czerwiec': 'June',
    'Lipiec': 'July', 'Sierpień': 'August', 'Wrzesień': 'September', 'Październik': 'October', 'Listopad': 'November', 'Grudzień': 'December',
    'pon': 'Mon', 'wt': 'Tue', 'śr': 'Wed', 'czw': 'Thu', 'pt': 'Fri', 'sob': 'Sat', 'ndz': 'Sun',
    'Zarezerwuj pokój lub stolik.': 'Book a room or a table.',
    'Wybierz termin, a odezwiemy się, żeby potwierdzić. Zadatek to 30% kwoty za pobyt, warunki rezygnacji podajemy przy potwierdzeniu. Wolisz rozmowę? Zadzwoń:': 'Pick your dates and we will get back to you to confirm. The deposit is 30% of the stay; we give the cancellation terms with the confirmation. Prefer to talk? Call:',
    'Rodzaj rezerwacji': 'Booking type', 'Pokój': 'Room', 'Stolik': 'Table',
    'Przyjazd - wyjazd': 'Arrival - departure', 'Wybierz daty': 'Select dates', 'Liczba osób': 'Number of guests',
    'Zwierzę (+20 zł / doba)': 'Pet (+PLN 20 / day)', 'Nie': 'No', 'Tak': 'Yes',
    'Imię i nazwisko': 'Full name', 'Telefon': 'Phone', 'Uwagi (opcjonalnie)': 'Notes (optional)',
    'np. dostawka, łóżeczko dla dziecka, późny przyjazd': 'e.g. extra bed, baby cot, late arrival',
    'Wybierz daty w kalendarzu.': 'Select your dates in the calendar.',
    'Wyślij zapytanie': 'Send enquiry',
    'Otworzy się Twoja poczta z gotową wiadomością do Karioki.': 'Your email app will open with a ready-made message to Karioka.',
    'Stolik zarezerwujesz telefonicznie:': 'You can book a table by phone:', ', lub mailem:': ', or by email:',
    'Najpierw wybierz daty pobytu.': 'Please select your dates first.',
    'Podaj imię i telefon, żebyśmy mogli potwierdzić rezerwację.': 'Please give your name and phone so we can confirm the booking.'
  };

  var LOW = {};
  Object.keys(D).forEach(function (k) { var l = k.toLowerCase(); if (!(l in LOW)) LOW[l] = D[k]; });

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function tr(s) {
    if (s in D) return D[s];
    var l = s.toLowerCase();
    if (l in LOW) { var v = LOW[l]; return s.charAt(0) !== l.charAt(0) ? v.charAt(0).toUpperCase() + v.slice(1) : v; }
    var m;
    if (/^(721 832 199|75 713 72 27)$/.test(s)) return '+48 ' + s;
    if ((m = /^(\d+) zł$/.exec(s))) return 'PLN ' + m[1];
    if ((m = /^(\d+) (styczeń|luty|marzec|kwiecień|maj|czerwiec|lipiec|sierpień|wrzesień|październik|listopad|grudzień)$/.exec(s))) return tr(m[2]) + ' ' + m[1];
    if ((m = /^([^\p{L}\p{N}]+)(\p{L}.*)$/u.exec(s))) { var r = tr(m[2]); if (r !== m[2]) return m[1] + r; }
    if ((m = /^„(.*)”$/.exec(s))) { var i = tr(m[1]); return i === m[1] ? s : '“' + i + '”'; }
    if ((m = /^(\d+) (noc|noce|nocy), (\d\d\.\d\d\.\d{4} - \d\d\.\d\d\.\d{4})\. Cena zwykle 75-100 zł za osobę za noc, do potwierdzenia przez nas\.$/.exec(s)))
      return m[1] + (m[1] === '1' ? ' night, ' : ' nights, ') + m[3] + '. Price is usually PLN 75-100 per person per night, to be confirmed by us.';
    if (s.indexOf(' · ') > -1 || s.indexOf(' - ') > -1) {
      var sep = s.indexOf(' · ') > -1 ? ' · ' : ' - ', ch = false;
      var out = s.split(sep).map(function (p) { var t = tr(p); if (t !== p) ch = true; return t; });
      if (ch) return out.join(sep);
    }
    return s;
  }

  var nodeSt = new WeakMap(), attrSt = new WeakMap(), ATTRS = ['alt', 'placeholder', 'aria-label', 'title', 'content'];
  var META_OK = /^(description|og:title|og:description|twitter:title|twitter:description)$/;
  var busy = false;

  function doText(n) {
    if (n.parentNode && /^(SCRIPT|STYLE|NOSCRIPT)$/.test(n.parentNode.nodeName)) return;
    var st = nodeSt.get(n), v = n.nodeValue;
    if (!st || v !== st.cur) { st = { orig: v, cur: v }; nodeSt.set(n, st); }
    var want = st.orig;
    if (lang === 'en') {
      var core = norm(st.orig);
      if (core) { var t = tr(core); if (t !== core) want = st.orig.replace(/\S[\s\S]*\S|\S/, function () { return t; }); }
    }
    if (want !== v) n.nodeValue = want;
    st.cur = want;
  }
  function doAttrs(el) {
    if (el.nodeType !== 1) return;
    if (el.nodeName === 'META' && !META_OK.test(el.getAttribute('name') || el.getAttribute('property') || '')) return;
    var m = attrSt.get(el); if (!m) { m = {}; attrSt.set(el, m); }
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      var v = el.getAttribute(a), st = m[a];
      if (!st || v !== st.cur) { st = m[a] = { orig: v, cur: v }; }
      var want = st.orig;
      if (lang === 'en') { var c = norm(st.orig); var t = tr(c); if (t !== c) want = t; }
      if (want !== v) el.setAttribute(a, want);
      st.cur = want;
    });
  }
  function walk(root) {
    if (root.nodeType === 3) return doText(root);
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    var el = root.nodeType === 9 ? root.documentElement : root;
    doAttrs(el);
    var w = document.createTreeWalker(el, 5), n;
    while ((n = w.nextNode())) n.nodeType === 3 ? doText(n) : doAttrs(n);
  }
  function apply() { busy = true; try { walk(document); } finally { busy = false; } }

  function buildToggle() {
    var nav = document.querySelector('nav.top, nav'); if (!nav || nav.querySelector('.lang-toggle')) return;
    var css = document.createElement('style');
    css.textContent = '.lang-toggle{display:inline-flex;padding:3px;border-radius:999px;border:1px solid rgba(243,236,223,.22);gap:2px;flex:none}' +
      '.lang-toggle button{font:700 12px/1 "Hanken Grotesk",sans-serif;letter-spacing:.08em;padding:8px 10px;border-radius:999px;border:0;background:transparent;color:#d8d0c1;cursor:pointer;opacity:.7}' +
      '@media(hover:hover) and (pointer:fine){.lang-toggle button:hover{color:#f3ecdf}}.lang-toggle button[aria-pressed=true]{background:#f3ecdf;color:#17211b;opacity:1;box-shadow:0 1px 3px rgba(0,0,0,.35)}' +
      '.lang-toggle button:focus-visible{outline:2px solid #e07a3f;outline-offset:2px}' +
      '@media(max-width:760px){nav.top{gap:0 12px!important;padding-block:6px 0!important}nav.top .brand{margin-right:auto}nav.top .lang-toggle button{padding:15px 13px}nav.top .brand{min-height:44px;align-items:center!important}nav.top .call{padding:13px 18px}' +
      'nav.top .links{gap:0 6px!important;overflow-x:auto;flex-wrap:nowrap!important;scrollbar-width:none;margin-inline:calc(-1*clamp(20px,4vw,56px));padding-inline:calc(clamp(20px,4vw,56px) - 8px)}nav.top .links::-webkit-scrollbar{display:none}' +
      'nav.top .links a{white-space:nowrap;padding:14px 8px!important;min-height:18px}}';
    document.head.appendChild(css);
    var g = document.createElement('div'); g.className = 'lang-toggle'; g.setAttribute('role', 'group'); g.setAttribute('aria-label', 'Language / Język');
    [['pl', 'PL', 'Polski'], ['en', 'EN', 'English']].forEach(function (l) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = l[1]; b.lang = l[0]; b.setAttribute('aria-label', l[2]); b.dataset.l = l[0];
      b.addEventListener('click', function () { setLang(l[0]); }); g.appendChild(b);
    });
    var call = nav.querySelector('.call'), box = document.createElement('div'); box.className = 'nav-right'; box.style.cssText = 'display:flex;align-items:center;gap:12px;justify-self:end'; if (call) { call.parentNode.insertBefore(box, call); box.appendChild(g); box.appendChild(call); } else { nav.appendChild(box); box.appendChild(g); }
    sync();
  }
  function sync() {
    document.querySelectorAll('.lang-toggle button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.l === lang)); });
  }
  function setLang(l) {
    lang = window.KARIOKA_LANG = l; document.documentElement.lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply(); sync();
    window.dispatchEvent(new CustomEvent('kariokalang', { detail: l }));
  }
  window.setKariokaLang = setLang;

  function init() {
    buildToggle(); apply();
    new MutationObserver(function (ms) {
      if (busy) return; busy = true;
      try {
        ms.forEach(function (m) {
          if (m.type === 'characterData') doText(m.target);
          else if (m.type === 'attributes') doAttrs(m.target);
          else m.addedNodes.forEach(walk);
        });
      } finally { busy = false; }
    }).observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
