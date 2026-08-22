"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Image as ImageIcon,
  UserPlus,
} from "lucide-react";

import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import GoogleLoginButton from "./GoogleLoginButton";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    console.log("Register Data:", data);

    // Better Auth registration functionality will be added later.
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto my-10 w-full max-w-lg px-4 sm:my-14 sm:px-6"
    >
      {/* ================= FORM CARD ================= */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-500/5 sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-7 text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
            <UserPlus className="h-6 w-6" />
          </div>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Create your IdeaVault account and start sharing your ideas.
          </p>
        </motion.div>

        {/* ================= REGISTER FORM ================= */}
        <Form
          className="flex w-full flex-col gap-5"
          onSubmit={handleSubmit}
        >
          {/* ================= FULL NAME ================= */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (!value?.trim()) {
                return "Full name is required";
              }

              if (value.trim().length < 2) {
                return "Name must be at least 2 characters";
              }

              return null;
            }}
          >
            <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Full Name
            </Label>

            <div className="relative mt-1.5">
              <UserRound className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <Input
                name="name"
                className="w-full pl-10"
                placeholder="Enter your full name"
              />
            </div>

            <FieldError />
          </TextField>

          {/* ================= EMAIL ================= */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!value) {
                return "Email is required";
              }

              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email Address
            </Label>

            <div className="relative mt-1.5">
              <Mail className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <Input
                name="email"
                type="email"
                className="w-full pl-10"
                placeholder="you@example.com"
              />
            </div>

            <FieldError />
          </TextField>

          {/* ================= IMAGE URL ================= */}
          <TextField
            isRequired
            name="image"
            type="url"
            validate={(value) => {
              if (!value) {
                return "Profile image URL is required";
              }

              try {
                new URL(value);
                return null;
              } catch {
                return "Please enter a valid image URL";
              }
            }}
          >
            <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Profile Image URL
            </Label>

            <div className="relative mt-1.5">
              <ImageIcon className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <Input
                name="image"
                type="url"
                className="w-full pl-10"
                placeholder="https://example.com/profile.jpg"
              />
            </div>

            <FieldError />
          </TextField>

          {/* ================= PASSWORD ================= */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (!value) {
                return "Password is required";
              }

              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Password
            </Label>

            <div className="relative mt-1.5">
              <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <Input
                name="password"
                type="password"
                className="w-full pl-10"
                placeholder="Create a strong password"
              />
            </div>

            <FieldError />
          </TextField>

          {/* ================= CONFIRM PASSWORD ================= */}
          <TextField
            isRequired
            name="confirmPassword"
            type="password"
            validate={(value, form) => {
              if (!value) {
                return "Please confirm your password";
              }

              const password = form?.password;

              if (password && value !== password) {
                return "Passwords do not match";
              }

              return null;
            }}
          >
            <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Confirm Password
            </Label>

            <div className="relative mt-1.5">
              <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <Input
                name="confirmPassword"
                type="password"
                className="w-full pl-10"
                placeholder="Confirm your password"
              />
            </div>

            <FieldError />
          </TextField>

          {/* ================= SUBMIT ================= */}
          <Button
            type="submit"
            className="mt-1 h-12 w-full cursor-pointer rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            <UserPlus className="h-4 w-4" />
            Create Account
          </Button>
        </Form>
        <GoogleLoginButton />
      </div>
    </motion.div>
  );
};

export default RegisterForm;