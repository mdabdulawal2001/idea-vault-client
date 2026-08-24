"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useSyncExternalStore } from "react";
import { Avatar } from "@heroui/react";
import { LogOut, UserRound } from "lucide-react";

import logo from "@/assets/logo.png";
import { authClient } from "@/lib/auth-client";
import NavbarSessionSpinner from "./NavbarSessionSpinner";
import UserAvatar from "./UserAvatar";
import toast from "react-hot-toast";
import ThemeToggleIcon from "./ThemeToggleIcon";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Ideas",
    href: "/ideas",
  },
  {
    name: "Add Idea",
    href: "/add-idea",
  },
  {
    name: "My Ideas",
    href: "/my-ideas",
  },
  {
    name: "My Interactions",
    href: "/my-interactions",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
  () => () => {},
  () => true,
  () => false
);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // ================= AUTH =================

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  // ================= THEME =================

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Logout Functionality
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
  };

  // ================= NAVIGATION =================

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // ================= USER INFO =================

  const userName = user?.name?.trim() || "User";

  return (
    <header className="sticky top-0 z-50 mx-auto border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex min-h-19 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}

        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center gap-2"
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

          <div className="block">
            <h1 className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
              IdeaVault
            </h1>

            <p className="-mt-1 text-[9px] font-medium tracking-[0.18em] text-slate-500 dark:text-slate-400">
              SHARE • DISCOVER • INNOVATE
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-cyan-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                }`}
              >
                {link.name}

                {active && (
                  <motion.span
                    layoutId="navbar-active-link"
                    className="absolute bottom-0 left-1/2 h-0.75 w-7 -translate-x-1/2 rounded-full bg-linear-to-r from-cyan-400 to-blue-600"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ================= DESKTOP RIGHT SIDE ================= */}

        <div className="hidden items-center gap-2 xl:flex">
          {/* Theme Toggle */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
          >
            <ThemeToggleIcon isDark={isDark} mounted={mounted} />
          </button>

          {/* ================= SESSION LOADING ================= */}

          {isPending ? (
            <NavbarSessionSpinner />
          ) : !user ? (
            /* ================= LOGGED OUT ================= */

            <div className="ml-1 flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-full border border-blue-500 px-4 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50 dark:border-cyan-500 dark:text-cyan-400 dark:hover:bg-cyan-950/30"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Register
              </Link>
            </div>
          ) : (
            /* ================= PROFILE ================= */

            <div className="relative ml-1">
              <button
                type="button"
                onClick={() => setIsProfileOpen((previous) => !previous)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 transition-all duration-300 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-cyan-500"
              >
                {/* USER AVATAR */}

                <UserAvatar user={user} size="sm" />

                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {userName}
                </span>

                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {/* PROFILE DROPDOWN */}

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -8,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900"
                  >
                    {/* Profile */}

                    <Link
                      href="/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                    >
                      <UserRound className="h-4 w-4" />
                      Profile Management
                    </Link>

                    {/* Logout */}

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* ================= MOBILE CONTROLS ================= */}

        <div className="flex items-center gap-2 xl:hidden">
          {/* Mobile Theme Toggle */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            <ThemeToggleIcon isDark={isDark} mounted={mounted} />
          </button>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-500 dark:hover:text-cyan-400"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden border-t border-slate-200/70 bg-white dark:border-slate-800 dark:bg-slate-950 xl:hidden"
          >
            <div className="navbar-mobile-scroll mx-auto max-h-[calc(100vh-76px)] max-w-7xl space-y-2 overflow-y-auto px-4 py-5 sm:px-6">
              {/* ================= MOBILE PROFILE ================= */}

              {isPending ? (
                <div className="flex justify-center py-3">
                  <NavbarSessionSpinner />
                </div>
              ) : user ? (
                <>
                  {/* Profile Info */}

                  <div className="flex flex-col items-center pb-3 pt-1">
                    <UserAvatar user={user} size="lg" />

                    <p className="mt-3 text-base font-bold text-slate-900 dark:text-white">
                      {userName}
                    </p>

                    {user.email && (
                      <p className="mt-0.5 max-w-full truncate text-xs text-slate-500 dark:text-slate-400">
                        {user.email}
                      </p>
                    )}
                  </div>

                  {/* Profile Management */}

                  <Link
                    href="/profile"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                  >
                    <UserRound className="h-4 w-4" />
                    Profile Management
                  </Link>

                  <div className="my-3 h-px bg-slate-200 dark:bg-slate-800" />
                </>
              ) : null}

              {/* ================= MOBILE LINKS ================= */}

              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      active
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-cyan-400"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span>{link.name}</span>

                    {active && (
                      <span className="h-2 w-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-600" />
                    )}
                  </Link>
                );
              })}

              <div className="my-3 h-px bg-slate-200 dark:bg-slate-800" />

              {/* ================= MOBILE AUTH ================= */}

              {isPending ? (
                <div className="flex justify-center py-2">
                  <NavbarSessionSpinner />
                </div>
              ) : !user ? (
                /* ================= LOGGED OUT ================= */

                <div className="flex w-full flex-col gap-2">
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="rounded-xl border border-blue-500 px-4 py-3 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-cyan-500 dark:text-cyan-400 dark:hover:bg-cyan-950/30"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={closeMobileMenu}
                    className="rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                /* ================= LOGGED IN ================= */

                <button
                  type="button"
                  onClick={handleLogout}
                  className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-red-500 shadow-sm transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-red-400 dark:hover:border-red-900/50 dark:hover:bg-red-950/20"
                >
                  <LogOut className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
