"use client";

import { authClient } from "@/lib/auth-client";
import { CalendarDays, MessageCircle, Pencil, Trash2 } from "lucide-react";

import Image from "next/image";
import { useState } from "react";

const CommentCard = ({ comment, onEdit, onDelete }) => {
  const { data: session } = authClient.useSession();
  const user = session.user;
  const [imageError, setImageError] = useState(false);
  const showImage = user?.image && !imageError;
  const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "U";

  const isOwner = user?.id && comment?.userId === user.id;

  return (
    <article className="group rounded-2xl bg-[#eae8e8] p-5 shadow-[0_4px_25px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(37,99,235,0.15)] dark:border dark:border-slate-800 dark:bg-slate-900! dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] dark:hover:border-blue-800 dark:hover:shadow-[0_12px_35px_rgba(37,99,235,0.12)]">
      {/* ================= USER INFO ================= */}

      <div className="flex items-start gap-4">
        {/* Profile Image */}

        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-slate-100 to-slate-200 text-slate-800 shadow-inner ring-1 ring-slate-900/5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md dark:from-slate-800 dark:to-slate-900 dark:text-slate-100 dark:ring-white/10">
          {showImage ? (
            <Image
              src={comment.userImage}
              alt={comment.userName}
              width={48}
              height={48}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <span className="select-none text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200">
              {firstLetter}
            </span>
          )}
        </div>

        {/* Name + Date */}

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-extrabold text-slate-900 dark:text-white">
            {comment.userName}
          </h3>

          <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-blue-500 dark:text-cyan-400" />

            <span>{new Date(comment.createdAt).toLocaleString()}</span>
          </div>
        </div>

        {/* Comment Icon */}

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-cyan-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
          <MessageCircle className="h-4 w-4" />
        </div>
      </div>

      {/* ================= COMMENT ================= */}

      <div className="relative mt-5 overflow-hidden rounded-xl bg-[#e5e1e1] p-4 shadow-inner transition-all duration-300 dark:border dark:border-slate-800 dark:bg-slate-800/80 dark:group-hover:border-blue-900">
        <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-200/20 blur-2xl dark:bg-blue-500/10" />

        <p className="relative text-sm leading-6 text-slate-700 dark:text-slate-300">
          {comment.text}
        </p>
      </div>

      {/* ================= IDEA + ACTIONS ================= */}

      <div className="mt-4 flex flex-col gap-3 pt-4 dark:border-t dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
        {/* Idea */}

        <div className="flex min-w-0 items-center justify-center gap-2 md:justify-start">
          <span className="shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400">
            Commented on:
          </span>

          <span className="truncate text-xs font-bold text-blue-600 dark:text-cyan-400">
            {comment.ideaTitle}
          </span>
        </div>

        {/* Actions */}

        {isOwner && (
          <div className="mt-2 flex shrink-0 items-center justify-center gap-2 md:justify-start">
            {/* Edit */}

            <button
              type="button"
              onClick={() => onEdit?.(comment)}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-3 text-xs font-bold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md dark:border dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-800 dark:hover:bg-blue-500/10 dark:hover:text-cyan-400"
            >
              <Pencil className="h-3.5 w-3.5" />
              Edit
            </button>

            {/* Delete */}

            <button
              type="button"
              onClick={() => onDelete?.(comment)}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-red-50 px-3 text-xs font-bold text-red-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-100 hover:shadow-md dark:border dark:border-red-900/40 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Delete
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default CommentCard;
