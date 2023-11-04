import React from "react";
import ShowFolderFiles from "./showFolderFiles";
import CreateElements from "./createElements";

const Page = () => {
  return (
    <div className="flex-center flex-col min-h-screen gap-[10px] px-[20px]">
      <CreateElements />
      <ShowFolderFiles />
    </div>
  );
};

export default Page;
