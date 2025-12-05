import references from "../JSON/references.json";

interface Reference {
  error?: boolean | string;
  titre?: string | null;
  texte?: string | null;
  nom_texte_url?: string | null;
  auteur?: string | null;
  livre?: string | null;
  page_chapitre?: string | null;
  sous_titre?: string | null;
  date_originale?: string | null;
  date_parution?: string | null;
  url?: string | null;
}

export default function ReferencesPage() {
  // Filtrer les références valides (celles qui ont un titre ou un texte)
  const validRefs = references.filter(
    (ref) => ref.error !== "true" && (!!ref.titre || !!ref.texte)
  );

  return (
    <main className="bg-zinc-50 dark:bg-black p-8 min-h-screen">
      <ul className="space-y-8">
        {validRefs.length === 0 && (
          <li className="text-gray-500">Aucun texte disponible.</li>
        )}
        {validRefs.map((ref: Reference, idx: number) => (
          <li key={ref.url || idx} className="border-b pb-4">
            <div className="font-semibold text-lg">
              {ref.titre || ref.nom_texte_url || "Titre inconnu"}
            </div>
            {ref.auteur && <div className="text-gray-600">{ref.auteur}</div>}
            {ref.livre && <div className="text-gray-500">{ref.livre}</div>}
            {ref.page_chapitre && (
              <div className="text-gray-400">{ref.page_chapitre}</div>
            )}
            {ref.sous_titre && (
              <div className="text-gray-400 italic">{ref.sous_titre}</div>
            )}
            {ref.date_originale && (
              <div className="text-gray-400">{ref.date_originale}</div>
            )}
            {ref.date_parution && (
              <div className="text-gray-400">{ref.date_parution}</div>
            )}
            {ref.texte && (
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">
                  Voir le texte
                </summary>
                <div className="mt-2 whitespace-pre-line text-sm text-gray-700">
                  {ref.texte}
                </div>
              </details>
            )}
            {ref.url && (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline block mt-2"
              >
                Consulter en ligne
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
