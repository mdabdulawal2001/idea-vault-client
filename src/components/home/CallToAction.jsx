"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-slate-900 sm:py-20 lg:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-600 to-cyan-500 px-5 py-12 text-center shadow-2xl shadow-blue-500/20 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-20 -right-10 h-48 w-48 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              Ready to Share?
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Turn Your Idea Into a{" "}
              <span className="text-cyan-100">Conversation</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base lg:text-lg">
              Your next great idea might be waiting in your mind right now.
              Share it with the IdeaVault community, get meaningful feedback,
              and discover what it could become.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/add-idea"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
              >
                Share Your Idea

                <svg
                  className="h-4 w-4"
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

              <Link
                href="/ideas"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto"
              >
                Explore Ideas
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;