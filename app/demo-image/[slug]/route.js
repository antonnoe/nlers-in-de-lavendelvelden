export const dynamic = "force-dynamic";

function safeText(value) {
  return String(value || "").replace(/[<>&'\"]/g, "");
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  const title = safeText(slug.replaceAll("-", " "));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#d9c7e5"/>
      <stop offset="1" stop-color="#f1cf9c"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#sky)"/>
  <path d="M0 410 C240 320 360 410 560 350 C760 290 940 350 1200 260 L1200 630 L0 630 Z" fill="#66775b"/>
  <g opacity="0.9">
    <path d="M0 520 L1200 410" stroke="#77608f" stroke-width="34"/>
    <path d="M0 570 L1200 460" stroke="#8f72a9" stroke-width="34"/>
    <path d="M0 620 L1200 510" stroke="#6e5687" stroke-width="34"/>
  </g>
  <rect x="70" y="62" width="760" height="170" rx="12" fill="#ffffff" fill-opacity="0.9"/>
  <text x="110" y="125" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#55436b">NL'ers in de lavendelvelden</text>
  <text x="110" y="177" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#283028">${title.slice(0, 42)}</text>
  <text x="110" y="214" font-family="Arial, sans-serif" font-size="20" fill="#5c625c">Fictieve afbeelding voor de NieuwsbriefAssistent-demo</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "no-store, max-age=0"
    }
  });
}
