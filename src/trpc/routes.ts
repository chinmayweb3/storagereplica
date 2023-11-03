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

  createClicked: publicProcedure.query(async (opts) => {
    console.log("apei");

    const co = await prismadb.employee2.count();
    console.log("create", co);

    const e = await prismadb.company2.create({
      data: {
        name: "sdf",
        employee2: {
          create: {
            name: "dsz",
          },
        },
      },

      include: {
        employee2: true,
      },
    });

    // console.log("company createed employee", e);
    return { employee: e };
  }),
  editClicked: publicProcedure.mutation(async (opts) => {
    console.log("api clicked");
  }),
  deleteClicked: publicProcedure.query(async (opts) => {}),
});

export type AppRouter = typeof appRouter;
