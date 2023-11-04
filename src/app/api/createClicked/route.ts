import { prismadb } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

// export const runtime = "edge";

export async function GET(request: NextRequest) {
  console.log("\n\nthis is server side rendering ");

  //
  return new NextResponse("ok workings");
}
