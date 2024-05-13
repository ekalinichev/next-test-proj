"use client"

import { useCallback } from "react"

import { trpc } from "@/client/trpc"

type UseLikeData = [boolean, (_value: boolean) => void]

export const useLikeData = (likeableId: string): UseLikeData => {
  const trpcUtils = trpc.useUtils()

  const { data: isLiked } = trpc.like.isLiked.useQuery({ likeableId })

  const toggleLike = trpc.like.toggle.useMutation({
    onSuccess: (data, { likeableId }) => {
      trpcUtils.like.isLiked.setData({ likeableId }, data)
    }
  })

  const setLiked = useCallback(async (value: boolean) => {
    await toggleLike.mutateAsync({ likeableId, value })
  }, [likeableId, toggleLike])

  return [!!isLiked, setLiked]
}
