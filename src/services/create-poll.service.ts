import { z } from 'zod'
import { prisma } from '../lib/prisma'

export const CreatePollBodySchema = z.object({
  title: z.string(),
  options: z.array(z.string()),
})

const CreatePollResponseSchema = z.object({
  pollId: z.string(),
})

type PollType = z.infer<typeof CreatePollBodySchema>
type PollResponseType = z.infer<typeof CreatePollResponseSchema>

export async function createPollService(
  data: PollType,
): Promise<PollResponseType> {
  const { title, options } = CreatePollBodySchema.parse(data)

  const poll = await prisma.poll.create({
    data: {
      title,
      options: {
        createMany: {
          data: options.map((option) => ({
            title: option,
          })),
        },
      },
    },
  })

  return { pollId: poll.id }
}
