import nextAuthOptions from "@/app/api/auth/[...nextauth]/option";
import { prismadb } from "@/libs/prisma";
import { TRPCClientError } from "@trpc/client";
import { initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { publicProcedure } from "./trpc";
import dashboardApi from "./dashboard/api";
import createFolderApi from "./createFolder/api";

const t = initTRPC.create();

export const router = t.router;
export const middleware = t.middleware;

export const appRouter = router({
  // get
  healthcheck: publicProcedure.query(async () => {
    return "ok";
  }),

  editClicked: publicProcedure.mutation(async (opts) => {
    console.log("api clicked");
  }),
  deleteClicked: publicProcedure.query(async (opts) => {}),
  dashboardApi,
  createFolderApi,
});

export type AppRouter = typeof appRouter;
