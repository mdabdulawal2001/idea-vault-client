"use client";

import { MessageCircle, MessagesSquare } from "lucide-react";
import CommentCard from "./CommentCard";

const dummyComments = [
  {
    _id: "1",
    userName: "Md Abdul Awal",
    userImage: "https://i.pravatar.cc/150?img=12",
    text: "This is a really interesting idea. I think it has great potential if the execution is done properly.",
    date: "August 22, 2026",
    ideaTitle: "AI Powered Personal Assistant",
  },
  {
    _id: "2",
    userName: "Md Abdul Awal",
    userImage: "https://i.pravatar.cc/150?img=12",
    text: "I really like the concept behind this project. It could solve a real-world problem for many users.",
    date: "August 20, 2026",
    ideaTitle: "Smart Health Monitoring Platform",
  },
  {
    _id: "3",
    userName: "Md Abdul Awal",
    userImage: "https://i.pravatar.cc/150?img=12",
    text: "The idea looks promising. I would love to see how this develops in the future.",
    date: "August 18, 2026",
    ideaTitle: "Community Based Learning Platform",
  },
];

const MyInteractions = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            PAGE HEADER
        ================================================== */}
        <div className="mb-10">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-between">

            {/* Heading */}
            <div>
              <div className="mb-3 flex items-center justify-center md:justify-start gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
                  <MessagesSquare className="h-5 w-5" />
                </div>

                <span className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-cyan-400">
                  My Activity
                </span>
              </div>

              <h1 className="text-3xl text-center md:text-left font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                My Interactions
              </h1>

              <p className="mt-3 max-w-2xl text-center md:text-left text-sm leading-6 text-slate-600 dark:text-slate-400">
                View and manage the comments you have shared on community
                ideas.
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

                  <p className="text-lg text-center font-extrabold text-slate-900 dark:text-white">
                    {dummyComments.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            COMMENTS CONTAINER
        ================================================== */}
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

          {/* ==================================================
              COMMENT LIST
          ================================================== */}
          <div className="grid grid-cols-1 gap-5">
            {dummyComments.map((comment) => (
              <CommentCard key={comment._id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyInteractions;