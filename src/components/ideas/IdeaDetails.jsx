"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CircleDollarSign,
  Lightbulb,
  Target,
  UserRound,
  Users,
} from "lucide-react";

const IdeaDetails = ({ idea }) => {
  const formattedCreatedDate = new Date(
    idea.createdAt
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedUpdatedDate = new Date(
    idea.updatedAt
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/ideas"
              className="group mb-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Ideas
            </Link>
          </motion.div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* =================================================
                HERO CONTENT
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              {/* Category */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400"
              >
                <Lightbulb className="h-3.5 w-3.5" />
                {idea.category}
              </motion.span>

              {/* Title */}
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-blue-600 sm:text-5xl lg:text-[52px] dark:text-white">
                {idea.title}
              </h1>

              {/* Short Description */}
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                {idea.shortDescription}
              </p>

              {/* Author */}
              <div className="mt-7 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-md dark:border-slate-800">
                  <Image
                    src={idea.authorPhoto}
                    alt={idea.authorName}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {idea.authorName}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Idea Creator
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                HERO IMAGE
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <div className="group relative">
                {/* Image Glow */}
                <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-blue-500/20 to-cyan-400/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl shadow-blue-500/10 sm:h-80 lg:h-96">
                  <Image
                    src={idea.imageURL}
                    alt={idea.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/5 to-transparent" />

                  {/* Floating Category */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-slate-950/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                    {idea.category} Idea
                  </div>

                  {/* Top Right Icon */}
                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-blue-600 opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:opacity-100 dark:bg-slate-900/90 dark:text-cyan-400">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <div className="space-y-7 lg:col-span-2">
            {/* ================= ABOUT ================= */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8 dark:border-slate-800 dark:bg-slate-900"
            >
              <SectionTitle
                icon={<Lightbulb className="h-5 w-5" />}
                title={
                  <>
                    About{" "}
                    <span className="text-blue-600 dark:text-cyan-400">
                      This Idea
                    </span>
                  </>
                }
              />

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                {idea.detailedDescription}
              </p>
            </motion.section>

            {/* ================= PROBLEM ================= */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8 dark:border-slate-800 dark:bg-slate-900"
            >
              <SectionTitle
                icon={<Target className="h-5 w-5" />}
                title={
                  <>
                    Problem{" "}
                    <span className="text-blue-600 dark:text-cyan-400">
                      Statement
                    </span>
                  </>
                }
              />

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900/30 dark:bg-blue-500/5">
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {idea.problemStatement}
                </p>
              </div>
            </motion.section>

            {/* ================= SOLUTION ================= */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8 dark:border-slate-800 dark:bg-slate-900"
            >
              <SectionTitle
                icon={<ArrowUpRight className="h-5 w-5" />}
                title={
                  <>
                    Proposed{" "}
                    <span className="text-blue-600 dark:text-cyan-400">
                      Solution
                    </span>
                  </>
                }
              />

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900/30 dark:bg-blue-500/5">
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {idea.proposedSolution}
                </p>
              </div>
            </motion.section>

            {/* ================= TAGS ================= */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8 dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Related{" "}
                <span className="text-blue-600 dark:text-cyan-400">
                  Tags
                </span>
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {idea.tags?.map((tag, index) => (
                  <motion.span
                    key={`${tag}-${index}`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-default rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition-colors duration-200 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-cyan-400 dark:hover:bg-blue-500/20"
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================== */}
          <aside className="space-y-6">
            {/* ================= OVERVIEW ================= */}
            <motion.section
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900"
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Idea{" "}
                <span className="text-blue-600 dark:text-cyan-400">
                  Overview
                </span>
              </h2>

              <div className="mt-5 space-y-3">
                <InfoItem
                  icon={<Users className="h-4 w-4" />}
                  label="Target Audience"
                  value={idea.targetAudience}
                />

                <InfoItem
                  icon={<CircleDollarSign className="h-4 w-4" />}
                  label="Estimated Budget"
                  value={
                    idea.estimatedBudget
                      ? `$${idea.estimatedBudget.toLocaleString()}`
                      : "Not specified"
                  }
                />

                <InfoItem
                  icon={<Lightbulb className="h-4 w-4" />}
                  label="Category"
                  value={idea.category}
                />
              </div>
            </motion.section>

            {/* ================= CREATOR ================= */}
            <motion.section
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: 0.08,
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900"
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                About the{" "}
                <span className="text-blue-600 dark:text-cyan-400">
                  Creator
                </span>
              </h2>

              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-blue-100 dark:border-blue-500/20">
                  <Image
                    src={idea.authorPhoto}
                    alt={idea.authorName}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {idea.authorName}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Idea Creator
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <UserRound className="h-4 w-4 text-blue-600 dark:text-cyan-400" />

                  <span className="truncate">
                    Creator ID: {idea.authorId}
                  </span>
                </div>
              </div>
            </motion.section>

            {/* ================= TIMELINE ================= */}
            <motion.section
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: 0.16,
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900"
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Timeline
              </h2>

              <div className="mt-5 space-y-5">
                <TimelineItem
                  label="Created"
                  date={formattedCreatedDate}
                />

                <TimelineItem
                  label="Last Updated"
                  date={formattedUpdatedDate}
                />
              </div>
            </motion.section>

            {/* ================= CTA ================= */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/ideas"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Explore More Ideas

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </aside>
        </div>
      </section>
    </main>
  );
};

/* ============================================================
   REUSABLE SECTION TITLE
============================================================ */

const SectionTitle = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
};

/* ============================================================
   REUSABLE INFO ITEM
============================================================ */

const InfoItem = ({ icon, label, value }) => {
  return (
    <motion.div
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
      className="flex gap-3 rounded-xl bg-slate-50 p-4 transition-colors duration-300 hover:bg-blue-50/60 dark:bg-slate-800/50 dark:hover:bg-blue-500/5"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm dark:bg-slate-900 dark:text-cyan-400">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold leading-5 text-slate-700 dark:text-slate-200">
          {value}
        </p>
      </div>
    </motion.div>
  );
};

/* ============================================================
   REUSABLE TIMELINE ITEM
============================================================ */

const TimelineItem = ({ label, date }) => {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
        <CalendarDays className="h-4 w-4" />
      </div>

      <div>
        <p className="text-xs font-medium text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {date}
        </p>
      </div>
    </div>
  );
};

export default IdeaDetails;