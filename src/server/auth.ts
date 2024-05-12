import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

import prisma from "@/server/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  providers: [Auth0Provider],
  session: {
    strategy: "jwt",
  }
})
