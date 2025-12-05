
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-start bg-linear-to-b from-blue-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
			{/* Hero Section */}
			<section className="w-full py-16 px-4 flex flex-col items-center text-center">
				<h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 drop-shadow-lg">PhiloNext</h1>
				<p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 max-w-2xl mb-6">
					Explorez la philosophie à travers des notions, des textes, des auteurs, des références et des citations soigneusement sélectionnés. Ce site est conçu pour rendre la philosophie accessible, vivante et inspirante pour tous.
				</p>
				<Link href="/notions" className="inline-block bg-blue-700 text-white dark:bg-blue-400 dark:text-zinc-900 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-800 dark:hover:bg-blue-500 transition-colors">Commencer à explorer</Link>
			</section>

			{/* Features Section */}
			<section className="w-full max-w-4xl px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 flex flex-col items-center">
					<h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Notions clés</h2>
					<p className="text-zinc-700 dark:text-zinc-200">Comprenez les concepts fondamentaux de la philosophie, illustrés et expliqués simplement.</p>
				</div>
				<div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 flex flex-col items-center">
					<h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Textes majeurs</h2>
					<p className="text-zinc-700 dark:text-zinc-200">Découvrez des extraits et analyses des œuvres philosophiques incontournables.</p>
				</div>
				<div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 flex flex-col items-center">
					<h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Auteurs essentiels</h2>
					<p className="text-zinc-700 dark:text-zinc-200">Parcourez les biographies et idées des grands penseurs qui ont marqué l’histoire.</p>
				</div>
				<div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 flex flex-col items-center">
					<h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Citations & Références</h2>
					<p className="text-zinc-700 dark:text-zinc-200">Laissez-vous inspirer par des citations et trouvez des références pour approfondir vos réflexions.</p>
				</div>
			</section>

			{/* Motivation Section */}
			<section className="w-full max-w-3xl px-4 py-12 text-center">
				<h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-4">Pourquoi lire la philosophie ?</h2>
				<p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6">La philosophie éclaire notre compréhension du monde, développe l’esprit critique et nourrit la curiosité. Que vous soyez étudiant, passionné ou simplement curieux, ce site vous invite à découvrir, questionner et penser autrement.</p>
				<Link href="/citations" className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-5 py-2 rounded-full font-medium shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">Lire des citations inspirantes</Link>
			</section>
		</main>
	);
}
