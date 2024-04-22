import { NextAuthOptions, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { authOptions } from "../authoptions";



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };