import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => {
      console.log("createContext");
      return {};
    },
  });

export { handler as GET, handler as POST };
