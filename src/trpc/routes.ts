import prisma from "@/libs/prisma";
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
console.log("\n\n\n\n\n˝init______1");

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

export const appRouter = router({
  // get
  healthcheck: publicProcedure.query(async () => {
    console.log("\n\n\n\n\nrunning healthcheck");

    console.log("prisma start");
    // console.log("prisma start init", prisma);
    const q = await prisma.play.count();

    console.log("all data loaded", q);
    // prisma.$disconnect();

    // await wait(100000);

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
