"use client"
import ProfileSkeleton from "@/components/skeletons/ProfileSkeleton";
import { useEffect } from "react";


const Loading = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="md:mt-20">
      <ProfileSkeleton />;
    </div>
  );
};

export default Loading;
