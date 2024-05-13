import { appRouter } from "@/server/api/routers/_app"
import { createCallerFactory, createContext } from "@/server/trpc"

const createCaller = createCallerFactory(appRouter)

export const getTrpcClient = async () => {
  return createCaller(await createContext())
}
