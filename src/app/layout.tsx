import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  title: "Create T3 App",
};

const poppins = Poppins({ subsets: ["latin", "latin-ext"], weight: "400" });

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <TRPCReactProvider>
      <html lang="en" className={poppins.className}>
        <body>{children}</body>
      </html>
    </TRPCReactProvider>
  );
}
