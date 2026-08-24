"use client";

import { useState } from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";
import { deleteIdea } from "@/services/ideaService"; 
import toast from "react-hot-toast";

const DeleteIdeaModal = ({ idea, isOpen, onClose, onDeleted }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!idea?._id) return;
    setIsDeleting(true);

    try {
      const result = await deleteIdea(idea._id);
      toast.success(result?.message || "Idea deleted successfully!");
      onDeleted?.(idea._id);
      onClose();
    } catch (error) {
      console.error("Error deleting idea:", error);
      toast.error(error.message || "Failed to delete idea");
    } finally {
      setIsDeleting(false);
    }
  };

  if (!isOpen || !idea) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !isDeleting) {
          onClose();
        }
      }}
    >
      <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-red-200 dark:border-red-900/40 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 shadow-2xl transition-all">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          disabled={isDeleting}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-400 dark:text-zinc-500 transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-700 dark:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <X size={18} />
        </button>

        {/* CONTENT SECTION */}
        <div className="p-6 sm:p-7 text-center">
          {/* DANGER ICON */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400 ring-8 ring-red-50 dark:ring-red-950/30">
            <AlertTriangle size={28} />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Delete Idea?
          </h3>

          <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100! wrap-break-words">
              {idea.title}
            </span>
            ? This action cannot be undone.
          </p>
        </div>

        {/* FOOTER ACTIONS (DANGER STYLING) */}
        <div className="flex flex-col-reverse gap-2.5 border-t border-gray-100 dark:border-zinc-800/80 bg-gray-50/50 dark:bg-zinc-900/50 px-6 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            className="inline-flex h-11 w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-5 text-sm font-semibold text-gray-700 dark:text-zinc-300 transition-all hover:bg-gray-50 dark:hover:bg-zinc-700 hover:text-gray-900 dark:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="inline-flex h-11 w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:bg-red-700 hover:shadow-red-600/35 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDeleting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 size={16} />
                Delete Idea
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteIdeaModal;