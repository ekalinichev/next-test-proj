"use client"

import { FilterOutlined } from "@ant-design/icons"
import { Badge, Button, theme } from "antd"
import { FC } from "react"

interface FilterButtonProps {
  count?: number
}

export const FilterButton: FC<FilterButtonProps> = ({ count }) => {
  const { token: { colorPrimary, colorSuccess } } = theme.useToken()

  return (
    <Button
      icon={<FilterOutlined style={{ color: colorPrimary }} />}
      iconPosition="end"
    >
      Filter
      {count &&
        <Badge
          count={count < 10 ? count : "9+"}
          color={colorSuccess}
          styles={{ root: { marginTop: "-2px", paddingLeft: "3px" } }}
        />
      }
    </Button>
  )
}
