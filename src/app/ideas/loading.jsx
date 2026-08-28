import IdeaCardSkeleton from "@/components/skeletons/IdeaCardSkeleton";

const Loading = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <div className="h-8 w-48 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <IdeaCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;