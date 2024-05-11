import { Flex } from "antd"
import Title from "antd/lib/typography/Title"
import { FC, PropsWithChildren } from "react"

interface PageTitleProps extends PropsWithChildren {
  title: string
}

export const PageTitle: FC<PageTitleProps> = ({ children, title }) => {
  return (
    <Flex justify="space-between" align="center" style={{ width: "100%", height: "60px", marginBottom: 10 }}>
      <div>
        <Title level={2} style={{ margin: 0 }}>{title}</Title>
      </div>
      <Flex align="center" justify="right" gap="10px">
        {children}
      </Flex>
    </Flex>
  )
}
