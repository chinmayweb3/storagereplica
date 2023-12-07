import { getServerSession } from "next-auth";
import React from "react";
import nextAuthOptions from "../api/auth/[...nextauth]/option";

const Info = async () => {
  const session = await getServerSession(nextAuthOptions);

  return <div className="bg-fuchsia-50 min-h-[30vh] pt-[30px] font-roboto"></div>;
};

export default Info;
