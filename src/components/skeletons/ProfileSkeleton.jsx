import Skeleton from "./Skeleton";

const ProfileSkeleton = () => {
  return (
    <section className="mx-auto mt-10 mb-10 w-[90%] max-w-4xl overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-slate-900 md:w-full">

      {/* Top Accent */}
      <Skeleton className="h-5 w-full rounded-none" />

      <div className="p-5 sm:p-7 lg:p-8">

        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">

            {/* Avatar */}
            <Skeleton className="h-20 w-20 shrink-0 rounded-2xl" />

            {/* Name */}
            <div>
              <Skeleton className="h-3 w-20" />
              <Skeleton className="mt-2 h-7 w-40" />
              <Skeleton className="mt-2 h-4 w-52" />
            </div>
          </div>

          {/* Edit */}
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-slate-100 dark:bg-slate-800" />

        {/* Info */}
        <div className="grid gap-4 sm:grid-cols-2">
          <ProfileInfoSkeleton />
          <ProfileInfoSkeleton />
          <ProfileInfoSkeleton />
          <ProfileInfoSkeleton />
        </div>
      </div>
    </section>
  );
};

const ProfileInfoSkeleton = () => {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50/80 p-4 dark:bg-slate-800/40">
      <Skeleton className="h-10 w-10 shrink-0 rounded-xl" />

      <div className="min-w-0">
        <Skeleton className="h-2.5 w-20" />
        <Skeleton className="mt-2 h-4 w-28" />
      </div>
    </div>
  );
};

export default ProfileSkeleton;