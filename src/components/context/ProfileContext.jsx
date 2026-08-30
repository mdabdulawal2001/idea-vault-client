"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { getProfile } from "@/services/profileService";

const ProfileContext = createContext(null);

export const ProfileProvider = ({ children }) => {
  const { data: session, isPending: sessionPending } =
    authClient.useSession();

  const [profile, setProfile] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      // Session check
      if (sessionPending) return;

      // User logged out
      if (!session?.user) {
        setProfile(null);
        return;
      }

      try {
        setIsProfileLoading(true);

        const data = await getProfile();

        setProfile(data.user);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setIsProfileLoading(false);
      }
    };

    fetchProfile();
  }, [session, sessionPending]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        isProfileLoading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfile must be used inside ProfileProvider"
    );
  }

  return context;
};