"use client";

import { useEffect, useState } from "react";
import {
  X,
  Lightbulb,
  Tags,
  Image as ImageIcon,
  DollarSign,
  FileText,
  Save,
  RotateCcw,
  ChevronDown,
} from "lucide-react";
import { updateIdea } from "@/services/ideaService";
import toast from "react-hot-toast";

const categories = [
  "Tech",
  "AI",
  "Health",
  "Education",
  "Business",
  "Finance",
  "Environment",
  "Productivity",
  "Community",
  "Startup",
  "Other",
];

const EditIdeaModal = ({ idea, isOpen, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    detailedDescription: "",
    category: "",
    customCategory: "",
    tags: "",
    imageURL: "",
    estimatedBudget: "",
    targetAudience: "",
    problemStatement: "",
    proposedSolution: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==========================================
  // LOAD IDEA DATA
  // ==========================================

  useEffect(() => {
    if (!idea) return;

    const isCustomCategory = !categories
      .filter((category) => category !== "Other")
      .includes(idea.category);

    setFormData({
      title: idea.title || "",
      shortDescription: idea.shortDescription || "",
      detailedDescription: idea.detailedDescription || "",
      category: isCustomCategory ? "Other" : idea.category || "",
      customCategory: isCustomCategory ? idea.category || "" : "",
      tags: Array.isArray(idea.tags) ? idea.tags.join(", ") : "",
      imageURL: idea.imageURL || "",
      estimatedBudget:
        idea.estimatedBudget !== null &&
        idea.estimatedBudget !== undefined
          ? String(idea.estimatedBudget)
          : "",
      targetAudience: idea.targetAudience || "",
      problemStatement: idea.problemStatement || "",
      proposedSolution: idea.proposedSolution || "",
    });
  }, [idea]);

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // CATEGORY CHANGE
  // ==========================================

  const handleCategoryChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      category: value,
      customCategory: value === "Other" ? prev.customCategory : "",
    }));
  };

  // ==========================================
  // RESET
  // ==========================================

  const handleReset = () => {
    if (!idea) return;

    const isCustomCategory = !categories
      .filter((category) => category !== "Other")
      .includes(idea.category);

    setFormData({
      title: idea.title || "",
      shortDescription: idea.shortDescription || "",
      detailedDescription: idea.detailedDescription || "",
      category: isCustomCategory ? "Other" : idea.category || "",
      customCategory: isCustomCategory ? idea.category || "" : "",
      tags: Array.isArray(idea.tags) ? idea.tags.join(", ") : "",
      imageURL: idea.imageURL || "",
      estimatedBudget:
        idea.estimatedBudget !== null &&
        idea.estimatedBudget !== undefined
          ? String(idea.estimatedBudget)
          : "",
      targetAudience: idea.targetAudience || "",
      problemStatement: idea.problemStatement || "",
      proposedSolution: idea.proposedSolution || "",
    });
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idea?._id) return;

    setIsSubmitting(true);

    try {
      const finalCategory =
        formData.category === "Other"
          ? formData.customCategory.trim()
          : formData.category;

      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

      const ideaData = {
        title: formData.title.trim(),
        shortDescription: formData.shortDescription.trim(),
        detailedDescription: formData.detailedDescription.trim(),
        category: finalCategory,
        tags: tagsArray,
        imageURL: formData.imageURL.trim(),

        estimatedBudget:
          formData.estimatedBudget === ""
            ? null
            : Number(formData.estimatedBudget),

        targetAudience: formData.targetAudience.trim(),
        problemStatement: formData.problemStatement.trim(),
        proposedSolution: formData.proposedSolution.trim(),
      };

      const result = await updateIdea(idea._id, ideaData);

      toast.success(result.message || "Idea updated successfully!");

      // Parent component-এর idea update করা
      onUpdated?.(result.idea);

      onClose();
    } catch (error) {
      console.error("Error updating idea:", error);

      toast.error(error.message || "Failed to update idea");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // ESCAPE KEY
  // ==========================================

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && !isSubmitting) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen || !idea) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) {
          onClose();
        }
      }}
    >
      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 shadow-2xl">
        {/* ========================================
            HEADER
        ========================================= */}

        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900! px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
              <Lightbulb size={20} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                Edit Idea
              </h2>

              <p className="text-xs text-gray-500 dark:text-zinc-400 sm:text-sm">
                Update your idea information
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-500 dark:text-zinc-400 transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        {/* ========================================
            FORM
        ========================================= */}

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto"
        >
          {/* BASIC INFORMATION */}

          <div className="p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Lightbulb size={17} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Basic Information
                </h3>

                <p className="text-xs text-gray-500 dark:text-zinc-400">
                  Update the basic information of your idea.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* TITLE */}

              <FormField label="Idea Title" required>
                <InputField
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Smart Campus Navigation"
                  icon={<Lightbulb size={17} />}
                  required
                />
              </FormField>

              {/* CATEGORY */}

              <FormField label="Category" required>
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleCategoryChange}
                    required
                    className="h-12 w-full appearance-none rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 px-4 pr-11 text-sm text-gray-900 dark:text-white outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  >
                    <option value="" className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-white">Select a category</option>

                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-white">
                        {category}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500"
                  />
                </div>
              </FormField>

              {/* CUSTOM CATEGORY */}

              {formData.category === "Other" && (
                <FormField
                  label="Custom Category"
                  required
                  className="md:col-span-2"
                >
                  <InputField
                    name="customCategory"
                    value={formData.customCategory}
                    onChange={handleChange}
                    placeholder="e.g. Agriculture"
                    required
                  />
                </FormField>
              )}

              {/* SHORT DESCRIPTION */}

              <FormField
                label="Short Description"
                required
                hint="Briefly describe your idea"
                className="md:col-span-2"
              >
                <TextareaField
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="Briefly describe what your idea is about..."
                  rows={3}
                  required
                />
              </FormField>

              {/* TAGS */}

              <FormField
                label="Tags"
                hint="Separate tags with commas"
              >
                <InputField
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="AI, Education, Students"
                  icon={<Tags size={17} />}
                />
              </FormField>

              {/* IMAGE */}

              <FormField label="Image URL" required>
                <InputField
                  name="imageURL"
                  type="url"
                  value={formData.imageURL}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  icon={<ImageIcon size={17} />}
                  required
                />
              </FormField>

              {/* BUDGET */}

              <FormField
                label="Estimated Budget"
                hint="Optional"
              >
                <InputField
                  name="estimatedBudget"
                  type="number"
                  min="0"
                  value={formData.estimatedBudget}
                  onChange={handleChange}
                  placeholder="e.g. 8500"
                  icon={<DollarSign size={17} />}
                />
              </FormField>
            </div>
          </div>

          {/* IDEA DETAILS */}

          <div className="border-t border-gray-200 dark:border-zinc-800 p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <FileText size={17} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Idea Details
                </h3>

                <p className="text-xs text-gray-500 dark:text-zinc-400">
                  Explain the idea from different perspectives.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* DETAILED DESCRIPTION */}

              <FormField label="Detailed Description" required>
                <TextareaField
                  name="detailedDescription"
                  value={formData.detailedDescription}
                  onChange={handleChange}
                  placeholder="Explain your idea in detail..."
                  rows={5}
                  required
                />
              </FormField>

              {/* TARGET AUDIENCE */}

              <FormField
                label="Target Audience"
                required
                hint="Who will benefit from your idea?"
              >
                <TextareaField
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="University students, teachers, small businesses..."
                  rows={3}
                  required
                />
              </FormField>

              {/* PROBLEM */}

              <FormField label="Problem Statement" required>
                <TextareaField
                  name="problemStatement"
                  value={formData.problemStatement}
                  onChange={handleChange}
                  placeholder="What specific problem does your idea solve?"
                  rows={4}
                  required
                />
              </FormField>

              {/* SOLUTION */}

              <FormField label="Proposed Solution" required>
                <TextareaField
                  name="proposedSolution"
                  value={formData.proposedSolution}
                  onChange={handleChange}
                  placeholder="Explain how your idea will solve the problem..."
                  rows={4}
                  required
                />
              </FormField>
            </div>
          </div>

          {/* ========================================
              FOOTER ACTIONS
          ========================================= */}

          <div className="sticky bottom-0 flex shrink-0 flex-col-reverse gap-3 border-t border-gray-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 px-5 py-4 backdrop-blur sm:flex-row sm:justify-end sm:px-7">
            <button
              type="button"
              onClick={handleReset}
              disabled={isSubmitting}
              className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-300 dark:border-zinc-700 px-5 text-sm font-semibold text-gray-700 dark:text-zinc-300 transition-all hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RotateCcw size={16} />
              Reset
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Updating...
                </>
              ) : (
                <>
                  <Save size={16} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ==========================================
// FORM FIELD
// ==========================================

const FormField = ({
  label,
  required = false,
  hint = "",
  children,
  className = "",
}) => {
  return (
    <div className={className}>
      <div className="mb-2.5 flex flex-wrap items-center justify-between gap-1.5">
        <label className="text-sm font-semibold text-gray-900 dark:text-zinc-200">
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>

        {hint && (
          <span className="text-[11px] text-gray-400 dark:text-zinc-500 sm:text-xs">
            {hint}
          </span>
        )}
      </div>

      {children}
    </div>
  );
};

// ==========================================
// INPUT FIELD
// ==========================================

const InputField = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  required = false,
  min,
}) => {
  return (
    <div className="relative">
      {icon && (
        <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-gray-400 dark:text-zinc-500">
          {icon}
        </span>
      )}

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        className={`h-12 w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-sm text-gray-900 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-zinc-500 hover:border-blue-400 dark:hover:border-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 ${
          icon ? "pl-11 pr-4" : "px-4"
        }`}
      />
    </div>
  );
};

// ==========================================
// TEXTAREA
// ==========================================

const TextareaField = ({
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
}) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="w-full resize-y rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 px-4 py-3.5 text-sm leading-6 text-gray-900 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-zinc-500 hover:border-blue-400 dark:hover:border-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
    />
  );
};

export default EditIdeaModal;