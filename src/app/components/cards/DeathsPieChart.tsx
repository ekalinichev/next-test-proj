import { FC } from "react"

import { Chart } from "@/components/features/Chart"
import { CommentButton } from "@/components/features/CommentButton"
import { LikeButton } from "@/components/features/LikeButton"
import { RandomAvatar } from "@/components/features/RandomAvatar"
import { PageCard } from "@/components/page/PageCard"
import { getTrpcClient } from "@/server/api/serverClient"

const date = new Date(2023, 1, 1)

export const DeathsPieChart: FC = async () => {
  const client = await getTrpcClient()

  const data = (await client.covid.deaths({ date }))
    .map(({ metric_value: value, geography: label }) => ({ value, label }))

  return (
    <PageCard title="Death by region pie" actions={
      <>
        <RandomAvatar seed="ava1" />
        <LikeButton likeableId={"chart1"} />
        <CommentButton count={3} />
      </>
    }>
      <Chart data={data} type="pie" />
    </PageCard>
  )
}
