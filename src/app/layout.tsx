import { TRPCReactProvider } from "@/server/trpc";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  description: "Create a dream offer for your client",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  title: "Proposify",
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
