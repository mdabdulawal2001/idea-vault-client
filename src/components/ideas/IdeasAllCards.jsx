"use client";
import { getAllIdeas } from "@/services/ideaService";
import { useEffect, useState } from "react";
import IdeaCard from "./IdeaCard";
import IdeaFilters from "./IdeaFilters";
import { SearchX } from "lucide-react";
import IdeaCardSkeleton from "../skeletons/IdeaCardSkeleton";

const DEFAULT_FILTERS = {
  search: "",
  category: "",
  fromDate: "",
  toDate: "",
};

const IdeasAllCards = () => {

  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const [ideas, setIdeas] = useState([]);

  const [loading, setLoading] = useState(true);

  // ================= FETCH IDEAS =================
  const fetchIdeas = async (currentFilters = DEFAULT_FILTERS) => {
    try {
      setLoading(true);

      const data = await getAllIdeas(currentFilters);

      setIdeas(data);
    } catch (error) {
      console.error("Failed to fetch ideas:", error);

      setIdeas([]);
    } finally {
      setLoading(false);
    }
  };

  // ================= INITIAL LOAD =================
  useEffect(() => {
    let ignore = false;

    const loadInitialIdeas = async () => {
      try {
        const data = await getAllIdeas(DEFAULT_FILTERS);

        if (!ignore) {
          setIdeas(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch ideas:", error);

        if (!ignore) {
          setIdeas([]);
          setLoading(false);
        }
      }
    };

    loadInitialIdeas();

    return () => {
      ignore = true;
    };
  }, []);

  // ================= SEARCH / FILTER =================
  const handleSearch = async (searchFilters) => {
    setFilters(searchFilters);

    await fetchIdeas(searchFilters);
  };

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADING ================= */}
        <div className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
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

          {/* ================= TOTAL IDEAS ================= */}
          <div className="shrink-0">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              {ideas.length} Ideas
            </span>
          </div>
        </div>

        {/* ================= IDEA FILTERS ================= */}
        <IdeaFilters
          filters={filters}
          setFilters={setFilters}
          onSearch={handleSearch}
        />

        {/* ================= LOADING ================= */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"> {Array.from({ length: 6 }).map((_, index) => ( <IdeaCardSkeleton key={index} /> ))} </div>
        ) : ideas.length > 0 ? (
          /* ================= IDEAS GRID ================= */
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ideas.map((idea, index) => (
              <IdeaCard
                key={idea._id}
                idea={idea}
                index={index}
              />
            ))}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
              <SearchX className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              No Ideas Found
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              We couldn't find any ideas matching your search or filter. Try
              changing your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default IdeasAllCards;