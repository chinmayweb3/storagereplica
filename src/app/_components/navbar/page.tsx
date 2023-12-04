"use client";
import Link from "next/link";
import React from "react";
import LoginBtn from "./login";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[56px] bg-background shadow-lg flex-center ">
      <div className="center-Container flex justify-between items-center font-roboto">
        <Link href={"/"}>LOGO</Link>
        <div>
          <LoginBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
