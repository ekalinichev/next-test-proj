"use client"

import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { FC, useCallback } from "react"

import { useLikeData } from "@/client/features/like"

interface LikeButtonClientProps {
  likeableId: string
}

export const LikeButtonClient: FC<LikeButtonClientProps> = ({ likeableId }) => {
  const [isLiked, setIsLiked] = useLikeData(likeableId)

  const onClick = useCallback(async () => {
    setIsLiked(!isLiked)
  }, [isLiked, setIsLiked])

  return (
    <Button type="text" icon={isLiked ? <HeartFilled /> : <HeartOutlined />} onClick={onClick} />
  )
}
