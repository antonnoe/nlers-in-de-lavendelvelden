import { verslagTemplates, seed } from "./verslagen";
import { extraPosts } from "./berichten";

const monthNames = [
  "januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december"
];

function getParisDateParts() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return { year: Number(map.year), month: Number(map.month), day: Number(map.day) };
}

function dateFromOffset(days) {
  const base = getParisDateParts();
  const d = new Date(Date.UTC(base.year, base.month - 1, base.day + days, 12, 0, 0));
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    iso: `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`
  };
}

export function formatDate(days) {
  const d = dateFromOffset(days);
  return `${d.day} ${monthNames[d.month - 1]} ${d.year}`;
}

const CONTACT = "activiteiten@lavendelvelden.demo";

function partsFromUTC(d) {
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  return { year, month, day, iso: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}` };
}

function utcDate(year, month, day) {
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
}

// n = 1..4 voor de eerste tot vierde, n = -1 voor de laatste weekdag van de maand
function nthWeekday(year, month, weekday, n) {
  if (n > 0) {
    const firstDow = utcDate(year, month, 1).getUTCDay();
    return 1 + ((weekday - firstDow + 7) % 7) + (n - 1) * 7;
  }
  const last = new Date(Date.UTC(year, month, 0, 12)).getUTCDate();
  const lastDow = utcDate(year, month, last).getUTCDay();
  return last - ((lastDow - weekday + 7) % 7);
}

const allMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const pick = (list, i) => list[((i % list.length) + list.length) % list.length];

const walkRoutes = [
  ["Sentier des Ocres", "Parking des Ocres, Roussillon", "circa 8 km door de okerrotsen"],
  ["Abbaye de Sénanque", "Parking du village, Gordes", "circa 9 km met afdaling naar de abdij"],
  ["Lourmarin en de Aigue Brun", "Place de la Fontaine, Lourmarin", "circa 7 km langs de rivier"],
  ["Forêt des Cèdres", "Parking de la Forêt des Cèdres, Bonnieux", "circa 6 km door het cederbos, schaduwrijk"],
  ["Ménerbes en de wijngaarden", "Place de l'Horloge, Ménerbes", "circa 8 km tussen de wijngaarden"],
  ["Rochers de Saignon", "Parking du village, Saignon", "circa 7 km met uitzicht op Apt"],
  ["Oppède-le-Vieux", "Parking d'Oppède-le-Vieux", "circa 6 km, met korte klim naar het oude dorp"],
  ["Fort de Buoux", "Parking du Fort, Buoux", "circa 7 km, stevige schoenen verplicht"],
  ["Colorado provençal", "Parking du Colorado, Rustrel", "circa 8 km door oker en dennen"],
  ["Bron van de Sorgue", "Parking de la Fontaine, Fontaine-de-Vaucluse", "circa 6 km, vlak en geschikt voor iedereen"],
  ["Étang de la Bonde", "Étang de la Bonde, Cabrières-d'Aigues", "circa 5 km rond het meer"],
  ["Lacoste en het kasteel", "Place de l'Église, Lacoste", "circa 7 km met uitzicht op de Petit Luberon"]
];

const lectureTopics = [
  ["De Var: van de Gorges du Verdon tot de Îles d'Hyères", "Een fictieve gids neemt ons mee door het departement naast de deur: kloven, kust, eilanden en de dorpen in het achterland."],
  ["Water in de Provence: de Durance en het Canal de Provence", "Hoe komt het water in onze kraan en in de irrigatiekanalen? Over droogte, stuwmeren en de verdeling van water in de regio Provence-Alpes-Côte d'Azur."],
  ["Lavendel en lavandin: hoe de Provence paars werd", "Over de geschiedenis van de lavendelteelt, het verschil tussen lavendel en lavandin, en de distilleerderijen van het plateau van Sault."],
  ["Het Parc naturel régional du Luberon", "Wat betekent het om in een natuurpark te wonen? Over natuur, wandelpaden, bouwen en de rol van het park."],
  ["Romeins erfgoed in de Provence", "Van het theater van Orange en de opgravingen van Vaison-la-Romaine tot de havenstad Fréjus in de Var."],
  ["De mistral: wind, weer en klimaat in Zuid-Frankrijk", "Waarom waait het hier zo hard, en wat betekent het veranderende klimaat voor tuin, huis en landbouw in de regio?"],
  ["Wijn uit de Var en de Vaucluse", "Over Côtes de Provence, Ventoux en Luberon: druivensoorten, de rosé-traditie en de coöperaties in de dorpen, met een kleine proeverij."],
  ["Bosbranden in de regio: preventie en wat je als bewoner moet weten", "Over het brandseizoen in de Var en de Vaucluse, het snoeien rond het huis en hoe je op de hoogte blijft van waarschuwingen."]
];

const lunchPlaces = [
  "Restaurant Le Mas des Oliviers, Cavaillon (fictief)",
  "Bistrot de la Place, Apt (fictief)",
  "Auberge du Luberon, Bonnieux (fictief)",
  "La Table de Goult, Goult (fictief)",
  "Le Petit Jardin, L'Isle-sur-la-Sorgue (fictief)"
];

const bikeStarts = [
  ["Parking de la gare, Bonnieux", "circa 40 km over de Véloroute du Calavon"],
  ["Place du marché, Coustellet", "circa 35 km langs de voet van de Petit Luberon"],
  ["Parking du lac, Cucuron", "circa 45 km door de Pays d'Aigues"],
  ["Place de la Mairie, Goult", "circa 38 km langs Roussillon en Gordes"],
  ["Parking des Ocres, Roussillon", "circa 42 km, met een pittige klim"],
  ["Place de la Bouquerie, Apt", "circa 30 km, vlak en rustig"]
];

const recurringRules = [
  {
    key: "wandeling", label: "Elke eerste dinsdag van de maand",
    dates: (y) => allMonths.map((m) => [m, nthWeekday(y, m, 2, 1)]),
    build: (d) => {
      const [name, location, route] = pick(walkRoutes, d.month - 1);
      const summer = d.month === 7 || d.month === 8;
      return {
        time: summer ? "08:00" : "09:30", end: summer ? "11:30" : "12:30",
        title: `Maandwandeling: ${name}`, location,
        summary: `Onze vaste wandeling op de eerste dinsdag van de maand, ${route}. Verzamelen op de parking.${summer ? " In de zomer starten we vroeger vanwege de hitte." : ""} Neem water, een hoed en stevige schoenen mee. Deelname gratis, aanmelden is niet nodig.`
      };
    }
  },
  {
    key: "lezing-regio", label: "Ieder kwartaal",
    dates: (y) => [2, 5, 8, 11].map((m) => [m, nthWeekday(y, m, 4, 3)]),
    build: (d) => {
      const index = d.year * 4 + Math.floor((d.month - 1) / 3);
      const [topic, text] = pick(lectureTopics, index);
      return {
        time: "19:00", end: "21:00", title: `Lezing over de regio: ${topic}`,
        location: "Salle des Fêtes, Bonnieux",
        summary: `${text} Kwartaallezing in de reeks over de Var, de Vaucluse en de regio Provence-Alpes-Côte d'Azur. Toegang 5 euro voor leden en 8 euro voor niet-leden, inclusief een glas wijn. Aanmelden via ${CONTACT}.`
      };
    }
  },
  {
    key: "sinterklaas", label: "Ieder jaar op de zaterdag vóór 5 december",
    dates: (y) => {
      const dow = utcDate(y, 12, 4).getUTCDay();
      return [[12, 4 - ((dow - 6 + 7) % 7)]];
    },
    build: () => ({
      time: "14:00", end: "17:00", title: "Sinterklaasmiddag",
      location: "Salle Polyvalente, Coustellet",
      summary: `Sinterklaas en zijn pieten bezoeken de Luberon. Met pepernoten, chocolademelk en speculaas voor jong en oud. Kinderen en kleinkinderen tot en met 12 jaar krijgen een cadeautje; geef ze uiterlijk een week van tevoren op via ${CONTACT}. Leden gratis, introducés 5 euro.`
    })
  },
  {
    key: "nieuwjaarsborrel", label: "Ieder jaar op de derde zaterdag van januari",
    dates: (y) => [[1, nthWeekday(y, 1, 6, 3)]],
    build: (d) => ({
      time: "17:00", end: "20:00", title: `Nieuwjaarsborrel ${d.year}`,
      location: "Maison des Associations, Apt",
      summary: "We heffen het glas op het nieuwe jaar, met oliebollen, appelflappen en een toast van de voorzitter. Leden en introducés zijn welkom. Deelname gratis, aanmelden is niet nodig."
    })
  },
  {
    key: "koffieochtend", label: "Elke tweede woensdag van de maand",
    dates: (y) => allMonths.map((m) => [m, nthWeekday(y, m, 3, 2)]),
    build: () => ({
      time: "10:30", end: "12:00", title: "Koffieochtend in Apt",
      location: "Café des Arcades, Apt",
      summary: "Bijpraten met landgenoten bij een kop koffie. Er staat een tafel met Nederlandstalige boeken om te ruilen, en nieuwe leden krijgen een eigen kennismakingstafel. Iedereen betaalt zijn eigen consumpties, aanmelden is niet nodig."
    })
  },
  {
    key: "taalcafe", label: "Elke eerste en derde maandag (september tot en met juni)",
    dates: (y) => [1, 2, 3, 4, 5, 6, 9, 10, 11, 12].flatMap((m) => [[m, nthWeekday(y, m, 1, 1)], [m, nthWeekday(y, m, 1, 3)]]),
    build: () => ({
      time: "18:00", end: "19:30", title: "Taalcafé Frans-Nederlands",
      location: "Bar Le Commerce, Apt (fictief)",
      summary: "Een uur Frans en een half uur Nederlands met Franse buren die onze taal willen oefenen. Alle niveaus zijn welkom. Deelname gratis."
    })
  },
  {
    key: "klaverjassen", label: "Elke tweede en vierde maandag",
    dates: (y) => allMonths.flatMap((m) => [[m, nthWeekday(y, m, 1, 2)], [m, nthWeekday(y, m, 1, 4)]]),
    build: () => ({
      time: "14:00", end: "17:00", title: "Klaverjasmiddag",
      location: "Maison des Associations, Apt",
      summary: "Gezellig kaarten volgens de Amsterdamse regels. Beginners krijgen uitleg. Bijdrage 2 euro voor koffie en thee."
    })
  },
  {
    key: "bijpraatlunch", label: "Elke vierde donderdag (niet in juli, augustus en december)",
    dates: (y) => [1, 2, 3, 4, 5, 6, 9, 10, 11].map((m) => [m, nthWeekday(y, m, 4, 4)]),
    build: (d) => ({
      time: "12:30", end: "15:00", title: "Bijpraatlunch",
      location: pick(lunchPlaces, d.year * 12 + d.month),
      summary: `Maandelijkse lunch met een vast menu voor ongeveer 25 euro, op eigen rekening. Aanmelden uiterlijk de maandag ervoor via ${CONTACT}, in verband met de reservering. Maximaal 24 deelnemers.`
    })
  },
  {
    key: "petanque", label: "Elke laatste vrijdag van april tot en met oktober",
    dates: (y) => [4, 5, 6, 7, 8, 9, 10].map((m) => [m, nthWeekday(y, m, 5, -1)]),
    build: () => ({
      time: "15:00", end: "18:00", title: "Pétanquemiddag",
      location: "Boulodrome, Goult",
      summary: "Maandelijkse pétanquemiddag met wisselende teams en na afloop een glas rosé. Wie geen boules heeft, kan er lenen. Deelname 3 euro, aanmelden niet nodig."
    })
  },
  {
    key: "fietstocht", label: "Elke derde zondag van april tot en met september",
    dates: (y) => [4, 5, 6, 7, 8, 9].map((m) => [m, nthWeekday(y, m, 0, 3)]),
    build: (d) => {
      const [location, route] = pick(bikeStarts, d.month - 4);
      return {
        time: "09:00", end: "13:00", title: "Fietstocht door de Luberon",
        location,
        summary: `Rustige groepsrit van ${route}, met een koffiestop onderweg. Toerfiets of e-bike is prima, een helm wordt aangeraden. Aanmelden via ${CONTACT}.`
      };
    }
  },
  {
    key: "algemene-ledenvergadering", label: "Ieder jaar op de tweede zaterdag van maart",
    dates: (y) => [[3, nthWeekday(y, 3, 6, 2)]],
    build: (d) => ({
      time: "14:00", end: "16:30", title: `Algemene ledenvergadering ${d.year}`,
      location: "Salle Polyvalente, Coustellet",
      summary: "Jaarlijkse ledenvergadering met jaarverslag, financieel verslag, verslag van de kascommissie, begroting en bestuursverkiezing. De stukken worden twee weken van tevoren per e-mail verstuurd. Aansluitend koffie en een glas wijn."
    })
  },
  {
    key: "koningsdag", label: "Ieder jaar op Koningsdag",
    dates: (y) => [[4, utcDate(y, 4, 27).getUTCDay() === 0 ? 26 : 27]],
    build: () => ({
      time: "12:00", end: "16:00", title: "Koningsdaglunch",
      location: "Plan d'eau, Apt",
      summary: `Oranje picknicklunch met spelletjes en een kleine vrijmarkt. Iedereen neemt iets mee voor het gezamenlijke buffet; de vereniging zorgt voor drinken en tompoucen. Aanmelden via ${CONTACT}.`
    })
  },
  {
    key: "nieuwe-leden", label: "Twee keer per jaar, eerste zaterdag van april en oktober",
    dates: (y) => [4, 10].map((m) => [m, nthWeekday(y, m, 6, 1)]),
    build: () => ({
      time: "15:00", end: "17:00", title: "Welkomstmiddag voor nieuwe leden",
      location: "Maison des Associations, Apt",
      summary: "Kennismaking met het bestuur en andere nieuwe leden, met praktische informatie over wonen in de Luberon en een overzicht van onze activiteiten. Ook langer bestaande leden zijn welkom als gastheer of gastvrouw."
    })
  },
  {
    key: "lavendeldistilleerderij", label: "Ieder jaar op de eerste zaterdag van juli",
    dates: (y) => [[7, nthWeekday(y, 7, 6, 1)]],
    build: () => ({
      time: "10:00", end: "13:00", title: "Bezoek aan een lavendeldistilleerderij",
      location: "Plateau de Sault (fictieve distilleerderij)",
      summary: `Rondleiding tijdens de oogst, met uitleg over het distilleren en tijd om door de velden te lopen. Kosten 12 euro voor leden en 15 euro voor niet-leden. Carpoolen vanaf Apt is mogelijk. Aanmelden via ${CONTACT}, maximaal 30 deelnemers.`
    })
  },
  {
    key: "zomerpicknick", label: "Ieder jaar op de tweede zondag van juli",
    dates: (y) => [[7, nthWeekday(y, 7, 0, 2)]],
    build: () => ({
      time: "12:00", end: "16:00", title: "Zomerpicknick bij de vijver",
      location: "Plan d'eau, Apt",
      summary: "Jaarlijkse verenigingspicknick in de schaduw. Neem je eigen picknick en een kleed mee; de vereniging zorgt voor koffie, ijs en een jeu de boules-baan. Deelname gratis."
    })
  },
  {
    key: "wijnproeverij", label: "Ieder jaar op de derde zaterdag van september",
    dates: (y) => [[9, nthWeekday(y, 9, 6, 3)]],
    build: () => ({
      time: "10:30", end: "14:00", title: "Wijnoogst en proeverij",
      location: "Domaine des Trois Cyprès, Lourmarin (fictief)",
      summary: `Rondleiding door de wijngaard tijdens de vendanges, met proeverij en een eenvoudige lunch. Kosten 20 euro voor leden en 25 euro voor niet-leden. Aanmelden via ${CONTACT}, maximaal 40 deelnemers.`
    })
  },
  {
    key: "kerstlunch", label: "Ieder jaar op de derde zondag van december",
    dates: (y) => [[12, nthWeekday(y, 12, 0, 3)]],
    build: () => ({
      time: "12:30", end: "16:30", title: "Kerstlunch",
      location: "Auberge du Luberon, Bonnieux (fictief)",
      summary: `Feestelijke kerstlunch met een driegangenmenu, kerstliedjes en een loterij. Kosten 45 euro voor leden en 52 euro voor introducés, inclusief wijn en koffie. Aanmelden en betalen uiterlijk 1 december via ${CONTACT}.`
    })
  }
];

function oneOffEvents() {
  const raw = [
    { slug: "picknick-vijver-verleden", offset: -4, time: "12:30", end: "16:00", title: "Picknick bij de vijver", location: "Plan d’eau, Apt", summary: "Afgelopen verenigingspicknick. Dit event staat bewust in het verleden om filtering door de NieuwsbriefAssistent te testen." },
    { slug: "petanque-gordes", offset: 5, time: "15:00", end: "17:30", title: "Geannuleerd – Pétanque in Gordes", location: "Terrain municipal, Gordes", summary: "Deze activiteit is geannuleerd. Dit event blijft bewust in de feed staan om de NieuwsbriefAssistent te testen.", cancelled: true },
    { slug: "lezing-franse-erfrecht", offset: 13, time: "19:00", end: "21:00", title: "Lezing: wonen en erven in Frankrijk", location: "Salle des Fêtes, Bonnieux", summary: "Algemene informatieavond over praktische aandachtspunten rond nalatenschap." },
    { slug: "bezoek-olijfmolen", offset: 18, time: "14:00", end: "16:30", title: "Bezoek aan een olijfmolen", location: "Moulin du Luberon, fictieve locatie", summary: "Rondleiding en proeverij. Aanmelden gewenst." },
    { slug: "ledenborrel", offset: 23, time: "17:30", end: "20:00", title: "Ledenborrel", location: "Maison des Associations, Apt", summary: "Gezamenlijke borrel met hapjes. Introducés zijn welkom." },
    { slug: "excursie-verdon", offset: 44, time: "08:30", end: "18:00", title: "Busexcursie naar de Gorges du Verdon", location: "Vertrek: Place de la Bouquerie, Apt", summary: `Dagtocht met de bus naar de kloven van de Verdon in de Var, met een boottocht op het Lac de Sainte-Croix en lunch in Moustiers-Sainte-Marie. Kosten 65 euro voor leden, inclusief bus en lunch. Aanmelden via ${CONTACT}, maximaal 45 deelnemers.` },
    { slug: "workshop-tuin-droogte", offset: 61, time: "10:00", end: "12:30", title: "Workshop: een tuin die tegen droogte kan", location: "Jardin partagé, Cavaillon (fictief)", summary: `Een fictieve hovenier laat zien welke planten het goed doen zonder veel water. Kosten 8 euro, aanmelden via ${CONTACT}.` }
  ];
  return raw.map((event) => {
    const date = dateFromOffset(event.offset);
    return { ...event, uid: `${event.slug}-${date.iso}`, date };
  });
}

function recurringEvents(fromIso, toIso) {
  const base = getParisDateParts();
  const events = [];
  for (const year of [base.year - 1, base.year, base.year + 1, base.year + 2]) {
    for (const r of recurringRules) {
      for (const [month, day] of r.dates(year)) {
        const date = partsFromUTC(utcDate(year, month, day));
        if (date.iso < fromIso || date.iso > toIso) continue;
        const slug = `${r.key}-${date.iso}`;
        events.push({ slug, uid: slug, date, recurring: r.label, ...r.build(date) });
      }
    }
  }
  return events;
}

// Standaard: van 60 dagen terug tot een jaar vooruit. Alle datums schuiven mee met vandaag.
export function getEvents({ fromDays = -60, toDays = 365 } = {}) {
  const fromIso = dateFromOffset(fromDays).iso;
  const toIso = dateFromOffset(toDays).iso;
  return [...oneOffEvents(), ...recurringEvents(fromIso, toIso)]
    .filter((e) => e.date.iso >= fromIso && e.date.iso <= toIso)
    .map((e) => ({ ...e, dateLabel: `${e.date.day} ${monthNames[e.date.month - 1]} ${e.date.year}` }))
    .sort((a, b) => a.date.iso.localeCompare(b.date.iso) || a.time.localeCompare(b.time));
}

export function getUpcomingEvents(toDays = 365) {
  return getEvents({ fromDays: 0, toDays });
}

export function monthLabel(date) {
  return `${monthNames[date.month - 1]} ${date.year}`;
}

export function getPosts() {
  const raw = [
    {
      slug: "vrijwilligers-gezocht-ledenborrel",
      offset: -5,
      category: "Berichten van het bestuur",
      categoryKey: "bestuur",
      title: "Vrijwilligers gezocht voor de ledenborrel",
      excerpt: "Voor ontvangst, buffet en opruimen zoeken we zes leden die een uurtje willen helpen.",
      body: [
        "De ledenborrel komt eraan. Om de avond soepel te laten verlopen zoeken we zes leden die kort willen helpen bij ontvangst, buffet en opruimen.",
        "Wie wil meedoen kan zich melden via het algemene verenigingsadres. Ook leden die pas kort lid zijn, zijn van harte welkom om mee te helpen."
      ]
    },
    {
      slug: "fietstocht-door-de-luberon",
      offset: -1,
      category: "Ingezonden door leden",
      categoryKey: "leden",
      title: "Wie fietst mee door de Luberon?",
      excerpt: "Een groepje leden wil volgende week een rustige tocht van ongeveer 45 kilometer maken.",
      body: [
        "Een aantal leden wil volgende week samen een fietstocht maken door de Luberon. Het tempo blijft rustig en onderweg is er tijd voor koffie.",
        "De precieze route wordt aangepast aan het weer. Racefiets is niet nodig; een goede toerfiets of e-bike is prima."
      ]
    },
    {
      slug: "dozen-gezocht-verhuizing",
      offset: -2,
      category: "Ingezonden door leden",
      categoryKey: "leden",
      title: "Verhuisdozen gezocht in de omgeving van Apt",
      excerpt: "Voor een verhuizing binnen de Vaucluse zoekt een lid stevige dozen en inpakmateriaal.",
      body: [
        "Voor een verhuizing binnen de Vaucluse ben ik op zoek naar stevige verhuisdozen, liefst met handgrepen, en wat schoon inpakpapier.",
        "Ophalen in Apt, Bonnieux, Goult of omgeving is geen probleem."
      ]
    },
    {
      slug: "verslag-petanque-middag",
      offset: -3,
      category: "Verenigingsnieuws",
      categoryKey: "verenigingsnieuws",
      title: "Zonnige pétanquemiddag met 28 deelnemers",
      excerpt: "De maandelijkse pétanquemiddag trok deze keer 28 deelnemers en eindigde met een gedeelde eerste plaats.",
      body: [
        "Onder een heldere Provençaalse hemel kwamen 28 leden bijeen voor de maandelijkse pétanquemiddag.",
        "Na drie ronden eindigden twee teams gelijk. In plaats van een beslissingsronde werd besloten de fles rosé broederlijk te delen."
      ]
    },
    {
      slug: "partner-winterklaar-woning",
      offset: -4,
      category: "Van onze partners",
      categoryKey: "partners",
      title: "Uw woning winterklaar: vijf praktische aandachtspunten",
      excerpt: "Fictieve partner Maison Provence Services deelt een korte checklist voor tweede woningen.",
      body: [
        "Wie een woning enkele maanden leeg laat staan, doet er goed aan vooraf water, verwarming, buitenkranen, post en sleutelbeheer te controleren.",
        "Deze bijdrage is afkomstig van een fictieve partner en maakt uitsluitend deel uit van deze demonstratiewebsite."
      ]
    },
    {
      slug: "oproep-boekenruil",
      offset: -6,
      category: "Ingezonden door leden",
      categoryKey: "leden",
      title: "Idee: maandelijkse Nederlandstalige boekenruil",
      excerpt: "Een lid stelt voor om tijdens de koffieochtend een tafel met Nederlandstalige boeken in te richten.",
      body: [
        "Mijn kast puilt uit en weggooien is zonde. Misschien kunnen we tijdens de koffieochtend een vaste boekenruiltafel beginnen.",
        "Romans, reisboeken en kinderboeken zijn allemaal welkom, zolang ze netjes zijn."
      ]
    },
    {
      slug: "bestuur-contributie-ongewijzigd",
      offset: -8,
      category: "Berichten van het bestuur",
      categoryKey: "bestuur",
      title: "Contributie blijft dit verenigingsjaar ongewijzigd",
      excerpt: "Het bestuur stelt voor om de contributie voor het komende verenigingsjaar niet te verhogen.",
      body: [
        "Het bestuur heeft de begroting voor het komende verenigingsjaar besproken. Op basis van de huidige stand van zaken is een contributieverhoging niet nodig.",
        "De definitieve begroting wordt tijdens de algemene ledenvergadering toegelicht."
      ]
    },
    {
      slug: "markt-lourmarin-tip",
      offset: -7,
      category: "Praktische informatie",
      categoryKey: "praktisch",
      title: "Leden-tip: vroeg naar de markt van Lourmarin",
      excerpt: "Wie de drukte wil vermijden kan beter voor tien uur arriveren, aldus een van onze leden.",
      body: [
        "De markt van Lourmarin is populair en kan in het hoogseizoen behoorlijk druk worden. Een van onze leden tipt om vroeg te gaan.",
        "Deze bijdrage is een ervaringsbericht, geen officiële verkeersinformatie."
      ]
    },
    {
      slug: "partner-franse-autoverzekering",
      offset: -9,
      category: "Van onze partners",
      categoryKey: "partners",
      title: "Franse autoverzekering: welke papieren legt u klaar?",
      excerpt: "Fictieve partner Provence Assurances zet de gebruikelijke documenten op een rij.",
      body: [
        "Bij het aanvragen of aanpassen van een Franse autoverzekering worden doorgaans voertuig- en persoonsgegevens gevraagd.",
        "Deze tekst is uitsluitend fictieve demonstratiecontent en vormt geen verzekeringsadvies."
      ]
    },
    {
      slug: "fotoverslag-lavendelvelden",
      offset: -10,
      category: "Ingezonden door leden",
      categoryKey: "leden",
      title: "Fotoverslag: de laatste lavendelvelden van het seizoen",
      excerpt: "Een lid stuurde een korte fotoreportage van een ochtendrit tussen Sault en Aurel.",
      body: [
        "Tijdens een vroege ochtendrit tussen Sault en Aurel waren nog enkele laatbloeiende lavendelvelden te zien.",
        "De foto's in deze demo zijn synthetisch of illustratief en hebben geen documentaire status."
      ]
    },
    {
      slug: "nieuwe-leden-welkom",
      offset: -11,
      category: "Verenigingsnieuws",
      categoryKey: "verenigingsnieuws",
      title: "Zes nieuwe leden in één maand",
      excerpt: "De vereniging verwelkomt zes nieuwe leden uit Apt, Cavaillon, Sault en omgeving.",
      body: [
        "In de afgelopen maand mochten we zes nieuwe leden verwelkomen. Daarmee telt de vereniging nu ongeveer tweehonderd leden.",
        "Tijdens de eerstvolgende koffieochtend is er een aparte tafel voor nieuwe leden en kennismaking."
      ]
    },
    {
      slug: "vraag-zwembad-afdekking",
      offset: -12,
      category: "Ingezonden door leden",
      categoryKey: "leden",
      title: "Ervaringen gevraagd met winterafdekking voor zwembad",
      excerpt: "Een lid zoekt praktische ervaringen met een eenvoudige winterafdekking voor een klein zwembad.",
      body: [
        "Wie heeft goede of juist slechte ervaringen met een winterafdekking voor een klein buitenzwembad?",
        "Ik zoek vooral praktische tips over bevestiging bij mistral en onderhoud tijdens langere afwezigheid."
      ]
    }
  ];

  const posts = [...raw, ...extraPosts].map((post) => ({ ...post, date: dateFromOffset(post.offset), dateLabel: formatDate(post.offset) }));
  return [...posts, ...getVerslagen()].sort((a, b) => b.date.iso.localeCompare(a.date.iso));
}

const extraDrukte = new Set(["sinterklaas", "nieuwjaarsborrel", "kerstlunch", "algemene-ledenvergadering", "lezing-regio", "koningsdag"]);

// Verslag twee dagen na elke afgelopen activiteit van de afgelopen drie maanden,
// voor zover er voor die soort activiteit een verslag bestaat.
export function getVerslagen() {
  return getEvents({ fromDays: -92, toDays: -2 })
    .filter((e) => !e.cancelled)
    .map((e) => {
      const key = e.recurring ? e.slug.slice(0, -11) : e.slug;
      const variants = verslagTemplates[key];
      if (!variants) return null;
      const h = seed(e.slug);
      const n = 12 + (h % 24) + (extraDrukte.has(key) ? 20 : 0);
      const tekst = variants[(e.date.month + e.date.year) % variants.length](e, n);
      const date = partsFromUTC(utcDate(e.date.year, e.date.month, e.date.day + 2));
      return {
        slug: `verslag-${e.slug}`,
        category: "Verslagen",
        categoryKey: "verslagen",
        ...tekst,
        body: [...tekst.body, `Deze activiteit vond plaats op ${e.dateLabel} in ${e.location}.`],
        date,
        dateLabel: `${date.day} ${monthNames[date.month - 1]} ${date.year}`
      };
    })
    .filter(Boolean);
}

export function getPostBySlug(slug) {
  return getPosts().find((post) => post.slug === slug);
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://nlers-in-de-lavendelvelden.vercel.app";
}
