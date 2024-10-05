import { Poppins } from "next/font/google";
import Head from "next/head";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "@/utils/api";
import { type ReactNode } from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

type GetLayout = (page: ReactNode) => ReactNode;

export type NextPageWithLayout<P> = AppProps<P> & {
  getLayout?: GetLayout;
};

interface CustomPageProps {
  session: Session | null;
}

type AppPropsWithLayout<P> = AppProps<CustomPageProps> & {
  Component: NextPageWithLayout<P>;
};

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => {
  return page;
};

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "600"],
});

const App = ({ Component, pageProps }: AppPropsWithLayout<CustomPageProps>) => {
  const getLayout = Component.getLayout
    ? Component.getLayout
    : defaultGetLayout;

  return (
    <>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <main className={poppins.className}>
        <SessionProvider session={pageProps.session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </main>
    </>
  );
};

export default api.withTRPC(App);
