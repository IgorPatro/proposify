import "@/styles/globals.css";

import { HydrationBoundary, type DehydratedState } from "@tanstack/react-query";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

import { TRPCReactProvider } from "@/server/trpc";

import type { AppProps } from "next/app";

type GetLayout = (page: ReactNode) => ReactNode;

export type NextPageWithLayout<P> = AppProps<P> & {
  getLayout?: GetLayout;
};

interface CustomPageProps {
  dehydratedState: DehydratedState;
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

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout<CustomPageProps>) {
  const getLayout = Component.getLayout
    ? Component.getLayout
    : defaultGetLayout;

  return (
    <>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <SessionProvider basePath="/api-route/auth" session={pageProps.session}>
        <TRPCReactProvider>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <main className={poppins.className}>
              {getLayout(<Component {...pageProps} />)}
            </main>
          </HydrationBoundary>
        </TRPCReactProvider>
      </SessionProvider>
    </>
  );
}
