"use client";
import { useParams, notFound } from "next/navigation";
import notions from "../../JSON/notions.json";
import textes from "../../JSON/textes.json";
import Link from "next/link";

function escapeRegExp(string: string) {
  return string.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

export default function Page() {
  const params = useParams();
  const notionData = notions.find(t => t.slug === params.slug);
  if (!notionData) return notFound();

  function getLinkedComponent(match: string, offset: number, allLabels: { label: string; slug: string; type: string }[]) {
    const found = allLabels.find(l => l.label.toLowerCase() === match.toLowerCase());
    let href = "#";
    let color = "#2563eb";
    if (found) {
      if (found.type === "notion") {
        href = `/notions/${found.slug}`;
        color = "#16a34a";
      } else if (found.type === "auteur") {
        href = `/textes/${found.slug}`;
        color = "#dc2626";
      }
    }
    return (
      <Link key={offset} href={href} style={{ color, textDecoration: "underline", fontWeight: "bold" }}>
        {match}
      </Link>
    );
  }

  function linkifyText(text: string) {
    // Récupère tous les labels et slugs
    const notionLabels = notions.map(n => ({ label: n.notion, slug: n.slug, type: "notion" }));
    const auteurLabels = textes.map(a => ({ label: a.auteur, slug: a.slug, type: "auteur" }));
    const allLabels = [...notionLabels, ...auteurLabels].sort((a, b) => b.label.length - a.label.length);
    const regex = new RegExp(`\\b(${allLabels.map(l => escapeRegExp(l.label)).join("|")})\\b`, "giu");
    // Découpe le texte en paragraphes
    return text.split(/(\n)/).map((block, i) => {
      if (block === "\n") return <br key={`br-${Math.random().toString(36).slice(2, 11)}`} />;
      const parts = [];
      let lastIndex = 0;
      block.replace(regex, (match, p1, offset) => {
        if (offset > lastIndex) {
          parts.push(block.slice(lastIndex, offset));
        }
        parts.push(getLinkedComponent(match, offset, allLabels));
        lastIndex = offset + match.length;
        return match;
      });
      if (lastIndex < block.length) {
        parts.push(block.slice(lastIndex));
      }
      return <p key={block + "-" + i}>{parts}</p>;
    });
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-zinc-50">{notionData.notion}</h1>
      {Array.isArray(notionData.cours) && notionData.cours.length > 0 && (
        <div className="prose dark:prose-invert">
          {notionData.cours.map((line) => (
            <div key={line}>{linkifyText(line)}</div>
          ))}
        </div>
      )}
    </main>
  );
}