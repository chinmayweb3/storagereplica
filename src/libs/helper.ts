import nextAuthOptions from "@/app/api/auth/[...nextauth]/option";
import { getServerSession, Session } from "next-auth";
import R, { RType } from "./RType";

/**
 * @default 2 seconds
 * @param ms milliseconds
 * @returns  milliseconds of rest
 */
export const wait = (ms: number = 2000) => new Promise((r, j) => setTimeout(r, ms));

export const getSessionError = async (typeErr?: string): Promise<RType<Session, string>> => {
  try {
    const session = await getServerSession(nextAuthOptions);
    if (!session?.user || !session?.user?.email) throw typeErr || "Session Expired";
    return R({ r: session });
  } catch (err: any) {
    return R({ e: err.toString(), l: 20 });
  }
};
