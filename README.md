# NL'ers in de lavendelvelden

Volledig fictieve demonstratiewebsite voor de **NieuwsbriefAssistent**.

## Doel
De site simuleert een kleine Nederlandse vereniging in de Luberon/Vaucluse met ongeveer 200 leden. De inhoud dient als live demo-input voor een nieuwsbriefworkflow.

## Belangrijkste demo-bronnen
- `/feed.xml` — algemene RSS-feed met berichten en agenda-items
- `/agenda.ics` — fictieve iCal-feed
- `/demo-image/[slug]` — synthetische illustraties per item

Alle datums worden relatief aan de huidige datum berekend. Daardoor schuiven berichten en activiteiten automatisch mee zonder handmatig onderhoud.

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
