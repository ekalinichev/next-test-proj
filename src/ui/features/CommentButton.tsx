import { MessageOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { FC } from "react"

interface CommentButtonProps {
  count: number
  onClick?: () => void
  href?: string
}

export const CommentButton: FC<CommentButtonProps> = ({ count, onClick, href }) => {
  return (
    <Button type="text" icon={<MessageOutlined />} iconPosition="end" onClick={onClick} href={href}>
      {count}
    </Button>
  )
}
