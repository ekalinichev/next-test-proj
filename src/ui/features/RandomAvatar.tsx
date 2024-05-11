"use client"

import { Avatar } from "antd"
import { FC, useMemo } from "react"

interface RandomAvatarProps {
  size?: number
  seed: string
}

export const RandomAvatar: FC<RandomAvatarProps> = ({ size, seed }) => {
  const url = useMemo(() => {
    return `//api.dicebear.com/8.x/lorelei/svg?seed=${seed}`
  }, [seed])

  return (
    <div>
      <Avatar
        size={size}
        src={url}
      />
    </div>
  )
}
