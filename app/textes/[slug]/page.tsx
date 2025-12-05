"use client";
import { useParams } from "next/navigation";
import textes from "../../JSON/textes.json";
import notions from "../../JSON/notions.json";
import Link from "next/link";

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(/\p{Diacritic}/gu, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)+/g, "");
}

export default function Page() {
  const params = useParams();
  const auteurData = textes.find(t => t.slug === params.slug);
  if (!auteurData) {
    return <main className="p-8">Auteur introuvable.</main>;
  }
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <h2 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
      <Link
        href={`/auteurs/${slugify(auteurData.auteur)}`}
        className="text-3xl font-bold mb-6 text-black dark:text-zinc-50 hover:underline"
      >
        {auteurData.auteur}
      </Link>
      </h2>
      <ul className="space-y-4">
        {auteurData.themes.map((theme: { titre: string; notions: string[] }, idx: number) => (
          <li key={theme.titre + idx} className="border-b pb-2">
            <span className="font-bold text-lg">{theme.titre}</span>
            {theme.notions && theme.notions.length > 0 && (
              <span className="ml-4 flex flex-wrap gap-2">
                {theme.notions.map((notion) => {
                  const slug = slugify(notion);
                  const notionObj = notions.find(n => slugify(n.notion) === slug);
                  return notionObj ? (
                    <Link
                      key={slug}
                      href={`/notions/${slug}`}
                      className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold hover:underline"
                    >
                      {notion}
                    </Link>
                  ) : (
                    <span key={notion} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold">{notion}</span>
                  );
                })}
              </span>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
