import { initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";

// You can use any variable name you like.
// We use t to keep things simple.
const t = initTRPC.create();
console.log("init");

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
