import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/model/userSchema"

import axios from "axios";

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),


  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
     
      const sessionUser = await User.findOne({ email: session.user.email });
      
      session.user.id = sessionUser._id.toString();
      
      session.accessToken = token.accessToken;

      return session;
    },
  },
}); 

export {handler as GET ,handler as POST}
