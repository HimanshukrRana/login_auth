import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import clientPromise from "lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),
  //   callbacks: {
  //     async session({ session, user, token }) {
  //       session.user.id = token.id;
  //       return session;
  //     },
  //     async jwt({ token, user, account, profile, isNewUser }) {
  //       if (user) {
  //         token.id = user.id;
  //       }
  //       return token;
  //     },
  //   },
};

export default NextAuth(authOptions);
