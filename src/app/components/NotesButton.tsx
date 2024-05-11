"use client"

import { BarsOutlined } from "@ant-design/icons"
import { Button, theme, Typography } from "antd"
import { FC } from "react"

interface NotesButtonProps {
  count?: number
  onClick?: () => void
  href?: string
}

export const NotesButton: FC<NotesButtonProps> = ({ count, onClick, href }) => {
  const { token: { colorPrimary } } = theme.useToken()

  return (
    <Button
      type="default"
      icon={<BarsOutlined style={{ color: colorPrimary }}/>}
      iconPosition="end"
      onClick={onClick}
      href={href}
    >
      Notes
      <Typography.Text type="secondary" style={{ paddingLeft: "4px" }}>
        ({count})
      </Typography.Text>
    </Button>
  )
}
