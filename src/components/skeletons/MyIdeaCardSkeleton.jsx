import Skeleton from "./Skeleton";

const MyIdeaCardSkeleton = () => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Image */}
      <Skeleton className="h-48 w-full rounded-none" />

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="mt-2 h-5 w-3/5" />

        {/* Description */}
        <Skeleton className="mt-3 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-4/5" />

        {/* Tags */}
        <div className="mt-3 flex gap-2">
          <Skeleton className="h-6 w-14 rounded-md" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </div>

        {/* Meta */}
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Skeleton className="h-7 w-7 rounded-lg" />

            <div>
              <Skeleton className="h-2.5 w-16" />
              <Skeleton className="mt-2 h-3.5 w-20" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-7 w-7 rounded-lg" />

            <div>
              <Skeleton className="h-2.5 w-12" />
              <Skeleton className="mt-2 h-3.5 w-16" />
            </div>
          </div>
        </div>

        {/* Edit / Delete */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        {/* View Details */}
        <Skeleton className="mt-2 h-10 w-full rounded-xl" />
      </div>
    </article>
  );
};

export default MyIdeaCardSkeleton;