import { z } from "zod"

import prisma from "@/server/prisma"
import { protectedProcedure, router } from "@/server/trpc"

const getLike = async (likeableId: string, userId: string): Promise<boolean> => {
  const like = await prisma.like.findUnique({
    where: { likeableId_userId: { likeableId, userId } }
  })

  return !!like
}

const createLike = async (likeableId: string, userId: string): Promise<boolean> => {
  await prisma.like.upsert({
    where: { likeableId_userId: { likeableId, userId } },
    create: {
      likeableId,
      userId,
    },
    update: {},
  })

  return true
}

const deleteLike = async (likeableId: string, userId: string): Promise<boolean> => {
  await prisma.like.delete({
    where: { likeableId_userId: { likeableId, userId } }
  })

  return false
}

export const likeRouter = router({
  isLiked: protectedProcedure
    .input(
      z.object({
        likeableId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { likeableId } = input
      const { userId } = ctx

      return getLike(likeableId, userId)
    }),
  toggle: protectedProcedure
    .input(
      z.object({
        likeableId: z.string(),
        value: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }): Promise<boolean> => {
      const { likeableId, value } = input
      const { userId } = ctx

      return prisma.$transaction(async () => {
        const isLiked = await getLike(likeableId, userId)

        if (isLiked && !value) {
          return deleteLike(likeableId, userId)
        } else if (!isLiked && value){
          return createLike(likeableId, userId)
        }

        return value
      })
    }),
})
