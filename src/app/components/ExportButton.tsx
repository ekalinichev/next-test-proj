"use client"

import { DownloadOutlined } from "@ant-design/icons"
import { Button, theme } from "antd"
import { FC } from "react"

interface ExportButtonProps {
  onClick?: () => void
  href?: string
}

export const ExportButton: FC<ExportButtonProps> = ({ onClick, href }) => {
  const { token: { colorPrimary } } = theme.useToken()

  return (
    <Button
      icon={<DownloadOutlined style={{ color: colorPrimary }} />}
      style={{ verticalAlign: "middle" }}
      iconPosition="end"
      onClick={onClick}
      href={href}
    >
      Export to PDF
    </Button>
  )
}
