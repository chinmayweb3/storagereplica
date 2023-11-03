"use client";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React from "react";
import nextAuthOptions from "../api/auth/[...nextauth]/option";
import { Button } from "../components/ui/button";
import { prismadb } from "@/libs/prisma";
import { trpc } from "../_trpc/client";

const Page = () => {
  console.log("server ??");
  const userCreator = trpc.editClicked.useMutation();
  const t = trpc.useContext();

  // const f = await fetch("http://localhost:3000/api/restricted");
  // const user = await getServerSession(nextAuthOptions);

  // console.log("\n\n\n\n\nuser\n", user);

  const createClicked = async () => {
    await t.createClicked
      .fetch()
      .then((e) => {
        console.log("successs", e);
      })
      .catch((er) => {
        console.log("failures", er);
      });

    // await fetch("/api/createClicked");
  };
  const editClicked = async () => {};
  const deleteClicked = async () => {};

  return (
    <div className="flex-center flex-col min-h-screen gap-[10px]">
      <Button onClick={createClicked}>Create</Button>
      <Button onClick={editClicked}>edit</Button>
      <Button onClick={deleteClicked}>delete</Button>
    </div>
  );
};

export default Page;
