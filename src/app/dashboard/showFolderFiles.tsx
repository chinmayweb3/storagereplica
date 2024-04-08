"use client";
import { prismadb } from "@/libs/prisma";
import { getServerSession } from "next-auth";
import React, { useEffect, useState } from "react";
import nextAuthOptions from "../api/auth/[...nextauth]/option";
import { trpc } from "../_trpc/client";
import { serverClient } from "../_trpc/serverClient";

const ShowFolderFiles = () => {
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
  const utils = trpc.useContext();
  const [ut, setut] = useState<
    | undefined
    | {
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        type: string;
        parentFolder: string;
        masterDriveId: string;
      }[]
  >();
  useEffect(() => {
    (async () => {
      const dashboard = await utils.dashboardApi.fetch();
      setut(dashboard);
    })();
  }, []);

  return (
    <div className="w-full min-h-[50vh] border-[1px] border-black rounded-md p-[20px] grid grid-cols-4 gap-[20px] font-roboto">
      {ut &&
        ut.map((d, i) => {
          return (
            <div className="w-[300px] h-[200px] bg-slate-300 flex justify-center items-center flex-col">
              <p>{d.name}</p>
              <p>{new Date(d.createdAt).getTime()}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ShowFolderFiles;
