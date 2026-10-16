import { EventCard, PageIntro } from "../../components/SiteChrome";
import { getUpcomingEvents, monthLabel } from "../../lib/demoData";

export const dynamic = "force-dynamic";

export const metadata = { title: "Agenda" };

export default function AgendaPage() {
  const events = getUpcomingEvents(183);
  const months = [];
  for (const event of events) {
    const label = monthLabel(event.date);
    if (!months.length || months[months.length - 1].label !== label) months.push({ label, events: [] });
    months[months.length - 1].events.push(event);
  }
  return (
    <>
      <PageIntro kicker="Activiteiten" title="Agenda">Alle activiteiten voor de komende zes maanden. De agenda schuift automatisch mee met de datum; vaste activiteiten zoals de maandwandeling, de koffieochtend en de kwartaallezing komen vanzelf terug. Dezelfde informatie staat ook in de iCal-feed, voor een jaar vooruit.</PageIntro>
      <section className="section container">
        {months.map((month) => (
          <div key={month.label} className="agenda-month">
            <h2 className="agenda-month-title">{month.label}</h2>
            <div className="events">
              {month.events.map((event) => <EventCard key={event.slug} event={event} />)}
            </div>
          </div>
        ))}
        <div className="notice"><strong>Agenda-abonnement:</strong> <a href="/agenda.ics">open de fictieve iCal-feed</a>.</div>
      </section>
    </>
  );
}
