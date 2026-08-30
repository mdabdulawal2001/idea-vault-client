"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Mail,
  Pencil,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import ProfileEditModal from "./ProfileEditModal";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { updateProfile } from "@/services/profileService";
import { useProfile } from "../context/ProfileContext";


const ProfileCard = ({ user, onEdit }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { setProfile } = useProfile();

  const router = useRouter();
  const handleProfileUpdate = async (formData) => {
    try {
      const name = formData.name?.trim();
      const image = formData.image?.trim();

      // Basic validation
      if (!name) {
        toast.error("Name is required");
        return;
      }

      if (name.length < 2) {
        toast.error("Name must be at least 2 characters");
        return;
      }

      // const { data, error } = await authClient.updateUser({
      //   name,
      //   image: image || null,
      // });
      
      const data = await updateProfile({
        name,
        image: image || null,
      });

      // if (error) {
      //   console.error("Profile update error:", error);
      //   toast.error(error.message || "Failed to update profile");
      //   return;
      // }

      setProfile(data.user);
      console.log("Updated user:", data);
      toast.success("Profile updated successfully");

      // Close modal
      setIsEditOpen(false);

      // Refresh server component data
      router.refresh();
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "U";
  const showImage = user?.image && !imageError;

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Recently";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group mx-auto w-[90%] md:w-full mt-10 mb-10 max-w-4xl overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 dark:bg-slate-900"
    >
      {/* TOP ACCENT */}

      <div className="h-5 w-full bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600" />

      <div className="p-5 sm:p-7 lg:p-8">
        {/* HEADER */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* User */}

          <div className="flex min-w-0 items-center gap-4">
            {/* Avatar */}

            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 text-2xl font-extrabold text-white shadow-lg shadow-blue-500/20 ring-4 ring-blue-50 transition-transform duration-300 group-hover:scale-[1.03] dark:ring-blue-500/10">
              {showImage ? (
                <Image
                  referrerPolicy="no-referrer"
                  src={user.image}
                  alt={user?.name || "User"}
                  fill
                  onError={() => setImageError(true)}
                  className="object-cover"
                />
              ) : (
                <span>{firstLetter}</span>
              )}
            </div>

            {/* Name */}

            <div className="min-w-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 dark:text-cyan-400">
                My Profile
              </p>

              <h1 className="truncate text-xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                {user?.name || "User"}
              </h1>

              <p className="mt-1 truncate text-sm text-slate-500 dark:text-slate-400">
                {user?.email || "No email available"}
              </p>
            </div>
          </div>

          {/* Edit */}

          <motion.button
            type="button"
            onClick={() => setIsEditOpen(true)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 text-sm font-semibold text-blue-600 shadow-sm transition-all duration-300 hover:bg-blue-100 hover:shadow-md hover:shadow-blue-500/10 dark:bg-blue-500/10 dark:text-cyan-400 dark:hover:bg-blue-500/15"
          >
            <Pencil className="h-4 w-4" />
            Edit Profile
          </motion.button>
          <ProfileEditModal
            isOpen={isEditOpen}
            onOpenChange={setIsEditOpen}
            user={user}
            onSubmit={handleProfileUpdate}
          />
        </div>

        {/* DIVIDER */}

        <div className="my-7 h-px bg-slate-100 dark:bg-slate-800" />

        {/* INFO */}

        <div className="grid gap-4 sm:grid-cols-2">
          <ProfileInfo
            icon={<UserRound />}
            label="Full Name"
            value={user?.name || "Not available"}
          />

          <ProfileInfo
            icon={<Mail />}
            label="Email Address"
            value={user?.email || "Not available"}
          />

          <ProfileInfo
            icon={<CalendarDays />}
            label="Member Since"
            value={joinedDate}
          />

          <ProfileInfo
            icon={<ShieldCheck />}
            label="Account Status"
            value="Active"
            status
          />
        </div>
      </div>
    </motion.section>
  );
};

/* INFO ITEM */

const ProfileInfo = ({ icon, label, value, status }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group/info flex min-w-0 items-center gap-3 rounded-2xl bg-slate-50/80 p-4 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-500/5 dark:bg-slate-800/40 dark:hover:bg-slate-800/70 dark:hover:shadow-black/20"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition-all duration-300 group-hover/info:bg-blue-600 group-hover/info:text-white dark:bg-slate-900 dark:text-cyan-400 dark:group-hover/info:bg-cyan-500 dark:group-hover/info:text-slate-950">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p
          className={`mt-0.5 truncate text-sm font-semibold ${
            status
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-slate-700 dark:text-slate-200"
          }`}
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
