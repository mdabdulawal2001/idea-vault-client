import ProfileSkeleton from "@/components/skeletons/ProfileSkeleton";
import { div } from "framer-motion/client";

const Loading = () => {
  return (
    <div className="md:mt-20">
      <ProfileSkeleton />;
    </div>
  );
};

export default Loading;
