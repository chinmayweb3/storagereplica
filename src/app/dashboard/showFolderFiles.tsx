import { prismadb } from "@/libs/prisma";
import { getServerSession } from "next-auth";
import React from "react";
import nextAuthOptions from "../api/auth/[...nextauth]/option";
import { trpc } from "../_trpc/client";
import { serverClient } from "../_trpc/serverClient";

const ShowFolderFiles = async () => {
  // const user = await getServerSession(nextAuthOptions);

  // if (!user || !user.user || !user.user.email) return <>not found</>;
  // const prismaUser = await prismadb.user.findUnique({ where: { email: user.user.email } });

  // const prisma = await prismadb.masterDrive.findUnique({
  //   where: {
  //     userId: prismaUser?.id!,
  //   },
  //   select: {
  //     files: true,
  //     folders: true,
  //   },
  // });

  // console.log("this is the prisma user", prisma);

  const dashboard = await serverClient.dashboardApi();

  console.log("dashboard:>>", dashboard);

  return <div className="w-full min-h-[50vh] border-[1px] border-black rounded-md p-[20px]"></div>;
};

export default ShowFolderFiles;
