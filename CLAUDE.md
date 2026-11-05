# CLAUDE.md

Repo: nlers-in-de-lavendelvelden

## Wat dit is
Volledig fictieve demonstratiewebsite van een kleine Nederlandse vereniging in de Luberon/Vaucluse (ongeveer 200 leden), bedoeld als live demo-input voor de NieuwsbriefAssistent (bron: README.md).

## Live adres
https://nlers-in-de-lavendelvelden.vercel.app (standaardwaarde in lib/demoData.js en README.md, te overschrijven met NEXT_PUBLIC_SITE_URL)

## Opbouw
- `app/`: Next.js App Router met `page.js`, `[section]/page.js`, `agenda/page.js`, `bericht/[slug]/page.js`, `feed.xml/route.js` (RSS), `agenda.ics/route.js` (iCal), `demo-image/[slug]/route.js` (synthetische illustraties), `robots.js`, `layout.js`, `globals.css`
- `components/SiteChrome.js`: kop en voet van de site
- `lib/`: `demoData.js` (agenda-regels en berichten), `berichten.js`, `verslagen.js` (automatische verslagen)
- `public/`: banner en sponsorlogo's
- `.github/workflows/build.yml`: bouwcontrole bij push en pull request op main

## Techniek
Next.js, React en react-dom (allemaal op "latest"), scripts dev, build en start. Geen database. Alle datums worden relatief aan de huidige datum berekend. De site staat op noindex, nofollow.

## Externe diensten en namen van omgevingsvariabelen
- Vercel (hosting)
- Google Fonts (via CSS-import)
- Omgevingsvariabele: NEXT_PUBLIC_SITE_URL (optioneel)
- Geen API-sleutels nodig.

## Hoe het live gaat
Geschikt voor Vercel, zonder database of externe feed. GitHub Actions doet alleen een bouwcontrole (Node 22, npm install, npm run build).

## Regels en besluiten
Uit README.md:
- Alle content is fictief, geen echte persoonsgegevens.
- Partnerbijdragen zijn van niet-bestaande bedrijven en praktische berichten bevatten geen harde bedragen of termijnen.
- Er staat bewust één in memoriam tussen de berichten, om de NieuwsbriefAssistent daarop te testen.
- De site blokkeert crawlers via robots.txt en noindex, nofollow.

Laatst nagelopen: 5 november 2026
