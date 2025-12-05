
import React from 'react';
import citations from '../JSON/citations.json';


const CitationsPage = () => {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <ul className="space-y-6">
        {citations.map((citation, idx) => (
          <li key={citation.auteur + idx} className="border-b pb-4">
            <blockquote className="italic text-lg mb-2">“{citation.citation}”</blockquote>
            <div className="text-sm text-gray-700 mb-1">
              — <span className="font-semibold">{citation.auteur}</span>, <span className="italic">{citation.oeuvre}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {citation.notions?.map((notion: string) => (
                <span
                  key={notion}
                  className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold hover:underline hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  {notion}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CitationsPage;
