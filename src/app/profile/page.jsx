import ProfileCard from "@/components/profile/ProfileCard";
import { auth } from "@/lib/auth";
import { requireAuth } from "@/lib/requireAuth";
import { getProfile } from "@/services/profileService";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "Profile Management",
  description:
    "Manage your IdeaVault profile information and account settings.",
};


const ProfilePage = async () => {
  const session = await requireAuth("/profile");
  const data = await getProfile();
  const user = data?.user;

  return (
    <div className="md:mt-[80px]">
      <ProfileCard user={user} />
    </div>
  );
};

export default ProfilePage;
