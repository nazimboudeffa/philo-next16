"use client";
import { useParams, notFound } from "next/navigation";
import textes from "../../JSON/textes.json";

export default function Page() {
  const params = useParams();
  const auteurData = textes.find(t => t.slug === params.slug);
  if (!auteurData) return notFound();
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-zinc-50">{auteurData.auteur}</h1>
      <h2 className="text-xl font-semibold mb-4">Textes associés :</h2>
      <ul className="space-y-4">
        {auteurData.themes.map((theme: { titre: string; notions: string[] }, idx: number) => (
          <li key={theme.titre + idx} className="border-b pb-2">
            <span className="font-bold text-lg">{theme.titre}</span>
            {theme.notions && theme.notions.length > 0 && (
              <span className="ml-4 flex flex-wrap gap-2">
                {theme.notions.map((notion) => (
                  <span key={notion} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold">{notion}</span>
                ))}
              </span>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
