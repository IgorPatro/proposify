import { redirect } from "next/navigation";

import { LoginForm } from "@/components/auth/login-form";
import { getServerAuthSession } from "@/server/auth";
import { getDashboardHref } from "@/utils/hrefs/dashboard";

const LoginPage = async () => {
  const session = await getServerAuthSession();

  if (session) {
    return redirect(getDashboardHref());
  }

  return <LoginForm />;
};

export default LoginPage;
