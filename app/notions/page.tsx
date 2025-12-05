
import Link from "next/link";
import notions from "../JSON/notions.json";

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
    <div className="max-w-4xl flex flex-col items-center justify-center mx-auto">
      <div className="flex flex-wrap gap-4 justify-center">
          {notions.map((n: { notion: string, slug: string }) => (
            <Link
              key={n.slug}
              href={`/notions/${slugify(n.notion)}`}
              className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded text-base font-semibold hover:underline hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              {n.notion}
            </Link>
          ))}
      </div>
    </div>
  </main>
  );
}