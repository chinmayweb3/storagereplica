"use client";
import React from "react";
import { trpc } from "../_trpc/client";
import { Button } from "../components/ui/button";
import { useSession } from "next-auth/react";

function GetTrpc() {
  // const q = trpc.healthcheck.useQuery();

  const utlits = trpc.useContext();

  const session = useSession();

  console.log("this is user's data", session.status);

  // console.log("working with trpc", q.data);

  const healthcheckClicked = async () => {
    console.log("clicked");
    // const q = trpc.healthcheck.;
    // await utlits.testadd.fetch().then((data) => {
    //   console.log("indside ", data);
    // });
    const f = await fetch("/api/healthcheck").then((data) => {
      console.log("working");
    });
  };

  return (
    <div className="font-orbitron">
      {/* getTrpc{q.isLoading && "loading"} */}
      {/* {q.data && "dsata loaded"} */}
      <Button onClick={healthcheckClicked}>Health check</Button>
    </div>
  );
}

export default GetTrpc;
