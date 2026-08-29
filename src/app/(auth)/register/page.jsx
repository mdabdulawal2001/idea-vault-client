import RegisterForm from '@/components/auth/RegisterForm';
import React from 'react';

export const metadata = {
  title: "Create Account | IdeaVault",
  description:
    "Create your IdeaVault account and start sharing and discovering innovative ideas.",
};

const RegisterPage = () => {
    return (
        <div>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;