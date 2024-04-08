import { getServerSession } from "next-auth";
import { publicProcedure } from "../trpc";
import nextAuthOptions from "@/app/api/auth/[...nextauth]/option";
import { TRPCClientError } from "@trpc/client";
import { prismadb } from "@/libs/prisma";

const createFolderApi = publicProcedure.query(async (opts) => {
  const session = await getServerSession(nextAuthOptions);

  if (!session || !session.user || !session.user.email) throw new TRPCClientError("user not logged in");

  const prismaUser = await prismadb.user.findUnique({ where: { email: session?.user.email }, select: { masterDrive: { select: { id: true } } } });

  // console.log("user: " + prismaUser);
  if (!prismaUser || !prismaUser.masterDrive || !prismaUser.masterDrive.id) throw new TRPCClientError("masterDrive not found");

  const prismafolder = await prismadb.folder.create({ data: { name: "myFolder", masterDriveId: prismaUser.masterDrive.id } });
  // console.log("primsfolder", prismafolder);

  return { created: prismafolder };
});

export default createFolderApi;
