"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import TrendingIdeaCard from "./TrendingIdeaCard";
import { getTrendingIdeas } from "@/services/ideaService";

const trendingIdeas = await getTrendingIdeas();

const TrendingIdeas = () => {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-950/50 dark:text-cyan-400">
            Trending Ideas
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Ideas That Are{" "}
            <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Making Waves
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Discover innovative startup ideas shared by our community and
            explore concepts with real potential.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trendingIdeas.map((idea, index) => (
            <motion.div
              key={idea._id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <TrendingIdeaCard idea={idea} />
            </motion.div>
          ))}
        </div>

        {/* Explore All Ideas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/ideas"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Explore All Ideas
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingIdeas;
