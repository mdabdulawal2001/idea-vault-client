"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  Wallet,
  Pencil,
  Trash2,
} from "lucide-react";

const MyIdeaCard = ({ idea, index = 0, onEdit, onDelete }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900"
    >
      {/* IMAGE  */}

      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={idea.imageURL}
          alt={idea.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Image Overlay */}

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />

        {/* Category */}

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-blue-600 shadow-sm backdrop-blur-md dark:bg-slate-900/90 dark:text-cyan-400">
          {idea.category}
        </span>

        {/* Top Right Arrow */}

        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-800 opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:opacity-100 dark:bg-slate-900/90 dark:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* ======== CONTENT ========= */}

      <div className="flex flex-1 flex-col p-5">
        {/* Title */}

        <h3 className="line-clamp-2 text-lg font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
          {idea.title}
        </h3>

        {/* Short Description */}

        <p className="mt-2 line-clamp-2 text-sm leading-5.5 text-slate-600 dark:text-slate-400">
          {idea.shortDescription}
        </p>

        {/* Tags */}

        {idea.tags?.length > 0 && (
          <div className="mt-3 flex min-h-6 flex-wrap gap-1.5">
            {idea.tags.slice(0, 2).map((tag, tagIndex) => (
              <span
                key={`${tag}-${tagIndex}`}
                className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-blue-500/10 dark:group-hover:text-cyan-400"
              >
                #{tag}
              </span>
            ))}

            {idea.tags.length > 2 && (
              <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-400 dark:bg-slate-800">
                +{idea.tags.length - 2}
              </span>
            )}
          </div>
        )}

        {/* ====== META ===== */}

        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
          {/* Audience */}

          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
              <Users className="h-3.5 w-3.5" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Audience
              </p>

              <p className="mt-0.5 truncate text-xs font-semibold text-slate-700 dark:text-slate-200">
                {idea.targetAudience}
              </p>
            </div>
          </div>

          {/* Budget */}

          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
              <Wallet className="h-3.5 w-3.5" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Budget
              </p>

              <p className="mt-0.5 truncate text-xs font-semibold text-slate-700 dark:text-slate-200">
                {idea.estimatedBudget
                  ? `$${Number(idea.estimatedBudget).toLocaleString()}`
                  : "Not specified"}
              </p>
            </div>
          </div>
        </div>

        {/* ==== ACTIONS ==== */}

        <div className="mt-4 grid grid-cols-2 gap-2">
          {/* Edit */}

          <button
            type="button"
            onClick={() => onEdit?.(idea)}
            className="group/edit flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-3 py-2.5 text-xs font-bold text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-cyan-400 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/20"
          >
            <Pencil className="h-3.5 w-3.5 transition-transform duration-300 group-hover/edit:-rotate-6" />

            Edit
          </button>

          {/* Delete */}

          <button
            type="button"
            onClick={() => onDelete?.(idea)}
            className="group/delete flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-bold text-red-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-100 hover:shadow-md hover:shadow-red-500/10 active:translate-y-0 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400 dark:hover:border-red-500/40 dark:hover:bg-red-500/20"
          >
            <Trash2 className="h-3.5 w-3.5 transition-transform duration-300 group-hover/delete:scale-110" />

            Delete
          </button>
        </div>

        {/* View Details */}

        <Link
          href={`/ideas/${idea._id}`}
          className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          View Details

          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
};

export default MyIdeaCard;