
"use client";

import Image from "next/image";
import Link from "next/link";


import { FaGithub, FaXTwitter } from "react-icons/fa6";

import logo from "@/assets/logo.png";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    ["Home", "/"],
    ["Explore Ideas", "/ideas"],
    ["Add Idea", "/add-idea"],
    ["My Ideas", "/my-ideas"],
    ["My Interactions", "/my-interactions"],
  ];

  const categories = [
    ["Technology", "Technology"],
    ["Artificial Intelligence", "AI"],
    ["Healthcare", "Healthcare"],
    ["Education", "Education"],
    ["Business", "Business"],
  ];

  const socialLinks = [
    {
      name: "X",
      href: "#",
      icon: FaXTwitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedin,
    },
  ];

  return (
    <footer className="relative mt-25 overflow-hidden bg-[#06101f] text-slate-300">
      {/* =====================================================
          BACKGROUND GLOW & WAVES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        {/* Animated Glow */}

        <div className="absolute -left-20 -top-24 h-72 w-72 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute -right-20 top-1/2 h-80 w-80 animate-pulse rounded-full bg-blue-600/10 blur-3xl delay-1000" />

        {/* First Wave */}

        <div className="absolute bottom-0 left-0 right-0 w-[200%] animate-[slide_15s_linear_infinite] opacity-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-20 w-full fill-cyan-500"
          >
            <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z" />
          </svg>
        </div>

        {/* Second Wave */}

        <div className="absolute bottom-0 left-0 right-0 w-[200%] animate-[slide_25s_linear_infinite_reverse] opacity-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-28 w-full fill-blue-500"
          >
            <path d="M0,30 C200,100 400,0 600,60 C800,120 1000,20 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =================================================
            TOP SECTION
        ================================================= */}

        <div className="grid grid-cols-1 gap-10 pb-12 pt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:pb-12 lg:pt-20">
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
            >
              <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                <Image
                  src={logo}
                  alt="IdeaVault Logo"
                  fill
                  priority
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-xl font-bold tracking-tight text-white">
                Idea<span className="text-cyan-400">Vault</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A community-driven platform for sharing startup ideas,
              discovering new concepts, and turning conversations into
              possibilities.
            </p>

            {/* =================================================
                SOCIAL ICONS
            ================================================= */}

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="
                      group
                      relative
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-slate-800
                      bg-slate-900/60
                      text-slate-400
                      transition-all
                      duration-200

                      hover:border-cyan-500/40
                      hover:bg-slate-800
                      hover:text-cyan-400
                    "
                  >
                    <Icon className="h-4 w-4" />

                    <span
                      className="
                        absolute
                        -bottom-1
                        left-0
                        h-0.5
                        w-0
                        bg-cyan-400
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =================================================
              PLATFORM LINKS
          ================================================= */}

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Platform
            </h3>

            <ul className="mt-4 space-y-2.5">
              {platformLinks.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      group
                      relative
                      inline-block
                      text-sm
                      text-slate-400
                      transition-colors
                      duration-200
                      hover:text-cyan-400
                    "
                  >
                    <span>{label}</span>

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-0.5
                        w-0
                        bg-cyan-400
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CATEGORIES
          ================================================= */}

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Categories
            </h3>

            <ul className="mt-4 space-y-2.5">
              {categories.map(([label, category]) => (
                <li key={category}>
                  <Link
                    href={`/ideas?category=${category}`}
                    className="
                      group
                      relative
                      inline-block
                      text-sm
                      text-slate-400
                      transition-colors
                      duration-200
                      hover:text-cyan-400
                    "
                  >
                    <span>{label}</span>

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-0.5
                        w-0
                        bg-cyan-400
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contact
            </h3>

            <div className="mt-4 space-y-4">
              {/* Email */}

              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-800
                    bg-slate-900/60
                    text-cyan-400
                  "
                >
                  <Mail className="h-4 w-4" />
                </div>

                <div className="text-left">
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:hello@ideavault.com"
                    className="
                      group
                      relative
                      inline-block
                      text-sm
                      text-slate-300
                      transition-colors
                      duration-200
                      hover:text-cyan-400
                    "
                  >
                    <span>hello@ideavault.com</span>

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-0.5
                        w-0
                        bg-cyan-400
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </a>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-800
                    bg-slate-900/60
                    text-cyan-400
                  "
                >
                  <MapPin className="h-4 w-4" />
                </div>

                <div className="text-left">
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <p className="text-sm font-medium text-slate-300">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-slate-800/80
            py-6
            text-center

            sm:flex-row
          "
        >
          <p className="text-xs text-slate-500">
            © {currentYear} IdeaVault. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <Link
              href="#"
              className="
                group
                relative
                text-slate-400
                transition-colors
                duration-200
                hover:text-cyan-400
              "
            >
              <span>Privacy Policy</span>

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-0.5
                  w-0
                  bg-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>

            <Link
              href="#"
              className="
                group
                relative
                text-slate-400
                transition-colors
                duration-200
                hover:text-cyan-400
              "
            >
              <span>Terms of Service</span>

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-0.5
                  w-0
                  bg-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

