import { notFound } from "next/navigation";
import { PageIntro, PostCard } from "../../components/SiteChrome";
import { getPosts } from "../../lib/demoData";

export const dynamic = "force-dynamic";

const sections = {
  bestuur: {
    title: "Berichten van het bestuur",
    kicker: "Vereniging",
    intro: "Mededelingen, oproepen en praktische berichten van het fictieve bestuur.",
    categoryKey: "bestuur"
  },
  leden: {
    title: "Ingezonden door leden",
    kicker: "Van leden",
    intro: "Ervaringen, oproepen, tips, vragen en verslagen die door fictieve leden zijn ingezonden.",
    categoryKey: "leden"
  },
  partners: {
    title: "Van onze partners",
    kicker: "Partnerbijdragen",
    intro: "Voorbeeldbijdragen van volledig fictieve partners. Ze zijn bewust herkenbaar gehouden als partnercontent.",
    categoryKey: "partners"
  },
  verslagen: {
    title: "Verslagen",
    kicker: "Terugblik",
    intro: "Hoe was het? Korte verslagen van onze afgelopen activiteiten, geschreven door fictieve leden.",
    categoryKey: "verslagen"
  },
  verenigingsnieuws: {
    title: "Verenigingsnieuws",
    kicker: "Nieuws",
    intro: "Verslagen, nieuwtjes en ontwikkelingen binnen de fictieve vereniging.",
    categoryKey: "verenigingsnieuws"
  },
  praktisch: {
    title: "Praktische informatie",
    kicker: "Handig om te weten",
    intro: "Ledenervaringen en praktische tips uit het dagelijks leven in de Luberon. In deze demo is alle inhoud fictief.",
    categoryKey: "praktisch"
  },
  "over-ons": {
    title: "Over de vereniging",
    kicker: "Over ons",
    intro: "Een vereniging van en voor Nederlanders in de Luberon en de Vaucluse. Gezellig, behulpzaam en een tikje eigenwijs. En, eerlijk is eerlijk, volledig fictief.",
    special: true
  }
};

export default async function SectionPage({ params }) {
  const { section } = await params;
  const config = sections[section];
  if (!config) notFound();

  if (config.special) {
    return (
      <>
        <PageIntro kicker={config.kicker} title={config.title}>{config.intro}</PageIntro>
        <section className="section container">
          <div className="about-grid">
            <div className="panel">
              <h2>Hoe het begon</h2>
              <p>Het verhaal gaat dat zes Nederlanders elkaar op een regenachtige dinsdag tegenkwamen in een café in Apt, omdat ze alle zes op zoek waren naar dezelfde loodgieter. De loodgieter kwam niet opdagen, de vereniging was geboren.</p>
              <p>Inmiddels telt de vereniging ongeveer tweehonderd leden, van Cavaillon tot Sault en van Gordes tot Pertuis. We organiseren wandelingen, lezingen, lunches, feesten en vooral heel veel koffieochtenden.</p>
            </div>
            <div className="panel">
              <h2>Waar we voor staan</h2>
              <p>Elkaar ontmoeten, elkaar helpen en samen de streek ontdekken. We zijn een vereniging van Nederlanders, maar we kijken graag naar buiten: Franse buren zijn altijd welkom, bij het taalcafé en bij onze feesten.</p>
              <p>We zijn geen belangenvereniging en geven geen officieel advies. Wel delen leden hun ervaringen, en daar heb je vaak meer aan dan je denkt.</p>
            </div>
            <div className="panel">
              <h2>Het bestuur</h2>
              <ul className="plain-list">
                <li><strong>Voorzitter:</strong> Margriet, Bonnieux</li>
                <li><strong>Secretaris:</strong> Joost, Saignon</li>
                <li><strong>Penningmeester:</strong> Frank, Apt</li>
                <li><strong>Activiteiten:</strong> Ineke, Lourmarin</li>
                <li><strong>Nieuwsbrief en website:</strong> Ruud, Goult</li>
              </ul>
              <p>Daarnaast zijn er een routecommissie, een kascommissie en een vaste ploeg voor de koffieochtend.</p>
            </div>
            <div className="panel">
              <h2>Lid worden</h2>
              <p>Iedereen die zich verbonden voelt met Nederland en in of rond de Luberon woont, of hier regelmatig verblijft, is welkom. De contributie is 35 euro per huishouden per jaar.</p>
              <p>Leden ontvangen de nieuwsbrief, krijgen korting bij activiteiten en zijn welkom bij de algemene ledenvergadering. Aanmelden kan via <strong>leden@lavendelvelden.demo</strong>.</p>
            </div>
          </div>
          <div className="notice"><strong>Let op:</strong> deze vereniging bestaat niet. Alle namen, bedragen, adressen en berichten zijn verzonnen voor de demonstratie van de NieuwsbriefAssistent. De site is ingesteld op <strong>noindex, nofollow</strong>.</div>
        </section>
      </>
    );
  }

  const posts = getPosts().filter((post) => post.categoryKey === config.categoryKey);

  return (
    <>
      <PageIntro kicker={config.kicker} title={config.title}>{config.intro}</PageIntro>
      <section className="section container">
        <div className="cards">
          {posts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </section>
    </>
  );
}
