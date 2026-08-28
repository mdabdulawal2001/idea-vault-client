import Skeleton from "./Skeleton";

const CommentCardSkeleton = () => {
  return (
    <article className="rounded-2xl bg-[#eae8e8] p-5 shadow-sm dark:border dark:border-slate-800 dark:bg-slate-900">

      {/* User */}
      <div className="flex items-start gap-4">

        {/* Avatar */}
        <Skeleton className="h-12 w-12 shrink-0 rounded-full" />

        {/* Name + Date */}
        <div className="min-w-0 flex-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="mt-2 h-3 w-36" />
        </div>

        {/* Comment Icon */}
        <Skeleton className="h-9 w-9 shrink-0 rounded-xl" />
      </div>

      {/* Comment */}
      <Skeleton className="mt-5 h-20 w-full rounded-xl" />

      {/* Bottom */}
      <div className="mt-4 flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Idea */}
        <Skeleton className="h-4 w-52" />

        {/* Actions */}
        <div className="flex gap-2">
          <Skeleton className="h-9 w-20 rounded-lg" />
          <Skeleton className="h-9 w-20 rounded-lg" />
        </div>
      </div>
    </article>
  );
};

export default CommentCardSkeleton;