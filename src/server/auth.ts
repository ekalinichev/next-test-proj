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
  },
  callbacks: {
    session: async ({ session, token }) => {
      session.user.id = token.sub as string

      return session
    }
  }
})

export const checkSignedIn = async () => {
  const session = await auth()

  return !!session?.user
}
