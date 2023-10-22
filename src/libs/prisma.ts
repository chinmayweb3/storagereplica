import { Prisma, PrismaClient } from "@prisma/client/edge";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { withAccelerate } from "@prisma/extension-accelerate";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  // @ts-ignore
  prisma = new PrismaClient().$extends(withAccelerate());
  // prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient().$extends(withAccelerate());
  }
  prisma = global.prisma;
}

export const db = prisma;
