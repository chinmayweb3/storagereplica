import { db } from "@/libs/prisma";
import { serverClient } from "../_trpc/serverClient";

const Page = async () => {
  const tq = await serverClient.healthcheck();

  console.log("tq: ", tq);

  console.log("start");
  const q = await db.play.count();
  console.log("start end", q);

  return <main className="min-h-screen flex-center">main</main>;
};

export default Page;
