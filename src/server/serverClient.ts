import { appRouter } from "@/server/routers/_app"
import { createCallerFactory } from "@/server/trpc"

const createCaller = createCallerFactory(appRouter)

export const trpcClient = createCaller({})
