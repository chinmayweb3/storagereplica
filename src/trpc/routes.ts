import { prismadb } from "@/libs/prisma";
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

export const appRouter = router({
  // get
  healthcheck: publicProcedure.query(async () => {
    return "ok";
  }),
  testadd: publicProcedure.query(async () => {
    console.log("healthcheck clicked trpc");

    await prismadb.user.count().then((d) => {
      console.log("count", d);
    });
    await prismadb.user
      .create({
        data: {
          image: "sd",
          title: "sdf",
          uri: "sddslkklkljkjkkjlf",
          name: "sdf",
        },
      })
      .then((dta) => {
        console.log("api success", dta);
      });

    // await prismadb.user.deleteMany().then((d) => {
    //   console.log("delete success", d);
    // });
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
