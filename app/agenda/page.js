import { EventCard, PageIntro } from "../../components/SiteChrome";
import { getEvents } from "../../lib/demoData";

export const dynamic = "force-dynamic";

export const metadata = { title: "Agenda" };

export default function AgendaPage() {
  const events = getEvents();
  return (
    <>
      <PageIntro kicker="Activiteiten" title="Agenda">De agenda schuift automatisch mee met de datum. Voor de demonstratie is dezelfde informatie ook beschikbaar als iCal-feed.</PageIntro>
      <section className="section container">
        <div className="events">
          {events.map((event) => <EventCard key={event.slug} event={event} />)}
        </div>
        <div className="notice"><strong>Agenda-abonnement:</strong> <a href="/agenda.ics">open de fictieve iCal-feed</a>.</div>
      </section>
    </>
  );
}
