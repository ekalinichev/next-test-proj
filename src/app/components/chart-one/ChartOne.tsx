import { FC } from "react"

import { CommentButton } from "@/ui/features/CommentButton"
import { RandomAvatar } from "@/ui/features/RandomAvatar"
import { PageCard } from "@/ui/page/PageCard"

export const ChartOne: FC = () => {
  return (
    <PageCard title={"First chart"} actions={
      <>
        <RandomAvatar seed="ava1" />
        <CommentButton count={3} />
      </>
    }>
      Test chart 1
    </PageCard>
  )
}
