import { prismadb } from "@/libs/prisma";
import GetTrpc from "./getTrpc";

const Page = async () => {
  // const tq = await serverClient.healthcheck();

  // console.log("tq: ", tq);

  console.log("start");
  // const q = await prismadb.user.create({
  //   data: { image: "sdf", name: "sdf", title: "sdf", uri: "sdf" },
  // });

  // console.log("start end", q);

  return (
    <main className="min-h-screen flex-center">
      {" "}
      <GetTrpc />
      main
    </main>
  );
};

export default Page;
