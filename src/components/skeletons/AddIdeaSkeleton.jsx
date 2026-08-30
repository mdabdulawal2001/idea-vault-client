const AddIdeaSkeleton = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-linear-to-br
        from-default-50
        via-background
        to-primary/5
        px-4
        py-8
        sm:px-6
        sm:py-10
        lg:px-8
        lg:py-14
        dark:from-[#07111f]
        dark:via-[#081522]
        dark:to-[#0a1d35]
      "
    >
      <div className="relative mx-auto w-full max-w-5xl">
        {/* ================= HEADER ================= */}

        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Brand */}

          <div className="mb-5 flex flex-col items-center justify-center md:flex-row md:justify-start md:gap-3">
            <div className="h-11 w-11 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />

            <div className="mt-2 space-y-2 md:mt-0">
              <div className="mx-auto h-4 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800 md:mx-0" />

              <div className="mx-auto h-3 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800 md:mx-0" />
            </div>
          </div>

          {/* Main Title */}

          <div className="mx-auto h-11 w-72 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800 md:mx-0" />

          {/* Description */}

          <div className="mt-4 space-y-2">
            <div className="h-4 w-full max-w-2xl animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

            <div className="h-4 w-[80%] max-w-xl animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>

        {/* ================= FORM CARD ================= */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border border-slate-200
            bg-white
            shadow-xl
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          {/* ================= BASIC INFORMATION ================= */}

          <div className="p-5 sm:p-7 lg:p-9">
            <SkeletonSectionHeader />

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              <SkeletonInput />
              <SkeletonInput />

              <div className="md:col-span-2">
                <SkeletonTextarea height="h-28" />
              </div>

              <SkeletonInput />
              <SkeletonInput />

              <div className="md:col-span-2">
                <SkeletonInput />
              </div>
            </div>
          </div>

          {/* ================= IDEA DETAILS ================= */}

          <div
            className="
              border-y
              border-slate-200
              bg-slate-50/60
              p-5
              sm:p-7
              lg:p-9
              dark:border-slate-800
              dark:bg-slate-950/40
            "
          >
            <SkeletonSectionHeader />

            <div className="space-y-6">
              <SkeletonTextarea height="h-44" />

              <SkeletonTextarea height="h-28" />

              <SkeletonTextarea height="h-32" />

              <SkeletonTextarea height="h-32" />
            </div>
          </div>

          {/* ================= ACTION AREA ================= */}

          <div
            className="
              bg-slate-50/80
              px-5
              py-6
              sm:px-7
              lg:px-9
              dark:bg-slate-950/60
            "
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="h-4 w-48 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

                <div className="h-3 w-64 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
              </div>

              <div className="flex w-full flex-col-reverse gap-3 sm:w-auto sm:flex-row">
                <div className="h-12 w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800 sm:w-28" />

                <div className="h-12 w-full animate-pulse rounded-xl bg-slate-300 dark:bg-slate-700 sm:w-36" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// SECTION HEADER


const SkeletonSectionHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 shrink-0 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />

        <div className="space-y-2">
          <div className="h-5 w-36 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

          <div className="h-3 w-52 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
};


// INPUT


const SkeletonInput = () => {
  return (
    <div className="space-y-2.5">
      <div className="h-4 w-24 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

      <div className="h-12 w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
    </div>
  );
};


// TEXTAREA


const SkeletonTextarea = ({ height = "h-32" }) => {
  return (
    <div className="space-y-2.5">
      <div className="h-4 w-36 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

      <div
        className={`w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800 ${height}`}
      />
    </div>
  );
};

export default AddIdeaSkeleton;