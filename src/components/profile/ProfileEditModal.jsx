"use client";

import { useEffect, useRef } from "react";

import {
  Button,
  Input,
  Label,
  TextField,
  TextArea,
  FieldError,
} from "@heroui/react";

import { UserRound, Mail, FileText, Image as ImageIcon, X } from "lucide-react";

const ProfileEditModal = ({ isOpen, onOpenChange, user, onSubmit }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    onSubmit?.(formData);
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      className="m-auto w-[92%] max-w-xl rounded-2xl border border-slate-200/80 bg-white p-0 shadow-2xl shadow-slate-900/10 backdrop:bg-slate-950/40 dark:border-slate-700/80 dark:bg-slate-900! dark:shadow-black/40 dark:backdrop:bg-slate-950/70"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5 dark:border-slate-800 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
            <UserRound className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Edit Profile
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Update your profile information.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleClose}
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-h-[75vh] overflow-y-auto px-5 py-5 sm:px-6"
      >
        <div className="space-y-5">
          {/* Name */}
          <TextField
            name="name"
            defaultValue={user?.name || ""}
            isRequired
            validate={(value) => {
              if (!value.trim()) return "Name is required";

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
                placeholder="Enter your name"
                className="w-full pl-10"
              />
            </div>

            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            name="email"
            type="email"
            defaultValue={user?.email || ""}
            isRequired
            validate={(value) => {
              if (!value) return "Email is required";

              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
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
                placeholder="you@example.com"
                className="w-full pl-10"
              />
            </div>

            <FieldError />
          </TextField>

          {/* Image */}
          <TextField name="image" defaultValue={user?.image || ""}>
            <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Profile Image URL
            </Label>

            <div className="relative mt-1.5">
              <ImageIcon className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <Input
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full pl-10"
              />
            </div>

            <FieldError />
          </TextField>

          {/* Bio */}
          <TextField name="bio" defaultValue={user?.bio || ""}>
            <Label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Bio
            </Label>

            <div className="relative mt-1.5">
              <FileText className="pointer-events-none absolute left-3 top-3 z-10 h-4 w-4 text-slate-400" />

              <TextArea
                name="bio"
                placeholder="Tell something about yourself..."
                className="min-h-28 w-full pl-10"
              />
            </div>

            <FieldError />
          </TextField>
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 dark:border-slate-800 sm:flex-row sm:justify-end">
          <Button
            type="button"
            onPress={handleClose}
            className="w-full rounded-xl sm:w-auto"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 sm:w-auto"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </dialog>
  );
};

export default ProfileEditModal;
