import { FC } from "react"

import { CommentButton } from "@/components/features/CommentButton"
import { RandomAvatar } from "@/components/features/RandomAvatar"
import { PageCard } from "@/components/page/PageCard"

export const ChartTwo: FC = () => {
  return (
    <PageCard title={"Second chart"} actions={
      <>
        <RandomAvatar seed="hfjkwqfhfh28" />
        <CommentButton count={3} />
      </>
    }>
      Test chart 2
    </PageCard>
  )
}
