import Link from "next/link";

const navItems = [
  ["/", "Home"],
  ["/agenda", "Agenda"],
  ["/bestuur", "Bestuur"],
  ["/leden", "Van leden"],
  ["/partners", "Partners"],
  ["/verenigingsnieuws", "Verenigingsnieuws"],
  ["/praktisch", "Praktisch"],
  ["/over-ons", "Over ons"]
];

export function Header() {
  return (
    <>
      <div className="demo-strip">DEMONSTRATIEWEBSITE · FICTIEVE VERENIGING</div>
      <header className="site-header">
        <div className="hero">
          <div className="hero-overlay">
            <div className="container hero-inner">
              <p className="eyebrow">Nederlandse vereniging in de Luberon</p>
              <h1>NL&apos;ers in de lavendelvelden</h1>
              <p className="hero-sub">Voor ontmoeting, informatie en activiteiten in de Vaucluse.</p>
            </div>
          </div>
        </div>
        <nav className="main-nav" aria-label="Hoofdnavigatie">
          <div className="container nav-inner">
            {navItems.map(([href, label]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>NL&apos;ers in de lavendelvelden</h2>
          <p>Een volledig fictieve vereniging en demonstratiewebsite voor de NieuwsbriefAssistent.</p>
        </div>
        <div>
          <h3>Voor de demo</h3>
          <p><a href="/feed.xml">RSS-feed</a><br /><a href="/agenda.ics">Agenda-feed (iCal)</a><br /><a href="/#nieuwsbrief">Nieuwsbrief</a></p>
        </div>
        <div>
          <h3>Belangrijk</h3>
          <p>Namen, bedrijven, adressen en berichten op deze website zijn fictief.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ kicker, title, children }) {
  return (
    <section className="page-intro container">
      {kicker && <p className="eyebrow dark">{kicker}</p>}
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export function PostCard({ post }) {
  return (
    <article className="card post-card">
      <div
        className={`card-visual visual-${post.categoryKey}`}
        style={{ backgroundImage: `linear-gradient(rgba(45,38,49,.18), rgba(45,38,49,.5)), url('/demo-image/${post.slug}')` }}
        aria-hidden="true"
      >
        <span>{post.category}</span>
      </div>
      <div className="card-body">
        <p className="meta">{post.category} · {post.dateLabel}</p>
        <h3><Link href={`/bericht/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <Link className="text-link" href={`/bericht/${post.slug}`}>Lees verder →</Link>
      </div>
    </article>
  );
}

export function EventCard({ event }) {
  return (
    <article className="event-card" id={event.slug}>
      <div className="event-date">
        <strong>{event.date.day}</strong>
        <span>{event.dateLabel.split(" ")[1]}</span>
      </div>
      <div>
        <p className="meta">{event.time}–{event.end} · {event.location}</p>
        <h3>{event.title}</h3>
        <p>{event.summary}</p>
      </div>
    </article>
  );
}

export function SectionHeading({ title, link, linkLabel = "Bekijk alles" }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {link && <Link className="text-link" href={link}>{linkLabel} →</Link>}
    </div>
  );
}
