import bcrypt from "bcryptjs";
import { type GetServerSidePropsContext } from "next";
import {
  type DefaultSession,
  type DefaultUser,
  getServerSession,
  type NextAuthOptions,
  type User,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/env";
import { db } from "@/server/db";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: number;
  }

  interface Session extends DefaultSession {
    token: string;
    user: {
      email: string;
      id: number;
      uuid: string;
    } & User;
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          ...user,
        };
      }

      return token;
    },
    // Note: It runs on every session fetch
    session: async ({ session, token }) => {
      const user = token.user as User;

      return {
        ...token,
        ...session,
        user: {
          ...session.user,
          ...user,
        },
      };
    },
  },
  pages: {
    error: "/error",
    signIn: "/auth/login",
  },
  providers: [
    // TODO: Add Google in the future
    // GoogleProvider({
    //   clientId: env.NEXTAUTH_GOOGLE_CLIENT_ID,
    //   clientSecret: env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db.user.findFirst({
          where: { email: credentials.email },
        });

        if (!user) {
          return null;
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isValidPassword) {
          return null;
        }

        return {
          email: user.email,
          id: user.id,
          user: {
            email: user.email,
            firstName: user.firstName,
            id: user.uuid,
            lastName: user.lastName,
          },
        };
      },
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      id: "credentials",
      name: "Credentials",
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
