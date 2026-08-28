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
import { authClient } from "@/lib/auth-client";
import { createIdea } from "@/services/ideaService";
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

  const { data: session, isPending: isSessionPending } =
    authClient.useSession();

  const user = session?.user;

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

    if (!user) {
      toast.error("Please login to publish an idea");
      console.log("User is not logged in");
      return;
    }

    setIsSubmitting(true);

    const loadingToast = toast.loading("Publishing your idea...");

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

        authorId: user.id,
        authorName: user.name,
        authorPhoto: user.image || "",
      };

      const result = await createIdea(ideaData);

      toast.dismiss(loadingToast);
      toast.success(result.message || "Idea published successfully!");

      setFormData(initialFormData);
    } catch (error) {
      toast.dismiss(loadingToast);

      console.error("Error creating idea:", error);

      toast.error(error.message || "Failed to publish idea ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="
        relative overflow-hidden
        min-h-screen
        bg-linear-to-br from-default-50 via-background to-primary/5
        px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14

        dark:from-[#07111f]
        dark:via-[#081522]
        dark:to-[#0a1d35]
      "
    >
      {/* ========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-32 -top-32
            h-72 w-72 rounded-full
            bg-blue-400/10 blur-3xl
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute -right-32 top-1/3
            h-80 w-80 rounded-full
            bg-sky-400/10 blur-3xl
            dark:bg-cyan-500/10
          "
        />

        <div
          className="
            absolute bottom-0 left-1/3
            h-64 w-64 rounded-full
            bg-indigo-400/5 blur-3xl
            dark:bg-blue-600/10
          "
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        {/* ========================================
            PAGE HEADER
        ========================================= */}

        <div
          className="mb-8 sm:mb-10 lg:mb-12
                      animate-[slideUp_0.6s_ease-out]"
        >
          {/* Brand */}

          <div className="mb-5 flex flex-col items-center justify-center md:flex-row md:justify-start md:gap-3">
            <div
              className="
                 flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl
              bg-blue-600/10 text-blue-600
              shadow-sm ring-1 ring-blue-600/10
              transition-all duration-300
              hover:scale-105 hover:-rotate-2
              hover:shadow-md hover:shadow-blue-500/15
              sm:h-11 sm:w-11
              dark:bg-blue-500/15
              dark:text-blue-400
              dark:ring-blue-500/20
                dark:shadow-lg dark:shadow-blue-500/10
              "
            >
              <Lightbulb size={22} />
            </div>

            <div className="mt-2 flex flex-col items-center justify-center md:mt-0 md:items-start">
              <p className="text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400">
                IdeaVault
              </p>

              <p className="text-xs text-default-400">
                Share your next big idea
              </p>
            </div>
          </div>

          {/* Main Title */}

          <h1
            className="
              text-center text-3xl font-bold tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
              md:text-left
            "
          >
            Add a New Idea
          </h1>

          <p
            className="
              mt-3 max-w-2xl
              text-center text-sm leading-6
              text-default-500
              sm:text-base sm:leading-7
              md:text-left
            "
          >
            Share your startup idea with the community. Explain the problem,
            solution, and vision clearly to get meaningful feedback.
          </p>
        </div>

        {/* ========================================
            FORM CARD
        ========================================= */}

        <div
          className="
            overflow-hidden rounded-2xl
            border border-default-200/80
            bg-content1
            shadow-xl shadow-default-200/30
            transition-all duration-500 ease-out
            hover:-translate-y-1
            hover:shadow-2xl hover:shadow-default-300/30
            dark:border-blue-400/10
            dark:bg-[#0b1a2a]/90
            dark:shadow-2xl
            dark:shadow-black/30
            dark:ring-1
            dark:ring-blue-400/5
          "
        >
          <form onSubmit={handleSubmit}>
            {/* ======================================
                BASIC INFORMATION
            ======================================= */}

            <div className="p-5 sm:p-7 lg:p-9">
              {/* Section Header */}

              <div className="mb-8">
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-lg
                      bg-primary/10 text-primary
                      transition-all duration-300
                      hover:scale-110
                      hover:rotate-3
                      hover:bg-blue-500/15
                      hover:shadow-md hover:shadow-blue-500/10
                    "
                  >
                    <Lightbulb size={19} />
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
                {/* IDEA TITLE */}

                <FormField label="Idea Title" required>
                  <InputField
                    className="transition-all duration-300 ease-out
                    hover:-translate-y-
                    hover:border-blue-500/50
                    hover:shadow-sm hover:shadow-blue-500/5
                    focus:-translate-y-0.5
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    focus:shadow-md
                    focus:shadow-blue-500/10
                    dark:border-default-100/15
                    dark:bg-default-50/5
                    dark:hover:border-blue-400/50
                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/10
                    dark:focus:shadow-blue-400/5"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Smart Campus Navigation"
                    icon={<Lightbulb size={18} />}
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
                      className="
                        h-12 w-full appearance-none
                        rounded-xl
                        border border-slate-300/80
                        bg-slate-50/70
                        px-4 pr-11
                        text-sm text-foreground
                        outline-none
                        transition-all duration-200

                        hover:border-blue-400/60
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-500/10
                        dark:border-blue-300/10
                        dark:bg-[#102235]/70
                        dark:hover:border-blue-400/40
                        dark:focus:border-blue-400
                        dark:focus:ring-blue-400/10
                      "
                    >
                      <option
                        value=""
                        className="bg-white text-gray-800 dark:bg-[#102235] dark:text-gray-100"
                      >
                        Select a category
                      </option>

                      {categories.map((category) => (
                        <option
                          key={category}
                          value={category}
                          className="bg-white text-gray-800 dark:bg-[#102235] dark:text-gray-100"
                        >
                          {category}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={18}
                      className="
                        pointer-events-none
                        absolute right-4 top-1/2
                        -translate-y-1/2
                        text-default-400
                      "
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
                      className="transition-all duration-300 ease-out
                      hover:-translate-y-
                      hover:border-blue-500/50
                      hover:shadow-sm hover:shadow-blue-500/5
                      focus:-translate-y-0.5
                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-500/10
                      focus:shadow-md
                      focus:shadow-blue-500/10
                      dark:border-default-100/15
                      dark:bg-default-50/5
                      dark:hover:border-blue-400/50
                      dark:focus:border-blue-400
                      dark:focus:ring-blue-400/10
                      dark:focus:shadow-blue-400/5"
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
                    className="
                    transition-all duration-300 ease-out
                    hover:-translate-y-
                    hover:border-blue-500/50
                    hover:shadow-sm hover:shadow-blue-500/5
                    focus:-translate-y-0.5
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    focus:shadow-md
                    focus:shadow-blue-500/10
                    dark:border-default-100/15
                    dark:bg-default-50/5
                    dark:hover:border-blue-400/50
                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/10
                    dark:focus:shadow-blue-400/5"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    placeholder="Briefly describe what your idea is about..."
                    rows={4}
                    required
                  />
                </FormField>

                {/* TAGS */}

                <FormField label="Tags" hint="Separate tags with commas">
                  <InputField
                    className="transition-all duration-300 ease-out
                    hover:-translate-y-
                    hover:border-blue-500/50
                    hover:shadow-sm hover:shadow-blue-500/5
                    focus:-translate-y-0.5
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    focus:shadow-md
                    focus:shadow-blue-500/10
                    dark:border-default-100/15
                    dark:bg-default-50/5
                    dark:hover:border-blue-400/50
                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/10
                    dark:focus:shadow-blue-400/5"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="AI, Education, Students"
                    icon={<Tags size={18} />}
                  />
                </FormField>

                {/* ESTIMATED BUDGET */}

                <FormField label="Estimated Budget" hint="Optional">
                  <InputField
                    className="transition-all duration-300 ease-out
                    hover:-translate-y-
                    hover:border-blue-500/50
                    hover:shadow-sm hover:shadow-blue-500/5
                    focus:-translate-y-0.5
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    focus:shadow-md
                    focus:shadow-blue-500/10
                    dark:border-default-100/15
                    dark:bg-default-50/5
                    dark:hover:border-blue-400/50
                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/10
                    dark:focus:shadow-blue-400/5"
                    name="estimatedBudget"
                    type="number"
                    min="0"
                    value={formData.estimatedBudget}
                    onChange={handleChange}
                    placeholder="e.g. 8500"
                    icon={<DollarSign size={18} />}
                  />
                </FormField>

                {/* IMAGE URL */}

                <FormField label="Image URL" required className="md:col-span-2">
                  <InputField
                    className="transition-all duration-300 ease-out
                    hover:-translate-y-
                    hover:border-blue-500/50
                    hover:shadow-sm hover:shadow-blue-500/5
                    focus:-translate-y-0.5
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    focus:shadow-md
                    focus:shadow-blue-500/10
                    dark:border-default-100/15
                    dark:bg-default-50/5
                    dark:hover:border-blue-400/50
                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/10
                    dark:focus:shadow-blue-400/5"
                    name="imageURL"
                    type="url"
                    value={formData.imageURL}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    icon={<ImageIcon size={18} />}
                    required
                  />
                </FormField>
              </div>
            </div>

            {/* ======================================
                IDEA DETAILS
            ======================================= */}

            <div
              className="
                border-y border-slate-200/70
                bg-slate-50/60
                p-5
                sm:p-7
                lg:p-9

                dark:border-blue-400/10
                dark:bg-[#0d2032]/60
              "
            >
              {/* Section Header */}

              <div className="mb-8">
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-xl
                      border border-blue-500/10
                      bg-blue-500/10
                      text-blue-600

                      dark:border-blue-400/15
                      dark:bg-blue-400/10
                      dark:text-blue-400
                    "
                  >
                    <FileText size={19} />
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
                {/* DETAILED DESCRIPTION */}

                <FormField label="Detailed Description" required>
                  <TextareaField
                    className="transition-all duration-300 ease-out
                    hover:-translate-y-
                    hover:border-blue-500/50
                    hover:shadow-sm hover:shadow-blue-500/5
                    focus:-translate-y-0.5
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    focus:shadow-md
                    focus:shadow-blue-500/10
                    dark:border-default-100/15
                    dark:bg-default-50/5
                    dark:hover:border-blue-400/50
                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/10
                    dark:focus:shadow-blue-400/5"
                    name="detailedDescription"
                    value={formData.detailedDescription}
                    onChange={handleChange}
                    placeholder="Explain your idea in detail, including how it would work..."
                    rows={7}
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
                    className="transition-all duration-300 ease-out
                    hover:-translate-y-
                    hover:border-blue-500/50
                    hover:shadow-sm hover:shadow-blue-500/5
                    focus:-translate-y-0.5
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    focus:shadow-md
                    focus:shadow-blue-500/10
                    dark:border-default-100/15
                    dark:bg-default-50/5
                    dark:hover:border-blue-400/50
                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/10
                    dark:focus:shadow-blue-400/5"
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    placeholder="University students, teachers, small businesses, parents..."
                    rows={4}
                    required
                  />
                </FormField>

                {/* PROBLEM STATEMENT */}

                <FormField label="Problem Statement" required>
                  <TextareaField
                    className="transition-all duration-300 ease-out
                    hover:-translate-y-
                    hover:border-blue-500/50
                    hover:shadow-sm hover:shadow-blue-500/5
                    focus:-translate-y-0.5
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    focus:shadow-md
                    focus:shadow-blue-500/10
                    dark:border-default-100/15
                    dark:bg-default-50/5
                    dark:hover:border-blue-400/50
                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/10
                    dark:focus:shadow-blue-400/5"
                    name="problemStatement"
                    value={formData.problemStatement}
                    onChange={handleChange}
                    placeholder="What specific problem does your idea aim to solve?"
                    rows={5}
                    required
                  />
                </FormField>

                {/* PROPOSED SOLUTION */}

                <FormField label="Proposed Solution" required>
                  <TextareaField
                    className="transition-all duration-300 ease-out
                    hover:-translate-y-
                    hover:border-blue-500/50
                    hover:shadow-sm hover:shadow-blue-500/5
                    focus:-translate-y-0.5
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    focus:shadow-md
                    focus:shadow-blue-500/10
                    dark:border-default-100/15
                    dark:bg-default-50/5
                    dark:hover:border-blue-400/50
                    dark:focus:border-blue-400
                    dark:focus:ring-blue-400/10
                    dark:focus:shadow-blue-400/5"
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

            <div
              className="
                bg-slate-50/80
                px-5 py-6
                sm:px-7
                lg:px-9

                dark:bg-[#091a2b]/80
              "
            >
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
                    className="
                      group inline-flex h-12 w-full
                      items-center justify-center gap-2
                      rounded-xl
                      border border-slate-300/80
                      bg-white
                      px-5
                      text-sm font-semibold
                      text-foreground
                      shadow-sm
                      

                      dark:border-blue-300/10
                      dark:bg-[#102235]
                      dark:hover:border-blue-400/30
                      dark:hover:bg-blue-500/10
                      dark:hover:text-blue-400

                      sm:w-auto
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:border-blue-500/50
                      hover:bg-blue-500/5
                      hover:text-blue-600
                      hover:shadow-lg
                      hover:shadow-blue-500/10
                      active:translate-y-0
                      active:scale-[0.98]
                    "
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
                    className="
                       group inline-flex h-12 w-full items-center justify-center gap-2
                       rounded-xl
                       bg-blue-600 px-6
                       text-sm font-semibold text-white
                       cursor-pointer
                       shadow-md shadow-blue-600/15
                                 
                       transition-all duration-300 ease-out
                                 
                       hover:-translate-y-1
                       hover:bg-blue-700
                       hover:shadow-xl
                       hover:shadow-blue-600/25
                                 
                       active:translate-y-0
                       active:scale-[0.97]
                                 
                       disabled:cursor-not-allowed
                       disabled:opacity-60
                                 
                       sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="
                            h-4 w-4
                            animate-spin
                            rounded-full
                            border-2
                            border-current
                            border-t-transparent
                          "
                        />
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
        <span
          className="
            pointer-events-none
            absolute left-4 top-1/2
            z-10
            -translate-y-1/2
            text-default-400
            transition-colors

            peer-focus:text-blue-500
          "
        >
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
        className={`
          peer h-12 w-full
          rounded-xl
          border border-slate-300/80
          bg-slate-50/70
          text-sm
          text-foreground
          outline-none
          transition-all duration-200

          placeholder:text-default-400

          hover:border-blue-400/60

          focus:border-blue-500
          focus:bg-white
          focus:ring-4
          focus:ring-blue-500/10

          dark:border-blue-300/10
          dark:bg-[#102235]/70

          dark:hover:border-blue-400/40

          dark:focus:border-blue-400
          dark:focus:bg-[#12283d]
          dark:focus:ring-blue-400/10

          ${icon ? "pl-11 pr-4" : "px-4"}
        `}
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
      className="
        w-full
        resize-y
        rounded-xl
        border border-slate-300/80
        bg-slate-50/70
        px-4 py-3.5
        text-sm
        leading-6
        text-foreground
        outline-none
        transition-all duration-200

        placeholder:text-default-400

        hover:border-blue-400/60

        focus:border-blue-500
        focus:bg-white
        focus:ring-4
        focus:ring-blue-500/10

        dark:border-blue-300/10
        dark:bg-[#102235]/70

        dark:hover:border-blue-400/40

        dark:focus:border-blue-400
        dark:focus:bg-[#12283d]
        dark:focus:ring-blue-400/10
      "
    />
  );
};

export default AddIdeaForm;
