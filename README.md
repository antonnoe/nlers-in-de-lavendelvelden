# NL'ers in de lavendelvelden

Volledig fictieve demonstratiewebsite voor de **NieuwsbriefAssistent**.

## Doel
De site simuleert een kleine Nederlandse vereniging in de Luberon/Vaucluse met ongeveer 200 leden. De inhoud dient als live demo-input voor een nieuwsbriefworkflow.

## Belangrijkste demo-bronnen
- `/feed.xml` — algemene RSS-feed met berichten en agenda-items
- `/agenda.ics` — fictieve iCal-feed
- `/demo-image/[slug]` — synthetische illustraties per item

Alle datums worden relatief aan de huidige datum berekend. Daardoor schuiven berichten en activiteiten automatisch mee zonder handmatig onderhoud.

## Agenda
De agenda bestaat uit vaste regels in `lib/demoData.js` (`recurringRules`) plus een paar losse testitems (`oneOffEvents`). Niets hoeft met de hand te worden bijgehouden.

- Maandwandeling: elke eerste dinsdag van de maand, wisselende route
- Lezing over de regio (Var, Vaucluse, Provence-Alpes-Côte d'Azur): ieder kwartaal, derde donderdag van februari, mei, augustus en november
- Sinterklaasmiddag: zaterdag vóór 5 december (valt 5 december op zaterdag, dan de zaterdag ervoor)
- Nieuwjaarsborrel: derde zaterdag van januari
- Verder: koffieochtend (2e woensdag), taalcafé (1e en 3e maandag, niet in juli en augustus), klaverjassen (2e en 4e maandag), bijpraatlunch (4e donderdag), pétanque (laatste vrijdag april tot oktober), fietstocht (3e zondag april tot september), ALV (2e zaterdag maart), Koningsdag, welkomstmiddag nieuwe leden, lavendeldistilleerderij, zomerpicknick, wijnoogst, kerstlunch
- Testitems: één activiteit in het verleden en één geannuleerde (STATUS:CANCELLED)

Bereik: de iCal-feed loopt van 60 dagen terug tot een jaar vooruit, de RSS-feed van 14 dagen terug tot 60 dagen vooruit, de agendapagina toont de komende zes maanden per maand.

## Banner
Plaats de bestaande banner als:

`public/lavendelvelden-banner.jpg`

De CSS bevat een fallback zolang het bestand nog niet aanwezig is.

## Deploy
Geschikt voor Vercel. Geen database of externe feed nodig.

Optioneel kan `NEXT_PUBLIC_SITE_URL` worden ingesteld op de definitieve demo-URL. Zonder deze variabele wordt uitgegaan van:

`https://nlers-in-de-lavendelvelden.vercel.app`

## Veiligheid
- Alle content is fictief.
- Geen echte persoonsgegevens.
- Geen API-sleutels nodig.
- De website gebruikt `noindex, nofollow` en blokkeert crawlers via `robots.txt`.
