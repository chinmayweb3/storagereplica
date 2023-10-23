import { prismadb } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

// export const runtime = "edge";

export async function GET(request: NextRequest) {
  console.log("\n\nthis is server side rendering ");

  const db2 = await prismadb.user.create({
    data: {
      image: "sd",
      title: "sdf",
      uri: "sddslkklkljkjkkjlf",
      name: "sdf",
    },
  });

  console.log("db2 is server side rendering", db2);

  return new NextResponse("ok workings");
}
