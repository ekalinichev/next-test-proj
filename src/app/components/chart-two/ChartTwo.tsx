import { FC } from "react"

import { CommentButton } from "@/components/features/CommentButton"
import { LikeButton } from "@/components/features/LikeButton"
import { RandomAvatar } from "@/components/features/RandomAvatar"
import { PageCard } from "@/components/page/PageCard"

export const ChartTwo: FC = () => {
  return (
    <PageCard title={"Second chart"} actions={
      <>
        <RandomAvatar seed="hfjkwqfhfh28" />
        <LikeButton likeableId={"chart1"} />
        <CommentButton count={3} />
      </>
    }>
      Test chart 2
    </PageCard>
  )
}
