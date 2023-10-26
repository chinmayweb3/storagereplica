import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import d from "next-auth/adapters";

const nextAuthOptions: NextAuthOptions = {
  secret: "R3uE4Idy/StICyoGg51i+KtvIkOe8qQL+3Ybtdc4TKg=",
  providers: [
    GoogleProvider({
      clientId: "51105364489-1e4idugt2afr8nnab852vrn7g13o2ruv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  callbacks: {
    // async signIn({ account, profile }) {
    //   console.log("\n\nyou have authenticated\n\n", account, "\n", profile);
    //   if (account && profile?.email && account.provider === "google") {
    //     return profile.email && profile.email.endsWith("@example.com");
    //   }
    //   return true;
    // },
  },

  //   session: {
  //     strategy: "jwt",
  //   },
};

export default nextAuthOptions;
