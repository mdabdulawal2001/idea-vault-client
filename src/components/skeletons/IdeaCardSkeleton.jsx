"use client";

const IdeaCardSkeleton = () => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* ================= IMAGE SKELETON ================= */}

      <div className="relative h-48 w-full animate-pulse bg-slate-200 dark:bg-slate-800">
        {/* Category */}

        <div className="absolute left-4 top-4 h-6 w-20 rounded-full bg-slate-300 dark:bg-slate-700" />

        {/* Top Right Arrow */}

        <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-300 dark:bg-slate-700" />

        {/* Author */}

        <div className="absolute bottom-3.5 left-4 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-300 dark:bg-slate-700" />

          <div className="space-y-1.5">
            <div className="h-2.5 w-20 rounded bg-slate-300 dark:bg-slate-700" />
            <div className="h-2 w-14 rounded bg-slate-300 dark:bg-slate-700" />
          </div>
        </div>
      </div>

      {/* ================= CONTENT SKELETON ================= */}

      <div className="flex flex-1 flex-col p-5">
        {/* Title */}

        <div className="space-y-2">
          <div className="h-5 w-[85%] animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-5 w-[60%] animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Short Description */}

        <div className="mt-3 space-y-2">
          <div className="h-3.5 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-3.5 w-[88%] animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Tags */}

        <div className="mt-3 flex min-h-6 gap-1.5">
          <div className="h-6 w-16 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
          <div className="h-6 w-20 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* ================= META ================= */}

        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
          {/* Audience */}

          <div className="flex min-w-0 items-center gap-2">
            <div className="h-7 w-7 shrink-0 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />

            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="h-2 w-14 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-3 w-[80%] animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>

          {/* Budget */}

          <div className="flex min-w-0 items-center gap-2">
            <div className="h-7 w-7 shrink-0 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />

            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="h-2 w-12 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-3 w-[75%] animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        </div>

        {/* View Details Button */}

        <div className="mt-4 h-10 w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
      </div>
    </article>
  );
};

export default IdeaCardSkeleton;

