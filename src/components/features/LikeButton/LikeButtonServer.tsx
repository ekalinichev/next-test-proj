import { FC } from "react"

import { LikeButtonClient } from "@/components/features/LikeButton/LikeButtonClient"
import { checkSignedIn } from "@/server/auth"

interface LikeButtonServerProps {
  likeableId: string
}

export const LikeButtonServer: FC<LikeButtonServerProps> = async ({ likeableId }) => {
  const isSignedIn = await checkSignedIn()

  if (!isSignedIn) {
    return null
  }

  return (
    <LikeButtonClient likeableId={likeableId} />
  )
}
