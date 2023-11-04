"use client";
import React from "react";
import { Button } from "../components/ui/button";
import { trpc } from "../_trpc/client";

const CreateElements = () => {
  const utils = trpc.useContext();

  const createcld = async () => {
    await utils.createClicked.fetch();
  };
  const uploadcld = () => {};
  const deletecld = () => {};
  return (
    <>
      <Button onClick={createcld}>Create</Button>
      <Button onClick={uploadcld}>upload</Button>
      <Button onClick={deletecld}>delete</Button>
    </>
  );
};

export default CreateElements;
