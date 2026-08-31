import RegisterForm from "@/components/auth/RegisterForm";
import React, { Suspense } from "react";

export const metadata = {
  title: "Create Account",
  description:
    "Create your IdeaVault account and start sharing and discovering innovative ideas.",
};

const RegisterPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterForm />
      </Suspense>
    </div>
  );
};

export default RegisterPage;
