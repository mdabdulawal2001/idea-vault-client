"use client";

import { useEffect, useState } from "react";

import { MessageCircle } from "lucide-react";

import toast from "react-hot-toast";

import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import CommentEditModal from "./CommentEditModal";
import CommentDeleteModal from "./CommentDeleteModal";

import {
  getCommentsByIdea,
  updateComment,
  deleteComment,
} from "@/services/ideaService";

import { authClient } from "@/lib/auth-client";

const CommentSection = ({ idea }) => {
  const { data: session, isPending } = authClient.useSession();

  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [editingComment, setEditingComment] = useState(null);
  const [deletingComment, setDeletingComment] = useState(null);

  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // ================= GET COMMENTS =================

  useEffect(() => {
    if (isPending) return;

    if (!session?.user?.id) {
      setIsLoading(false);
      return;
    }
    if (!idea?._id) return;

    let cancelled = false;

    // setIsLoading(true);
    queueMicrotask(() => {
      if (!cancelled) setIsLoading(true);
    });

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
  }, [idea?._id, isPending, session?.user?.id]);

  // ================= ADD =================

  const handleCommentAdded = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  // ================= EDIT =================

  const handleEdit = (comment) => {
    setEditingComment(comment);
  };

  // ================= SAVE EDIT =================

  const handleSaveEdit = async (text) => {
    if (!editingComment?._id) return;

    setIsSaving(true);

    try {
      const result = await updateComment(editingComment._id, text);

      setComments((prev) =>
        prev.map((comment) =>
          comment._id === editingComment._id ? result.comment : comment,
        ),
      );

      toast.success(result.message || "Comment updated successfully");

      setEditingComment(null);
    } catch (error) {
      console.error("Error updating comment:", error);

      toast.error(error.message || "Failed to update comment");
    } finally {
      setIsSaving(false);
    }
  };

  // ================= DELETE =================

  const handleDelete = (comment) => {
    setDeletingComment(comment);
  };

  // ================= CONFIRM DELETE =================

  const handleConfirmDelete = async () => {
    if (!deletingComment?._id) return;

    setIsDeleting(true);

    try {
      const result = await deleteComment(deletingComment._id);

      setComments((prev) =>
        prev.filter((comment) => comment._id !== deletingComment._id),
      );

      toast.success(result.message || "Comment deleted successfully");

      setDeletingComment(null);
    } catch (error) {
      console.error("Error deleting comment:", error);

      toast.error(error.message || "Failed to delete comment");
    } finally {
      setIsDeleting(false);
    }
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
            {comments.length} {comments.length === 1 ? "comment" : "comments"}
          </p>
        </div>
      </div>

      {/* ================= COMMENT FORM ================= */}

      <CommentForm
        idea={idea}
        user={session?.user}
        onCommentAdded={handleCommentAdded}
      />

      {/* comments and count */}
      <div>
        {comments.length > 0 && (
          <p className="font-bold text-lg text-slate-500 dark:text-slate-400">
            {comments.length === 1 ? "comment" : "comments"} ({comments.length})
          </p>
        )}
      </div>

      {/* ================= COMMENTS ================= */}

      <div className="space-y-4">
        {isLoading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />

            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Loading comments...
            </p>
          </div>
        ) : !isLoading && comments.length === 0 ? (
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
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* ================= EDIT MODAL ================= */}

      <CommentEditModal
        comment={editingComment}
        isOpen={!!editingComment}
        onClose={() => setEditingComment(null)}
        onSave={handleSaveEdit}
        isSaving={isSaving}
      />

      {/* ================= DELETE MODAL ================= */}

      <CommentDeleteModal
        comment={deletingComment}
        isOpen={!!deletingComment}
        onClose={() => setDeletingComment(null)}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
      />
    </section>
  );
};

export default CommentSection;
