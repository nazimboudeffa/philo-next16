"use client";
import { useParams } from "next/navigation";
import auteurs from "../../JSON/auteurs.json";

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(/\p{Diacritic}/gu, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)+/g, "");
}

export default function AuteurPage() {
  const params = useParams();
  const auteur = auteurs.find(a => slugify(a.auteur) === params.slug);
  if (!auteur) {
    return <main className="p-8">Auteur introuvable.</main>;
  }
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-zinc-50">
        {auteur.auteur}
      </h1>
      <ul className="text-lg text-zinc-800 dark:text-zinc-200 mb-6">
        <li><b>Dates :</b> {auteur.dates}</li>
        <li><b>Pays :</b> {auteur.pays}</li>
        <li><b>Période :</b> {auteur.periode}</li>
        <li><b>Courants :</b> {auteur.courants && Array.isArray(auteur.courants) ? (
          <span className="flex flex-wrap gap-2">
            {auteur.courants.map((c: string) => (
              <span key={c} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold">{c}</span>
            ))}
          </span>
        ) : auteur.courants}
        </li>
      </ul>
    </main>
  );
}
