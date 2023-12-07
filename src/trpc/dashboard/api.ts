import { publicProcedure } from "../trpc";
import { getSessionError } from "@/libs/helper";
import { prismadb } from "@/libs/prisma";

const dashboardApi = publicProcedure.query(async (opts) => {
  const resp = await getSessionError();
  if (resp.e) {
    throw resp.e;
  }

  const user = await prismadb.user.findUnique({
    where: { email: resp.r?.user?.email! },
    include: {
      masterDrive: {
        include: {
          files: true,
          folders: true,
        },
      },
    },
  });

  const mergeSort = [...user?.masterDrive?.files!, ...user?.masterDrive?.folders!].sort((a, b) => a.createdAt.getTime() - b.createdAt!.getTime());
  return mergeSort;
});

export default dashboardApi;
