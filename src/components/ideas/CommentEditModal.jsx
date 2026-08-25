"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const CommentEditModal = ({
  comment,
  isOpen,
  onClose,
  onSave,
  isSaving = false,
}) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (comment) {
      setText(comment.text || "");
    }
  }, [comment]);

  if (!isOpen || !comment) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onSave(text.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Edit Comment
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Update your comment below.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isSaving}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            disabled={isSaving}
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              disabled={isSaving}
              className="rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSaving || !text.trim()}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default CommentEditModal;