import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: "Login",
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