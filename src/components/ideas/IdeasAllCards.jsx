import { getAllIdeas } from "@/services/ideaService";
import IdeaCard from "./IdeaCard";

const IdeasAllCards = async () => {
  const ideas = await getAllIdeas();

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-400">
              Community Ideas
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Discover Great Ideas
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Explore innovative startup ideas shared by creators and discover
              new possibilities for the future.
            </p>
          </div>

          {/* Total Ideas */}
          <div className="shrink-0">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              {ideas.length} Ideas
            </span>
          </div>
        </div>

        {/* Ideas Grid */}
        {ideas.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ideas.map((idea, index) => (
              <IdeaCard key={idea._id} idea={idea} index={index} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M9.75 3.75h4.5a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5h-4.5a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5zM8.25 7.5h7.5M8.25 12h7.5M8.25 16.5h4.5"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              No Ideas Found
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              There are no startup ideas available right now. Be the first
              person to share an innovative idea.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default IdeasAllCards;