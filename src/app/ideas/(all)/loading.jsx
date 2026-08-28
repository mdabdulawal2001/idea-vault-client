
import IdeaCardSkeleton from "@/components/skeletons/IdeaCardSkeleton";

const Loading = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SKELETON ================= */}

        <div className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="w-full">
            {/* Community Ideas */}

            <div className="mx-auto h-4 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800 sm:mx-0" />

            {/* Heading */}

            <div className="mx-auto mt-3 h-9 w-72 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800 sm:mx-0" />

            {/* Description */}

            <div className="mx-auto mt-4 space-y-2 sm:mx-0">
              <div className="h-3.5 w-full max-w-2xl animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

              <div className="h-3.5 w-4/5 max-w-xl animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>

          {/* Total Ideas */}

          <div className="h-9 w-24 shrink-0 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* ================= IDEA CARDS ================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <IdeaCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;

