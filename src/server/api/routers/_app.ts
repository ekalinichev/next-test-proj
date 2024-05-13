import { z } from "zod"

import { likeRouter } from "@/server/api/routers/like"

import { publicProcedure, router } from "../../trpc"

export const appRouter = router({
  like: likeRouter,
  hello: publicProcedure.input(
    z.object({
      name: z.string()
    })
  ).query((opts) => {
    return { message: `Hello, ${opts.input.name}!` }
  })
})

export type AppRouter = typeof appRouter
