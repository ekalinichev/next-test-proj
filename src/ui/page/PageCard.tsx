"use client"

import { Flex, Skeleton, theme } from "antd"
import Title from "antd/lib/typography/Title"
import { FC, PropsWithChildren, ReactNode, useMemo } from "react"

interface PageCardProps extends PropsWithChildren {
  loading?: boolean
  title: string
  actions?: ReactNode
}

const paddingStyle = { padding: "8px 20px" }

export const PageCard: FC<PageCardProps> = ({
  children,
  title,
  loading,
  actions
}) => {
  const { token: { colorBgContainer, borderRadius, colorBorder } } = theme.useToken()

  const wrapperStyle = useMemo(() => ({
    borderRadius,
    border: `1px solid ${colorBorder}`,
    backgroundColor: colorBgContainer,
    width: "100%",
    margin: 0,
  }), [colorBorder, borderRadius, colorBgContainer])

  const headerStyle = useMemo(() => ({
    ...paddingStyle,
    borderBottom: `1px solid ${colorBorder}`,
    height: 40,
  }), [colorBorder])

  const footerStyle = useMemo(() => ({
    ...paddingStyle,
    borderTop: `1px solid ${colorBorder}`,
  }), [colorBorder])

  return (
    <Flex vertical gap="middle" style={wrapperStyle}>
      <Flex align="center" style={headerStyle}>
        <Title level={4} style={{ margin: 0 }}>{title}</Title>
      </Flex>
      <Skeleton active loading={!!loading}>
        <div style={paddingStyle}>
          {children}
        </div>
        {actions && (
          <Flex justify="space-between" gap="10px" style={footerStyle}>
            {actions}
          </Flex>
        )}
      </Skeleton>
    </Flex>
  )
}
