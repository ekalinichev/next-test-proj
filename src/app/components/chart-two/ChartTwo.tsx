import { FC } from "react"

import { CommentButton } from "@/ui/features/CommentButton"
import { RandomAvatar } from "@/ui/features/RandomAvatar"
import { PageCard } from "@/ui/page/PageCard"

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
