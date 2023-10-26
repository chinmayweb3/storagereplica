import { getServerSession } from "next-auth";
import React, { PropsWithChildren } from "react";
import nextAuthOptions from "../api/auth/[...nextauth]/option";
import Provider from "./provider";

const NextAuthWrapper = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(nextAuthOptions);

  return <Provider session={session}>{children}</Provider>;
};

export default NextAuthWrapper;
