import { FC } from "react"

import { CommentButton } from "@/components/features/CommentButton"
import { LikeButton } from "@/components/features/LikeButton"
import { RandomAvatar } from "@/components/features/RandomAvatar"
import { PageCard } from "@/components/page/PageCard"

export const ChartOne: FC = () => {
  return (
    <PageCard title={"First chart"} actions={
      <>
        <RandomAvatar seed="ava1" />
        <LikeButton likeableId={"chart1"} />
        <CommentButton count={3} />
      </>
    }>
      Test chart 1
    </PageCard>
  )
}
