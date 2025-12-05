import auteurs from "../JSON/auteurs.json";
import Link from "next/link";

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(/\p{Diacritic}/gu, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)+/g, "");
}

export default function AuteursPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <ul className="space-y-6">
        {auteurs.map(a => (
          <li key={a.auteur} className="border-b pb-4">
            <Link href={`/auteurs/${slugify(a.auteur)}`} className="text-xl font-semibold text-blue-700 dark:text-blue-300 hover:underline">
              {a.auteur}
            </Link>
            <div className="mt-2 text-zinc-800 dark:text-zinc-200">
              <span className="mr-4"><b>Dates :</b> {a.dates}</span>
              <span className="mr-4"><b>Pays :</b> {a.pays}</span>
              <span className="mr-4"><b>Période :</b> {a.periode}</span>
              <span><b>Courants :</b> {a.courants && a.courants.length > 0 ? (
                <span className="flex flex-wrap gap-2">
                  {a.courants.map((c: string) => (
                    <span key={c} className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs font-semibold">{c}</span>
                  ))}
                </span>
              ) : <span className="italic">Aucun</span>}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
