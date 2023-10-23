// import { PrismaClient } from "@prisma/client/edge";
// import { withAccelerate } from "@prisma/extension-accelerate";

import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  // @ts-ignore
  // prisma = new PrismaClient().$extends(withAccelerate());
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();

    // global.prisma = new PrismaClient().$extends(withAccelerate());
  }
  prisma = global.prisma;
}

export const prismadb = prisma;
