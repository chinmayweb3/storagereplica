"use client";
import React from "react";
import { Button } from "../components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

function Login() {
  // const q = trpc.healthcheck.useQuery();

  const session = useSession();

  return (
    <div className="font-orbitron">
      {session.data?.user && "Logged in"}
      <Button onClick={() => signIn("google")}>SingIn</Button>
      <Button onClick={() => signOut({})}>signOut</Button>
    </div>
  );
}

export default Login;
