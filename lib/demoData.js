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

export function getEvents() {
  const raw = [
    { slug: "koffieochtend-apt", offset: 2, time: "10:30", end: "12:00", title: "Koffieochtend in Apt", location: "Café des Arcades, Apt", summary: "Bijpraten met landgenoten, nieuwe leden welkom." },
    { slug: "petanque-gordes", offset: 5, time: "15:00", end: "17:30", title: "Pétanque in Gordes", location: "Terrain municipal, Gordes", summary: "Informele middag voor beginners en ervaren spelers." },
    { slug: "wandeling-roussillon", offset: 9, time: "09:30", end: "13:00", title: "Wandeling rond Roussillon", location: "Parking des Ocres, Roussillon", summary: "Rustige wandeling van circa 8 km. Neem water en stevige schoenen mee." },
    { slug: "lezing-franse-erfrecht", offset: 13, time: "19:00", end: "21:00", title: "Lezing: wonen en erven in Frankrijk", location: "Salle des Fêtes, Bonnieux", summary: "Algemene informatieavond over praktische aandachtspunten rond nalatenschap." },
    { slug: "bezoek-olijfmolen", offset: 18, time: "14:00", end: "16:30", title: "Bezoek aan een olijfmolen", location: "Moulin du Luberon, fictieve locatie", summary: "Rondleiding en proeverij. Aanmelden gewenst." },
    { slug: "najaarsborrel", offset: 23, time: "17:30", end: "20:00", title: "Najaarsborrel", location: "Maison des Associations, Apt", summary: "Gezamenlijke borrel met hapjes. Introducés zijn welkom." },
    { slug: "algemene-ledenvergadering", offset: 31, time: "14:00", end: "16:30", title: "Algemene ledenvergadering", location: "Salle Polyvalente, Coustellet", summary: "Jaarlijkse ledenvergadering met aansluitend koffie en een glas wijn." }
  ];

  return raw.map((event) => ({ ...event, date: dateFromOffset(event.offset), dateLabel: formatDate(event.offset) }));
}

export function getPosts() {
  const raw = [
    {
      slug: "vrijwilligers-gezocht-najaarsborrel",
      offset: -1,
      category: "Berichten van het bestuur",
      categoryKey: "bestuur",
      title: "Vrijwilligers gezocht voor de najaarsborrel",
      excerpt: "Voor ontvangst, buffet en opruimen zoeken we zes leden die een uurtje willen helpen.",
      body: [
        "De najaarsborrel komt eraan. Om de avond soepel te laten verlopen zoeken we zes leden die kort willen helpen bij ontvangst, buffet en opruimen.",
        "Wie wil meedoen kan zich melden via het algemene verenigingsadres. Ook leden die pas kort lid zijn, zijn van harte welkom om mee te helpen."
      ]
    },
    {
      slug: "fietstocht-door-de-luberon",
      offset: -2,
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
      offset: -3,
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
      offset: -4,
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
      offset: -5,
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
      offset: -7,
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
      offset: -8,
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

  return raw.map((post) => ({ ...post, date: dateFromOffset(post.offset), dateLabel: formatDate(post.offset) }));
}

export function getPostBySlug(slug) {
  return getPosts().find((post) => post.slug === slug);
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://nlers-in-de-lavendelvelden.vercel.app";
}
