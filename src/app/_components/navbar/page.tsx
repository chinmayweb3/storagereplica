"use client";
import { Button } from "@/app/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import LoginBtn from "./login";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[56px] bg-background shadow-lg flex-center ">
      <div className="center-Container flex justify-between items-center">
        <Link href={"/"} className="font-roboto">
          LOGO
        </Link>
        <div className="font-roboto ">
          <LoginBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
