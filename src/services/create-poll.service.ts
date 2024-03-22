import { prisma } from '../lib/prisma'
import { CreatePollBodySchema, PollType } from '../schemas/create-poll.schema'

export class PollService {
  async createPoll(data: PollType) {
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
}
