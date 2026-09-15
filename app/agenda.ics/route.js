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

  const body = events.map((event) => {
    const regels = [
      "BEGIN:VEVENT",
      `UID:${event.slug}-${event.date.iso}@lavendelvelden.demo`,
      `DTSTAMP:${now}`,
      `DTSTART;TZID=Europe/Paris:${compactDate(event.date.iso)}T${compactTime(event.time)}`,
      `DTEND;TZID=Europe/Paris:${compactDate(event.date.iso)}T${compactTime(event.end)}`,
      `SUMMARY:${icsEscape(event.title)}`,
      `LOCATION:${icsEscape(event.location)}`,
      `DESCRIPTION:${icsEscape(event.summary)}`,
      `STATUS:${event.cancelled || event.geannuleerd ? "CANCELLED" : "CONFIRMED"}`,
      `URL:${site}/agenda#${event.slug}`,
      "END:VEVENT"
    ];
    return regels.join("\r\n");
  }).join("\r\n");

  const kop = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NieuwsbriefAssistent//NLers in de lavendelvelden demo//NL",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:NL'ers in de lavendelvelden",
    "X-WR-TIMEZONE:Europe/Paris"
  ].join("\r\n");

  const ics = `${kop}\r\n${body}\r\nEND:VCALENDAR\r\n`;

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": "inline; filename=agenda.ics",
      "Cache-Control": "no-store, max-age=0"
    }
  });
}
