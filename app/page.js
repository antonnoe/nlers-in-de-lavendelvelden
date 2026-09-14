import { EventCard, PostCard, SectionHeading } from "../components/SiteChrome";
import { getEvents, getPosts } from "../lib/demoData";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const posts = getPosts();
  const events = getEvents();

  return (
    <>
      <section className="container home-grid">
        <div className="panel">
          <p className="eyebrow dark">Welkom</p>
          <h2>Samen thuis in de Provence</h2>
          <p>NL&apos;ers in de lavendelvelden is een fictieve vereniging van ongeveer 200 Nederlanders in en rond de Luberon. We organiseren activiteiten, delen praktische ervaringen en houden elkaar op de hoogte van wat er in de regio speelt.</p>
          <p>Deze website is speciaal gebouwd als demonstratiebron voor de <strong>NieuwsbriefAssistent</strong>. Alle personen, organisaties, berichten en activiteiten zijn fictief.</p>
        </div>
        <aside className="panel" id="nieuwsbrief">
          <p className="eyebrow dark">Nieuwsbrief</p>
          <h2>Op de hoogte blijven?</h2>
          <p>Onze fictieve nieuwsbrief verschijnt regelmatig met verenigingsnieuws, agenda, ledenbijdragen en berichten van partners.</p>
          <div className="notice"><strong>Demo:</strong> deze inschrijving verzendt geen gegevens.</div>
          <p><strong>Machineleesbare bronnen</strong><br /><a className="text-link" href="/feed.xml">RSS-feed →</a><br /><a className="text-link" href="/agenda.ics">iCal-agenda →</a></p>
        </aside>
      </section>

      <section className="section container">
        <SectionHeading title="Binnenkort op de agenda" link="/agenda" />
        <div className="events">
          {events.slice(0, 4).map((event) => <EventCard key={event.slug} event={event} />)}
        </div>
      </section>

      <section className="section container">
        <SectionHeading title="Laatste berichten" />
        <div className="cards">
          {posts.slice(0, 6).map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </section>

      <section className="section container">
        <div className="feed-box">
          <p className="eyebrow dark">Voor de demo van NieuwsbriefAssistent</p>
          <h2>De bronnen bewegen automatisch mee</h2>
          <p>Berichtdatums en agenda-items worden relatief aan de huidige datum berekend. Daardoor blijft de demonstratie actueel zonder dat iemand iedere week fictieve artikelen hoeft te publiceren.</p>
          <p>RSS: <code>/feed.xml</code> &nbsp; Agenda: <code>/agenda.ics</code></p>
        </div>
      </section>
    </>
  );
}
