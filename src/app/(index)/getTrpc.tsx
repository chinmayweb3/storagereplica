"use client";
import React from "react";
import { trpc } from "../_trpc/client";

function GetTrpc() {
  const q = trpc.healthcheck.useQuery();

  console.log("working with trpc", q.data);

  return (
    <div className="font-orbitron">
      getTrpc{q.isLoading && "loading"}
      {q.data && "dsata loaded"}
    </div>
  );
}

export default GetTrpc;
