import * as trpcNext from "@trpc/server/adapters/next"

import { appRouter } from "@/server/api/routers/_app"
import { createContext } from "@/server/trpc"

export default trpcNext.createNextApiHandler({
  createContext,
  router: appRouter,
})
