import { absoluteUrl } from "@/libs/ulits";
import { appRouter } from "@/trpc/routes";
import { httpBatchLink } from "@trpc/client";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: absoluteUrl("/api/trpc"),
    }),
  ],
});
