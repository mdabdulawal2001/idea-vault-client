"use client";

import { Lightbulb } from "lucide-react";
import MyIdeaCard from "./MyIdeaCard";

const MyIdeaGrid = ({ ideas = [], onEdit, onDelete }) => {
  return (
    <section className="w-full">
      {/* ================= SECTION HEADER ================= */}

      <div className="mb-7 sm:mb-8">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          {/* Icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>

          {/* Text */}
          <div className="mt-3 sm:ml-3 sm:mt-0">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              My Ideas
            </h2>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Manage the startup ideas you have shared with the IdeaVault
              community.
            </p>
          </div>
        </div>
      </div>

      {/* ================= EMPTY STATE ================= */}

      {ideas.length === 0 ? (
        <div className="flex min-h-70 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center dark:border-slate-700 dark:bg-slate-900">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
            <Lightbulb className="h-6 w-6" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white sm:text-lg">
            You haven't added any ideas yet
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
            Start by sharing your first startup idea with the IdeaVault
            community.
          </p>
        </div>
      ) : (
        /* ================= IDEA GRID ================= */

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {ideas.map((idea, index) => (
            <MyIdeaCard
              key={idea._id}
              idea={idea}
              index={index}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyIdeaGrid;
