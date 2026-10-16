// Extra fictieve berichten per rubriek. Datums zijn relatief aan vandaag (offset in dagen).
// Alle namen, bedrijven en situaties zijn verzonnen.

const C = {
  bestuur: ["Berichten van het bestuur", "bestuur"],
  leden: ["Ingezonden door leden", "leden"],
  partners: ["Van onze partners", "partners"],
  nieuws: ["Verenigingsnieuws", "verenigingsnieuws"],
  praktisch: ["Praktische informatie", "praktisch"]
};

const p = (cat, slug, offset, title, excerpt, body) => ({
  slug, offset, category: C[cat][0], categoryKey: C[cat][1], title, excerpt, body
});

export const extraPosts = [
  // Bestuur
  p("bestuur", "nieuwe-secretaris", -14, "Nieuwe secretaris stelt zich voor",
    "Na zes jaar draagt de secretaris het stokje over. Haar opvolger vertelt wie hij is en wat hij van plan is.",
    [
      "Beste leden, sinds deze maand ben ik jullie nieuwe secretaris. Mijn vrouw en ik wonen sinds vier jaar in Saignon, waar we een oud huis aan het opknappen zijn. Vooral dat laatste kost meer tijd dan we dachten.",
      "In Nederland was ik jarenlang secretaris van een roeivereniging, dus notulen maken zit in mijn vingers. Wat ik nog moet leren is notulen maken terwijl er tegelijk een plateau met kaas rondgaat.",
      "Mijn voorgangster wil ik namens het hele bestuur hartelijk bedanken. Zes jaar lang hield zij alles bij, van ledenlijst tot zaalhuur. Ze blijft gelukkig lid en heeft beloofd dat ik haar altijd mag bellen.",
      "Heb je een vraag, een idee of wil je iets kwijt? Je bereikt me via het algemene verenigingsadres.",
      "Hartelijke groet, Joost, secretaris"
    ]),
  p("bestuur", "zaalhuur-coustellet", -20, "Afspraken met de gemeente over de zaal in Coustellet",
    "Het bestuur heeft een nieuwe afspraak gemaakt voor het gebruik van de Salle Polyvalente. Voor leden verandert er weinig.",
    [
      "De Salle Polyvalente in Coustellet is voor onze grotere bijeenkomsten de vaste plek. Het bestuur heeft met de mairie afgesproken dat we de zaal ook het komende jaar op een aantal vaste data kunnen gebruiken.",
      "Voorwaarde is dat we de zaal netjes achterlaten en de stoelen weer op de stapel zetten zoals we ze aantroffen. De conciërge heeft ons daar vriendelijk maar duidelijk op gewezen, met een foto van hoe de stapel hoort te staan.",
      "We zoeken daarom per bijeenkomst twee leden die na afloop een kwartier willen helpen opruimen. Wie dat wil, kan zich opgeven bij de secretaris."
    ]),
  p("bestuur", "privacy-ledenlijst", -33, "Hoe we omgaan met de ledenlijst",
    "Een korte uitleg over welke gegevens de vereniging bewaart en waarvoor.",
    [
      "Regelmatig krijgen we de vraag of de ledenlijst gedeeld kan worden, bijvoorbeeld om samen te rijden naar een activiteit. Dat doen we niet zonder toestemming.",
      "De vereniging bewaart alleen naam, woonplaats, e-mailadres en eventueel een telefoonnummer. Die gegevens gebruiken we om de nieuwsbrief te versturen en om je te bereiken bij activiteiten. Alleen de secretaris en de penningmeester hebben toegang.",
      "Wil je graag in contact komen met leden uit je eigen dorp? Laat het de secretaris weten. Dan vragen we de andere leden of zij dat ook willen, en brengen we jullie met elkaar in contact.",
      "Deze tekst is fictief en hoort bij een demonstratiewebsite."
    ]),
  p("bestuur", "oproep-kascommissie", -45, "Oproep: wie wil in de kascommissie?",
    "Voor de volgende ledenvergadering zoeken we een nieuw lid voor de kascommissie. Ervaring met cijfers is handig maar niet nodig.",
    [
      "De kascommissie controleert één keer per jaar de boeken van de penningmeester. Dat kost een middag, een pot koffie en enige argwaan, al vindt de huidige commissie dat laatste meestal niet nodig.",
      "Een van de twee leden heeft er drie jaar op zitten en treedt af. We zoeken daarom een opvolger. Je hoeft geen boekhouder te zijn: nauwkeurig zijn en vragen durven stellen is genoeg.",
      "Interesse? Laat het weten aan de secretaris, dan nemen we de kandidaten op in de stukken voor de vergadering."
    ]),
  p("bestuur", "jubileum-plannen", -58, "Ons tienjarig bestaan komt eraan",
    "Het bestuur denkt na over een feestje voor het tweede lustrum en hoort graag jullie ideeën.",
    [
      "Het is moeilijk te geloven, maar de vereniging bestaat binnenkort tien jaar. Wat begon met zes Nederlanders aan een tafeltje in een café in Apt, is uitgegroeid tot een club met zo'n tweehonderd leden.",
      "Dat willen we vieren. Er liggen al een paar ideeën op tafel: een feestelijke lunch, een busreis naar de kust, of een boekje met verhalen van leden over hun eerste jaar in Frankrijk.",
      "Wat zou jij leuk vinden? Mail je idee naar het verenigingsadres. Het bestuur maakt na de zomer een keuze. Alle ideeën zijn welkom, behalve die van het lid dat voorstelde om met zijn allen te gaan parachutespringen.",
      "Alle inhoud op deze site is fictief, ook dit jubileum."
    ]),
  p("bestuur", "website-vernieuwd", -72, "Onze website in een nieuw jasje",
    "De website is vernieuwd. Je vindt er voortaan de agenda, verslagen en berichten van leden op één plek.",
    [
      "Misschien is het je al opgevallen: de website ziet er anders uit. Alle activiteiten staan nu in een overzichtelijke agenda, je vindt er verslagen van afgelopen bijeenkomsten en leden kunnen hun eigen berichten insturen.",
      "Wie de agenda in zijn eigen telefoonagenda wil hebben, kan zich abonneren via de agendalink onderaan de pagina. Dan zie je de activiteiten vanzelf verschijnen.",
      "Zie je een fout, of mis je iets? Laat het ons weten. We zijn geen professionals, maar we doen ons best."
    ]),

  // Van leden
  p("leden", "vijgenjam-recept", -4, "Recept: vijgenjam van de buurman",
    "Te veel vijgen? Een lid deelt het recept dat ze van haar Franse buurman kreeg, inclusief zijn geheime ingrediënt.",
    [
      "Elk jaar rond deze tijd hangt de vijgenboom van mijn buurman zo vol dat hij de vruchten bij bosjes over de schutting aanreikt. Weigeren is geen optie. Daarom maak ik jam, en dat doe ik volgens zijn recept.",
      "Je hebt nodig: een kilo rijpe vijgen, ongeveer zevenhonderd gram suiker, het sap van een citroen en, nu komt het, een takje rozemarijn. Snijd de vijgen in stukjes, laat ze een nacht met de suiker staan en kook ze daarna zachtjes in met de citroen en de rozemarijn.",
      "Haal het takje eruit voordat je de jam in de potten doet. Mijn buurman zegt dat je hem ook kunt laten zitten, maar mijn buurman zegt wel meer.",
      "Lekker bij geitenkaas. Of gewoon op een boterham, zoals een echte Nederlander.",
      "Marijke, Goult"
    ]),
  p("leden", "gezocht-tuinhulp", -9, "Gezocht: iemand met groene vingers",
    "Een lid zoekt tijdens een verblijf in Nederland iemand die af en toe de planten water geeft.",
    [
      "In de wintermaanden zijn wij een paar weken in Nederland voor de kleinkinderen. Onze olijfbomen kunnen wel tegen een stootje, maar de potplanten op het terras niet.",
      "Wie woont er in de buurt van Bonnieux en wil één keer per week langskomen om water te geven? Uiteraard tegen een vergoeding, of tegen een fles wijn naar keuze. Of allebei.",
      "Reageren kan via het verenigingsadres, dat stuurt het aan ons door.",
      "Henk en Ria, Bonnieux"
    ]),
  p("leden", "mijn-eerste-jaar", -16, "Mijn eerste jaar in de Luberon",
    "Een nieuw lid schrijft over het eerste jaar: van de bakker die haar niet verstond tot de buurvrouw die haar redde.",
    [
      "Een jaar geleden reden we met een volle aanhanger en een kat die het niet eens was met de verhuizing het dorp binnen. Inmiddels wonen we er een jaar, en ik wilde graag delen hoe dat was.",
      "De eerste weken bestelde ik bij de bakker elke ochtend 'un baguette'. De bakker verbeterde me elke ochtend vriendelijk: 'une baguette'. Na drie weken zei hij niets meer. Ik weet nog steeds niet of ik het goed deed of dat hij het had opgegeven.",
      "Het moeilijkste was de papierwinkel. Het fijnste was de buurvrouw, die op een dag met een schaal tomaten voor de deur stond en ons meenam naar het dorpsfeest. Sindsdien voelen we ons hier thuis.",
      "Aan alle nieuwe leden: kom naar de koffieochtend. Daar hoorde ik meer nuttige tips dan in alle boeken bij elkaar.",
      "Sandra, Céreste"
    ]),
  p("leden", "te-koop-fietsendrager", -23, "Te koop: fietsendrager voor twee fietsen",
    "Weinig gebruikt, geschikt voor e-bikes. Ophalen in Cavaillon.",
    [
      "Omdat we onze auto hebben ingeruild, verkopen we onze fietsendrager voor op de trekhaak. Hij is geschikt voor twee fietsen, ook voor zwaardere e-bikes, en is maar een paar keer gebruikt.",
      "Vraagprijs: 150 euro, of een redelijk bod. Ophalen in Cavaillon.",
      "Interesse? Mail het verenigingsadres, dan nemen we contact op.",
      "Wim, Cavaillon"
    ]),
  p("leden", "gedicht-mistral", -30, "Ingezonden: een gedichtje over de mistral",
    "Een lid kon niet slapen door de wind en schreef er een gedicht over.",
    [
      "Drie dagen waaide het zo hard dat de luiken klapperden en de tuinstoelen op eigen houtje een wandeling maakten. In de nacht schreef ik dit:",
      "De mistral komt zonder kloppen binnen, / hij rammelt aan de deur en aan je zinnen. / Hij blaast de wolken van de lucht, / en neemt je was mee op de vlucht.",
      "De volgende ochtend was de lucht stralend blauw en lag mijn wasgoed bij de buren. Die hadden het netjes opgevouwen.",
      "Gerard, Apt"
    ]),
  p("leden", "zoek-oppas-hond", -38, "Wie past af en toe op Bobbie?",
    "Een lid zoekt een vaste oppas voor een rustige, oudere hond.",
    [
      "Bobbie is een labrador van elf jaar oud. Hij slaapt het grootste deel van de dag, eet alles wat los en vast zit en houdt van iedereen.",
      "Als wij een paar dagen weg zijn, zoeken we iemand die bij ons in huis wil logeren of Bobbie bij zich in huis wil nemen. Wie woont er in de buurt van Lourmarin en houdt van honden?",
      "Bobbie kan zelf niet mailen, dus reacties graag via het verenigingsadres.",
      "Els, Lourmarin"
    ]),
  p("leden", "tip-nederlandse-tv", -51, "Tip: Nederlandse televisie kijken in Frankrijk",
    "Een lid deelt zijn ervaringen met het kijken van Nederlandse programma's op afstand.",
    [
      "Op de koffieochtend kwam het weer ter sprake: hoe kijk je hier Nederlandse televisie? Ik heb in de loop der jaren een paar dingen geprobeerd en deel graag mijn ervaringen.",
      "Veel programma's zijn terug te kijken via de websites en apps van de omroepen, maar niet alles is in het buitenland beschikbaar. Er zijn ook betaalde diensten die Nederlandse zenders aanbieden. Vergelijk goed wat je nodig hebt voordat je een abonnement neemt.",
      "Dit is een persoonlijke ervaring en geen advies. De mogelijkheden veranderen regelmatig, dus vraag op de koffieochtend gerust hoe anderen het doen.",
      "Peter, Ménerbes"
    ]),
  p("leden", "boekentip-provence", -64, "Boekentip: een jaar in de Provence, maar dan anders",
    "Een lid raadt een paar boeken aan voor de lange winteravonden.",
    [
      "Iedereen kent de klassiekers over Engelsen en Nederlanders die een vervallen boerderij in de Provence kopen. Ik heb er een stapel van gelezen, en eerlijk gezegd lijken ze nogal op elkaar.",
      "Daarom deze keer een andere tip: lees eens iets van Franse schrijvers uit de streek, over het leven hier vóór de toeristen kwamen. Op de boekentafel van de koffieochtend liggen een paar Nederlandse vertalingen. Ik heb ze er zelf neergelegd, dus ik weet het zeker.",
      "Zelf een boekentip? Stuur hem in, dan plaatsen we hem hier.",
      "Annelies, Roussillon"
    ]),
  p("leden", "kleinkinderen-logeren", -86, "Uitjes met de kleinkinderen: onze favorieten",
    "Komen de kleinkinderen logeren? Een lid zette een paar uitjes op een rij die altijd goed vallen.",
    [
      "In de schoolvakanties is het bij ons altijd vol. Na een paar jaar weten we welke uitjes werken en welke niet.",
      "Altijd raak: de okerrotsen van Roussillon, waar de kinderen oranje thuiskomen. Pootjebaden in de Sorgue bij Fontaine-de-Vaucluse, al is het water ijskoud. Een markt bezoeken met een eigen zakgeld van vijf euro, wat leidt tot verrassende aankopen.",
      "Minder geslaagd: een lange wandeling in de middaghitte. Daar hebben we van geleerd.",
      "Joke en Bert, Apt"
    ]),

  // Partners (fictief)
  p("partners", "partner-zwembadonderhoud", -12, "Het zwembad winterklaar maken",
    "Fictieve partner Piscines du Luberon legt uit waar je aan denkt als het zwemseizoen voorbij is.",
    [
      "Als het water te koud wordt om te zwemmen, is het tijd om aan de winter te denken. Een goed winterklaar zwembad bespaart in het voorjaar veel werk.",
      "Denk aan het reinigen van filter en bodem, het laten zakken van het waterpeil tot onder de skimmers waar dat nodig is, en het plaatsen van een goed afsluitend winterzeil. Laat bij twijfel een vakman meekijken.",
      "Deze bijdrage is afkomstig van een fictieve partner en maakt uitsluitend deel uit van deze demonstratiewebsite."
    ]),
  p("partners", "partner-makelaar-markt", -27, "Wat speelt er op de woningmarkt in de Luberon?",
    "Fictieve partner Immo Lavande geeft een algemene indruk van de lokale markt.",
    [
      "We krijgen regelmatig de vraag hoe de woningmarkt in de streek ervoor staat. Een algemeen antwoord is lastig, want het verschilt sterk per dorp en per type woning.",
      "Woningen met een goede energieprestatie en een eenvoudige tuin zijn gewild. Oudere huizen die veel werk vragen, staan vaak langer te koop. Laat je altijd goed informeren voordat je koopt of verkoopt.",
      "Deze tekst is fictieve demonstratiecontent van een niet-bestaande partner en vormt geen advies."
    ]),
  p("partners", "partner-tuinman-olijven", -41, "De olijfbomen snoeien: wanneer en hoe?",
    "Fictieve partner Jardins de Provence geeft tips voor gezonde olijfbomen.",
    [
      "Olijfbomen zijn sterk, maar een goede snoeibeurt maakt ze gezonder en mooier. In deze streek wordt meestal in het voorjaar gesnoeid, als de grootste kans op vorst voorbij is.",
      "Een oude vuistregel zegt dat een zwaluw door de boom moet kunnen vliegen. Haal dus dode takken en waterloten weg en zorg dat er licht in de kroon komt.",
      "Deze bijdrage is afkomstig van een fictieve partner en maakt uitsluitend deel uit van deze demonstratiewebsite."
    ]),
  p("partners", "partner-vertaalbureau", -55, "Een officieel document laten vertalen",
    "Fictieve partner Traductions du Sud legt uit wanneer een beëdigde vertaling nodig kan zijn.",
    [
      "Voor sommige Franse instanties is een gewone vertaling niet genoeg en wordt een vertaling door een beëdigd vertaler gevraagd. Dat kan bijvoorbeeld gelden voor akten of diploma's.",
      "Vraag altijd eerst bij de instantie zelf na wat ze precies nodig hebben. Dat voorkomt dat je onnodig kosten maakt.",
      "Deze tekst is fictieve demonstratiecontent van een niet-bestaande partner en vormt geen juridisch advies."
    ]),
  p("partners", "partner-wijnhandel", -79, "Proeverij in de kelder: nieuwe oogst",
    "Fictieve partner Cave des Ocres nodigt leden uit voor een open middag.",
    [
      "In onze kelder in Roussillon liggen de wijnen van de nieuwe oogst klaar. Leden van de vereniging zijn welkom op onze open middag om te proeven en te kletsen.",
      "Neem gerust buren of vrienden mee. Voor wie rijdt, staat er altijd druivensap van het domein klaar.",
      "Deze bijdrage is afkomstig van een fictieve partner en maakt uitsluitend deel uit van deze demonstratiewebsite."
    ]),
  p("partners", "partner-klusbedrijf", -96, "Vochtige muren in een oud huis",
    "Fictieve partner Rénovation Calavon vertelt over een veelvoorkomend probleem in oude stenen huizen.",
    [
      "Veel oude huizen in de Luberon hebben dikke stenen muren. Die zijn prachtig, maar kunnen vochtig worden als ze worden afgesloten met verkeerde materialen zoals cement of plastic verf.",
      "Oude muren moeten kunnen ademen. Kalkpleister is daarom vaak een betere keuze. Laat bij vochtproblemen eerst goed onderzoeken waar het vocht vandaan komt.",
      "Deze tekst is fictieve demonstratiecontent van een niet-bestaande partner en vormt geen bouwadvies."
    ]),

  // Verenigingsnieuws
  p("nieuws", "ledenaantal-200", -6, "We zijn met tweehonderd",
    "Een mijlpaal: met de aanmelding van een gezin uit Sault telt de vereniging tweehonderd leden.",
    [
      "Deze maand hebben we een mooie mijlpaal bereikt: we zijn met tweehonderd leden. Het tweehonderdste lid is een gezin uit Sault, dat ons vond via de website.",
      "Ter ere daarvan kregen ze bij de koffieochtend een bos lavendel en een applaus. Ze keken wat verbaasd, maar waren er zichtbaar blij mee.",
      "Dank aan alle leden die de vereniging levendig houden. Zonder jullie geen activiteiten, geen verslagen en geen koffieochtend."
    ]),
  p("nieuws", "vrijwilliger-van-het-jaar", -19, "Een bedankje voor onze vrijwilligers",
    "Achter elke activiteit staan leden die helpen. Een woord van dank.",
    [
      "Een vereniging draait op vrijwilligers. Ze zetten stoelen klaar, schenken koffie, verkennen wandelroutes en zorgen dat er na afloop niets blijft liggen.",
      "Dit jaar willen we in het bijzonder de leden bedanken die al jaren de koffieochtend verzorgen. Wekelijks staan ze klaar met een glimlach en een thermoskan. Daarnaast verdient de routecommissie een pluim, die elke wandeling vooraf een keer loopt, ook in de regen.",
      "Wil je ook helpen? Dat kan met een uurtje per maand. Laat het de secretaris weten."
    ]),
  p("nieuws", "samenwerking-franse-vereniging", -35, "Samen met de Franse buren",
    "De vereniging gaat vaker samen optrekken met een Franse dorpsvereniging uit Apt.",
    [
      "Een van onze doelen is niet alleen samen Nederlands te zijn, maar ook onze Franse buren beter te leren kennen. Daarom zijn we blij met de nieuwe samenwerking met een fictieve dorpsvereniging uit Apt.",
      "Het idee is eenvoudig: zij nodigen ons uit voor hun activiteiten, wij nodigen hen uit voor de onze. Het taalcafé is daar een mooi begin van gebleken. Bij de volgende Sinterklaasmiddag zijn ook Franse gezinnen welkom.",
      "Zo leren we de streek kennen zoals de bewoners hem kennen, en zij leren eindelijk wat een pepernoot is."
    ]),
  p("nieuws", "nieuwe-wandelroute", -48, "De routecommissie heeft een nieuwe route gevonden",
    "Na drie verkenningstochten is er een nieuwe wandelroute bij gekomen, geschikt voor iedereen.",
    [
      "De routecommissie heeft niet stilgezeten. Na drie verkenningstochten, waarvan één in de stromende regen, is er een nieuwe route bij gekomen rond het Étang de la Bonde.",
      "De route is vlak, ongeveer vijf kilometer lang en daardoor ook geschikt voor leden die niet meer zo ver kunnen lopen. Halverwege staat een bankje met uitzicht over het water.",
      "De route staat binnenkort op de agenda. Wie zelf een mooie route kent, kan die aan de commissie doorgeven."
    ]),
  p("nieuws", "kinderhoek", -63, "Ook de jongste leden doen mee",
    "Steeds meer gezinnen met jonge kinderen worden lid. Daarom komt er bij grotere activiteiten een kinderhoek.",
    [
      "De vereniging bestaat niet alleen uit gepensioneerden, al zijn die ruim vertegenwoordigd. De laatste jaren zijn er ook gezinnen met jonge kinderen bijgekomen.",
      "Bij de grotere activiteiten, zoals de zomerpicknick en de Sinterklaasmiddag, komt daarom een kinderhoek met spelletjes, kleurplaten en een paar vrijwilligers die er een oogje op houden.",
      "Ouders die willen meedenken over activiteiten voor kinderen zijn van harte welkom."
    ]),
  p("nieuws", "fotowedstrijd", -77, "Fotowedstrijd: jouw mooiste plek in de Luberon",
    "Stuur je mooiste foto van de streek in. De winnende foto's komen op de website en in de nieuwsbrief.",
    [
      "We zijn benieuwd naar jouw favoriete plek in de Luberon. Is het een veld, een dorpje, een uitzicht of een terras waar je altijd koffie drinkt?",
      "Stuur je foto met een korte uitleg naar het verenigingsadres. Een kleine jury kiest de drie mooiste. De winnaars krijgen een fles wijn en een ereplaats op de website.",
      "Insturen kan tot het einde van de maand. Per lid maximaal drie foto's, ook al weten we dat het moeilijk kiezen is."
    ]),
  p("nieuws", "in-memoriam-fictief", -101, "In memoriam",
    "Met verdriet melden we het overlijden van een van onze oudste leden.",
    [
      "Met verdriet hebben wij kennisgenomen van het overlijden van Klaas, een van de oprichters van onze vereniging. Hij werd 86 jaar.",
      "Klaas was er vanaf het allereerste begin bij, aan dat tafeltje in het café in Apt. Hij was jarenlang onze vaste gids bij de wandelingen en kende ieder pad in de Luberon.",
      "Wij wensen zijn familie veel sterkte. Dit bericht is fictief en hoort bij een demonstratiewebsite."
    ]),

  // Praktisch
  p("praktisch", "tip-vuilnis-scheiden", -11, "Afval scheiden in de Luberon",
    "Welke container is voor wat? Leden delen hun ervaringen met de regels in hun gemeente.",
    [
      "Wie hier net woont, staat vaak even te twijfelen bij de containers. De regels voor afval scheiden verschillen per gemeente en worden zo nu en dan aangepast.",
      "De meeste gemeenten hebben containers voor glas, papier en verpakkingen, en een déchetterie voor grofvuil en tuinafval. Kijk op de website van je gemeente of de intercommunalité voor de actuele regels en openingstijden.",
      "Dit is een ervaringsbericht van leden en geen officiële informatie."
    ]),
  p("praktisch", "tip-huisarts", -25, "Een huisarts vinden: ervaringen van leden",
    "Op de koffieochtend de meest gestelde vraag. Een paar praktische ervaringen op een rij.",
    [
      "Een huisarts vinden is in sommige dorpen niet eenvoudig. Leden vertellen dat het helpt om rond te vragen bij buren, de apotheek of de mairie.",
      "Neem bij je eerste bezoek je medische gegevens mee, liefst ook vertaald. Sommige leden hebben goede ervaringen met een gezondheidscentrum, waar meerdere artsen samenwerken.",
      "Dit is een ervaringsbericht en geen medisch of officieel advies. Voor de actuele regels rond zorgverzekering en registratie raadpleeg je de officiële instanties."
    ]),
  p("praktisch", "tip-hitte", -42, "Koel blijven in een warme zomer",
    "Leden delen hun beste trucs om het huis koel te houden zonder airco.",
    [
      "De zomers in de Vaucluse kunnen flink warm zijn. Onze leden hebben in de loop der jaren heel wat trucs verzameld.",
      "Luiken overdag dicht en 's nachts open is de gouden regel. Een natte doek voor een open raam helpt een beetje, en een plataan voor het huis helpt veel. Een lid zweert bij een voetenbadje onder het bureau.",
      "Let in warme periodes ook op elkaar, zeker op oudere buren die alleen wonen."
    ]),
  p("praktisch", "tip-markten", -57, "Welke markt op welke dag?",
    "Een handig overzicht van de weekmarkten in de buurt, samengesteld door leden.",
    [
      "In de Luberon is er bijna elke dag wel ergens een markt. Leden stelden een lijstje samen van hun favorieten.",
      "Apt op zaterdagochtend is groot en levendig. Lourmarin op vrijdag is gezellig maar druk. Coustellet heeft een mooie boerenmarkt. Kleinere dorpen hebben vaak een paar kraampjes op een vaste ochtend.",
      "Dagen en tijden kunnen veranderen, zeker buiten het seizoen. Kijk voor de zekerheid bij het toeristenbureau. Dit is een ervaringsbericht van leden."
    ]),
  p("praktisch", "tip-bosbrand", -69, "Wat te doen bij een waarschuwing voor bosbrand",
    "Leden delen hoe ze op de hoogte blijven tijdens het brandseizoen.",
    [
      "In de zomer is het risico op bosbranden in de regio hoog. Veel leden willen weten hoe ze op de hoogte blijven en wat ze kunnen doen.",
      "Houd de berichten van de officiële instanties in de gaten, zeker als je in de buurt van bos woont. In periodes met hoog risico kunnen massieven worden afgesloten voor wandelaars. Respecteer dat altijd.",
      "Dit is een ervaringsbericht. Volg bij gevaar altijd de aanwijzingen van de hulpdiensten op. Het noodnummer in Europa is 112."
    ]),
  p("praktisch", "tip-frans-leren", -88, "Frans leren: wat werkt?",
    "Taalcursus, app of gewoon praten met de buren? Leden vertellen wat voor hen werkte.",
    [
      "De vraag die elk nieuw lid stelt: hoe leer ik het snelst Frans? Het eerlijke antwoord: dat verschilt per persoon.",
      "Sommige leden volgen een cursus bij een plaatselijke vereniging of de mairie. Anderen oefenen met een app en durven daarna te praten op de markt. Het taalcafé van onze vereniging is een fijne plek om zonder schaamte fouten te maken.",
      "Een lid geeft als tip: zeg altijd eerst 'bonjour'. De rest volgt vanzelf, of niet, maar dan ben je in ieder geval beleefd geweest."
    ])
];
