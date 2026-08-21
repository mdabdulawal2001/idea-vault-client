"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Have a startup concept in mind? Share your idea with the community and explain the problem you want to solve.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 20h9"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
        />
      </svg>
    ),
  },

  {
    number: "02",
    title: "Get Community Feedback",
    description:
      "Let other members explore your concept, leave comments, ask questions, and share valuable perspectives.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 014 11.5 8.5 8.5 0 0112.5 3a8.5 8.5 0 018.5 8.5z"
        />
      </svg>
    ),
  },

  {
    number: "03",
    title: "Refine & Grow",
    description:
      "Use the feedback you receive to challenge assumptions, improve your concept, and take your idea one step further.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 2v20M2 12h20"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M5 7l7-5 7 5M5 17l7 5 7-5"
        />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-slate-900 sm:py-24 lg:py-28">
      {/* Background Decoration */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-950/50 dark:text-cyan-400">
            How It Works
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Turn Your{" "}
            <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Ideas
            </span>{" "}
            Into Possibilities
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            IdeaVault makes it simple to share your ideas, receive meaningful
            feedback, and improve your concepts through community interaction.
          </p>
        </motion.div>

        {/* Steps */}

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {/* Connecting Line */}

          <div className="absolute left-[16.66%] right-[16.66%] top-12 hidden h-px bg-linear-to-r from-cyan-400/30 via-blue-500/50 to-cyan-400/30 md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative z-10 text-center"
            >
              {/* Icon */}

              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.25 }}
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-white bg-linear-to-br from-cyan-500 to-blue-600 text-white shadow-xl shadow-blue-500/20 dark:border-slate-900"
              >
                {step.icon}
              </motion.div>

              {/* Number */}

              <span className="mt-6 inline-block text-sm font-black tracking-widest text-blue-500 dark:text-cyan-400">
                {step.number}
              </span>

              {/* Title */}

              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              {/* Description */}

              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;