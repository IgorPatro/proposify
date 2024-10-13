import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {},

  emptyStringAsUndefined: true,

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_GOOGLE_CLIENT_ID: process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
    NEXTAUTH_GOOGLE_CLIENT_SECRET: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NODE_ENV: process.env.NODE_ENV,
    UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
  },

  server: {
    DATABASE_URL: z.string().url(),
    NEXTAUTH_GOOGLE_CLIENT_ID: z.string(),
    NEXTAUTH_GOOGLE_CLIENT_SECRET: z.string(),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    NEXTAUTH_URL: z.preprocess(
      (str) => process.env.VERCEL_URL ?? str,
      process.env.VERCEL ? z.string() : z.string().url(),
    ),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    UPLOADTHING_TOKEN: z.string(),
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
