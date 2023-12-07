import React from "react";
import ShowFolderFiles from "./showFolderFiles";
import CreateElements from "./createElements";
import Info from "./info";

const Page = () => {
  return (
    <div className="flex pt-[56px] flex-col min-h-screen gap-[10px] px-[20px]">
      <Info />
      <CreateElements />
      <ShowFolderFiles />
    </div>
  );
};

export default Page;
