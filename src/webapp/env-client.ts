import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const clientEnv = createEnv({
  // Client-side prefix enforced at type-level & runtime to avoid leaking server-side variables to client
  clientPrefix: "VITE_",

  client: {
    VITE_SITE_URL: z.url(),
  },

  // Client-side environment variables are held in import.meta.env
  // Usually `runtimeEnv: import.meta.env` but we can have stricter explicit values here
  runtimeEnvStrict: {
    VITE_SITE_URL: import.meta.env.VITE_SITE_URL,
  },

  // Treat empty strings as undefined so Zod validates correctly
  emptyStringAsUndefined: true,
});
