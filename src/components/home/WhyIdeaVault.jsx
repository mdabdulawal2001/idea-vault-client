"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Share Without Limits",
    description:
      "Turn the ideas in your mind into something others can see, understand, discuss, and build upon.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },

  {
    title: "Discover New Concepts",
    description:
      "Explore innovative startup ideas across technology, healthcare, education, AI, business, and more.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle
          cx="11"
          cy="11"
          r="7"
          strokeWidth="1.8"
        />
        <path
          strokeLinecap="round"
          strokeWidth="1.8"
          d="m20 20-4-4"
        />
      </svg>
    ),
  },

  {
    title: "Start Meaningful Discussions",
    description:
      "Get perspectives from other users through comments and conversations around your startup concepts.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M21 11.5a8.5 8.5 0 01-9 8.5 8.5 8.5 0 01-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1112 20"
        />
      </svg>
    ),
  },

  {
    title: "Validate & Improve",
    description:
      "Use community feedback to identify weaknesses, challenge assumptions, and make your idea stronger.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
];

const WhyIdeaVault = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="w-full min-w-0 text-center lg:text-left"
          >
            {/* Badge */}
            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600 sm:px-4 sm:py-2 sm:text-xs dark:bg-blue-950/50 dark:text-cyan-400">
              Why IdeaVault?
            </span>

            {/* Heading */}
            <h2 className="mx-auto mt-4 max-w-xl text-3xl font-extrabold leading-[1.2] tracking-tight text-slate-900 dark:text-white sm:mt-5 sm:text-4xl lg:mx-0 lg:text-[2.6rem] xl:text-5xl">
              Your Idea Deserves{" "}
              <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                A Place to Grow
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:mt-5 sm:text-base sm:leading-7 lg:mx-0 lg:text-lg">
              Great ideas often begin as simple thoughts. IdeaVault gives you
              a space to put those thoughts into words, discover different
              perspectives, and turn rough concepts into stronger possibilities.
            </p>

            {/* Highlight Box */}
            <div className="mx-auto mt-6 w-full max-w-xl rounded-2xl border border-blue-100 bg-white p-4 text-left shadow-sm sm:mt-8 sm:p-5 lg:mx-0 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 text-white sm:h-11 sm:w-11">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 3v18M3 12h18"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-5 text-slate-900 sm:text-base dark:text-white">
                    Ideas become stronger through interaction.
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 dark:text-slate-400">
                    Share. Discuss. Challenge. Refine.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT BENEFITS ================= */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="flex h-full min-h-52.5 flex-col rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 sm:min-h-56.25 sm:p-6 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 dark:bg-blue-950/50 dark:text-cyan-400">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="mt-4 flex flex-1 flex-col">
                  <h3 className="text-base font-bold leading-6 text-slate-900 sm:text-lg dark:text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIdeaVault;