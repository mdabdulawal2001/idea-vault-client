import LoginForm from '@/components/auth/LoginForm';
import React from 'react';

export const metadata = {
  title: "Login | IdeaVault",
  description:
    "Sign in to your IdeaVault account and continue exploring innovative ideas.",
};

const LoginPage = () => {
    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default LoginPage;