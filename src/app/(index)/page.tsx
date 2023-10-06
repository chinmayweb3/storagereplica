import { serverClient } from "../_trpc/serverClient";

const Page = async () => {
  const q = await serverClient.healthcheck();
  console.log("q.useQuery", q);

  return <main className="min-h-screen flex-center">main</main>;
};

export default Page;
