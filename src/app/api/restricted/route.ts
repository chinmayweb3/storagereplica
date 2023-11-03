import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import nextAuthOptions from "../auth/[...nextauth]/option";

async function handler(req, res) {
  console.log("restricted request");

  return new NextResponse("ok workings");
}

export { handler as GET };
