import Skeleton from "./Skeleton";
import TrendingIdeaCardSkeleton from "./TrendingIdeaCardSkeleton";

const HomeSkeleton = () => {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

          <div className="max-w-3xl">

            {/* Badge */}
            <Skeleton className="h-8 w-36 rounded-full" />

            {/* Heading */}
            <Skeleton className="mt-6 h-12 w-full sm:h-16" />
            <Skeleton className="mt-3 h-12 w-4/5 sm:h-16" />

            {/* Description */}
            <Skeleton className="mt-6 h-5 w-full" />
            <Skeleton className="mt-2 h-5 w-5/6" />

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Skeleton className="h-12 w-36 rounded-xl" />
              <Skeleton className="h-12 w-36 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRENDING ================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="mt-3 h-4 w-80 max-w-full" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TrendingIdeaCardSkeleton />
          <TrendingIdeaCardSkeleton />
          <TrendingIdeaCardSkeleton />
        </div>
      </section>
    </main>
  );
};

export default HomeSkeleton;