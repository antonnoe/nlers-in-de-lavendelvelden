import { getEvents, getPosts, getSiteUrl } from "../../lib/demoData";

export const dynamic = "force-dynamic";

function esc(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function rfcDate(iso, hour = 10) {
  return new Date(`${iso}T${String(hour).padStart(2, "0")}:00:00+02:00`).toUTCString();
}

export async function GET() {
  const site = getSiteUrl();
  const posts = getPosts().map((post) => ({
    title: post.title,
    link: `${site}/bericht/${post.slug}`,
    guid: `post-${post.slug}`,
    description: post.excerpt,
    category: post.category,
    pubDate: rfcDate(post.date.iso, 9),
    image: `${site}/demo-image/${post.slug}`
  }));

  const events = getEvents().map((event) => ({
    title: `Agenda: ${event.title}`,
    link: `${site}/agenda#${event.slug}`,
    guid: `event-${event.slug}-${event.date.iso}`,
    description: `${event.dateLabel}, ${event.time}–${event.end}. ${event.summary} Locatie: ${event.location}.`,
    category: "Agenda",
    pubDate: rfcDate(event.date.iso, 8),
    image: `${site}/demo-image/${event.slug}`
  }));

  const items = [...posts, ...events]
    .map((item) => `
      <item>
        <title>${esc(item.title)}</title>
        <link>${esc(item.link)}</link>
        <guid isPermaLink="false">${esc(item.guid)}</guid>
        <description>${esc(item.description)}</description>
        <category>${esc(item.category)}</category>
        <pubDate>${item.pubDate}</pubDate>
        <media:content url="${esc(item.image)}" type="image/svg+xml" medium="image" />
      </item>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>NL'ers in de lavendelvelden</title>
    <link>${esc(site)}</link>
    <description>Fictieve RSS-feed voor de demonstratie van de NieuwsbriefAssistent.</description>
    <language>nl-NL</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>NL'ers in de lavendelvelden demo</generator>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "no-store, max-age=0"
    }
  });
}
