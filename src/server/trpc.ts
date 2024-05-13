import { initTRPC, TRPCError } from "@trpc/server"
import { CreateNextContextOptions } from "@trpc/server/adapters/next"

import { auth } from "@/server/auth"

export const createContext = async (opts?: CreateNextContextOptions) => {
  let session

  if (!opts) {
    session = await auth()
  } else {
    session = await auth(opts?.req, opts?.res)
  }

  if (!session?.user) {
    return {}
  }

  return {
    session,
    userId: session.user.id
  }
}

const t = initTRPC.context<typeof createContext>().create()

export const router = t.router

export const publicProcedure = t.procedure

export const protectedProcedure = t.procedure.use((opts) => {
  if (!opts.ctx.session || !opts.ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }

  return opts.next({
    ctx: {
      // This infers `session` and `userId` as non-nullable in the procedure
      session: opts.ctx.session,
      userId: opts.ctx.userId
    }
  })
})

export const createCallerFactory = t.createCallerFactory

