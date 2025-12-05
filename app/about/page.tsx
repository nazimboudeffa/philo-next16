
import React from "react";

export default function AboutPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4 py-12">
			<section className="max-w-2xl w-full bg-white dark:bg-zinc-900 rounded-lg shadow p-8 text-center">
				<h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-4">À propos</h1>
				<p className="text-zinc-700 dark:text-zinc-200 mb-4">
					Ce site a été créé pour rendre la philosophie accessible à tous, en proposant des notions, des textes, des citations et des références claires et inspirantes. Il s&apos;adresse aux étudiants, passionnés ou curieux qui souhaitent approfondir leur réflexion et découvrir les grands penseurs.
				</p>
				<p className="text-zinc-700 dark:text-zinc-200 mb-4">
					Ce projet est né de l&apos;envie de partager des ressources utiles et motivantes pour tous ceux qui veulent penser autrement.
				</p>
                <p className="text-zinc-700 dark:text-zinc-200 mb-4">L&apos;Auteur original est Stéphane Pellicier du site <a href="https://maphilosophie.fr" target="_blank" rel="noopener noreferrer">maphilosophie.fr</a></p>
                <p className="text-zinc-700 dark:text-zinc-200">Ce site est une adaptation non officielle et indépendante à but éducatif de code source ouvert.</p>
			</section>
		</main>
	);
}
