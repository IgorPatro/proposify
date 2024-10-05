import { SignupForm } from "@/components/auth/signup-form";
import { AuthLayout } from "@/layouts/auth-layout";

const SignupPage = () => {
  return <SignupForm />;
};

SignupPage.getLayout = AuthLayout;

export default SignupPage;
