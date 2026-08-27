"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TrendingIdeaCard = ({ idea }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={idea?.imageURL}
          alt={idea?.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-sm dark:bg-slate-900/90 dark:text-cyan-400">
          {idea?.category}
        </span>

        {/* Trending */}
        <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Trending
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">

        {/* Title */}
        <h3 className="line-clamp-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
          {idea?.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {idea?.shortDescription}
        </p>

        {/* Meta */}
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
          <div>
            <p className="text-xs font-medium text-slate-400">
              Target Audience
            </p>

            <p className="mt-1 line-clamp-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {idea?.targetAudience}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">
              Budget
            </p>

            <p className="mt-1 line-clamp-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
              ${idea?.estimatedBudget}
            </p>
          </div>
        </div>

        {/* View Details */}
        <Link
          href={`/ideas/${idea._id}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          View Details

          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default TrendingIdeaCard;