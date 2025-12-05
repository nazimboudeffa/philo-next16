import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full flex justify-center items-center gap-8 py-4 mb-8 bg-zinc-200 dark:bg-zinc-900 text-center mx-auto shadow-sm">
      <Link href="/" className="text-lg font-semibold text-blue-700 dark:text-blue-300 px-3 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 hover:underline transition-colors">Notions</Link>
      <Link href="/textes" className="text-lg font-semibold text-blue-700 dark:text-blue-300 px-3 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 hover:underline transition-colors">Textes</Link>
      <Link href="/auteurs" className="text-lg font-semibold text-blue-700 dark:text-blue-300 px-3 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 hover:underline transition-colors">Auteurs</Link>
    </nav>
  );
}

export default Navbar;