"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import toast from "react-hot-toast";

import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import { getCommentsByIdea } from "@/services/ideaService";
import { authClient } from "@/lib/auth-client";

const CommentSection = ({ idea }) => {
  const { data: session, error } = authClient.useSession();

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    if (!idea?._id) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    getCommentsByIdea(idea._id)
      .then((result) => {
        if (!cancelled) {
          setComments(result.comments || []);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          console.error("Error loading comments:", error);
          toast.error(error.message || "Failed to load comments");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [idea?._id]);

  const handleCommentAdded = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <section className="mt-10 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <MessageCircle className="h-5 w-5" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Discussion
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {comments.length}{" "}
            {comments.length === 1 ? "comment" : "comments"}
          </p>
        </div>
      </div>

      {/* ================= COMMENT FORM ================= */}
      <CommentForm
        idea={idea}
        user={session?.user}
        onCommentAdded={handleCommentAdded}
      />

      {/* ================= COMMENTS ================= */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />

            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Loading comments...
            </p>
          </div>
        ) : comments.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
            <MessageCircle className="mx-auto h-8 w-8 text-slate-300 dark:text-slate-600" />

            <h3 className="mt-3 text-sm font-bold text-slate-700 dark:text-slate-200">
              No comments yet
            </h3>

            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              Be the first one to share your thoughts.
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <CommentCard
              key={comment._id}
              comment={comment}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default CommentSection;