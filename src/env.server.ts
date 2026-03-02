import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    DATABASE_URL: z.url(),
  },

  // Server-side environment variables are held in process.env
  // Stricter than `runtimeEnv: process.env` to ensure presence
  runtimeEnvStrict: {
    DATABASE_URL: process.env.DATABASE_URL,
  },

  // Treat empty strings as undefined so Zod validates correctly
  emptyStringAsUndefined: true,
});
