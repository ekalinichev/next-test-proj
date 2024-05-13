"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/react-query"
import { FC, PropsWithChildren, useMemo } from "react"

import { trpc } from "@/client/trpc"

export const TRPCProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = useMemo(() => new QueryClient(), [])

  const trpcClient = useMemo(() => (
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
        })
      ]
    })
  ), [])

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}
