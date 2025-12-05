
import Link from "next/link";
import texts from "../JSON/textes.json";

interface Theme {
  titre: string;
  notions?: string[];
}

interface Text {
  auteur: string;
  themes: Theme[];
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(/\p{Diacritic}/gu, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)+/g, "");
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <ul className="space-y-8">
        {texts.map((text: Text) => (
          <li key={text.auteur} className="border-b pb-6">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
              <Link href={`/textes/${slugify(text.auteur)}`} className="hover:underline">
                {text.auteur}
              </Link>
            </h2>
            <ul className="ml-4 list-disc">
              {text.themes.map((theme: Theme, idx: number) => (
                <li key={theme.titre + idx} className="mb-2">
                  <span className="font-bold">{theme.titre}</span>
                  {theme.notions && (
                    <span className="ml-2 flex flex-wrap gap-2">
                      {theme.notions.map((notion) => {
                        // Slugify notion for URL
                        const slug = slugify(notion);
                        return (
                          <Link
                            key={notion}
                            href={`/notions/${slug}`}
                            className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold hover:underline hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                          >
                            {notion}
                          </Link>
                        );
                      })}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
