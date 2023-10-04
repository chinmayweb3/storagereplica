import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
console.log("\n\n\n\n\n˝init______1");

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

export const appRouter = router({
  // get
  healthcheck: publicProcedure.query(() => {
    console.log("running healthcheck");

    return "ok";
  }),

  //   get
  displayMyName: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;

    return {
      msg: "my display name is " + input,
    };
  }),

  //   post
  addName: publicProcedure.input(z.object({ name: z.string().optional() })).mutation(async (opts) => {
    const {
      input: { name },
    } = opts;

    return { msg: "add Name " + name || "undefined" };
  }),
});

export type AppRouter = typeof appRouter;
