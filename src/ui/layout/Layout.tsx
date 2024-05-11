"use client"

import { Col, Flex, Row, theme } from "antd"
import Title from "antd/lib/typography/Title"
import { FC, PropsWithChildren } from "react"

interface LayoutProps extends PropsWithChildren {
  title: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  const {
    token: { colorBgContainer, colorBgLayout, colorPrimary, boxShadow: boxShadow }
  } = theme.useToken()

  return (
    <Flex vertical gap="middle" style={{ height: "100vh", backgroundColor: colorBgLayout }}>
      <Row style={{ boxShadow, backgroundColor: colorBgContainer, height: "60px" }}>
        <Col span={20} offset={2} style={{ display: "flex", alignItems: "center" }}>
          <Title level={1} style={{ color: colorPrimary, margin: 0, fontSize: 30 }}>{title}</Title>
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={3}>
          {children}
        </Col>
      </Row>
    </Flex>
  )
}
