"use client";

import { motion } from "framer-motion";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const GoogleLoginButton = ({callbackUrl = "/"}) => {

  // login with google
   const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: callbackUrl,
      });
    } catch (error) {
      console.error(
        "Google login failed:",
        error
      );

      toast.error(
        "Google login failed ❌"
      );
    }
  };

  return (
    <div className="mt-6 w-full">
      {/* OR Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      {/* Google Button */}
      <motion.button
        type="button"
        onClick={handleGoogleLogin}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="mt-5 flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-slate-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900! dark:text-slate-200 dark:hover:border-blue-800 dark:hover:bg-slate-800"
      >
        
        <FaGoogle className="h-5 w-5 text-blue-600 dark:text-cyan-400"/>
        Continue with Google
      </motion.button>
    </div>
  );
};

export default GoogleLoginButton;