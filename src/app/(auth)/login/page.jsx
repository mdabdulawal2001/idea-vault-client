import LoginForm from "@/components/auth/LoginForm";
import { Suspense } from "react";
import loading from "./loading";


export const metadata = {
  title: "Login",
  description:
    "Sign in to your IdeaVault account and continue exploring innovative ideas.",
};

const LoginPage = () => {
  return (
    <Suspense fallback={loading}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
