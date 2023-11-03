import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismadb } from "@/libs/prisma";

const nextAuthOptions: NextAuthOptions = {
  secret: "R3uE4Idy/StICyoGg51i+KtvIkOe8qQL+3Ybtdc4TKg=",
  adapter: PrismaAdapter(prismadb),

  providers: [
    GoogleProvider({
      clientId: "51105364489-1e4idugt2afr8nnab852vrn7g13o2ruv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  events: {
    async createUser({ user }) {
      if (user && user.email) {
        const master = await prismadb.masterDrive.create({
          data: {
            user: {
              connect: {
                email: user.email,
              },
            },
          },
        });

        console.log("created", master);
      }
    },
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account && profile?.email && account.provider === "google") {
        return true;
      }
      return true;
    },
  },
};

export default nextAuthOptions;
