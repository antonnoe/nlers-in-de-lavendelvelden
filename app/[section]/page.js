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
    kicker: "Sinds kort, maar alleen in deze demo",
    intro: "NL'ers in de lavendelvelden is geen echte vereniging. De site simuleert een klassieke Nederlandse vereniging in Zuid-Frankrijk voor demonstraties van de NieuwsbriefAssistent.",
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
          <div className="panel">
            <h2>Een geloofwaardige bron, geen echte organisatie</h2>
            <p>De vereniging telt in de demo ongeveer 200 leden en is gevestigd in de Luberon/Vaucluse. De website bevat bestuursberichten, ledeninzendingen, verenigingsnieuws, partnerbijdragen en een agenda.</p>
            <p>De inhoud is ontworpen om verschillende typen input te leveren aan de NieuwsbriefAssistent. Er worden geen echte persoonsgegevens verwerkt en de site is ingesteld op <strong>noindex, nofollow</strong>.</p>
          </div>
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
