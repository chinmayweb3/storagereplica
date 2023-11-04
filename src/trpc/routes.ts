import nextAuthOptions from "@/app/api/auth/[...nextauth]/option";
import { prismadb } from "@/libs/prisma";
import { TRPCClientError } from "@trpc/client";
import { initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";
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

  createClicked: publicProcedure.query(async (opts) => {
    const session = await getServerSession(nextAuthOptions);

    if (!session || !session.user || !session.user.email) throw new TRPCClientError("user not logged in");
    const prismaUser = await prismadb.user.findUnique({ where: { email: session?.user.email }, select: { masterDrive: { select: { id: true } } } });

    console.log("user: " + prismaUser);
    if (!prismaUser || !prismaUser.masterDrive || !prismaUser.masterDrive.id) throw new TRPCClientError("masterDrive not found");

    const prismafolder = await prismadb.folder.create({ data: { name: "myFolder", masterDriveId: prismaUser.masterDrive.id } });
    console.log("primsfolder", prismafolder);

    return { created: prismafolder };
  }),
  editClicked: publicProcedure.mutation(async (opts) => {
    console.log("api clicked");
  }),
  deleteClicked: publicProcedure.query(async (opts) => {}),
});

export type AppRouter = typeof appRouter;
