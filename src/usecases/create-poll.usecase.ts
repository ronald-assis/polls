import { z } from 'zod'
import { prisma } from '../lib/prisma'

export const CreatePollBody = z.object({
  title: z.string(),
})

const CreatePollResponseDB = z.object({
  id: z.string(),
})

const CreatePollResponse = z.object({
  pollId: z.string(),
})

type Poll = z.infer<typeof CreatePollBody>
type PollResponseDB = z.infer<typeof CreatePollResponseDB>
type PollResponse = z.infer<typeof CreatePollResponse>

export async function createPollUsecase(data: Poll): Promise<PollResponse> {
  const { title } = CreatePollBody.parse(data)

  const { id }: PollResponseDB = await prisma.poll.create({
    data: { title },
  })

  return { pollId: id }
}
