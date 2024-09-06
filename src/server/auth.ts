import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env";
import { db } from "@/server/db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ account, profile, token, user }) {
      console.log("jwt");
      console.log(user);
      console.log(token);

      if (profile) {
        const user = await db.user.findUnique({
          where: {
            email: profile.email,
          },
        });

        if (!user) {
          throw new Error("No user found");
        }

        token.id = user.id;
      }

      return token;
    },
    async signIn({ account, credentials, email, profile, user }) {
      console.log("signIn");
      console.log(account);
      console.log(profile);
      console.log(user);
      // console.log(credentials);
      // console.log(email);

      if (!profile?.email) {
        throw new Error("No profile");
      }

      await db.user.upsert({
        create: {
          email: profile.email,
          name: profile.name,
        },
        update: {
          name: profile.name,
        },
        where: {
          email: profile.email,
        },
      });

      return true;
    },
  },
  providers: [
    GoogleProvider({
      clientId: env.NEXTAUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
