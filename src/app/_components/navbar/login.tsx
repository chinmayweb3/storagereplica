"use client";
import { Button } from "@/app/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginBtn = () => {
  const session = useSession();
  const navigate = useRouter();

  const clickLogin = () => {
    signIn("google");
  };
  const clickLogout = () => {
    signOut({ redirect: true, callbackUrl: "/" });
  };

  const goToDashboard = () => {
    navigate.push("/dashboard");
  };

  return (
    <div className="flex gap-[5px]">
      {session.status === "authenticated" && <Button onClick={goToDashboard}>Dashboard</Button>}
      {session.status === "unauthenticated" && <Button onClick={clickLogin}>Login</Button>}
      {session.status === "authenticated" && <Button onClick={clickLogout}>Logout</Button>}
      {session.status === "loading" && <Button className="pointer-events-none">Loading...</Button>}
    </div>
  );
};

export default LoginBtn;
