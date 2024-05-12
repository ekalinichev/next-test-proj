import { Col, Row } from "antd"
import { FC } from "react"

import { ChartOne } from "@/app/components/chart-one/ChartOne"
import { ChartTwo } from "@/app/components/chart-two/ChartTwo"
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
          <ChartOne />
        </Col>
        <Col span={12}>
          <ChartTwo />
        </Col>
      </Row>
    </>
  )
}

export default Home
