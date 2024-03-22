import { prisma } from '../lib/prisma'
import { CreatePollBodySchema, PollType } from '../schemas/create-poll.schema'
import { GetPollParamsSchema, PollIdType } from '../schemas/get-poll.schema'

export class PollsService {
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

  async getPoll(id: PollIdType) {
    const { pollId } = GetPollParamsSchema.parse(id)

    const poll = await prisma.poll.findUnique({
      where: {
        id: pollId,
      },
      include: {
        options: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    })

    return poll
  }

  async voteOnPoll
}
