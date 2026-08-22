"use client";

import { MessageSquare, Send } from "lucide-react";

const CommentForm = () => {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <MessageSquare className="h-5 w-5" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Join the Discussion
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Share your thoughts, feedback, or suggestions about this idea.
          </p>
        </div>
      </div>

      {/* Comment Form */}
      <form className="space-y-4">
        <div>
          <label
            htmlFor="comment"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Your Comment <span className="text-blue-600">*</span>
          </label>

          <textarea
            id="comment"
            name="comment"
            rows={5}
            placeholder="What do you think about this idea?"
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-blue-500/50 dark:focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Keep your feedback respectful and constructive.
          </p>

          <button
            type="submit"
            className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0 sm:w-auto"
          >
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;