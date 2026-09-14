import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../lib/demoData";

export const dynamic = "force-dynamic";

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="article-shell">
      <p className="eyebrow dark">{post.category}</p>
      <h2>{post.title}</h2>
      <p className="meta">Gepubliceerd op {post.dateLabel}</p>
      <p className="lead">{post.excerpt}</p>
      <div className="article-body">
        {post.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
      <p><Link className="text-link" href="/">← Terug naar de homepage</Link></p>
    </article>
  );
}
