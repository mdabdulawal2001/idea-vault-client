import MyIdeaCardSkeleton from "@/components/skeletons/MyIdeaCardSkeleton";

const Loading = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <div className="h-8 w-40 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <MyIdeaCardSkeleton key={index} />
          ))}
        </div>

      </div>
    </main>
  );
};


export default Loading;