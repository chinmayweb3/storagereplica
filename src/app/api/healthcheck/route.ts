import { prismadb } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

// export const runtime = "edge";

export async function GET(request: NextRequest) {
  console.log("\n\nthis is server side rendering ");

  // const db2 = await prismadb.user.create({
  //   data: {
  //     image: "sd",
  //     title: "sdf",
  //     uri: "sddslkklkljkjkkjlf",
  //     name: "sdf",
  //   },
  // });

  // const resp = await prismadb.employee.create({
  //   data: {
  //     name: " new sager ",
  //     company: {
  //       create: {
  //         name: "monica greenhouse",
  //       },
  //     },
  //   },
  //   select: {
  //     company: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //     id: true,
  //   },
  // });

  const resp = await prismadb.employee.count();

  console.log("db2 is server side rendering");

  return new NextResponse(JSON.stringify(resp));
}
