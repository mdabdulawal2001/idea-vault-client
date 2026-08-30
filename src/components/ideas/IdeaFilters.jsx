"use client";

import { getIdeaCategories } from "@/services/ideaService";
import {
  Search,
  CalendarDays,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_FILTERS = {
  search: "",
  category: "",
  fromDate: "",
  toDate: "",
};

const IdeaFilters = ({ filters, setFilters, onSearch }) => {
  const currentFilters = filters ?? DEFAULT_FILTERS;

  const [categories, setCategories] = useState([]);
  // Fetch categories
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getIdeaCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    loadCategories();
  }, []);

  // HANDLE INPUT CHANGE 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //  SEARCH 
  const handleSearch = () => {
    onSearch({
      ...currentFilters,
    });
  };

  // RESET
  const handleReset = () => {
    setFilters(DEFAULT_FILTERS);
    onSearch(DEFAULT_FILTERS);
  };

  return (
    <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 dark:border-slate-800 dark:bg-slate-900">
      {/* ================= HEADER ================= */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
          <SlidersHorizontal className="h-5 w-5" />
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Search & Filter
          </h3>

          <p className="text-xs text-slate-400">
            Find the ideas you are looking for
          </p>
        </div>
      </div>

      {/* ================= FILTER FIELDS ================= */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* ================= SEARCH ================= */}
        <div>
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            Search Idea
          </label>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              id="search"
              type="text"
              name="search"
              value={currentFilters.search}
              onChange={handleChange}
              placeholder="Search by title..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        {/* ================= CATEGORY ================= */}
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            Category
          </label>

          <select
            id="category"
            name="category"
            value={currentFilters.category}
            onChange={handleChange}
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:border-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* ================= FROM DATE ================= */}
        <div>
          <label
            htmlFor="fromDate"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            From Date
          </label>

          <div className="relative">
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              id="fromDate"
              type="date"
              name="fromDate"
              value={currentFilters.fromDate}
              onChange={handleChange}
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:border-blue-500"
            />
          </div>
        </div>

        {/* ================= TO DATE ================= */}
        <div>
          <label
            htmlFor="toDate"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            To Date
          </label>

          <div className="relative">
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              id="toDate"
              type="date"
              name="toDate"
              value={currentFilters.toDate}
              onChange={handleChange}
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* ================= BUTTONS ================= */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
        {/* RESET */}
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-600 transition-all duration-300 hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-900 dark:hover:text-cyan-400"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>

        {/* SEARCH */}
        <button
          type="button"
          onClick={handleSearch}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <Search className="h-4 w-4" />
          Search Ideas
        </button>
      </div>
    </div>
  );
};

export default IdeaFilters;
