import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { TRPCReactProvider } from "@/server/trpc";

export const metadata: Metadata = {
  description: "Create a dream offer for your client",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  title: "Proposify",
};

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "600"],
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <TRPCReactProvider>
      <html lang="en" className={poppins.className}>
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </TRPCReactProvider>
  );
}
