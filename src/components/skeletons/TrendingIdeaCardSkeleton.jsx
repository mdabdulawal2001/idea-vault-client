import Skeleton from "./Skeleton";

const TrendingIdeaCardSkeleton = () => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Image */}
      <Skeleton className="h-52 w-full rounded-none" />

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="mt-2 h-6 w-3/5" />

        {/* Description */}
        <Skeleton className="mt-4 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-11/12" />
        <Skeleton className="mt-2 h-4 w-4/5" />

        {/* Meta */}
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
          <div>
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-2 h-4 w-28" />
          </div>

          <div>
            <Skeleton className="h-3 w-16" />
            <Skeleton className="mt-2 h-4 w-20" />
          </div>
        </div>

        {/* Button */}
        <Skeleton className="mt-6 h-11 w-full rounded-xl" />
      </div>
    </article>
  );
};

export default TrendingIdeaCardSkeleton;