"use client";
import React from "react";
import { Button } from "../components/ui/button";
import { trpc } from "../_trpc/client";
import { useRouter } from "next/navigation";

const CreateElements = () => {
  const utils = trpc.useContext();
  const n = useRouter();

  const createcld = async () => {
    await utils.createFolderApi.fetch();
    await utils.dashboardApi.reset();
    n.refresh();
  };
  const uploadcld = () => {};
  const deletecld = () => {};
  return (
    <>
      <div className="flex mt-[20px] w-full justify-start items-center gap-[5px]">
        <Button onClick={createcld}>Create Folder</Button>
        <Button onClick={uploadcld}>upload File</Button>
        <Button onClick={deletecld}>delete</Button>
      </div>
    </>
  );
};

export default CreateElements;
