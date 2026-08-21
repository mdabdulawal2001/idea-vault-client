"use client";

import Link from "next/link";

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
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
    },
    {
      name: "GitHub",
      href: "#",
      path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-.253-.995-1.023-2.353-1.023-4.646 0-1.027.367-1.865 1.006-2.523-.101-.248-.436-1.265.095-2.638 0 0 .82-.262 2.69 1.026A9.38 9.38 0 0112 6.844a9.37 9.37 0 012.45.33c1.87-1.288 2.688-1.026 2.688-1.026.532 1.373.197 2.39.096 2.638.64.658 1.006 1.496 1.006 2.523 0 2.3-.771 3.647-1.028 4.646.318.27.676.803.676 1.625 0 1.174-.011 2.118-.011 2.406 0 .269.18.58.688.482A10.01 10.01 0 0022 12c0-5.523-4.477-10-10-10Z",
    },
    {
      name: "LinkedIn",
      href: "#",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001-4.124 2.062 2.062 0 01.001 4.124ZM7.114 20.452H3.56V9h3.554v11.452Z",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#06101f] text-slate-300">
      {/* Background Animated Glow & Waves */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="absolute -left-20 -top-24 h-72 w-72 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 -right-20 h-80 w-80 animate-pulse rounded-full bg-blue-600/10 blur-3xl delay-1000" />

        <div className="absolute bottom-0 left-0 right-0 w-[200%] opacity-20 animate-[slide_15s_linear_infinite]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-20 w-full fill-cyan-500">
            <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-[200%] opacity-10 animate-[slide_25s_linear_infinite_reverse]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-28 w-full fill-blue-500">
            <path d="M0,30 C200,100 400,0 600,60 C800,120 1000,20 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:pt-20">
          
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Idea<span className="text-cyan-400">Vault</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A community-driven platform for sharing startup ideas, discovering new concepts, and turning conversations into possibilities.
            </p>

            {/* Social Icons: 1. X | 2. GitHub | 3. LinkedIn */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition-all duration-200 hover:border-cyan-500/40 hover:bg-slate-800 hover:text-cyan-400"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Platform</h3>
            <ul className="mt-4 space-y-2.5">
              {platformLinks.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="group relative inline-block text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400">
                    <span>{label}</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Categories</h3>
            <ul className="mt-4 space-y-2.5">
              {categories.map(([label, category]) => (
                <li key={category}>
                  <Link href={`/ideas?category=${category}`} className="group relative inline-block text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400">
                    <span>{label}</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Contact</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-cyan-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500">Email</p>
                  <a href="mailto:hello@ideavault.com" className="group relative inline-block text-sm text-slate-300 transition-colors duration-200 hover:text-cyan-400">
                    <span>hello@ideavault.com</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-cyan-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11Z" />
                    <circle cx="12" cy="10" r="2.5" strokeWidth="1.8" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm font-medium text-slate-300">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 py-6 text-center sm:flex-row">
          <p className="text-xs text-slate-500">
            © {currentYear} IdeaVault. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <Link href="#" className="group relative text-slate-400 transition-colors duration-200 hover:text-cyan-400">
              <span>Privacy Policy</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="#" className="group relative text-slate-400 transition-colors duration-200 hover:text-cyan-400">
              <span>Terms of Service</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;