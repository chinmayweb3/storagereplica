"use client";

import React from "react";

const ClientSidePage = ({ ServerSide }: { ServerSide: React.ReactNode }) => {
  console.log("ClientSidePage rendering");

  return (
    <div>
      ClientSidePage
      {ServerSide}
    </div>
  );
};

export default ClientSidePage;
