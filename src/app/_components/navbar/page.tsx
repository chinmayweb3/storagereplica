import { Button } from "@/app/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[56px] bg-background shadow-lg flex-center ">
      <div className="center-Container flex justify-between items-center">
        <h1 className="font-roboto">LOGO</h1>
        <div className="font-roboto">
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
