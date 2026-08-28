const MyInteractionsSkeleton = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ================= PAGE HEADER ================= */}

        <div className="mb-10">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full">
              {/* Small Label */}

              <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                <div className="h-9 w-9 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />

                <div className="h-4 w-28 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* Title */}

              <div className="mx-auto h-10 w-64 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800 md:mx-0" />

              {/* Description */}

              <div className="mx-auto mt-3 h-4 w-96 max-w-full animate-pulse rounded-md bg-slate-200 dark:bg-slate-800 md:mx-0" />
            </div>

            {/* Total Comments */}

            <div className="shrink-0">
              <div
                className="
                  flex items-center gap-3
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  px-5 py-3
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <div className="h-9 w-9 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />

                <div className="space-y-2">
                  <div className="h-3 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

                  <div className="mx-auto h-5 w-8 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COMMENTS CONTAINER ================= */}

        <div
          className="
            rounded-3xl
            border border-slate-200
            bg-white
            p-4
            shadow-sm
            sm:p-6
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          {/* Container Header */}

          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-5 dark:border-slate-800">
            <div className="space-y-2">
              <div className="h-5 w-36 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

              <div className="h-3 w-64 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="hidden h-9 w-9 animate-pulse rounded-xl bg-slate-200 sm:flex dark:bg-slate-800" />
          </div>

          {/* ================= COMMENT SKELETONS ================= */}

          <div className="grid grid-cols-1 gap-5">
            {Array.from({ length: 2 }).map((_, index) => (
              <CommentCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// COMMENT CARD SKELETON
// =====================================================

const CommentCardSkeleton = () => {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-200
        bg-slate-50
        p-5
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}

        <div className="h-11 w-11 shrink-0 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />

        <div className="min-w-0 flex-1">
          {/* Name + Date */}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="h-4 w-32 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

            <div className="h-3 w-20 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Comment */}

          <div className="mt-4 space-y-2">
            <div className="h-3 w-full animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

            <div className="h-3 w-[90%] animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

            <div className="h-3 w-[65%] animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Actions */}

          <div className="mt-5 flex gap-3">
            <div className="h-8 w-16 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />

            <div className="h-8 w-16 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInteractionsSkeleton;