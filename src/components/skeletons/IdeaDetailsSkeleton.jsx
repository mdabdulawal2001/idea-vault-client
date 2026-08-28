import Skeleton from "./Skeleton";

const IdeaDetailsSkeleton = () => {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* ================= HERO ================= */}
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

          {/* Back Button */}
          <Skeleton className="mb-8 h-10 w-36 rounded-xl" />

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Content */}
            <div>
              {/* Category */}
              <Skeleton className="h-7 w-24 rounded-full" />

              {/* Title */}
              <Skeleton className="mt-5 h-12 w-full" />
              <Skeleton className="mt-3 h-12 w-4/5" />

              {/* Description */}
              <Skeleton className="mt-5 h-5 w-full" />
              <Skeleton className="mt-2 h-5 w-11/12" />
              <Skeleton className="mt-2 h-5 w-4/5" />

              {/* Creator */}
              <div className="mt-7 flex items-center gap-3">
                <Skeleton className="h-11 w-11 rounded-full" />

                <div>
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="mt-2 h-3 w-20" />
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <Skeleton className="h-72 w-full rounded-3xl sm:h-80 lg:h-96" />
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">

          {/* LEFT */}
          <div className="space-y-7 lg:col-span-2">

            {/* About */}
            <SkeletonContentSection lines={5} />

            {/* Problem */}
            <SkeletonContentSection lines={4} />

            {/* Solution */}
            <SkeletonContentSection lines={5} />

            {/* Tags */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <Skeleton className="h-6 w-40" />

              <div className="mt-4 flex flex-wrap gap-2">
                <Skeleton className="h-9 w-20 rounded-lg" />
                <Skeleton className="h-9 w-24 rounded-lg" />
                <Skeleton className="h-9 w-16 rounded-lg" />
                <Skeleton className="h-9 w-28 rounded-lg" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">

            {/* Overview */}
            <SkeletonSidebarCard>
              <SkeletonInfo />
              <SkeletonInfo />
              <SkeletonInfo />
            </SkeletonSidebarCard>

            {/* Creator */}
            <SkeletonSidebarCard>
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />

                <div>
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="mt-2 h-3 w-20" />
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                <Skeleton className="h-4 w-full" />
              </div>
            </SkeletonSidebarCard>

            {/* Timeline */}
            <SkeletonSidebarCard>
              <SkeletonTimeline />
              <SkeletonTimeline />
            </SkeletonSidebarCard>

            {/* Button */}
            <Skeleton className="h-11 w-full rounded-xl" />
          </aside>
        </div>

        {/* Comments */}
        <div className="mt-10 space-y-5">
          <Skeleton className="h-7 w-32" />
          <CommentCardSkeleton />
          <CommentCardSkeleton />
        </div>
      </section>
    </main>
  );
};

/* ================= HELPERS ================= */

const SkeletonContentSection = ({ lines = 4 }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-xl" />
        <Skeleton className="h-6 w-48" />
      </div>

      <div className="mt-5 space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton
            key={index}
            className={`h-4 ${
              index === lines - 1 ? "w-3/4" : "w-full"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const SkeletonSidebarCard = ({ children }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <Skeleton className="h-6 w-36" />

      <div className="mt-5 space-y-3">
        {children}
      </div>
    </section>
  );
};

const SkeletonInfo = () => {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50">
      <Skeleton className="h-8 w-8 shrink-0 rounded-lg" />

      <div className="min-w-0 flex-1">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="mt-2 h-4 w-32" />
      </div>
    </div>
  );
};

const SkeletonTimeline = () => {
  return (
    <div className="flex gap-3">
      <Skeleton className="h-8 w-8 shrink-0 rounded-lg" />

      <div>
        <Skeleton className="h-3 w-16" />
        <Skeleton className="mt-2 h-4 w-28" />
      </div>
    </div>
  );
};

const CommentCardSkeleton = () => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
      <div className="flex items-start gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />

        <div className="flex-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="mt-2 h-3 w-36" />
        </div>

        <Skeleton className="h-9 w-9 rounded-xl" />
      </div>

      <Skeleton className="mt-5 h-20 w-full rounded-xl" />

      <div className="mt-4 flex justify-between">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-9 w-24 rounded-lg" />
      </div>
    </div>
  );
};

export default IdeaDetailsSkeleton;