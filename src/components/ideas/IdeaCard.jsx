"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Users,
  Wallet,
} from "lucide-react";

const IdeaCard = ({ idea, index = 0 }) => {
  const formattedDate = new Date(idea.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{ y: -7 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900"
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={idea.imageURL}
          alt={idea.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-md dark:bg-slate-900/90 dark:text-cyan-400">
          {idea.category}
        </span>

        {/* Top Right Icon */}
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-800 opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:opacity-100 dark:bg-slate-900/90 dark:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </div>

        {/* Author */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white">
            <Image
              src={idea.authorPhoto}
              alt={idea.authorName}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              {idea.authorName}
            </p>

            <p className="text-[11px] text-slate-200">
              Idea Creator
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="line-clamp-2 text-xl font-bold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
          {idea.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {idea.shortDescription}
        </p>

        {/* Tags */}
        {idea.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {idea.tags.slice(0, 3).map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* ================= META ================= */}
        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2 dark:border-slate-800">
          {/* Audience */}
          <div className="flex min-w-0 items-start gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
              <Users className="h-4 w-4" />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Audience
              </p>

              <p className="mt-1 line-clamp-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                {idea.targetAudience}
              </p>
            </div>
          </div>

          {/* Budget */}
          <div className="flex min-w-0 items-start gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
              <Wallet className="h-4 w-4" />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Budget
              </p>

              <p className="mt-1 truncate text-sm font-semibold text-slate-700 dark:text-slate-200">
                {idea.estimatedBudget
                  ? `৳${idea.estimatedBudget.toLocaleString()}`
                  : "Not specified"}
              </p>
            </div>
          </div>
        </div>

        {/* Posted Date */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
          <CalendarDays className="h-3.5 w-3.5" />

          <span>Posted {formattedDate}</span>
        </div>

        {/* View Details */}
        <Link
          href={`/ideas/${idea._id}`}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          View Details

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
};

export default IdeaCard;