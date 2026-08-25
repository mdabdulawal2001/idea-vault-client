"use client";

import { useEffect, useState } from "react";

import {
  MessageCircle,
  MessagesSquare,
} from "lucide-react";

import toast from "react-hot-toast";

import CommentCard from "./CommentCard";
import CommentEditModal from "./CommentEditModal";
import CommentDeleteModal from "./CommentDeleteModal";

import {
  getCommentsByUser,
  updateComment,
  deleteComment,
} from "@/services/ideaService";

import { authClient } from "@/lib/auth-client";

const MyInteractions = () => {
  const { data: session } = authClient.useSession();

  const [comments, setComments] = useState(null);

  // const [isLoading, setIsLoading] = useState(true);

  const [editingComment, setEditingComment] = useState(null);
  const [deletingComment, setDeletingComment] = useState(null);

  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // ================= GET USER COMMENTS =================

  useEffect(() => {
    if (!session?.user?.id) return;
    console.log("MY INTERACTIONS USER ID:", session.user.id);
    let cancelled = false;

    // setIsLoading(true);

    getCommentsByUser(session.user.id)
      .then((result) => {
        console.log("USER COMMENTS RESULT:", result);
        if (!cancelled) {
          setComments(result.comments || []);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          console.error("Error loading user comments:", error);

          toast.error(
            error.message || "Failed to load your comments"
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          // setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  // ================= EDIT =================

  const handleEdit = (comment) => {
    setEditingComment(comment);
  };

  // ================= SAVE EDIT =================

  const handleSaveEdit = async (text) => {
    if (!editingComment?._id) return;

    setIsSaving(true);

    try {
      const result = await updateComment(
        editingComment._id,
        text
      );

      setComments((prev) =>
        prev.map((comment) =>
          comment._id === editingComment._id
            ? result.comment
            : comment
        )
      );

      toast.success(
        result.message || "Comment updated successfully"
      );

      setEditingComment(null);
    } catch (error) {
      console.error("Error updating comment:", error);

      toast.error(
        error.message || "Failed to update comment"
      );
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
      const result = await deleteComment(
        deletingComment._id
      );

      setComments((prev) =>
        prev.filter(
          (comment) =>
            comment._id !== deletingComment._id
        )
      );

      toast.success(
        result.message || "Comment deleted successfully"
      );

      setDeletingComment(null);
    } catch (error) {
      console.error("Error deleting comment:", error);

      toast.error(
        error.message || "Failed to delete comment"
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-12 dark:bg-slate-950">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ================= PAGE HEADER ================= */}

        <div className="mb-10">

          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
                  <MessagesSquare className="h-5 w-5" />
                </div>

                <span className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-cyan-400">
                  My Activity
                </span>

              </div>

              <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-left dark:text-white">
                My Interactions
              </h1>

              <p className="mt-3 max-w-2xl text-center text-sm leading-6 text-slate-600 md:text-left dark:text-slate-400">
                View and manage the comments you have shared on community ideas.
              </p>

            </div>

            {/* Total Comments */}

            <div className="shrink-0">

              <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
                  <MessageCircle className="h-4 w-4" />
                </div>

                <div>

                  <p className="text-xs text-slate-400">
                    Total Comments
                  </p>

                  <p className="text-center text-lg font-extrabold text-slate-900 dark:text-white">
                    {comments.length}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= COMMENTS CONTAINER ================= */}

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">

          {/* Container Header */}

          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-5 dark:border-slate-800">

            <div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Your Comments
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Your recent interactions with community ideas
              </p>

            </div>

            <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-500 sm:flex dark:bg-slate-800 dark:text-slate-400">
              <MessageCircle className="h-4 w-4" />
            </div>

          </div>

          {/* ================= COMMENT LIST ================= */}

          {comments === null ? (

            <div className="py-10 text-center">

              <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />

              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                Loading your comments...
              </p>

            </div>

          ) : comments.length === 0 ? (

            <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">

              <MessageCircle className="mx-auto h-8 w-8 text-slate-300 dark:text-slate-600" />

              <h3 className="mt-3 text-sm font-bold text-slate-700 dark:text-slate-200">
                No comments yet
              </h3>

              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                You have not commented on any idea yet.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 gap-5">

              {comments.map((comment) => (

                <CommentCard
                  key={comment._id}
                  comment={comment}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />

              ))}

            </div>

          )}

        </div>

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

export default MyInteractions;