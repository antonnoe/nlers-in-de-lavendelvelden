import { getEvents, getSiteUrl } from "../../lib/demoData";

export const dynamic = "force-dynamic";

function compactDate(iso) {
  return iso.replaceAll("-", "");
}

function compactTime(time) {
  return time.replace(":", "") + "00";
}

function icsEscape(value = "") {
  return String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .replaceAll("\n", "\\n");
}

export async function GET() {
  const site = getSiteUrl();
  const events = getEvents();
  const now = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const body = events.map((event) => `BEGIN:VEVENT
UID:${event.slug}-${event.date.iso}@lavendelvelden.demo
DTSTAMP:${now}
DTSTART;TZID=Europe/Paris:${compactDate(event.date.iso)}T${compactTime(event.time)}
DTEND;TZID=Europe/Paris:${compactDate(event.date.iso)}T${compactTime(event.end)}
SUMMARY:${icsEscape(event.title)}
LOCATION:${icsEscape(event.location)}
DESCRIPTION:${icsEscape(event.summary)}
URL:${site}/agenda#${event.slug}
END:VEVENT`).join("\r\n");

  const ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//NieuwsbriefAssistent//NLers in de lavendelvelden demo//NL\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\nX-WR-CALNAME:NL'ers in de lavendelvelden\r\nX-WR-TIMEZONE:Europe/Paris\r\n${body}\r\nEND:VCALENDAR\r\n`;

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": "inline; filename=agenda.ics",
      "Cache-Control": "no-store, max-age=0"
    }
  });
}
