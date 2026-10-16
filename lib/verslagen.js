// Verslagen bij afgelopen activiteiten. Per soort activiteit een paar varianten;
// welke variant en hoeveel deelnemers volgt vast uit de datum, zodat een verslag
// niet verandert als de pagina opnieuw wordt geladen.

const plaats = (location) => location.split(",").slice(-1)[0].replace("(fictief)", "").trim();

export const verslagTemplates = {
  wandeling: [
    (e, n) => ({
      title: `Maandwandeling ${e.title.replace("Maandwandeling: ", "")}: ${n} wandelaars en een appeltaart`,
      excerpt: `Stevige schoenen, een volle rugzak en vooral veel praatjes onderweg. Een terugblik op de maandwandeling in ${plaats(e.location)}.`,
      body: [
        `Om ${e.time.replace(":", ".")} uur stond de parking in ${plaats(e.location)} al vol met bekende gezichten. ${n} leden waren gekomen, een paar van hen voor het eerst. Nog voor iedereen zijn veters had gestrikt, was het eerste recept voor tapenade al uitgewisseld.`,
        "De route was goed te doen. Halverwege hielden we een pauze op een plek met uitzicht, waar de thermosflessen opengingen en iemand uit zijn rugzak een complete appeltaart toverde. Niemand heeft gevraagd hoe die heel was gebleven.",
        "Op de terugweg ging het gesprek, zoals altijd, over Nederlandse kaas en waar je die hier het best kunt kopen. Een definitief antwoord kwam er niet, dus dat onderwerp staat volgende maand weer op de agenda.",
        "De volgende maandwandeling is op de eerste dinsdag van de maand. Je hoeft je niet aan te melden, kom gewoon naar de verzamelplek."
      ]
    }),
    (e, n) => ({
      title: `Zon, stof en een verdwaalde geit: de maandwandeling in ${plaats(e.location)}`,
      excerpt: `${n} wandelaars trokken eropuit. Er werd gelopen, gekletst en één keer heel even de verkeerde afslag genomen.`,
      body: [
        `Met ${n} deelnemers was het een flinke groep die vertrok voor de maandwandeling. Het tempo lag laag en het aantal gesprekken hoog, precies zoals het hoort.`,
        "Ongeveer op de helft stond er midden op het pad een geit, die duidelijk vond dat dit zijn pad was. Na een kwartier onderhandelen, en een halve boterham, mochten we door.",
        "Eén groepje sloeg bij een splitsing net de verkeerde kant op, maar dankzij een telefoon en een luid geroepen 'Hallooo' was iedereen tien minuten later weer bij elkaar. We noemen het voortaan de extra lus.",
        "Na afloop schoof een deel van de groep aan op een terras in het dorp. Dank aan de vrijwilligers die de route vooraf hadden verkend."
      ]
    })
  ],
  "lezing-regio": [
    (e, n) => ({
      title: `Volle zaal bij de kwartaallezing in Bonnieux`,
      excerpt: `${n} belangstellenden kwamen naar de Salle des Fêtes in Bonnieux. Na afloop bleef het nog lang gezellig bij een glas wijn.`,
      body: [
        `De kwartaallezing trok dit keer ${n} leden en introducés. Dat is een mooie opkomst voor een donderdagavond, zeker als je bedenkt dat er die avond ook voetbal op televisie was.`,
        `De spreker nam ons mee in het onderwerp "${e.title.replace("Lezing over de regio: ", "")}". Met foto's, kaarten en een paar goede anekdotes ging het uur sneller voorbij dan gedacht. Bij de vragenronde gingen er zoveel handen omhoog dat de voorzitter er een tweede ronde aan vastknoopte.`,
        "Wie meer wil weten: de spreker heeft een lijstje met boeken en websites achtergelaten. Dat ligt bij de volgende koffieochtend op de boekentafel.",
        "De volgende lezing in de reeks is over drie maanden. Het onderwerp maken we bekend in de nieuwsbrief."
      ]
    })
  ],
  sinterklaas: [
    (e, n) => ({
      title: "Sinterklaas vond de weg naar Coustellet",
      excerpt: `Pepernoten, een volle zaal en ${n - 10} kinderen met grote ogen. Een terugblik op de Sinterklaasmiddag.`,
      body: [
        `Het was even spannend, want de stoomboot kan niet tot in de Luberon varen. Maar om klokslag twee uur ging de deur van de Salle Polyvalente open en stond de Sint er gewoon, met twee pieten en een zak die verdacht zwaar leek.`,
        `In totaal waren er ${n} bezoekers, onder wie ${n - 10} kinderen en kleinkinderen. Er werd gezongen, uit volle borst en niet altijd in dezelfde toonhoogte, en de Sint kende van iedereen wel een klein geheimpje.`,
        "De Franse buren die mee waren gekomen, vonden het allemaal prachtig, al moesten we wel even uitleggen waarom een volwassen man met een mijter cadeautjes uitdeelt in december en niet met Kerst.",
        "Dank aan alle vrijwilligers die cadeautjes hebben ingepakt en de zaal hebben versierd. De chocolademelk was op om half vier, dat zegt genoeg."
      ]
    })
  ],
  nieuwjaarsborrel: [
    (e, n) => ({
      title: `Oliebollen en goede voornemens op de nieuwjaarsborrel`,
      excerpt: `${n} leden proostten in Apt op het nieuwe jaar. De oliebollen waren binnen het uur op.`,
      body: [
        `De Maison des Associations in Apt was goed gevuld: ${n} leden en introducés kwamen het nieuwe jaar inluiden. Bij binnenkomst lag er een schaal oliebollen klaar, en ook een schaal appelflappen voor wie het wat chiquer wilde.`,
        "De voorzitter hield een korte toespraak, die dit jaar echt kort was. Ze blikte terug op een druk verenigingsjaar en bedankte de vrijwilligers, die een welverdiend applaus kregen.",
        "Daarna werd er gepraat over goede voornemens. Het populairste voornemen: eindelijk de Franse belastingaangifte zelf invullen. Het tweede populairste: iemand vinden die dat voor je doet.",
        "Allemaal een gezond en gezellig nieuw jaar gewenst, en tot ziens bij een van de activiteiten."
      ]
    })
  ],
  petanque: [
    (e, n) => ({
      title: "Pétanque in Goult: spanning tot de laatste boule",
      excerpt: `${n} spelers, wisselende teams en een finale die pas bij de allerlaatste worp werd beslist.`,
      body: [
        `Het was druk op het boulodrome: ${n} leden kwamen spelen. De teams werden zoals altijd geloot, waardoor er een paar verrassende combinaties ontstonden.`,
        "De finale werd een spannende pot. Bij een stand van 12 tegen 12 legde een lid dat naar eigen zeggen 'eigenlijk alleen voor de gezelligheid' kwam, zijn boule tegen het cochonnet aan. Het gejuich was tot in het dorp te horen.",
        "Wie geen zin had in spelen, zat op een bankje in de schaduw en gaf commentaar. Dat commentaar was minstens zo fanatiek als het spel.",
        "Na afloop dronken we samen een glas. Tot de volgende keer, op de laatste vrijdag van de maand."
      ]
    }),
    (e, n) => ({
      title: `${n} boulers op de pétanquemiddag in Goult`,
      excerpt: "De boules vlogen, het cochonnet verdween een keer in de struiken en de rosé was koud. Een verslag.",
      body: [
        `Op de laatste vrijdag van de maand was het weer zover: ${n} leden verzamelden zich op het boulodrome van Goult. De teams werden geloot, zodat ervaren boulers en beginners door elkaar speelden.`,
        "Er werd fanatiek gemeten met duimstokken, veters en in één geval een zonnebril. Over één worp is lang gediscussieerd, maar uiteindelijk besloot de groep dat het cochonnet zelf was verschoven. Niemand weet hoe.",
        "Een paar Franse dorpsgenoten keken een tijdje toe en gaven ongevraagd, maar zeer welkom, advies over de juiste houding. Volgende keer doen ze mee.",
        "Na afloop stond er een glas rosé klaar. De winnaars kregen de eer, de verliezers het laatste stuk stokbrood."
      ]
    })
  ],
  fietstocht: [
    (e, n) => ({
      title: `Fietstocht vanaf ${plaats(e.location)}: wind mee, wind tegen`,
      excerpt: `${n} fietsers trotseerden de mistral. Heen ging het als vanzelf, terug wat minder.`,
      body: [
        `Met ${n} deelnemers vertrok de maandelijkse fietstocht vanaf ${e.location.split(",")[0]}. De mistral stond er flink op, wat op de heenweg heerlijk was.`,
        "Bij de koffiestop werd de route opnieuw bekeken, want iedereen wist dat de terugweg tegen de wind in zou gaan. Een paar e-bikers boden ruimhartig aan om voorop te rijden. Dat aanbod is dankbaar aangenomen.",
        "Onderweg zagen we een kudde schapen oversteken, een herder die ons vriendelijk toeknikte en een veld zonnebloemen dat het seizoen al bijna achter zich had gelaten.",
        "Iedereen kwam moe maar tevreden terug. De volgende tocht is op de derde zondag van de maand."
      ]
    }),
    (e, n) => ({
      title: `Fietsend door de Luberon: ${n} deelnemers en één lekke band`,
      excerpt: "Rustig tempo, mooie vergezichten en een koffiestop die iets langer duurde dan gepland.",
      body: [
        `Met ${n} fietsers, van racefiets tot e-bike, vertrokken we op zondagochtend voor de maandelijkse tocht. Het weer werkte mee, met een zacht zonnetje en bijna geen mistral.`,
        "Na een uur stond de koffiestop op het programma, in een dorpscafé waar ze kennelijk nog nooit zoveel Nederlanders tegelijk hadden gezien. De eigenaar zette uiteindelijk zelf ook een kopje voor zichzelf neer en schoof aan.",
        "Op de terugweg kreeg één deelnemer een lekke band. Binnen tien minuten hadden vier mensen een mening over hoe die geplakt moest worden, en na twintig minuten was hij ook echt geplakt.",
        "Iedereen was ruim op tijd terug voor de lunch. De volgende fietstocht is op de derde zondag van de maand."
      ]
    })
  ],
  bijpraatlunch: [
    (e, n) => ({
      title: "Bijpraatlunch: het dagmenu en de verhalen",
      excerpt: `${n} leden aten samen het dagmenu en hadden het over van alles en nog wat.`,
      body: [
        `Voor de maandelijkse lunch schoven ${n} leden aan in ${e.location.replace(" (fictief)", "")}. Het dagmenu stond op een krijtbord, en de helft van de tafel heeft eerst geprobeerd het te vertalen voordat iemand het gewoon aan de ober vroeg.`,
        "Het gesprek ging over reizen naar Nederland, over de beste route om files rond Lyon te vermijden en over de vraag of je drop mee moet nemen of hier moet bestellen. Over dat laatste werd het niet eens.",
        "Bij de koffie werden er alvast plannen gemaakt voor de volgende activiteiten. Een paar leden spraken af om samen naar de lezing te gaan.",
        "De volgende bijpraatlunch is op de vierde donderdag van de maand. Aanmelden kan via het verenigingsadres."
      ]
    }),
    (e, n) => ({
      title: `Bijpraatlunch in ${plaats(e.location)}: lang aan tafel`,
      excerpt: `${n} leden schoven aan voor de maandelijkse lunch. Er werd gegeten, gelachen en veel bijgepraat.`,
      body: [
        `Met ${n} deelnemers was de lange tafel in ${e.location.split(",")[0]} precies vol. Het menu was eenvoudig en goed, en de kok kwam na afloop zelf vragen of het had gesmaakt. Het antwoord was ja.`,
        "Aan tafel ging het over van alles: een nieuwe bakker in het dorp, de beste plek voor oliebollen in december, en de eeuwige vraag waarom Franse winkels tussen de middag dicht zijn terwijl wij dan juist boodschappen willen doen.",
        "Twee nieuwe leden zaten voor het eerst aan en gingen naar huis met een stapeltje telefoonnummers en een uitnodiging voor de wandeling.",
        "De volgende bijpraatlunch is op de vierde donderdag van de maand. Meld je op tijd aan, want vol is vol."
      ]
    })
  ],
  "algemene-ledenvergadering": [
    (e, n) => ({
      title: "Algemene ledenvergadering: vlot verlopen, en daarna een glas",
      excerpt: `${n} leden waren aanwezig. Jaarverslag en begroting zijn goedgekeurd, het bestuur is herkozen.`,
      body: [
        `In de Salle Polyvalente in Coustellet kwamen ${n} leden bijeen voor de jaarlijkse vergadering. Het quorum werd ruim gehaald, waarvoor dank.`,
        "Het jaarverslag en het financieel verslag werden zonder veel discussie goedgekeurd. De kascommissie had de boeken in orde bevonden en complimenteerde de penningmeester met zijn overzichtelijke mappen, al vond een lid dat het lettertype wat groter mocht.",
        "De begroting voor het nieuwe jaar werd aangenomen. De contributie blijft gelijk. De aftredende bestuursleden waren herkiesbaar en zijn met applaus herkozen.",
        "Bij de rondvraag kwam het voorstel om een boekenruiltafel vast onderdeel te maken van de koffieochtend. Dat gebeurt. Daarna gingen de koffie en de wijn rond, en duurde de vergadering in de praktijk nog een uur langer."
      ]
    })
  ],
  koningsdag: [
    (e, n) => ({
      title: "Oranje boven bij de vijver in Apt",
      excerpt: `${n} leden vierden Koningsdag met een picknicklunch, spelletjes en een kleine vrijmarkt.`,
      body: [
        `Het was een oranje zee bij de Plan d'eau in Apt. ${n} leden en hun gasten kwamen in hun beste oranje kleding, van een eenvoudige sjaal tot een complete outfit met kroontje.`,
        "Het buffet was een mooie mengeling van Nederland en Frankrijk: kaasblokjes naast tapenade, haring naast een quiche. De tompoucen gingen als eerste op, zoals ieder jaar.",
        "Op de vrijmarkt wisselden een paar boeken, een oude fietspomp en een opvallend aantal vazen van eigenaar. Bij het spijkerpoepen bleek een van onze oudste leden onverslaanbaar.",
        "Dank aan iedereen die iets meebracht voor het buffet. Volgend jaar weer, met hetzelfde kroontje."
      ]
    })
  ],
  "nieuwe-leden": [
    (e, n) => ({
      title: `Welkom aan onze nieuwe leden`,
      excerpt: `${n} nieuwe en bestaande leden maakten kennis tijdens de welkomstmiddag in Apt.`,
      body: [
        `Op de welkomstmiddag kwamen ${n} mensen af, ongeveer de helft nieuw en de helft ervaren leden die graag hun tips deelden.`,
        "Het bestuur vertelde kort wat de vereniging doet, daarna was het vooral praten. Over de huisarts, over de vuilnisophaal, over hoe je een Franse buurman het best kunt bedanken voor een mand courgettes die je niet had gevraagd.",
        "Iedere nieuwe deelnemer kreeg een overzicht van de activiteiten mee en een vaste aanspreker voor de eerste maanden.",
        "Leuk dat jullie erbij zijn. We zien jullie graag bij de koffieochtend of de wandeling."
      ]
    })
  ],
  lavendeldistilleerderij: [
    (e, n) => ({
      title: "Ruiken, kijken en proeven op het plateau van Sault",
      excerpt: `${n} leden bezochten een lavendeldistilleerderij midden in de oogst. Iedereen rook nog dagen naar lavendel.`,
      body: [
        `Vroeg in de ochtend vertrokken ${n} leden, keurig verdeeld over een handvol auto's, naar het plateau van Sault. De velden stonden in volle bloei en de oogstmachines reden al.`,
        "In de distilleerderij legde de eigenaar uit hoe uit een flinke berg lavendel maar een klein flesje olie komt. We leerden ook eindelijk het verschil tussen lavendel en lavandin, al waren we het daar op de terugweg alweer over oneens.",
        "Na de rondleiding was er tijd om door de velden te lopen. Er zijn veel foto's gemaakt, sommige met een bij erop die daar niet om had gevraagd.",
        "Een aantal deelnemers ging naar huis met een zakje gedroogde lavendel voor in de kast. De auto's roken er nog dagen naar."
      ]
    })
  ],
  zomerpicknick: [
    (e, n) => ({
      title: "Zomerpicknick: schaduw, ijs en jeu de boules",
      excerpt: `${n} leden zochten de schaduw op bij de vijver in Apt voor de jaarlijkse picknick.`,
      body: [
        `Het was warm, maar onder de platanen bij de vijver was het goed uit te houden. ${n} leden kwamen met kleden, klapstoelen en manden vol eten.`,
        "Er werd van alles gedeeld, van huisgemaakte salades tot een opvallend grote meloen. De vereniging zorgde voor koffie en ijs, en dat ijs bleek de beste beslissing van het jaar.",
        "Op de jeu de boules-baan werd een spontaan toernooitje gespeeld, waarbij de kinderen de volwassenen met afstand versloegen.",
        "Rond vier uur werden de kleden opgevouwen. Dank aan iedereen die na afloop hielp opruimen."
      ]
    })
  ],
  wijnproeverij: [
    (e, n) => ({
      title: "Wijnoogst en proeverij in Lourmarin",
      excerpt: `${n} leden liepen mee tussen de wijnranken en proefden daarna van het resultaat van vorig jaar.`,
      body: [
        `Midden in de vendanges ontving het domein ${n} leden. De wijnboer nam ons mee tussen de ranken en liet zien hoe er nog met de hand wordt geplukt. Een paar leden mochten zelf een schaar ter hand nemen, onder streng toezicht.`,
        "In de kelder volgde de proeverij: een witte, een rosé en twee rode wijnen. Over de favoriet werd niet unaniem besloten, maar wel uitgebreid gediscussieerd.",
        "De lunch werd buiten geserveerd, aan lange tafels met uitzicht op de Luberon. Er werden flessen gekocht, en een enkeling heeft gevraagd of er volgend jaar ook geplukt mag worden in ruil voor wijn.",
        "Met dank aan het domein voor de gastvrijheid en aan de chauffeurs die die dag water dronken."
      ]
    })
  ],
  kerstlunch: [
    (e, n) => ({
      title: "Een warme kerstlunch in Bonnieux",
      excerpt: `${n} leden zaten aan voor de feestelijke kerstlunch, met drie gangen, kerstliedjes en een loterij.`,
      body: [
        `De Auberge was mooi versierd toen ${n} leden binnenkwamen voor de kerstlunch. Er brandde een haardvuur en de tafels stonden feestelijk gedekt.`,
        "Het driegangenmenu viel in de smaak, en tussen het hoofdgerecht en het dessert werd er gezongen. Stille Nacht ging prima, bij Jingle Bells liep het tempo wat uiteen.",
        "De loterij bracht weer mooie prijzen op, gedoneerd door leden en lokale ondernemers. De hoofdprijs, een mand met streekproducten, ging naar een lid dat al jaren nooit iets wint en dat ook meteen aan iedereen vertelde.",
        "Fijne feestdagen gewenst, en tot op de nieuwjaarsborrel."
      ]
    })
  ],
  koffieochtend: [
    (e, n) => ({
      title: "Koffie, croissants en het nieuws uit de dorpen",
      excerpt: `${n} leden kwamen bijpraten in Café des Arcades. Het werd een ochtend vol tips en verhalen.`,
      body: [
        `Het terras van Café des Arcades was al vroeg bezet. ${n} leden schoven aan, sommigen met een croissant, anderen met een vers stokbrood van de markt onder de arm.`,
        "Er werd veel gedeeld: een goede loodgieter in Goult, een tip voor de keuring van de auto, en het verhaal van een lid wiens buurman al drie weken elke ochtend vijgen over de schutting gooit. Dat probleem willen meer mensen hebben.",
        "De ober kent ons inmiddels en bracht ongevraagd de koffie zoals we die graag drinken. Dat noemen we integratie.",
        "De volgende koffieochtend is op de tweede woensdag van de maand. Iedereen is welkom, aanmelden is niet nodig."
      ]
    }),
    (e, n) => ({
      title: `Koffieochtend met boekenruil: ${n} bezoekers`,
      excerpt: "De boekentafel was een succes. Er gingen meer boeken weg dan er werden gebracht, en dat is een mooi probleem.",
      body: [
        `Op de koffieochtend in Café des Arcades kwamen ${n} leden langs. Ook deze keer stond de tafel met Nederlandstalige boeken om te ruilen klaar.`,
        "Thrillers gingen het snelst, gevolgd door reisgidsen van plekken waar we al wonen. Een kookboek uit de jaren zeventig zorgde voor veel hilariteit en is uiteindelijk toch meegenomen.",
        "Aan de tafel voor nieuwe leden zaten drie mensen die net in de streek wonen. Ze gingen naar huis met een boek, een paar adressen en een afspraak voor de wandeling.",
        "Breng gerust je eigen boeken mee naar de volgende koffieochtend."
      ]
    })
  ],
  "picknick-vijver-verleden": [
    (e, n) => ({
      title: "Gezellige picknick bij de vijver",
      excerpt: `${n} leden genoten van een middag in het groen bij de Plan d'eau in Apt.`,
      body: [
        `Met ${n} deelnemers was het een gezellige middag bij de vijver. Iedereen had iets meegenomen, en zoals altijd was er veel te veel eten.`,
        "Er werd gepraat, een spelletje gedaan en af en toe een eend weggejaagd die het op het stokbrood had gemunt.",
        "Dank aan iedereen die er was. Op de agenda staan alweer nieuwe activiteiten."
      ]
    })
  ]
};

// Eenvoudige vaste hash, zodat aantallen en varianten per datum gelijk blijven
export function seed(text) {
  let h = 0;
  for (const c of text) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}
