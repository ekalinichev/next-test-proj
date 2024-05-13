import { Col, Row } from "antd"
import { FC } from "react"

import { DeathsPieChart } from "@/app/components/cards/DeathsPieChart"
import { DeathsBarChart } from "@/app/components/cards/DeathsBarChart"
import { ExportButton } from "@/app/components/ExportButton"
import { FilterButton } from "@/app/components/FilterButton"
import { NotesButton } from "@/app/components/NotesButton"
import { PageTitle } from "@/components/page/PageTitle"

const Home: FC = async () => {

  return (
    <>
      <PageTitle title="Page title">
        <ExportButton />
        <NotesButton count={3} />
        <FilterButton count={302} />
      </PageTitle>
      <Row gutter={20}>
        <Col span={12}>
          <DeathsPieChart />
        </Col>
        <Col span={12}>
          <DeathsBarChart />
        </Col>
      </Row>
    </>
  )
}

export default Home
