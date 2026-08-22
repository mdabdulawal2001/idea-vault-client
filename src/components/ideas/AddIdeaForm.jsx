"use client";

import { useState } from "react";
import {
  Lightbulb,
  Tags,
  Image as ImageIcon,
  DollarSign,
  FileText,
  Send,
  RotateCcw,
  ChevronDown,
} from "lucide-react";

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

const initialFormData = {
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
};

const AddIdeaForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // HANDLE CATEGORY
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
  // RESET FORM
  // ==========================================

  const handleReset = () => {
    setFormData(initialFormData);
  };

  // ==========================================
  // SUBMIT FORM
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const finalCategory =
      formData.category === "Other"
        ? formData.customCategory.trim()
        : formData.category;

    // Convert comma separated tags into array
    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    // ========================================
    // DATA READY FOR BACKEND
    // ========================================

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

    console.log("Idea Data:", ideaData);

    /*
      পরে এখানে API request হবে:

      await fetch("http://localhost:5000/ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ideaData),
      });
    */

    setTimeout(() => {
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <section className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-5xl">
        {/* ========================================
            PAGE HEADER
        ========================================= */}

        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Small Icon + Label */}

          <div className="mb-4 flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-11 sm:w-11 text-blue-600">
              <Lightbulb size={21} />
            </div>

            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-sm font-semibold text-primary">IdeaVault</p>

              <p className="text-xs text-default-400">
                Share your next big idea
              </p>
            </div>
          </div>

          {/* Main Title */}

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-blue-600 text-center md:text-left">
            Add a New Idea
          </h1>

          <p className="text-center md:text-left mt-3 max-w-2xl text-sm leading-6 text-default-500 sm:text-base sm:leading-7">
            Share your startup idea with the community. Explain the problem,
            solution, and vision clearly to get meaningful feedback.
          </p>
        </div>

        {/* ========================================
            FORM CARD
        ========================================= */}

        <div className="overflow-hidden rounded-2xl border border-default-200 bg-content1 shadow-sm">
          <form onSubmit={handleSubmit}>
            {/* ======================================
                BASIC INFORMATION
            ======================================= */}

            <div className="p-5 sm:p-7 lg:p-9">
              {/* Section Header */}

              <div className="mb-7 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Lightbulb size={18} />
                  </div>

                  <div>
                    <h2 className="text-base font-semibold text-foreground sm:text-lg">
                      Basic Information
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-default-400 sm:text-sm">
                      Give your idea a clear identity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fields */}

              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                {/* ==================================
                    IDEA TITLE
                =================================== */}

                <FormField label="Idea Title" required>
                  <InputField
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Smart Campus Navigation"
                    icon={<Lightbulb size={18} />}
                    required
                  />
                </FormField>

                {/* ==================================
                    CATEGORY
                =================================== */}

                <FormField label="Category" required>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleCategoryChange}
                      required
                      className="h-12 w-full appearance-none rounded-xl border border-default-300 bg-content1 px-4 pr-11 text-sm text-foreground outline-none transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    >
                      <option
                        value=""
                        className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100"
                      >
                        Select a category
                      </option>

                      {categories.map((category) => (
                        <option
                          key={category}
                          value={category}
                          className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100"
                        >
                          {category}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-default-400"
                    />
                  </div>
                </FormField>

                {/* ==================================
                    CUSTOM CATEGORY
                =================================== */}

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

                {/* ==================================
                    SHORT DESCRIPTION
                =================================== */}

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
                    rows={4}
                    required
                  />
                </FormField>

                {/* ==================================
                    TAGS
                =================================== */}

                <FormField label="Tags" hint="Separate tags with commas">
                  <InputField
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="AI, Education, Students"
                    icon={<Tags size={18} />}
                  />
                </FormField>

                {/* ==================================
                    IMAGE URL
                =================================== */}

                <FormField label="Image URL" required>
                  <InputField
                    name="imageURL"
                    type="url"
                    value={formData.imageURL}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    icon={<ImageIcon size={18} />}
                    required
                  />
                </FormField>

                {/* ==================================
                    ESTIMATED BUDGET
                =================================== */}

                <FormField label="Estimated Budget" hint="Optional">
                  <InputField
                    name="estimatedBudget"
                    type="number"
                    min="0"
                    value={formData.estimatedBudget}
                    onChange={handleChange}
                    placeholder="e.g. 8500"
                    icon={<DollarSign size={18} />}
                  />
                </FormField>
              </div>
            </div>

            {/* ======================================
                IDEA DETAILS
            ======================================= */}

            <div className="border-t border-default-200 p-5 sm:p-7 lg:p-9">
              {/* Section Header */}

              <div className="mb-7 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText size={18} />
                  </div>

                  <div>
                    <h2 className="text-base font-semibold text-foreground sm:text-lg">
                      Idea Details
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-default-400 sm:text-sm">
                      Explain your idea from different perspectives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Details Fields */}

              <div className="space-y-5 sm:space-y-6">
                {/* ==================================
                    DETAILED DESCRIPTION
                =================================== */}

                <FormField label="Detailed Description" required>
                  <TextareaField
                    name="detailedDescription"
                    value={formData.detailedDescription}
                    onChange={handleChange}
                    placeholder="Explain your idea in detail, including how it would work..."
                    rows={7}
                    required
                  />
                </FormField>

                {/* ==================================
                    TARGET AUDIENCE
                =================================== */}

                <FormField
                  label="Target Audience"
                  required
                  hint="Who will benefit from your idea?"
                >
                  <TextareaField
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    placeholder="University students, teachers, small businesses, parents..."
                    rows={4}
                    required
                  />
                </FormField>

                {/* ==================================
                    PROBLEM STATEMENT
                =================================== */}

                <FormField label="Problem Statement" required>
                  <TextareaField
                    name="problemStatement"
                    value={formData.problemStatement}
                    onChange={handleChange}
                    placeholder="What specific problem does your idea aim to solve?"
                    rows={5}
                    required
                  />
                </FormField>

                {/* ==================================
                    PROPOSED SOLUTION
                =================================== */}

                <FormField label="Proposed Solution" required>
                  <TextareaField
                    name="proposedSolution"
                    value={formData.proposedSolution}
                    onChange={handleChange}
                    placeholder="Explain how your idea will solve the problem..."
                    rows={5}
                    required
                  />
                </FormField>
              </div>
            </div>

            {/* ======================================
                ACTION AREA
            ======================================= */}

            <div className="border-t border-default-200 bg-default-50/50 px-5 py-6 sm:px-7 lg:px-9">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                {/* Message */}

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Ready to share your idea?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-default-400">
                    Make sure all required fields are completed.
                  </p>
                </div>

                {/* Buttons */}

                <div className="flex w-full flex-col-reverse gap-3 sm:w-auto sm:flex-row">
                  {/* RESET */}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-default-300 bg-content1 px-5 text-sm font-semibold text-foreground cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:shadow-md active:translate-y-0 sm:w-auto"
                  >
                    <RotateCcw
                      size={16}
                      className="transition-transform duration-300 group-hover:-rotate-45"
                    />
                    Reset
                  </button>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white cursor-pointer shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Publishing...
                      </>
                    ) : (
                      <>
                        <Send
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                        Publish Idea
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

/* =====================================================
   FORM FIELD
===================================================== */

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
        <label className="text-sm font-semibold text-foreground">
          {label}

          {required && <span className="ml-1 text-danger">*</span>}
        </label>

        {hint && (
          <span className="text-[11px] text-default-400 sm:text-xs">
            {hint}
          </span>
        )}
      </div>

      {children}
    </div>
  );
};

/* =====================================================
   INPUT FIELD
===================================================== */

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
        <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-default-400">
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
        className={`h-12 w-full rounded-xl border border-default-300 bg-content1 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-default-400 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
          icon ? "pl-11 pr-4" : "px-4"
        }`}
      />
    </div>
  );
};

/* =====================================================
   TEXTAREA FIELD
===================================================== */

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
      className="w-full resize-y rounded-xl border border-default-300 bg-content1 px-4 py-3.5 text-sm leading-6 text-foreground outline-none transition-all duration-200 placeholder:text-default-400 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/10"
    />
  );
};

export default AddIdeaForm;
