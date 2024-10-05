import { type GetServerSideProps } from "next";

import { LoginForm } from "@/components/auth/login-form";
import { AuthLayout } from "@/layouts/auth-layout";
import { getServerAuthSession } from "@/server/auth";
import { getDashboardHref } from "@/utils/hrefs/dashboard";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: getDashboardHref(),
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const LoginPage = () => {
  return <LoginForm />;
};

LoginPage.getLayout = AuthLayout;

export default LoginPage;
