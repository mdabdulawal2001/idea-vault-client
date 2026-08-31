import RegisterForm from "@/components/auth/RegisterForm";
import React, { Suspense } from "react";
import loading from "./loading";

export const metadata = {
  title: "Create Account",
  description:
    "Create your IdeaVault account and start sharing and discovering innovative ideas.",
};

const RegisterPage = () => {
  return (
    <div>
      <Suspense fallback={loading}>
        <RegisterForm />
      </Suspense>
    </div>
  );
};

export default RegisterPage;
